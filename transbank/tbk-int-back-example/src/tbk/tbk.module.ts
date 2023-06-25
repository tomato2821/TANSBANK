import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { TbkService } from './tbk.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const axiosConfig: AxiosRequestConfig = {
          baseURL: configService.get('TBK_BASE_URL'),
          headers: {
            'Content-Type': 'application/json',
            'Tbk-Api-Key-Id': configService.get('TBK_API_KEY'),
            'Tbk-Api-Key-Secret': configService.get('TBK_API_SECRET'),
          },
        };
        return axiosConfig;
      },
      inject: [ConfigService],
    }),
  ],
  providers: [TbkService],
  exports: [HttpModule, TbkService],
})
export class TbkApiModule {}
