import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { nowHourIn } from "./nowHourIn";

export function nowHourInAWS(awsrc: AWSRegionCode) {
  return nowHourIn(AWSRegionTZ[awsrc]);
}
