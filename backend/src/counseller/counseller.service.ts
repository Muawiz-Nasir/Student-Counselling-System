import { Inject, Injectable } from '@nestjs/common';
import { CreateCounsellerDto } from './dto/create-counseller.dto';
import { UpdateCounsellerDto } from './dto/update-counseller.dto';
import { Repository } from 'typeorm';
import { Counseller } from './entities/counseller.entity';

@Injectable()
export class CounsellerService {
  constructor(
    @Inject('COUNSELLER_REPOSITORY')
    private counsellerRepository: Repository<Counseller>,
  ) {}
  create(createCounsellerDto: CreateCounsellerDto) {
    return this.counsellerRepository.save(
      this.counsellerRepository.create(createCounsellerDto),
    );
  }

  findAll(): Promise<Counseller[]> {
    return this.counsellerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} counseller`;
  }

  update(id: string, data: any): Promise<any> {
    return this.counsellerRepository
      .createQueryBuilder()
      .update()
      .set({
        ...data,
      })
      .where('id = :id', { id })
      .execute();
  }
  remove(id: string): Promise<any> {
    return this.counsellerRepository
      .createQueryBuilder()
      .delete()
      .from(Counseller)
      .where('id = :id', { id })
      .execute();
  }
}
