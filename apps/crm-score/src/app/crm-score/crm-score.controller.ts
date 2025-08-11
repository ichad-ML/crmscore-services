import { Controller, Get } from '@nestjs/common';
import { CrmScoreService } from './crm-score.service';

@Controller('crm-score')
export class CrmScoreController {
  constructor(private readonly crmScoreService: CrmScoreService) {}

  @Get()
  async getCustomer(): Promise<any> {
    return this.crmScoreService.getCustomer();
  }
}
