import { Module } from '@nestjs/common';
import { CrmScoreController } from './crm-score.controller';
import { CrmScoreService } from './crm-score.service';
import { DatabaseService } from '../db/db.service';

@Module({
  controllers: [CrmScoreController],
  providers: [CrmScoreService, DatabaseService],
})
export class CrmScoreModule {}
