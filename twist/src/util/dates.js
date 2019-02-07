const dayOfYear = d => {
  var yn = d.getFullYear();
  var mn = d.getMonth();
  var dn = d.getDate();
  var d1 = new Date(yn, 0, 1, 12, 0, 0); // noon on Jan. 1
  var d2 = new Date(yn, mn, dn, 12, 0, 0); // noon on input date
  var ddiff = Math.round((d2 - d1) / 864e5);
  return ddiff + 1;
};

const getCurrentMonth = () => {
  return new Date().toLocaleString("en-us", { month: "long" });
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getCurrentMonthYear = () => {
  return getCurrentMonth() + " " + getCurrentYear();
};

const getShortDate = (dateString) => {
  let date = new Date(dateString);
  let shortMonth = date.toLocaleString("en-us", { month: "long" }).substring(0, 3);
  return shortMonth + "-" + date.getDate();
}

const api = {
  dayOfYear: dayOfYear,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
  getCurrentMonthYear: getCurrentMonthYear,
  getShortDate: getShortDate
};

export default api;
