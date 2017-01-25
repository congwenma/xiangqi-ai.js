export const Dictionary = {
  Cannon: 'C',
  Chariot: 'R', // as in rook
  General: 'B', // as in boss, lol!
  Guard: 'G',
  Knight: 'K',
  Minister: 'M',
  Pawn: 'P'
}

export default class Avatar {
  constructor ({faction, position, index} = {}) {
    this.faction = faction // red or black
    this.position = position
    this.index = index
  }

  get name() {
    return this.constructor.name
  }

  get toSingleChar() {
    const char = Dictionary[this.name]
    return this.isRed ? char.toLowerCase() : char;
  }

  get isRed() { return this.faction === 'red'}

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

