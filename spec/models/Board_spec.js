import { Pawn } from '../../src/models/Avatar';
import Board from '../../src/models/Board'

describe(Board, function() {
  let board = new Board();

  describe('class constants', function() {
    it('are as expected', () => {
      expect(Board.BOARD_WIDTH).toBe(9)
      expect(Board.BOARD_HEIGHT).toBe(10)
    })
  })

  describe('#matrix', function() {
    it('should have proper chess coords', function() {
      expect(board.matrix.length).toBe(9)
      expect(board.matrix[0].length).toBe(10)
    })
  })

  it('should print out the boards visual representation', () => {
    expect(board.toString()).toBe([
      'R . . P . . p . . r',
      'K . C . . . . c . k',
      'M . . P . . p . . m',
      'G . . . . . . . . g',
      'B . . P . . p . . b',
      'G . . . . . . . . g',
      'M . . P . . p . . m',
      'K . C . . . . c . k',
      'R . . P . . p . . r',
    ].join('\n'))
  })

  describe('.isInside', function() {
    it('returns `true` when coordinate is within the matrix', () => {
      expect(Board.isInside({ x: 8, y: 8 })).toBe(true)
      expect(Board.isInside({ x: 8, y: 0 })).toBe(true)
      expect(Board.isInside({ x: 0, y: 8 })).toBe(true)
      expect(Board.isInside({ x: 0, y: 0 })).toBe(true)
    })

    it('returns `false` when coordinate is outside the matrix', () => {
      expect(Board.isInside({ x: 9, y: 8 })).toBe(false)
      expect(Board.isInside({ x: 8, y: 10 })).toBe(false)
      expect(Board.isInside({ x: 0, y: -1 })).toBe(false)
      expect(Board.isInside({ x: -1, y: -1 })).toBe(false)
    })
  })

  describe('#isEmpty', function() {
    it('returns `false` when the coordinate is out of bound', () =>
      expect(board.isEmpty({ x: 1, y: 10 })).toBe(false)
    )

    it('returns `true` when the current position has NO piece', () =>
      expect(board.isEmpty({ x: 6, y: 3 })).toBe(true)
    )

    it('returns `false` when the current position has a piece', () => {
      board.pieces.push(
        new Pawn({ faction: 'black',  position: [6, 3] })
      )
    })
  })
})
