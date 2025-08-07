import { Test, TestingModule } from '@nestjs/testing';
import { CrmscoreController } from './crmscore.controller';

describe('CrmscoreController', () => {
  let controller: CrmscoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrmscoreController],
    }).compile();

    controller = module.get<CrmscoreController>(CrmscoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
