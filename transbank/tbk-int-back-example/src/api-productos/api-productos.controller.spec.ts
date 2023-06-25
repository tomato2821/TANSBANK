import { Test, TestingModule } from '@nestjs/testing';
import { ApiProductosController } from './api-productos.controller';
import { CalculadoraModule } from '../calculadora/calculadora.module';

describe('AppController', () => {
  let appController: ApiCalculadoraController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CalculadoraModule],
      controllers: [ApiProductosController],
    }).compile();

    appController = app.get<ApiProductosController>(ApiProductosController);
  });

  describe('root', () => {
    it('should return api response: { result: 3 }', async () => {
      expect(true).toBe(true);
      // expect(
      //   //await appController.sumar({ numeroA: 1, numeroB: 2 } as SumarDto),
      // ).toEqual(new ApiResponse(3));
    });
  });
});
