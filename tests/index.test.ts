import * as MyTimes from "../src/index";

const DATE_1999 = "1999-12-31T23:59:59";
const DATE_2000 = "2000-01-01T00:00:00";
const DATE_2001 = "2001-01-01T01:01:01";
const DATE_2002 = "2002-02-02T02:02:02";
const DATE_2003 = "2003-03-03T03:03:03";
const DATE_2004 = "2004-04-04T04:04:04";
const DATE_2005 = "2005-05-05T05:05:05";
const DATE_2006 = "2006-06-06T06:06:06";
const DATE_2007 = "2007-07-07T07:07:07";
const DATE_2008 = "2008-08-08T08:08:08";
const DATE_2009 = "2009-09-09T09:09:09";
const DATE_2010 = "2010-10-10T10:10:10";
const DATE_2011 = "2011-11-11T11:11:11";
const DATE_2012 = "2012-12-12T12:12:12";
const DATE_2013 = "2013-03-13T13:13:13";
const DATE_2014 = "2014-04-14T14:14:14";
const DATE_2015 = "2015-05-15T15:15:15";
const DATE_2016 = "2016-06-16T16:16:16";
const DATE_2017 = "2017-07-17T17:17:17";
const DATE_2018 = "2018-08-18T18:18:18";
const DATE_2019 = "2019-09-19T19:19:19";
const DATE_2020 = "2020-02-20T20:20:20";
const DATE_2021 = "2021-01-21T21:21:21";
const DATE_2022 = "2022-02-22T22:22:22";
const DATE_2023 = "2023-03-23T23:23:23";
const DATE_2024 = "2024-04-24T00:24:24";

const UTC_M11 = "Pacific/Niue";
const UTC_M10 = "Pacific/Honolulu";
const UTC_M930 = "Pacific/Marquesas";
const UTC_M9 = "Pacific/Gambier";
const UTC_M8 = "America/Vancouver";
const UTC_M7 = "America/Yellowknife";
const UTC_M6 = "America/Belize";
const UTC_M5 = "America/Havana";
const UTC_M4 = "America/Barbados";
const UTC_M330 = "America/St_Johns";
const UTC_M3 = "America/Argentina/Buenos_Aires";
const UTC_M2 = "America/Noronha";
const UTC_M1 = "Atlantic/Cape_Verde";
const UTC_0 = "Atlantic/Faroe";
const UTC_P1 = "Africa/Algiers";
const UTC_P2 = "Africa/Cairo";
const UTC_P3 = "Asia/Baghdad";
const UTC_P330 = "Asia/Tehran";
const UTC_P4 = "Indian/Mauritius";
const UTC_P430 = "Asia/Kabul";
const UTC_P5 = "Indian/Maldives";
const UTC_P530 = "Asia/Kolkata";
const UTC_P545 = "Asia/Kathmandu";
const UTC_P6 = "Asia/Omsk";
const UTC_P630 = "Indian/Cocos";
const UTC_P7 = "Indian/Christmas";
const UTC_P8 = "Asia/Brunei";
const UTC_P845 = "Australia/Eucla";
const UTC_P9 = "Pacific/Palau";
const UTC_P930 = "Australia/Broken_Hill";
const UTC_P10 = "Asia/Vladivostok";
const UTC_P1030 = "Australia/Lord_Howe";
const UTC_P11 = "Pacific/Norfolk";
const UTC_P12 = "Pacific/Fiji";
const UTC_P1245 = "Pacific/Chatham";
const UTC_P13 = "Pacific/Tongatapu";

beforeEach(() => {
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
});

test("now hour", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.nowHour()).toEqual(0);
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.nowHour()).toEqual(1);
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.nowHour()).toEqual(2);
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.nowHour()).toEqual(3);
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.nowHour()).toEqual(4);
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.nowHour()).toEqual(5);
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.nowHour()).toEqual(6);
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.nowHour()).toEqual(7);
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.nowHour()).toEqual(8);
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.nowHour()).toEqual(9);
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.nowHour()).toEqual(10);
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.nowHour()).toEqual(11);
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.nowHour()).toEqual(12);
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.nowHour()).toEqual(13);
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.nowHour()).toEqual(14);
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.nowHour()).toEqual(15);
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.nowHour()).toEqual(16);
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.nowHour()).toEqual(17);
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.nowHour()).toEqual(18);
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.nowHour()).toEqual(19);
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.nowHour()).toEqual(20);
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.nowHour()).toEqual(21);
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.nowHour()).toEqual(22);
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.nowHour()).toEqual(0);
});

test("now hour in IANATimeZone", () => {
  jest.setSystemTime(new Date(DATE_1999));
  const nowHourInNiue = MyTimes.nowHourIn(UTC_M11);
  const nowHourInHonolulu = MyTimes.nowHourIn(UTC_M10);
  const nowHourInMarquesas = MyTimes.nowHourIn(UTC_M930);
  const nowHourInGambier = MyTimes.nowHourIn(UTC_M9);
  const nowHourInVancouver = MyTimes.nowHourIn(UTC_M8);
  const nowHourInYellowknife = MyTimes.nowHourIn(UTC_M7);
  const nowHourInBelize = MyTimes.nowHourIn(UTC_M6);
  const nowHourInHavana = MyTimes.nowHourIn(UTC_M5);
  const nowHourInBarbados = MyTimes.nowHourIn(UTC_M4);
  const nowHourInStJJohns = MyTimes.nowHourIn(UTC_M330);
  const nowHourInBuenosAires = MyTimes.nowHourIn(UTC_M3);
  const nowHourInNoronha = MyTimes.nowHourIn(UTC_M2);
  const nowHourInCapeVerde = MyTimes.nowHourIn(UTC_M1);
  const nowHourInFaroe = MyTimes.nowHourIn(UTC_0);
  const nowHourInAlgiers = MyTimes.nowHourIn(UTC_P1);
  const nowHourInCairo = MyTimes.nowHourIn(UTC_P2);
  const nowHourInBaghdad = MyTimes.nowHourIn(UTC_P3);
  const nowHourInTehran = MyTimes.nowHourIn(UTC_P330);
  const nowHourInMauritius = MyTimes.nowHourIn(UTC_P4);
  const nowHourInKabul = MyTimes.nowHourIn(UTC_P430);
  const nowHourInMaldives = MyTimes.nowHourIn(UTC_P5);
  const nowHourInKolkata = MyTimes.nowHourIn(UTC_P530);
  const nowHourInKathmandu = MyTimes.nowHourIn(UTC_P545);
  const nowHourInOmsk = MyTimes.nowHourIn(UTC_P6);
  const nowHourInCocos = MyTimes.nowHourIn(UTC_P630);
  const nowHourInChristmas = MyTimes.nowHourIn(UTC_P7);
  const nowHourInBrunei = MyTimes.nowHourIn(UTC_P8);
  const nowHourInEucla = MyTimes.nowHourIn(UTC_P845);
  const nowHourInPalau = MyTimes.nowHourIn(UTC_P9);
  const nowHourInBrokenHill = MyTimes.nowHourIn(UTC_P930);
  const nowHourInVladivostok = MyTimes.nowHourIn(UTC_P10);
  const nowHourInLordHowe = MyTimes.nowHourIn(UTC_P1030);
  const nowHourInNorfolk = MyTimes.nowHourIn(UTC_P11);
  const nowHourInFiji = MyTimes.nowHourIn(UTC_P12);
  const nowHourInChatham = MyTimes.nowHourIn(UTC_P1245);
  const nowHourInTongatapu = MyTimes.nowHourIn(UTC_P13);
  console.log(nowHourInNiue);
  console.log(nowHourInHonolulu);
  console.log(nowHourInMarquesas);
  console.log(nowHourInGambier);
  console.log(nowHourInVancouver);
  console.log(nowHourInYellowknife);
  console.log(nowHourInBelize);
  console.log(nowHourInHavana);
  console.log(nowHourInBarbados);
  console.log(nowHourInStJJohns);
  console.log(nowHourInBuenosAires);
  console.log(nowHourInNoronha);
  console.log(nowHourInCapeVerde);
  console.log(nowHourInFaroe);
  console.log(nowHourInAlgiers);
  console.log(nowHourInCairo);
  console.log(nowHourInHonolulu);
  console.log(nowHourInBaghdad);
  console.log(nowHourInTehran);
  console.log(nowHourInMauritius);
  console.log(nowHourInKabul);
  console.log(nowHourInMaldives);
  console.log(nowHourInKolkata);
  console.log(nowHourInKathmandu);
  console.log(nowHourInOmsk);
  console.log(nowHourInCocos);
  console.log(nowHourInChristmas);
  console.log(nowHourInBrunei);
  console.log(nowHourInEucla);
  console.log(nowHourInPalau);
  console.log(nowHourInBrokenHill);
  console.log(nowHourInVladivostok);
  console.log(nowHourInLordHowe);
  console.log(nowHourInNorfolk);
  console.log(nowHourInFiji);
  console.log(nowHourInChatham);
  console.log(nowHourInTongatapu);
});

test("day time", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
});

test("night time", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
});

test("business hours", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isBusinessHours()).toEqual(false);
});

test("day shift", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2021));
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
});
