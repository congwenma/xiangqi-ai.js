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
      '',
      'R . . P . . p . . r',
      'K . C . . . . c . k',
      'M . . P . . p . . m',
      'G . . . . . . . . g',
      'B . . P . . p . . b',
      'G . . . . . . . . g',
      'M . . P . . p . . m',
      'K . C . . . . c . k',
      'R . . P . . p . . r',
      ''
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

    it('returns `false` when the current position has a piece', () =>
      expect(board.isEmpty({ x: 6, y: 3 })).toBe(false)
    )

    it('returns `true` when the current position has NO piece', () =>
      expect(board.isEmpty({ x: 6, y: 2 })).toBe(true)
    )
  })

  describe('#update', function() {
    let piece
    beforeEach(() => {
      board = new Board
      piece = board.pieces.find(p => p.name === 'Chariot' && p.faction === 'black')
    })

    afterEach(() => {
      piece.position = [0, 0]
      board.update(piece)
    })

    it('update the matrix to reflect the new position of the piece', () => {
      piece.position = [0, 2]
      board.update(piece)
      expect(board.matrix[0][2]).not.toBeUndefined()
    })
  })

  describe('#updatePiece', function() {
    let piece, origPosition

    beforeEach(() => {
      board = new Board
      spyOn(board, 'switchTurn')
      piece = board.pieces.find(p => p.name === 'Chariot' && p.faction === 'black')
      origPosition = piece.position
      expect(board.matrix[0][9]).toEqual(
        jasmine.objectContaining({
          faction: 'red',
          name: 'Chariot'
        })
      )
      board.updatePiece(piece, [0, 9])
    })

    it('updates the pieces position', () => {
      const [origX, origY] = origPosition
      const [newX, newY] = piece.position

      expect(board.matrix[origX][origY]).toBe(null)
      expect(board.matrix[newX][newY]).toBe(piece)
      expect(piece.position).toEqual([0, 9])
    })

    it('swap turn afterward', () => expect(board.switchTurn).toHaveBeenCalled())
  })
})
