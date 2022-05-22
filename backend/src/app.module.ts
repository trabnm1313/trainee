import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mongodb",
    url: "mongodb://localhost:27017/nestjs",
    synchronize: false,
    useUnifiedTopology: true,
    entities: [Order]
  }), OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
