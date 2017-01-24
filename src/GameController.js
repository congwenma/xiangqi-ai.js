import SearchModel from './SearchModel'
class Board {
  constructor({pieces}) {
    // TODO: for each piece get value
  }
}

export default class GameController {
  constructor() {
    this.board = new Board({
      pieces: [
        // TODO: fill in here, 
      ]
    })
    this.view = new View()
  }

  // takes current board and view and makes a move
  responseMove() {
    const searchModel = new SearchModel
    const result = searchModel.search(board) // returns result <AlphaBetaNode>

    // TODO: grabs the result and return it
    view.movePieceFromAI(result.piece, result.to); 
  }
}