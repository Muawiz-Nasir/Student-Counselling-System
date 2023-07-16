import { Inject, Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { Repository } from 'typeorm';
import { Faq } from './entities/faq.entity';

@Injectable()
export class FaqService {
  constructor(
    @Inject('FAQ_REPOSITORY')
    private faqRepository: Repository<Faq>,
  ) {}
  create(todo: Faq): Promise<Faq> {
    return this.faqRepository.save(this.faqRepository.create(todo));
  }
  findAll(): Promise<Faq[]> {
    return this.faqRepository.find();
  }

  findOne(condition): Promise<Faq> {
    return this.faqRepository.findOne({
      where: condition,
    });
  }

  update(id: number, data: any): Promise<any> {
    return this.faqRepository
      .createQueryBuilder()
      .update()
      .set({
        ...data,
      })
      .where('id = :id', { id })
      .execute();
  }
  remove(id: number): Promise<any> {
    return this.faqRepository
      .createQueryBuilder()
      .delete()
      .from(Faq)
      .where('id = :id', { id })
      .execute();
  }
}
