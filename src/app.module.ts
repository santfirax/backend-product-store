import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL.replace('postgres://', '')
            .split(':')[1]
            .split('@')[1]) ||
        process.env.DATABASE_URL ||
        process.env.DB_HOST ||
        'localhost',
      port: 5432,
      username:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL.replace('postgres://', '').split(':')[0]) ||
        process.env.DB_USER ||
        'postgres',
      password:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL.replace('postgres://', '')
            .split(':')[1]
            .split('@')[0]) ||
        process.env.DB_PASSWORD ||
        'postgres',
      database:
        (process.env.DATABASE_URL && process.env.DATABASE_URL.split('/')[3]) ||
        process.env.DB_NAME ||
        'products',
      entities: [Product],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
      extra: {
        ssl: true,
      },
    }),

    ProductsModule,
  ],
})
export class AppModule {}
