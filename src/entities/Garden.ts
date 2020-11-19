import { Field, ID, Int, ObjectType } from 'type-graphql'
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { User } from './User'
import { Bed } from './Bed'

@ObjectType()
@Entity()
export class Garden extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name!: string

  @Field()
  @UpdateDateColumn()
  endedAt: Date

  @Field()
  @Column({ default: true })
  isActive: boolean

  @Field(() => Int)
  @Column()
  ownerId: number

  @Field(() => User)
  @ManyToOne(() => User, (owner) => owner.gardens, { onDelete: 'CASCADE' })
  owner: User

  @OneToMany(() => Bed, (bed) => bed.garden)
  beds: Bed[]

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
}
