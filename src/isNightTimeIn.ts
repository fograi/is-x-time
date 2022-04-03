import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isNightTime } from "./isNightTime";

export function isNightTimeIn(tz: IANATimeZone) {
  return isNightTime(nowHourIn(tz));
}
