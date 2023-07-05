import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { DatabaseModule } from 'src/database/database.module';
import { chatProviders } from './chat.providers';
import { messageProviders } from './message.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ChatController],
  providers: [...chatProviders, ...messageProviders, ChatService],
})
export class ChatModule {}
