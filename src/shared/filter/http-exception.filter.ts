import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { IHttpError } from '../interface/http-error.interface';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost): void {
    const httpContext = host.switchToHttp();
    const request = httpContext.getRequest<Request>();
    const response = httpContext.getResponse<Response>();
    const status = exception.getStatus();

    const errorResponse: IHttpError = {
      code: status,
      message: exception.message || null,
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method
    };

    Logger.error(`${request.method} ${request.url}`, JSON.stringify(errorResponse), 'HttpExceptionFilter');

    response
      .status(status)
      .json(errorResponse);      
  }
}