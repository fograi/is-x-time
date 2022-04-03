import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isAfternoon } from "./isAfternoon";

export function isAfternoonIn(tz: IANATimeZone) {
  return isAfternoon(nowHourIn(tz));
}
