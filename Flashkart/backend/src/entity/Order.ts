import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productName: string

    @Column()
    productCount: string

    @Column()
    productOrderedBy: string

    @Column()
    productTransactionIDBy: string

    @Column()
    productExpiry: string

    @Column()
    productCreatedAt: string

    @Column()
    productUpdatedAt: string

}
