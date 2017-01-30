import SearchModel from './algorithm/SearchModel'
import Board from './models/Board'

export class SearchModel {
  DEPTH = 2

  search(board) {
    this.board = board
    if (board.pieces.length < 28)
      DEPTH = 3
    if (board.pieces.length < 16)
      DEPTH = 4
    if (board.pieces.length < 6)
      DEPTH = 5
    if (board.pieces.length < 4)
      DEPTH = 6

    const startTime = performance.now()
    let best = null

    let moves = generateMovesForAll(true)  // generate all moves
    for (let node of moves) {
      var eaten = board.updatePiece(node.piece, node.to)
      n.value = alphaBeta(DEPTH, MIN, MAX, false) // value the current

      // Select a best move during searching
      if (best === null || node.value >= best.value) {
        best = node
      }

      /* Back move*/
      // move the current piece back to where its from
      // if opponent piece was eaten, revive it.
      board.updatePiece(n.piece, n.from)
      if (eaten !== null) {

      }
    }
  }

}

export default class GameController {
  constructor() {
    this.board = new Board({

    })
  }

  // takes current board and view and makes a move
  get_response_move() {
    const searchModel = new SearchModel
    const result = searchModel.search(board) // returns result <AlphaBetaNode>

    // TODO: grabs the result and return it
    return result;
  }

  user_move() {
    // simulate/report user movement
  }

  swap_player() {

  }
}
