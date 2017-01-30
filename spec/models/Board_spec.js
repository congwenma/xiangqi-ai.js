import Board from '../../src/models/Board'

describe(Board, function() {
  let board = new Board();
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
})
