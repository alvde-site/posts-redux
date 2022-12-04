import {
  LESS,
  LESSTHANMINUTE,
  LESSTHANMINUTERU,
  ONEDAY,
  DAY,
  DAYRU,
  TWOMINUTES,
  THREEMINUTES,
  FOURMINUTES,
  MINUTES,
  MINUTESRU,
  MINUTESFROMFIVERU,
  MINUTE,
  MINUTERU
} from "./constants";

export const translatedTime = (time) => {
  let res;
  if (time.includes(LESS)) {
    res = time.replace(LESSTHANMINUTE, LESSTHANMINUTERU);
  } else if (time.includes(ONEDAY)) {
    res = time.replace(DAY, DAYRU);
  } else if (
    time.includes(TWOMINUTES) ||
    time.includes(THREEMINUTES) ||
    time.includes(FOURMINUTES)
  ) {
    res = time.replace(MINUTES, MINUTESRU);
  } else if (time.includes(MINUTES)) {
    res = time.replace(MINUTES, MINUTESFROMFIVERU);
  } else if (time.includes(MINUTE)) {
    res = time.replace(MINUTE, MINUTERU);
  } else {
    res = time;
  }
  return res;
};
