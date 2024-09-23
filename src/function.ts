export function ago(
  date: string,
  yearName: string = "year ago",
  monthName: string = "month ago",
  weekName: string = "week ago",
  dayName: string = "day ago",
  hourName: string = "hour ago",
  minuteName: string = "minute ago",
  secondName: string = "second ago",
  nowName: string = "now"
) {
  const dateNow = new Date();
  const diff = Math.abs(dateNow.getTime() - new Date(date).getTime());

  const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (diff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (diff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const weeks = Math.floor(
    (diff % (30 * 24 * 60 * 60 * 1000)) / (7 * 24 * 60 * 60 * 1000)
  );
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  let ago = "";

  if (
    seconds === 0 &&
    minutes === 0 &&
    days === 0 &&
    hours === 0 &&
    years === 0
  ) {
    ago = nowName;
  } else if (
    seconds <= 60 &&
    minutes === 0 &&
    hours === 0 &&
    days === 0 &&
    years === 0
  ) {
    ago = seconds + ` ${secondName}`;
  } else if (
    minutes <= 60 &&
    hours === 0 &&
    days === 0 &&
    years === 0 &&
    months === 0
  ) {
    ago = minutes + ` ${minuteName}`;
  } else if (hours <= 24 && days === 0 && years === 0 && months === 0) {
    ago = hours + ` ${hourName}`;
  } else if (days >= 1 && weeks === 0 && years === 0 && months === 0) {
    ago = days + ` ${dayName}`;
  } else if (days >= 7 && months === 0 && years === 0) {
    ago = weeks + ` ${weekName}`;
  } else if (months >= 1 && years === 0) {
    ago = months + ` ${monthName}`;
  } else if (years >= 1) {
    ago = years + ` ${yearName}`;
  }

  return ago;
}
