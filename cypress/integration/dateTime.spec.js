import * as dateTime from '../../scripts/dateTime.js'

context('dateTime', () => {
  describe('Chrome new tab extension (getClock) ', () => {
    it('should return a tuple - first part is a clock string', async () => {
      const { clock, nhour, nday } = await dateTime.getClock()
      expect(clock).to.not.be.null
      expect(clock).to.not.be.empty
      expect(typeof clock).to.be.string
      expect(typeof nhour).to.be.number
      expect(typeof nday).to.be.number
    })
  })

  describe('Chrome new tab extension (getFocus) ', () => {
    const day1 = new Date('2019-08-28 09:05:00') // Wed 9 am (forensics)
    const day2 = new Date('2019-08-28 11:05:00') // Wed 11 am (web)
    const day3 = new Date('2019-08-28 12:05:00') // Wed 12 pm (web)
    const day4 = new Date('2019-08-28 14:05:00') // Wed 2 pm (web)
    const day5 = new Date('2019-08-27 12:30:00') // Tu 12:30 pm (bigData)
    const day6 = new Date('2019-08-29 13:50:00') // Th 13:50 pm (bigData)
    const day7 = new Date('2019-08-30 17:05:00') // Tu 13:50 pm (def)

    it('should return a non-empty string', async () => {
      const s = await dateTime.getFocus(3, 11)
      expect(s).to.not.be.null
      expect(typeof s).to.be.string
      expect(s).to.not.be.empty
    })

    const web = '44-563 Web Apps'
    const forensics = '44-386 Digital Forensics'
    const bigData = '44-517 Big Data'
    const def = 'Research/Grants'

    it('should return forensics', async () => {
      const a = await dateTime.getFocus(day1.getDay(), day1.getHours())
      expect(a).to.equal(forensics)
    })

    it('should return web', async () => {
      const b = await dateTime.getFocus(day2.getDay(), day2.getHours())
      expect(b).to.equal(web)

      const c = await dateTime.getFocus(day3.getDay(), day3.getHours())
      expect(c).to.equal(web)

      const d = await dateTime.getFocus(day4.getDay(), day4.getHours())
      expect(d).to.equal(web)
    })

    it('should return bigData', async () => {
      const e = await dateTime.getFocus(day5.getDay(), day5.getHours())
      expect(e).to.equal(bigData)

      const f = await dateTime.getFocus(day6.getDay(), day6.getHours())
      expect(f).to.equal(bigData)
    })

    it('should return def', async () => {
      const z = await dateTime.getFocus(day7.getDay(), day7.getHours())
      expect(z).to.equal(def)
    })
  })

  describe('Chrome new tab extension (getGreeting) ', () => {
    it('should return a non-empty string', async () => {
      const s = await dateTime.getGreeting()
      expect(s).to.not.be.null
      expect(typeof s).to.be.string
      expect(s).to.not.be.empty
    })
  })

  describe('Chrome new tab extension (getSchoolWeek) ', () => {
    it('should return a week number > 0', async () => {
      const ans = await dateTime.getSchoolWeek()
      expect(typeof ans).to.be.number
    })
  })
})
