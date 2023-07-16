import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guards';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentService) {}

  @Post()
  async create(@Body() studentDto: Student) {
    if (studentDto.email === 'admin@counselling.com') {
      throw new BadRequestException('Invalid email');
    }
    const student = await this.studentService.create(studentDto);
    if (!student) {
      return 'error in creating student';
    }
    return 'student created successfully';
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: any) {
    console.log(request.user);

    const students = await this.studentService.findAll();
    return students;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/myProfile')
  async findOne(@Req() request: Request | any) {
    const student = await this.studentService.findOne({
      id: request?.user?.id,
    });
    return student;
  }

  @UseGuards(JwtAuthGuard, new RolesGuard(['STUDENT']))
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newStudent: any = await this.studentService.update(id, body);
    return 'student updated';
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.studentService.delete(id);
    return 'student deleted';
  }
}
