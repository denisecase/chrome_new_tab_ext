import * as dateTime from '../../scripts/dateTime.js';

context('dateTime', () => {
  describe('Chrome new tab extension (getClock) ', () => {
    it('should return a tuple - first part is a clock string', async () => {
      const { clock, nhour, nday } = await dateTime.getClock();
      expect(clock).to.not.be.null;
      expect(clock).to.not.be.empty;
      expect(clock).to.be.a('string');
      expect(nhour).to.be.a('number');
      expect(nday).to.be.a('number');
    });
  });

  describe('Chrome new tab extension (getFocus) ', () => {
    const day1 = new Date('2020-08-24 08:05:00'); // Mon Aug 24 8 am (gpd)
    const day2 = new Date('2020-08-26 09:05:00'); // Wed Aug 26 9 am (forensics)
    const day3 = new Date('2020-08-28 11:05:00'); // Fri Aug 28 11 pm (web)
    const day4 = new Date('2020-08-26 14:05:00'); // Wed Aug 26 2 pm (bigData)
    const day5 = new Date('2020-08-25 12:30:00'); // Tu Aug 25 12:30 pm (def)
    const day6 = new Date('2020-08-27 13:50:00'); // Th Aug 27 13:50 pm (def)
    const day7 = new Date('2020-08-30 17:05:00'); // Sun Aug 30 5:50 pm (weekend)

    it('should return a non-empty string', async () => {
      const s = await dateTime.getFocus(3, 11);
      expect(s).to.not.be.null;
      expect(typeof s).to.be.string;
      expect(s).to.not.be.empty;
    });

    const web = '44-563 Web Apps';
    const forensics = '44-386 Digital Forensics';
    const bigData = '44-517 Big Data';
    const gdp = '44-691 GDP';
    const def = 'Research/Grants';
    const weekend = 'Weekend';

    it('should return gdp', async () => {
      const a = await dateTime.getFocus(day1.getDay(), day1.getHours());
      expect(a).to.equal(gdp);
    });

    it('should return forensics', async () => {
      const b = await dateTime.getFocus(day2.getDay(), day2.getHours());
      expect(b).to.equal(forensics);
    });

    it('should return web', async () => {
      const c = await dateTime.getFocus(day3.getDay(), day3.getHours());
      expect(c).to.equal(web);
    });

    it('should return bigData', async () => {
      const d = await dateTime.getFocus(day4.getDay(), day4.getHours());
      expect(d).to.equal(bigData);
    });

    it('should return def', async () => {
      const e = await dateTime.getFocus(day5.getDay(), day5.getHours());
      expect(e).to.equal(def);
    });

    it('should return def', async () => {
      const f = await dateTime.getFocus(day6.getDay(), day6.getHours());
      expect(f).to.equal(def);
    });

    it('should return weekend', async () => {
      const z = await dateTime.getFocus(day7.getDay(), day7.getHours());
      expect(z).to.equal(weekend);
    });
  });

  describe('Chrome new tab extension (getGreeting) ', () => {
    it('should return a non-empty string', async () => {
      const s = await dateTime.getGreeting();
      expect(s).to.not.be.null;
      expect(typeof s).to.be.string;
      expect(s).to.not.be.empty;
    });
  });
});
