import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Repository } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Counseller } from 'src/counseller/entities/counseller.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,

    @Inject('COUNSELLER_REPOSITORY')
    private counsellerRepository: Repository<Counseller>,
  ) {}

  async loginUser(createAuthDto: CreateAuthDto) {
    const { email, password } = createAuthDto;
    let role, data;

    if (
      process.env.ADMIN_EMAIL === email &&
      process.env.ADMIN_PASSWORD === password
    ) {
      role = 'ADMIN';
      data = {
        email: process.env.ADMIN_EMAIL,
      };
    }

    const [student, counseller] = await Promise.all([
      this.studentRepository.findOne({
        where: { email, password },
      }),

      this.counsellerRepository.findOne({
        where: { loginId: email, loginPassword: password },
      }),
    ]);

    if (student) {
      role = 'STUDENT';
      delete student.password;
      data = JSON.parse(JSON.stringify(student));
    }

    if (counseller) {
      role = 'COUNSELLER';
      delete counseller.loginPassword;
      data = JSON.parse(JSON.stringify(counseller));
    }

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(data, secretKey, { expiresIn: '7d' });

    if (role && data)
      return {
        role,
        data,
        token,
      };

    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }

  // async validateUser(payload: any): Promise<any> {
  //   // Extract user ID from the payload
  //   const userId = payload.sub;

  //   // Perform a database query or any other logic to validate the user
  //   const user = await this.studentRepository.findOne(userId);

  //   // If the user is found, return the user object
  //   // Otherwise, throw an exception or return null/undefined
  //   if (user) {
  //     return user;
  //   }

  //   // User not found, throw an exception or return null/undefined
  //   throw new UnauthorizedException('Invalid user');
  // }
}
