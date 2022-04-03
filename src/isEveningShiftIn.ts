import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isEveningShift } from "./isEveningShift";

export function isEveningShiftIn(tz: IANATimeZone) {
  return isEveningShift(nowHourIn(tz));
}
