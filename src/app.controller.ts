import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { ObjectIdColumn } from 'typeorm';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('objeto')
  getObject() : any{
    return this.appService.getObject();
  }

}
