export default class Avatar {
  constructor ({faction} = {}) {
    this.faction = faction;
  }
}

import Cannon from './Cannon'
import Chariot from './Chariot'
import General from './General'
import Guard from './Guard'
import Knight from './Knight'
import Minister from './Minister'
import Pawn from './Pawn'

export {
  Cannon,
  Chariot,
  General,
  Guard,
  Knight,
  Minister,
  Pawn 
}
