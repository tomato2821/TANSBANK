import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
// import { Logger } from 'nestjs-pino';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(`HTTP`);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(
      `Logging HTTP request ${req.method} ${req.url} ${res.statusCode}`,
    );
    next();
  }
}
