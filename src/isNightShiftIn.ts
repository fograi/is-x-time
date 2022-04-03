import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isNightShift } from "./isNightShift";

export function isNightShiftIn(tz: IANATimeZone) {
  return isNightShift(nowHourIn(tz));
}
