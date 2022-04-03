import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isBusinessHours } from "./isBusinessHours";

export function isBusinessHoursIn(tz: IANATimeZone) {
  return isBusinessHours(nowHourIn(tz));
}
