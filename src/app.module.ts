import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://bevets:4UDMOp21DL7k8RQL@bevets.4w1ei7m.mongodb.net/auto_pro',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
