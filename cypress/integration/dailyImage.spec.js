import { context, describe, it, expect } from 'cypress';
import * as dailyImage from '../../scripts/dateTime';

context('dailyImage', () => {
  describe('Chrome new tab extension (getDailyImage) ', () => {
    it('fails - CORS error because we are not https', async () => {
      try {
        await dailyImage.getDailyImage();
      } catch (error) {
        expect(error === 'Rejected: readyState=4 status=0');
      }
    });
  });
});
