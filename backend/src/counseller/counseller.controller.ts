import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CounsellerService } from './counseller.service';
import { CreateCounsellerDto } from './dto/create-counseller.dto';
import { UpdateCounsellerDto } from './dto/update-counseller.dto';

@Controller('counseller')
export class CounsellerController {
  constructor(private readonly counsellerService: CounsellerService) {}

  @Post()
  create(@Body() createCounsellerDto: CreateCounsellerDto) {
    return this.counsellerService.create(createCounsellerDto);
  }

  @Get()
  async findAll() {
    const counseller = await this.counsellerService.findAll();
    return counseller;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counsellerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCounsellerDto: UpdateCounsellerDto,
  ) {
    return this.counsellerService.update(id, updateCounsellerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counsellerService.remove(id);
  }
}
