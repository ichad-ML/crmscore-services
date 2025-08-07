import { Injectable } from '@nestjs/common';

@Injectable()
export class CrmscoreService {
    async getHello(): Promise<string> {
        return 'Hello world!';
    }
}
