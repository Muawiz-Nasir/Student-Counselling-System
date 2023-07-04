import { Inject, Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
// import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}
  create(todo: Student): Promise<Student> {
    return this.studentRepository.save(this.studentRepository.create(todo));
  }
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  update(id: string, data: any): Promise<any> {
    return this.studentRepository
      .createQueryBuilder()
      .update()
      .set({
        name: data.name,
      })
      .where('id = :id', { id })
      .execute();
  }
  delete(id: string): Promise<any> {
    return this.studentRepository
      .createQueryBuilder()
      .delete()
      .from(Student)
      .where('id = :id', { id })
      .execute();
  }
}
