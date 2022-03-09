export const nowHour = () => new Date(Date.now()).getHours();

export const isDayTime = () => nowHour() > 5 && nowHour() < 18;

export const isNightTime = () => !isDayTime();

export const isNight = () => nowHour() >= 0 && nowHour() < 6;

export const isMorning = () => nowHour() > 5 && nowHour() < 12;

export const isAfternoon = () => nowHour() > 11 && nowHour() < 18;

export const isEvening = () => nowHour() > 17 && nowHour() <= 23;

export const isBusinessHours = () => nowHour() > 8 && nowHour() < 17;

export const isDayShift = () => nowHour() > 7 && nowHour() < 16;

export const isEveningShift = () => nowHour() > 15 && nowHour() <= 23;

export const isNightShift = () => nowHour() >= 0 && nowHour() < 8;
