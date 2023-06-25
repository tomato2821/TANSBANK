import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(HttpException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception instanceof HttpException) {
      const errors = exception.getResponse();
      response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Bad request',
        statusCode: errors['statusCode'],
        errorDetail: this.buildErrorObject(errors['message']),
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Server internal error',
        statusCode: 500,
      });
    }
  }

  private buildErrorObject(errors: Array<string>): object {
    const result = {};
    errors.forEach((error) => {
      const errorField = error.split(' ').shift();
      result[errorField] = error;
    });
    return result;
  }
}
