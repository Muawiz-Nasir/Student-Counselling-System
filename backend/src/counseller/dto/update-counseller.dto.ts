import { PartialType } from '@nestjs/mapped-types';
import { CreateCounsellerDto } from './create-counseller.dto';

export class UpdateCounsellerDto extends PartialType(CreateCounsellerDto) {}
