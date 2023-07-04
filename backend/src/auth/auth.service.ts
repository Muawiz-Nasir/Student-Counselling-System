import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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

    console.log(createAuthDto, process.env.ADMIN_EMAIL);

    if (
      process.env.ADMIN_EMAIL === email &&
      process.env.ADMIN_PASSWORD === password
    ) {
      return {
        token: 'fghjkl',
        type: 'ADMIN',
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

    console.log('fghjkhgfhjk', student, counseller);

    if (student) {
      delete student.password;
      return {
        token: 'fghjkl',
        type: 'STUDENT',
      };
    }
    if (counseller)
      return {
        token: 'fghjkl',
        type: 'COUNSELLER',
      };

    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }
}
