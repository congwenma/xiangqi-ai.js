export default class Avatar {
  constructor ({faction, position, index} = {}) {
    this.faction = faction // red or black
    this.position = position
    this.index = index
  }

  get name() {
    return this.constructor.name
  }

  get key() {
    return this.toString();
  }
}

export class Cannon extends Avatar {
  constructor (params) {
    super(params)
  }
}
export class Chariot extends Avatar {
  constructor (params) {
    super(params)
  }
}
export class General extends Avatar {
  constructor (params) {
    super(params)
  }
}
export class Guard extends Avatar {
  constructor (params) {
    super(params)
  }
}
export class Knight extends Avatar {
  constructor (params) {
    super(params)
  }
}
export class Minister extends Avatar {
  constructor (params) {
    super(params)
  }
}
export class Pawn extends Avatar {
  constructor (params) {
    super(params)
  }
}

