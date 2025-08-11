import { Test, TestingModule } from '@nestjs/testing';
import { CrmScoreController } from './crm-score.controller';

describe('CrmScoreController', () => {
  let controller: CrmScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrmScoreController],
    }).compile();

    controller = module.get<CrmScoreController>(CrmScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
