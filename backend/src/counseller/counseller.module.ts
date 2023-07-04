import { Module } from '@nestjs/common';
import { CounsellerService } from './counseller.service';
import { CounsellerController } from './counseller.controller';
import { DatabaseModule } from 'src/database/database.module';
import { counsellerProviders } from './counseller.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CounsellerController],
  providers: [...counsellerProviders, CounsellerService],
})
export class CounsellerModule {}
