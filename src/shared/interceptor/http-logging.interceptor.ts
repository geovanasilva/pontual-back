import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    const dateBeforeResponse = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest<Request>();

    const logMessage = `[${request.method}] '${request.url}'`;
    const contextMessage = `${context.getClass().name}`;

    return next
      .handle()
      .pipe(
        tap(() => Logger.log(`${logMessage} took ${Date.now() - dateBeforeResponse}ms`, contextMessage))
      )
  }
}