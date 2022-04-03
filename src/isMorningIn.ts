import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isMorning } from "./isMorning";

export function isMorningIn(tz: IANATimeZone) {
  return isMorning(nowHourIn(tz));
}
