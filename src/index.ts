const nowDate = new Date(Date.now());
export const nowHour = nowDate.getHours();

export const isDayTime = () => nowHour > 5 && nowHour < 18;

export const isNightTime = () => !isDayTime();
