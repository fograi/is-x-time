import { IANATimeZone } from "./types/iana-tz";
import { nowHourIn } from "./nowHourIn";
import { isDayTime } from "./isDayTime";

export function isDayTimeIn(tz: IANATimeZone) {
  return isDayTime(nowHourIn(tz));
}
