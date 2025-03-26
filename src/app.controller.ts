import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('claim')
  getClaim(@Body() body: any){
    let { ticket, numbersAnnounced, claimType } = body;
    return this.appService.validateClaim(ticket, numbersAnnounced, claimType)
  }
  
}
