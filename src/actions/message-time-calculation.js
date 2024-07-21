export const calculateTime = (time) => {
  const currentTime = new Date();
  const timestamp = time.toDate();
  const timeDiff = Math.abs(currentTime - timestamp);
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

  let timeString = "";

  if (years > 0) {
    timeString = `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    timeString = `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    timeString = `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    timeString = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    timeString = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  return timeString;
};
