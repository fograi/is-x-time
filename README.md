# is-x-time v1.0.0

![CI](https://github.com/js-cookie/js-cookie/actions/workflows/ci.yml/badge.svg)

Evaluate common time-of-day periods.

## Complete list of is-x-time functions

[`nowHour(): number`](#nowhour)

[`nowHourIn(tz: IANATimeZone): number`](#nowhourintz-ianatimezone)

[`nowHourInAWS(awsrc: AWSRegionCode): number`](#nowhourinawsawsrc-awsregioncode)

***

[`isDayTime(): boolean`](#isdaytime)

[`isDayTimeIn(tz: IANATimeZone): boolean`](#isdaytimeintz-ianatimezone)

[`isDayTimeInAWS(awsrc: AWSRegionCode): boolean`](#isdaytimeinawsawsrc-awsregioncode)

[`isNightTime(): boolean`](#isnighttime)

[`isNightTimeIn(tz: IANATimeZone): boolean`](#isnighttimeintz-ianatimezone)

[`isNightTimeInAWS(awsrc: AWSRegionCode): boolean`](#isnighttimeinawsawsrc-awsregioncode)

***

[`isNight(): boolean`](#isnight)

[`isNightIn(tz: IANATimeZone): boolean`](#isnightintz-ianatimezone)

[`isNightInAWS(awsrc: AWSRegionCode): boolean`](#isnightinawsawsrc-awsregioncode)

[`isMorning(): boolean`](#ismorning)

[`isMorningIn(tz: IANATimeZone): boolean`](#ismorningintz-ianatimezone)

[`isMorningInAWS(awsrc: AWSRegionCode): boolean`](#ismorninginawsawsrc-awsregioncode)

[`isAfternoon(): boolean`](#isafternoon)

[`isAfternoonIn(tz: IANATimeZone): boolean`](#isafternoonintz-ianatimezone)

[`isAfternoonInAWS(awsrc: AWSRegionCode): boolean`](#isafternooninawsawsrc-awsregioncode)

[`isEvening(): boolean`](#isevening)

[`isEveningIn(tz: IANATimeZone): boolean`](#iseveningintz-ianatimezone)

[`isEveningInAWS(awsrc: AWSRegionCode): boolean`](#iseveninginawsawsrc-awsregioncode)

***

[`isBusinessHours(): boolean`](#isbusinesshours)

[`isBusinessHoursIn(tz: IANATimeZone): boolean`](#isbusinesshoursintz-ianatimezone)

[`isBusinessHoursInAWS(awsrc: AWSRegionCode): boolean`](#isbusinesshoursintz-ianatimezone)

***

[`isDayShift(): boolean`](#isdayshift)

[`isDayShiftIn(tz: IANATimeZone): boolean`](#isdayshiftintz-ianatimezone)

[`isDayShiftInAWS(awsrc: AWSRegionCode): boolean`](#isdayshiftinawsawsrc-awsregioncode)

[`isEveningShift(): boolean`](#iseveningshift)

[`isEveningShiftIn(tz: IANATimeZone): boolean`](#iseveningshiftintz-ianatimezone)

[`isEveningShiftInAWS(awsrc: AWSRegionCode): boolean`](#iseveningshiftinawsawsrc-awsregioncode)

[`isNightShift(): boolean`](#isnightshift)

[`isNightShiftIn(tz: IANATimeZone): boolean`](#isnightshiftintz-ianatimezone)

[`isNightShiftInAWS(awsrc: AWSRegionCode): boolean`](#isnightshiftinawsawsrc-awsregioncode)

## Installation

Using npm:

```sh
npm i is-x-time
```

## Size

![Bundle Sizes](/docs/gfx/build/bundle-size.png)

## Usage

```js
// CommonJS
const IsXTime = require('is-x-time');
// ES Modules
// Load full library
import * as IsXTime from "is-x-time";
// Load individual function(s)
import { isAfternoon, isBusinessHours, ... } from "is-x-time";
// Browser ES Modules
<script type="module" src="/path/to/is-x-time.es.js"></script>
<script type="module">
  import IsXTime from '/path/to/is-x-time.es.js';
  
  IsXTime.nowHour();
  // 0-23
</script>
// Browser UMD
<script type="module" src="/path/to/is-x-time.es.js"></script>
<script nomodule defer src="/path/to/web.is-x-time.js"></script>
```

## Detailed list of is-x-time functions

### Current Hour

#### `nowHour()`

![24 Hour Clock](docs/gfx/clock-24-hour.svg)

Returns the current hour number `0 - 23`.

#### `nowHourIn(tz: IANATimeZone)`

Returns the current hour number `0 - 23` of the specified [IANATimeZone](src/types/iana-tz.ts).
#### `nowHourInAWS(awsrc: AWSRegionCode)`

Returns the current hour number `0 - 23` of the specified [AWS Region Code](src/types/aws-region-codes.ts).

***

### NightTime, DayTime

![NightTime, DayTime](docs/gfx/night-time-day-time.svg)

A calendar day split into two 12 hour periods.

***

#### `isNightTime()`

![NightTime](docs/gfx/night-time.svg)

Time is between `6:00pm` and `5:59am`, inclusive.

Time is between `18:00` and `05:59`, inclusive.

#### `isNightTimeIn(tz: IANATimeZone)`

Time is between `6:00pm` and `5:59am`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `18:00` and `05:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

#### `isNightTimeInAWS(awsrc: AWSRegionCode)`

Time is between `6:00pm` and `5:59am`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `18:00` and `05:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

#### `isDayTime()`

![DayTime](docs/gfx/day-time.svg)

Time is between `6:00am` and `5:59pm`, inclusive.

Time is between `06:00` and `17:59`, inclusive.
#### `isDayTimeIn(tz: IANATimeZone)`

Time is between `6:00am` and `5:59pm`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `06:00` and `17:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isDayTimeInAWS(awsrc: AWSRegionCode)`

Time is between `6:00am` and `5:59pm`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `06:00` and `17:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

### Night, Morning, Afternoon, Evening

![Night, Morning, Afternoon, Evening](docs/gfx/night-morning-afternoon-evening.svg)

A calendar day split into four 6 hour periods.

***

#### `isNight()`

![Night](docs/gfx/night.svg)

Time is between `0:00am` and `5:59am`, inclusive.

Time is between `00:00` and `05:59`, inclusive.
#### `isNightIn(tz: IANATimeZone)`

Time is between `0:00am` and `5:59am`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `00:00` and `05:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isNightInAWS(awsrc: AWSRegionCode)`

Time is between `0:00am` and `5:59am`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `00:00` and `05:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

#### `isMorning()`

![Morning](docs/gfx/morning.svg)

Time is between `6:00am` and `11:59am`, inclusive.

Time is between `06:00` and `11:59`, inclusive.

#### `isMorningIn(tz: IANATimeZone)`

Time is between `6:00am` and `11:59am`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `06:00` and `11:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

#### `isMorningInAWS(awsrc: AWSRegionCode)`

Time is between `6:00am` and `11:59am`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `06:00` and `11:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

#### `isAfternoon()`

![Afternoon](docs/gfx/afternoon.svg)

Time is between `12:00pm` and `5:59pm`, inclusive.

Time is between `12:00` and `17:59`, inclusive.
#### `isAfternoonIn(tz: IANATimeZone)`

Time is between `12:00pm` and `5:59pm`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `12:00` and `17:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isAfternoonInAWS(awsrc: AWSRegionCode)`

Time is between `12:00pm` and `5:59pm`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `12:00` and `17:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

#### `isEvening()`

![Evening](docs/gfx/evening.svg)

Time is between `6:00pm` and `11:59pm`, inclusive.

Time is between `18:00` and `23:59`, inclusive.
#### `isEveningIn(tz: IANATimeZone)`

Time is between `6:00pm` and `11:59pm`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `18:00` and `23:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isEveningInAWS(awsrc: AWSRegionCode)`

Time is between `6:00pm` and `11:59pm`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `18:00` and `23:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

### Business Hours (9 2 5)

#### `isBusinessHours()`

![Business Hours](docs/gfx/business-hours.svg)

Time is between `9:00am` and `4:59pm`, inclusive.

Time is between `09:00` and `16:59`, inclusive.
#### `isBusinessHoursIn(tz: IANATimeZone)`

Time is between `9:00am` and `4:59pm`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `09:00` and `16:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isBusinessHoursInAWS(awsrc: AWSRegionCode)`

Time is between `9:00am` and `4:59pm`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `09:00` and `16:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

### DayShift, EveningShift, NightShift

![Night, Day, Evening Shifts](docs/gfx/night-day-evening-shifts.svg)

A calendar day split into three 8 hour periods.

***

#### `isNightShift()`

![Night Shift](docs/gfx/night-shift.svg)

Time is between `0:00am` and `7:59am`, inclusive.

Time is between `00:00` and `07:59`, inclusive.
#### `isNightShiftIn(tz: IANATimeZone)`

Time is between `0:00am` and `7:59am`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `00:00` and `07:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isNightShiftInAWS(awsrc: AWSRegionCode)`

Time is between `0:00am` and `7:59am`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `00:00` and `07:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

#### `isDayShift()`

![Day Shift](docs/gfx/day-shift.svg)

Time is between `8:00am` and `3:59pm`, inclusive.

Time is between `08:00` and `15:59`, inclusive.
#### `isDayShiftIn(tz: IANATimeZone)`

Time is between `8:00am` and `3:59pm`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `08:00` and `15:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isDayShiftInAWS(awsrc: AWSRegionCode)`

Time is between `8:00am` and `3:59pm`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `08:00` and `15:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

***

#### `isEveningShift()`

![Evening Shift](docs/gfx/evening-shift.svg)

Time is between `4:00pm` and `11:59pm`, inclusive.

Time is between `16:00` and `23:59`, inclusive.
#### `isEveningShiftIn(tz: IANATimeZone)`

Time is between `4:00pm` and `11:59pm`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).

Time is between `16:00` and `23:59`, inclusive, in specified [IANATimeZone](src/types/iana-tz.ts).
#### `isEveningShiftInAWS(awsrc: AWSRegionCode)`

Time is between `4:00pm` and `11:59pm`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).

Time is between `16:00` and `23:59`, inclusive, in specified [AWS Region Code](src/types/aws-region-codes.ts).
