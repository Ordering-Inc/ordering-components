import io from 'socket.io-client'

export class Socket {
  constructor ({ url, project, accessToken }) {
    this.url = url
    this.project = project
    this.accessToken = accessToken
    this.queue = []
  }

  connect () {
    this.socket = io(this.url, {
      extraHeaders: {
        Authorization: `Bearer ${this.accessToken}`
      },
      query: `token=${this.accessToken}&project=${this.project}`
    })
    this.socket.on('connect', () => {
      let item
      while ((item = this.queue.shift()) !== undefined) {
        if (item.action === 'on') {
          this.on(item.event, item.func)
        } else if (item.action === 'join') {
          this.join(item.room)
        }
      }
    })
  }

  close () {
    if (this.socket?.connected) {
      this.socket.close()
    }
  }

  join (room) {
    if (this.socket?.connected) {
      console.log(`join to ${this.project}_${room}`)
      this.socket.emit('join', `${this.project}_${room}`)
    } else {
      this.queue.push({ action: 'join', room })
    }
    return this
  }

  on (event, func = () => {}) {
    if (this.socket?.connected) {
      console.log(`listen event ${event}`)
      this.socket.on(event, func)
    } else {
      this.queue.push({ action: 'on', event, func })
    }
    return this
  }
}
