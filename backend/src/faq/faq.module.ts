import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { faqProviders } from './faq.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FaqController],
  providers: [...faqProviders, FaqService],
})
export class FaqModule {}
