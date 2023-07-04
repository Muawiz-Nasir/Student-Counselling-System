import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { studentProviders } from 'src/student/student.providers';
import { counsellerProviders } from 'src/counseller/counseller.providers';

@Module({
  imports: [DatabaseModule, StudentModule],
  controllers: [AuthController],
  providers: [
    ...studentProviders,
    ...counsellerProviders,
    AuthService,
    StudentService,
  ],
})
export class AuthModule {}
