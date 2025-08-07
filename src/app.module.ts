import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { ArtistModule } from './artist/artist.module';
import { CategoryModule } from './category/category.module';  

@Module({
  imports: [ProductModule, ArtistModule, CategoryModule],       
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
