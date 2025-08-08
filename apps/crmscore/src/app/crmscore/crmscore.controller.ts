import { Controller, Get } from '@nestjs/common';
import { CrmscoreService } from './crmscore.service';

@Controller('crm-score')
export class CrmscoreController {
  constructor(private readonly crmscoreService: CrmscoreService) {}

  @Get()
  async getCustomer(): Promise<any> {
    return this.crmscoreService.getCustomer();
  }
}
