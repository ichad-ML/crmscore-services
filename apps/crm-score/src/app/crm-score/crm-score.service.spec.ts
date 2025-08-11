import { Test, TestingModule } from '@nestjs/testing';
import { CrmScoreService } from './crm-score.service';

describe('CrmScoreService', () => {
  let service: CrmScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrmScoreService],
    }).compile();

    service = module.get<CrmScoreService>(CrmScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
