import Matrix from '../../src/models/Matrix'

describe(Matrix, function() {
  it('should return a two dimensional array of `width` and `heigh`', () => {
    const matrix = new Matrix({ width: 9, height: 10 })
    expect(matrix.length).toBe(9)       // x
    expect(matrix[0].length).toBe(10)    // y
  })
})
