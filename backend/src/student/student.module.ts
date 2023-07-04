import { Module } from '@nestjs/common';
import { StudentsController } from './student.controller';
import { StudentService } from './student.service';
import { studentProviders } from './student.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [...studentProviders, StudentService],
})
export class StudentModule {}
