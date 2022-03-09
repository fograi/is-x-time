export const nowHour = () => new Date(Date.now()).getHours();

export const isDayTime = (hour = nowHour()) => hour > 5 && hour < 18;

export const isNightTime = () => !isDayTime();

export const isNight = (hour = nowHour()) => hour >= 0 && hour < 6;

export const isMorning = (hour = nowHour()) => hour > 5 && hour < 12;

export const isAfternoon = (hour = nowHour()) => hour > 11 && hour < 18;

export const isEvening = (hour = nowHour()) => hour > 17 && hour <= 23;

export const isBusinessHours = (hour = nowHour()) => hour > 8 && hour < 17;

export const isDayShift = (hour = nowHour()) => hour > 7 && hour < 16;

export const isEveningShift = (hour = nowHour()) => hour > 15 && hour <= 23;

export const isNightShift = (hour = nowHour()) => hour >= 0 && hour < 8;
