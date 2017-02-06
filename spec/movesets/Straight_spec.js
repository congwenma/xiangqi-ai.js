import Avatar from '../../src/models/Avatar'
import Straight from '../../src/movesets/Straight'
import Board from '../../src/models/Board'

class StraightTestAvatar extends Avatar {
  constructor() {
    super()
    this.moveset = new Straight
  }
}

describe(Straight, function() {
  let board, piece

  beforeEach(() => {
    board = new Board();
    piece = new StraightTestAvatar({ faction: 'black', position: [0, 3]})
    board.pieces.push(piece)
  })

  it('calculates the moves of pieces with straight move option', () => {

    expect(piece.moveOptions).toBe()
  })

  it('gets blocked by friendly unit', () => {

  })

  it('gets blocked by enemy unit, but can kill', () => {

  })
})
