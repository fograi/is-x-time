import { IANATimeZone } from "./types/iana-tz";

export function nowHour() {
  return hour();
}

function hour() {
  return new Date(Date.now()).getHours();
}

export function nowHourIn(tz: IANATimeZone) {
  return parseInt(
    new Intl.DateTimeFormat("en", {
      hour: "numeric",
      hour12: false,
      timeZone: tz,
    }).format(Date.now())
  );
}

export function isDayTime(hour = nowHour()) {
  return dayTime(hour);
}

export function isDayTimeIn(tz: IANATimeZone) {
  return isDayTime(nowHourIn(tz));
}

function dayTime(hour: number) {
  return hour > 5 && hour < 18;
}

export function isNightTime(hour = nowHour()) {
  return nightTime(hour);
}

export function isNightTimeIn(tz: IANATimeZone) {
  return isNightTime(nowHourIn(tz));
}

function nightTime(hour: number) {
  return hour > 17 || hour < 6;
}

export function isNight(hour = nowHour()) {
  return night(hour);
}

export function isNightIn(tz: IANATimeZone) {
  return isNight(nowHourIn(tz));
}

function night(hour: number) {
  return hour >= 0 && hour < 6;
}

export function isMorning(hour = nowHour()) {
  return morning(hour);
}

export function isMorningIn(tz: IANATimeZone) {
  return isMorning(nowHourIn(tz));
}

function morning(hour: number) {
  return hour > 5 && hour < 12;
}

export function isAfternoon(hour = nowHour()) {
  return afternoon(hour);
}

export function isAfternoonIn(tz: IANATimeZone) {
  return isAfternoon(nowHourIn(tz));
}

function afternoon(hour: number) {
  return hour > 11 && hour < 18;
}

export function isEvening(hour = nowHour()) {
  return evening(hour);
}

export function isEveningIn(tz: IANATimeZone) {
  return isEvening(nowHourIn(tz));
}

function evening(hour: number) {
  return hour > 17 && hour <= 23;
}

export function isBusinessHours(hour = nowHour()) {
  return businessHours(hour);
}

export function isBusinessHoursIn(tz: IANATimeZone) {
  return isBusinessHours(nowHourIn(tz));
}

function businessHours(hour: number) {
  return hour > 8 && hour < 17;
}

export function isDayShift(hour = nowHour()) {
  return dayShift(hour);
}

export function isDayShiftIn(tz: IANATimeZone) {
  return isDayShift(nowHourIn(tz));
}

function dayShift(hour: number) {
  return hour > 7 && hour < 16;
}

export function isEveningShift(hour = nowHour()) {
  return eveningShift(hour);
}

export function isEveningShiftIn(tz: IANATimeZone) {
  return isEveningShift(nowHourIn(tz));
}

function eveningShift(hour: number) {
  return hour > 15 && hour <= 23;
}

export function isNightShift(hour = nowHour()) {
  return nightShift(hour);
}

export function isNightShiftIn(tz: IANATimeZone) {
  return isNightShift(nowHourIn(tz));
}

function nightShift(hour: number) {
  return hour >= 0 && hour < 8;
}
