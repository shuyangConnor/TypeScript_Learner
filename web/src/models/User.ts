import { Model } from './Model'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Collection } from './Collection'

export interface UserProps {
  name?: string
  age?: number
  id?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, this.buildUser)
  }

  isAdminUser(): boolean {
    return this.get('id') === 1
  }

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}
