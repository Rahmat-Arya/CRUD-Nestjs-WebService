import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { BukuModule } from './buku/buku.module';

@Module({
  imports: [ProductsModule, BukuModule],
})
export class AppModule {}
