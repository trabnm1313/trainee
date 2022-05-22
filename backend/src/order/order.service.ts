import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { orderDTO } from './DTO/order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>){}

    getAll(){
        return this.orderRepository.find()
    }

    async createOrder(orderDTO: orderDTO): Promise<Order> {
        let { name, price, ingredients, type, image } =  orderDTO

        let order = new Order(
            name,
            price,
            ingredients,
            type,
            image
        )

        await this.orderRepository.save(order)
        
        return order
        
    }

}
