import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isDayTimeIn } from "./isDayTimeIn";

export function isDayTimeInAWS(awsrc: AWSRegionCode) {
  return isDayTimeIn(AWSRegionTZ[awsrc]);
}
