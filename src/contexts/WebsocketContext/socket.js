import io from 'socket.io-client'

export class Socket {
  constructor ({ url, project, accessToken, hashKey }) {
    this.url = url
    this.project = project
    this.accessToken = accessToken
    this.queue = []
    this.hashKey = hashKey
  }

  connect () {
    this.socket = io(this.url, {
      extraHeaders: {
        Authorization: `Bearer ${this.accessToken}`
      },
      query: this.accessToken ? `token=${this.accessToken}&project=${this.project}` : this.hashKey ? `hash_key=${this.hashKey}&project=${this.project}` : `project=${this.project}`,
      transports: ['websocket']
    })
    this.socket.on('connect', () => {
      let item
      while ((item = this.queue.shift()) !== undefined) {
        if (item.action === 'on') {
          this.on(item.event, item.func)
        } else if (item.action === 'join') {
          this.join(item.room)
        } else if (item.action === 'leave') {
          this.leave(item.room)
        } else if (item.action === 'off') {
          this.off(item.room)
        }
      }
    })
  }

  getId () {
    return this.socket?.id
  }

  close () {
    if (this.socket?.connected) {
      this.socket.close()
    }
  }

  join (room) {
    if (typeof room === 'string') {
      if (this.socket?.connected) {
        this.socket.emit('join', `${this.project}_${room}`)
      } else {
        this.queue.push({ action: 'join', room })
      }
    } else {
      this.socket.emit('join', room)
    }
    return this
  }

  leave (room) {
    if (this.socket?.connected) {
      this.socket.emit('leave', `${this.project}_${room}`)
    } else {
      this.queue.push({ action: 'leave', room })
    }
    return this
  }

  on (event, func = () => {}) {
    if (this.socket?.connected) {
      this.socket.on(event, func)
    } else {
      this.queue.push({ action: 'on', event, func })
    }
    return this
  }

  off (event, func = () => {}) {
    if (this.socket?.connected) {
      this.socket.off(event, func)
    } else {
      this.queue.push({ action: 'off', event, func })
    }
    return this
  }
}
