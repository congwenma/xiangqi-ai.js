import SearchModel from './algorithm/SearchModel'
import Board from './models/Board'

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
