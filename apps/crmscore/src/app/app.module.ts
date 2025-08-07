import { Module } from '@nestjs/common';
import { CrmscoreModule } from './crmscore/crmscore.module';

@Module({
  imports: [CrmscoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
