export function nowHour() {
  return hour();
}
function hour() {
  return new Date(Date.now()).getHours();
}
