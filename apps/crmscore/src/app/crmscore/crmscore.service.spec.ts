import { Test, TestingModule } from '@nestjs/testing';
import { CrmscoreService } from './crmscore.service';

describe('CrmscoreService', () => {
  let service: CrmscoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrmscoreService],
    }).compile();

    service = module.get<CrmscoreService>(CrmscoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
