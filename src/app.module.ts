import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClaimRule } from './providers/game-rule.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClaimRule],
})
export class AppModule {}
