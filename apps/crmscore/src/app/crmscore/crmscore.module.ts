import { Module } from '@nestjs/common';
import { CrmscoreController } from './crmscore.controller';
import { CrmscoreService } from './crmscore.service';
import { DatabaseService } from '../db/db.service';

@Module({
  controllers: [CrmscoreController],
  providers: [CrmscoreService, DatabaseService],
})
export class CrmscoreModule {}
