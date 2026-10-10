import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cartName: string

    @Column()
    cartOrderedBy: string

    @Column()
    cartTransactionIDBy: string

    @Column()
    cartExpiry: string

    @Column()
    cartCreatedAt: string

    @Column()
    cartUpdatedAt: string

}
