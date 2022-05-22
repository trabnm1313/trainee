import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, } from "typeorm";

@Entity("orders")
export class Order{
    @ObjectIdColumn()
    _id: ObjectID
    
    @Column()
    name: string

    @Column()
    price: number
    
    @Column()
    ingredients: string[]

    @Column()
    type: string

    @Column()
    image: string

    constructor(name: string, price: number, ingredients: string[], type: string, image: string){
        this.name = name
        this.price = price
        this.ingredients = ingredients
        this.type = type
        this.image = image
    }
}