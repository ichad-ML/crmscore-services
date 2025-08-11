import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../db/db.service';

@Injectable()
export class CrmScoreService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getCustomer(): Promise<any> {
    return await this.databaseService.callProcedure('customer_getByName', [
      'F TEST',
      '',
      'L TEST',
      '2025-08-06',
    ]);
  }
}
