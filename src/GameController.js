import SearchModel from './SearchModel'
import Board from './Board'

export default class GameController {
  constructor() {
    this.board = new Board({
      pieces: [
        // TODO: fill in here, 
      ]
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

  }

  swap_player() {

  }
}