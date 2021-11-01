import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class CategoryFilter<T> implements ExceptionFilter {
  private readonly logger = new Logger(CategoryFilter.name);
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    this.logger.error(exception.message)
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const { url } = request;
    const {message} = exception
    let name:string;
    if(message.includes("FK_15520e638eb4c46c4fb2c61c4b4")){
        name="Categories sent must exist or should be created before creating a cupboard.Path to create a category is /v1/categories"
    }
    if(message.includes("UQ_63ad76a14a8321d22dc0a5e7041")){
      name="Category already exists"
    }
    if(message.includes("null value in column categoryId")){
      name="When sending a category, the id must be provided"
    }
    const errorResponse = {
      path: url,
      timestamp: new Date().toISOString(),
      message: name
    };

    response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
  }
}
