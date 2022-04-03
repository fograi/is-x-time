import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isDayShift } from "./isDayShift";

export function isDayShiftIn(tz: IANATimeZone) {
  return isDayShift(nowHourIn(tz));
}
