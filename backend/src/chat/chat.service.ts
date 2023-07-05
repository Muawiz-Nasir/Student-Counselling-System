import { Inject, Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
// import { UpdateChatDto } from './dto/update-chat.dto';
import { In, Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { Message } from './entities/message.entity';

@Injectable()
export class ChatService {
  constructor(
    @Inject('CHAT_REPOSITORY')
    private chatRepository: Repository<Chat>,
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}

  async create(createChatDto: CreateChatDto) {
    // eslint-disable-next-line prefer-const
    let { userId, message, chatId } = createChatDto;

    if (!chatId) {
      const chat = await this.chatRepository.save(
        this.chatRepository.create({ startedBy: userId }),
      );

      chatId = chat.id;
    }

    return await this.messageRepository.save(
      this.messageRepository.create({ sentById: userId, message, chatId }),
    );
  }

  // findAll() {
  //   return `This action returns all chat`;
  // }

  async findMyChat(userId: number) {
    const myChats = await this.chatRepository.find({
      where: {
        startedBy: userId,
      },
    });

    const chatIds = myChats.map((chat) => chat.id);

    const myMessages = await this.messageRepository.find({
      where: {
        chatId: In(chatIds),
      },
      order: {
        sentAt: 'ASC',
      },
    });

    const data = myChats.reduce((result, current) => {
      result[current.id] = { ...current, messages: [] };
      return result;
    }, {});

    myMessages.forEach((message) => {
      const { chatId } = message;
      data[chatId]?.messages?.push(message);
    });

    return data;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} chat`;
  // }

  // update(id: number, updateChatDto: UpdateChatDto) {
  //   return `This action updates a #${id} chat`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} chat`;
  // }
}
