import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { StudentModule } from './student/student.module';
import { CounsellerModule } from './counseller/counseller.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthModule } from './jwt/jwt.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    DatabaseModule,
    StudentModule,
    CounsellerModule,
    AuthModule,
    JwtAuthModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
