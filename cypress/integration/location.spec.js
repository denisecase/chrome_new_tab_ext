import getLocation from '../../scripts/location.js';

context('location', () => {
  describe('Chrome new tab extension (getLocation) ', () => {
    it('mousing over ? should show a string', () => {
      const s = getLocation();
      expect(s).to.not.be.null;
      expect(typeof s).to.be.string;
      expect(s).to.not.be.empty;
    });
  });
});
