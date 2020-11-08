import { context, describe, it, expect } from 'cypress';
import getJoke from '../../scripts/jokes';

context('jokes', async () => {
  describe('Chrome new tab extension (getJoke) ', async () => {
    it('should return a non-empty string', async () => {
      const s = await getJoke();
      expect(s).to.not.be.null;
      expect(typeof s).to.be.string;
      expect(s).to.not.be.empty;
    });
  });
});
