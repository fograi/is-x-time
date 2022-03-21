import { AWSRegionCode } from "../types/aws-region-codes";
import { IANATimeZone } from "../types/iana-tz";

export const AWSRegionTZ: Map<AWSRegionCode, IANATimeZone> = new Map([
  ["us-east-2", "America/New_York"],
  ["us-east-1", "America/New_York"],
  ["us-west-1", "America/Los_Angeles"],
  ["us-west-2", "America/Los_Angeles"],
  ["af-south-1", "Africa/Cairo"],
  ["ap-east-1", "Asia/Hong_Kong"],
  ["ap-southeast-3", "Asia/Jakarta"],
  ["ap-south-1", "Asia/Kolkata"],
  ["ap-northeast-3", "Asia/Tokyo"],
  ["ap-northeast-2", "Asia/Seoul"],
  ["ap-southeast-1", "Asia/Singapore"],
  ["ap-southeast-2", "Australia/Sydney"],
  ["ap-northeast-1", "Asia/Tokyo"],
  ["ca-central-1", "America/Toronto"],
  ["cn-north-1", "Asia/Shanghai"],
  ["cn-northwest-1", "Asia/Shanghai"],
  ["eu-central-1", "Europe/Berlin"],
  ["eu-west-1", "Europe/Dublin"],
  ["eu-west-2", "Europe/London"],
  ["eu-south-1", "Europe/Rome"],
  ["eu-west-3", "Europe/Paris"],
  ["eu-north-1", "Europe/Stockholm"],
  ["me-south-1", "Asia/Riyadh"],
]);
