import { Body, Controller, Get, Post } from '@nestjs/common';
import { orderDTO } from './DTO/order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService){}

    @Get("read")
    getAll(){
        return this.orderService.getAll()
    }

    @Post("create")
    createOrder(@Body() orderDTO: orderDTO): Promise<Order> {
        return this.orderService.createOrder(orderDTO)
    }

}
