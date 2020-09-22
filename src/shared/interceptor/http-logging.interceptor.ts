import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    const dateBeforeResponse = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => Logger.log(`${Date.now() - dateBeforeResponse}ms`, context.getClass().name))
      )
  }
}