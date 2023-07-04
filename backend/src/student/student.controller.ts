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
import { StudentDto } from './student.dto';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentService) {}
  @Post()
  async create(@Body() studentDto: Student) {
    const todo = await this.studentService.create(studentDto);
    if (!todo) {
      return 'error in creating todo';
    }
    return 'todo created successfully';
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
