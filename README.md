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

`nowHour()`

Returns the current hour number `0 - 23`.

`isDayTime()`

![DayTime](docs/gfx/day-time.svg)

`isNightTime()`

![NightTime](docs/gfx/night-time.svg)
