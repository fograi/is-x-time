# is-x-time v1.0.0

Evaluate common time-of-day periods such as night-time or business-hours.

## Installation

Using npm:

```sh
$ npm i is-x-time
```

## Usage

```js
// Load full library
import * as IsXTime from "is-x-time";
// Load individual function(s)
import { isAfternoon, isBusinessHours, ... } 
```

## Complete list of is-x-time functions

#### `nowHour()`

Returns the current hour number `0 - 23`.

### NightTime, DayTime 

![NightTime, DayTime](docs/gfx/night-time-day-time.svg)

#### `isNightTime()`

Time is between `6:00pm` and `5:59am`, inclusive.

Time is between `18:00` and `05:59`, inclusive.

![NightTime](docs/gfx/night-time.svg)

#### `isDayTime()`

Time is between `6:00am` and `5:59pm`, inclusive.

Time is between `06:00` and `17:59`, inclusive.

![DayTime](docs/gfx/day-time.svg)

### Night, Morning, Afternoon, Evening

![Night, Morning, Afternoon, Evening](docs/gfx/night-morning-afternoon-evening.svg)

#### `isNight()`

Time is between `0:00am` and `5:59am`, inclusive.

Time is between `00:00` and `05:59`, inclusive.


![Night](docs/gfx/night.svg)

#### `isMorning()`

Time is between `6:00am` and `11:59am`, inclusive.

Time is between `06:00` and `11:59`, inclusive.


![Morning](docs/gfx/morning.svg)

#### `isAfternoon()`

Time is between `12:00pm` and `5:59pm`, inclusive.

Time is between `12:00` and `17:59`, inclusive.


![Afternoon](docs/gfx/afternoon.svg)

#### `isEvening()`

Time is between `6:00pm` and `11:59pm`, inclusive.

Time is between `18:00` and `23:59`, inclusive.

![Evening](docs/gfx/evening.svg)

### Business Hours (9 2 5)

#### `isBusinessHours()`

Time is between `9:00am` and `4:59pm`, inclusive.

Time is between `09:00` and `16:59`, inclusive.

![Business Hours](docs/gfx/business-hours.svg)

### DayShift, EveningShift, NightShift

#### `isDayShift()`

Time is between `8:00am` and `3:59pm`, inclusive.

Time is between `08:00` and `15:59`, inclusive.

#### `isEveningShift()`

Time is between `4:00pm` and `11:59pm`, inclusive.

Time is between `16:00` and `23:59`, inclusive.

#### `isNightShift()`

Time is between `0:00am` and `7:59am`, inclusive.

Time is between `00:00` and `07:59`, inclusive.
