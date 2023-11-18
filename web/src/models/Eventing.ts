import { Callback } from './Model'
import { Events } from './Model'

export class Eventing implements Events {
  events: { [key: string]: Callback[] } = {}

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName] || []
    handlers.forEach((handler) => {
      handler()
    })
  }
}
