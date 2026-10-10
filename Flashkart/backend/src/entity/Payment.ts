import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number   

    @Column()
    paymentintentId: string

    @Column()
    userID: string
    
    @Column()
    orderID: string

    @Column()
    paymentCreatedAt: string

    @Column()
    paymentupdatedAt: string

}
