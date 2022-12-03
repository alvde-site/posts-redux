import { parseISO, formatDistanceToNow } from "date-fns";

const translatedTime = (time) => {
  let res;
  if (time.includes("less")) {
    res = time.replace("less than a minute", "Меньше одной минуты");
  } else if (time.includes("minute")) {
    res = time.replace("1 minute", "1 минуту");
  } else if (time.includes("2 minutes") || time.includes("3 minutes") || time.includes("4 minutes")) {
    res = time.replace("minutes", "минуты");
  } else if(time.includes("minutes")){
    res = time.replace("minutes", "минут");  
  } else {
    res = time;
  }
  return res;
};

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp && timestamp !== "") {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${translatedTime(timePeriod)} назад`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
