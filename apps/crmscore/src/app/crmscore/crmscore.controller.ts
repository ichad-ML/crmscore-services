import { Controller, Get } from '@nestjs/common';
import { CrmscoreService } from './crmscore.service';

@Controller('crmscore')
export class CrmscoreController {
    constructor(private readonly crmscoreService: CrmscoreService) {}
    
    @Get()
    async getHello(): Promise<string> {
        return this.crmscoreService.getHello();
    }
}
