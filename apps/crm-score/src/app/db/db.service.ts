import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createConnection, Connection } from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private connection: Connection;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    try {
      this.connection = await createConnection({
        host: this.configService.get<string>('DB_HOST'),
        user: this.configService.get<string>('DB_USER'),
        password: this.configService.get<string>('DB_PASSWORD'),
        database: this.configService.get<string>('DB_NAME'),
        port: this.configService.get<number>('DB_PORT'),
      });
      console.log('Database connected...');
    } catch (error) {
      console.error('Database connection failed:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    if (this.connection) {
      await this.connection.end();
      console.log('Database connection closed');
    }
  }

  getConnection() {
    return this.connection;
  }

  async callProcedure<T = any>(
    procedureName: string,
    params: any[] = []
  ): Promise<T[]> {
    if (!this.connection) {
      throw new Error('Database connection not initialized.');
    }

    const placeholders = params.map(() => '?').join(',');
    const [rows] = await this.connection.query(
      `CALL ${procedureName}(${placeholders})`,
      params
    );

    // mysql2 returns results in nested arrays for procedures
    return rows[0] || rows;
  }
}
