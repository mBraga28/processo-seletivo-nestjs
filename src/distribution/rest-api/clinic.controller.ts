import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Public } from '../auth/public.decorator';
import { ClincDto } from 'src/common/dtos/clinc-dto';
import { ClinicService } from 'src/business/services/clinic.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';

@Controller('/clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) { }

  @Public()
  @Post()
  @HttpCode(201)
  create(@Body() clincDto: ClincDto) {
    return this.clinicService.create(clincDto);
  }
  @ApiResponse({ type: ClincDto, isArray: true })
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  list() {
    return this.clinicService.list();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() clincDto: ClincDto) {
    return this.clinicService.update(id, clincDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  delete(@Param('id') id: string) {
    return this.clinicService.delete(id);
  }
}
