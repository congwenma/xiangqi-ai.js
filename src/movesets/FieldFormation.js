// import Moveset from './Moveset';
// import matrix from 'components/models/coordinateMatrix';
//
//
// export default class FieldFormation extends Moveset {
//   constructor(avatar) {
//   -\]7[9;08itu,ymftyrjrtjuhr5belongsToTopFaction ? coord.yPoint <= 4 : coord.yPoint >= 5;
//     })
//   }
//
//   get getMoveOptions() {
//     this.x = this.avatar.coordinate.xPoint;
//     this.y = this.avatar.coordinate.yPoint;
//
//     // remove coords outside of matrix and those with an avatar in it
//     return this.getPotentialOptions.filter((opt) => {
//       return !opt.avatar;
//     });
//   }
//
//   _checkMove (destination, obstacle) {
//     if (destination && obstacle && !obstacle.avatar) {
//       return destination;
//     }
//   }
//
//   get getKillOptions() {
//     this.x = this.avatar.coordinate.xPoint;
//     this.y = this.avatar.coordinate.yPoint;
//
//     let options = this.getPotentialOptions.filter((coord) => {
//       return coord.avatar && coord.avatar.player !== this.avatar.player;
//     })
//     return options;
//   }
//
// }
