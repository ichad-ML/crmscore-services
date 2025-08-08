import { Module } from '@nestjs/common';
import { CrmscoreModule } from './crmscore/crmscore.module';
import { DatabaseService } from './db/db.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CrmscoreModule,
  ],
  controllers: [],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class AppModule {}
