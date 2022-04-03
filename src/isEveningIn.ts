import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isEvening } from "./isEvening";

export function isEveningIn(tz: IANATimeZone) {
  return isEvening(nowHourIn(tz));
}
