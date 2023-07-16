import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { CounsellerService } from './counseller.service';
import { CreateCounsellerDto } from './dto/create-counseller.dto';
import { UpdateCounsellerDto } from './dto/update-counseller.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('admin/counseller')
@UseGuards(JwtAuthGuard, new RolesGuard(['ADMIN']))
export class CounsellerController {
  constructor(private readonly counsellerService: CounsellerService) {}

  @Post()
  create(@Body() createCounsellerDto: CreateCounsellerDto) {
    if (createCounsellerDto?.loginId === 'admin@counselling.com') {
      throw new BadRequestException('Please change loginId');
    }
    return this.counsellerService.create({
      id: Math.ceil(Math.random() * 1000000),
      ...createCounsellerDto,
    });
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
