import * as MyTimes from "../src/index";

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
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.nowHour()).toEqual(0);
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.nowHour()).toEqual(1);
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.nowHour()).toEqual(2);
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.nowHour()).toEqual(3);
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.nowHour()).toEqual(4);
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.nowHour()).toEqual(5);
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.nowHour()).toEqual(6);
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.nowHour()).toEqual(7);
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.nowHour()).toEqual(8);
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.nowHour()).toEqual(9);
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.nowHour()).toEqual(10);
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.nowHour()).toEqual(11);
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.nowHour()).toEqual(12);
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.nowHour()).toEqual(13);
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.nowHour()).toEqual(14);
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.nowHour()).toEqual(15);
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.nowHour()).toEqual(16);
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.nowHour()).toEqual(17);
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.nowHour()).toEqual(18);
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.nowHour()).toEqual(19);
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.nowHour()).toEqual(20);
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.nowHour()).toEqual(21);
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.nowHour()).toEqual(22);
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.nowHour()).toEqual(0);
});

test("day time", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
});

test("night time", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
});

test("business hours", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
});

test("day shift", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  jest.setSystemTime(new Date("1999-12-31T23:59:59"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2000-01-01T00:00:00"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2002-02-02T02:02:02"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2003-03-03T03:03:03"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2004-04-04T04:04:04"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2005-05-05T05:05:05"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2006-06-06T06:06:06"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2007-07-07T07:07:07"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2008-08-08T08:08:08"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2009-09-09T09:09:09"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2010-10-10T10:10:10"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2013-03-13T13:13:13"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2014-04-14T14:14:14"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2015-05-15T15:15:15"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2016-06-16T16:16:16"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2017-07-17T17:17:17"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2018-08-18T18:18:18"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2019-09-19T19:19:19"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2020-02-20T20:20:20"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2021-01-21T21:21:21"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2023-03-23T23:23:23"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2024-04-24T00:24:24"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
});
