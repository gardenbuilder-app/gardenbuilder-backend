/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Query } from 'type-graphql'
import { User } from '../entities/User'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find()
  }
}