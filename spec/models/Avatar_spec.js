import Avatar, { General } from '../../src/models/Avatar'

describe(Avatar, function() {
  describe('#name', function() {
    it('returns name of the constructor', () => 
      expect((new Avatar).name).toBe('Avatar')
    )

    it('returns name of the constructor', () => 
      expect((new General).name).toBe('General')
    )
  })
})