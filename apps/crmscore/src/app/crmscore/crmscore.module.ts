import { Module } from '@nestjs/common';
import { CrmscoreController } from './crmscore.controller';
import { CrmscoreService } from './crmscore.service';

@Module({
  controllers: [CrmscoreController],
  providers: [CrmscoreService],
})
export class CrmscoreModule {}
