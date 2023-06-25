import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TbkService {
  constructor(private readonly httpService: HttpService) {}

  public async iniciarTransaccion(
    request: IniciarTransaccionRequest,
  ): Promise<IniciarTransaccionResponse> {
    try {
      const response = await this.httpService
        .post('/rswebpaytransaction/api/webpay/v1.2/transactions', request)
        .toPromise();
      console.log('response data', response);
      return response.data as IniciarTransaccionResponse;
    } catch (error) {
      console.log(error);
      throw new Error(`TBK_API_ERROR: ${error.message}`);
    }
  }
  public async confirmarTransaccion(
    request: ConfirmarTransaccionRequest,
  ): Promise<ConfirmarTransaccionResponse> {
    try {
      const response = await this.httpService
        .put(
          `/rswebpaytransaction/api/webpay/v1.2/transactions/${request.token}`,
        )
        .toPromise();
      console.log('response data', response);
      return response.data as ConfirmarTransaccionResponse;
    } catch (error) {
      console.log(error);
      throw new Error(`TBK_API_ERROR: ${error.stack}`);
    }
  }
}

export type ConfirmarTransaccionRequest = {
  token: string;
};

export type ConfirmarTransaccionResponse = {
  vci: string;
  amount: number;
  status: string;
  buy_order: string;
  session_id: string;
  card_detail: {
    card_number: string;
  };
  accounting_date: string;
  transaction_date: string;
  authorization_code: string;
  payment_type_code: string;
  response_code: number;
  installments_number: number;
};

export type IniciarTransaccionRequest = {
  buy_order: string;
  session_id: string;
  amount: number;
  return_url: string;
};

export type IniciarTransaccionResponse = {
  token: string;
  url: string;
};
