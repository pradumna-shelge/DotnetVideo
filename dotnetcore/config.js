// const HOST = "localhost";
// const PORT = 3000;
// const DB_PORT = 27017;
// const STAGING_MONGO = `mongodb://${HOST}:${DB_PORT}/tutorialsite`;
// const SERVER = "http://localhost:5000/";
// const CLIENT_URL = "http://localhost:3000/";

// const HOST = "10.10.10.31";
// const PORT = 3000;
// const URL = "rxtutorial.radixdev77.com";
// const DB_PORT = 27017;
// const MONGO_USER = "admin";
// const MONGO_PASSWORD = "W0ZTenpABNX7IIGD";
// const STAGING_MONGO = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${HOST}:${DB_PORT}/tutorialsite?authSource=admin`;
// const SERVER = "http://rxtutorial.radixdev77.com:5000/";
// const CLIENT_URL = `http://${URL}/`;

const HOST = "10.10.10.32";
const URL = "tutorial.dev.radixweb.net";
const PORT = 443;
const DB_PORT = 27017;
const MONGO_USER = "admin";
const MONGO_PASSWORD = "W4znpXd3DHvBuw4V";
const STAGING_MONGO = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${HOST}:${DB_PORT}/tutorialsite?authSource=admin`;
const SERVER = "https://apitutorial.dev.radixweb.net:443/";

module.exports = {
  mongoURL: STAGING_MONGO,
  secretKey: `Ryzodeg`,
  algorithm: `HS256`,
  client: `${HOST}:${PORT}`,
  url: `${URL}:${PORT}`,
  clientUrl:URL,
  server: `${HOST}`,
  secretToken: 'Z3:6")QuLxQx-@mW',
  misToken:
    // "qZ/yBBy7z3IFQZiM7Syg0Mk7AEv6DKiR2mn+qUm45C6pToaUM9EFSaiQiWdMqfNbOWPq1rCDFRe9YpAasrB14UIN8C+ZHyHDzidH4yOXFC+q9ytbw10+zriLblUW+hKJXC5XMkdZI64PMTCoceLqRnSrLXXnr2zX3EN0p7u4mSYV2ZlSeTXybkYA/TsBWM2B3HCxbSsSwfqdpTKEaRA5Oca6EGPQFPB7KPFKUYAxCZGpyd9MQczqJDUxinZWNtjTz/ykk/neL8odcm0CQnDHWciqrS64POWK9e1OCOhoDPsW2cvO4ZJBtcNdpr21kyUpQjJfzGEouwsxtFipk6xJjg==",
    //  "ec7AY69rO2COtWtAXPjRj6rSTmsVJuN+lasfpZm7sQGTS2/QYdbCtAhwizY/Xbjbek3BDI+oQxCdGaPR602aD5Iv7cAom1iP0tFRbgUtNJePeickOZJBw0qVUCISKM1CDuFVChQMada/06SRuRI++NSuzmOtLhsjsowz1J65aoa+PlfCcKtdE3EnKDBBSOdzA/njQaJBVClJxXiXYJmCpSqbdcn3vzLUNs9FudlfnDcE9mSLPbzdEg2IZ/x3u1VGV6yVFusq793T4ozvVZ388MlgP/cT5AAJM1KIgdW0/PBK7zvG+EpXGVNiH2h9D0sm+GiRja+sDp0wP24m+aMV5g==",
    // "TSjLvvt64xSTVa0Pdyx4XK/iV8QObCB4Kn6w9PI7pU6cTmfhX8a9+rq6xxkhYb1feQ0t0cMSzvLjCRMNGw3ufr2WwsSK9+CP57ndh1yF8Ep4kD31c64PyJTM9CpyZ+PahTo/bU9MXDyDwcEaGdWRib0awmTyYLt+UwEOieF6qJOoBz4FA6o5mTTPwMmvQtWm80MXh5JLSvEaHG+ie/BRU3IIlu8JmUNYi+2+iPmHQ4Zf8718FNjDm6ZXw+PoyTGpCcH6573TaoRLvBN91YJMi9L6JLQm8rN6GhNaeJIEKJ0q8cE681ZK908MuYgiG3KG3z6u4aIxhkb94jzf47ZB3A=="
    "OQ/QoMyABnoUnHyCtJm07MuR+PQzGCgneTvykjfAhVu8SmP00lwwZXETUiUIDWosUJT6ym6J4Tas+F3gvG6794PqSpxQAoegbOvESSUMJkLgPaMgELt0Xsmc1C7DyITeSfQSg1Z1EtCL0cOJir6WkSwQ/Ju+CI1fqCZzR5iE/R5aeq5BVEMiGGyHLjJJVKqOxfbv2+d9waj06tm0nBMekhN3hFZFkPZVU/oJqHUwPQV53noRkmZN1By5tLPm2IksEz2ZxwlyC+4GHG35ZzjbhVpHu/m7OWUr6pRFCp/6VBd1ZWmbd6na8YhlrJsBWjlr+qQJ98oVeItjyuTJFNE+GA==",
  misGetAllAttendance:
    "http://rxmis.radixoffice.com/publicapi/AttendanceTrainee/",
  misGetsingleAttendance:
    "http://rxmis.radixoffice.com/publicapi/AttendanceTraineeRange/",
  //misGetAllAttendance:
  //   "http://rxmisstaging.dev.radixweb.net/publicapi/AttendanceTrainee/",
  // misGetsingleAttendance:
  //  "http://rxmisstaging.dev.radixweb.net/publicapi/AttendanceTraineeRange/",
  misGetUserLeaveBalance:
    "http://rxmislive.dev.radixweb.net/publicapi/GetMyLeavesDetail?",
  misUserLeaveApply: "http://rxmislive.dev.radixweb.net/publicapi/ApplyMyLeave",
  misUserUpdateLeave:
    "http://rxmislive.dev.radixweb.net/publicapi/ApplyMyLeave/",
  misUserCancelLeave:
    "http://rxmislive.dev.radixweb.net/publicapi/CancelMyLeave",
  serverUrl: SERVER,

};

//  // const STAGING_MONGO = `mongodb://${HOST}:${DB_PORT}/tutorialsite`

//  module.exports = {
//    mongoURL: STAGING_MONGO,
//    secretKey: `Ryzodeg`,
//    algorithm: `HS256`,
//    client: `${HOST}:${PORT}`,
//    url: `${URL}:${PORT}`,
//    server: `${HOST}`,
//    secretToken: 'Z3:6")QuLxQx-@mW',
//  };
