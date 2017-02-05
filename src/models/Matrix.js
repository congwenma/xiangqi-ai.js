const expand = (num) => Object.keys([...new Array(num)])

// creates a two dimensional array.
export default class Matrix extends Array {
  constructor({ width, height }) {
    super()
    Object.assign(
      this,
      expand(width).map(colX => {
        return expand(height).map(coord => null) // which is a column
      })
    )
  }
}
