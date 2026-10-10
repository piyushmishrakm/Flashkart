import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productName: string

    @Column()
    productCount: string

    @Column()
    productExpiry: number

}
