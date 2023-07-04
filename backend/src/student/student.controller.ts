import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentService) {}
  @Post()
  async create(@Body() studentDto: Student) {
    const student = await this.studentService.create(studentDto);
    if (!student) {
      return 'error in creating student';
    }
    return 'student created successfully';
  }
  @Get()
  async findAll(@Req() request: Request) {
    const cats = await this.studentService.findAll();
    return cats;
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newCat: any = await this.studentService.update(id, body);
    return 'cat updated';
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.studentService.delete(id);
    return 'cat deleted';
  }
}
