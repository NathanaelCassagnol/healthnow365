import { dateTime } from "../types/_basic-types"

// Work in progress

// export function dateTimeComparison(current: Date, check: dateTime) {
//     let checkDate = 
// }
// export function dateTimeToDateRange(dt: dateTime) {
//     // YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
//     // e.g. 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
//     if (dt.length === 4) {
//         // e.g. "2024" should be Jan 1 2024 00:00:00 - Dec 31 202 23:59:59
//         return {
//             start: new Date(dt),
//             end: new Date(Date.UTC(Number(dt)+1)-1)
//         }
//     }
//     if (dt.length === 7) {
//         // e.g. "2024-03" should be March 1 2024 00:00:00 - March 31 2024 23:59:59
//         let endDate = new Date(dt);
//         endDate.setMonth(endDate.getMonth()+1);
//         endDate.setMilliseconds(endDate.getMilliseconds()-1);
//         return {
//             start: new Date(dt),
//             end: endDate
//         }
//     }
//     if (dt.length === 10) {
//         let endDate = new Date(dt);
//         endDate.setDate(endDate.getDate()+1);
//         endDate.setMilliseconds(endDate.getMilliseconds()-1);
//         return {
//             start: new Date(dt),
//             end: endDate
//         }
//     }
//     if (dt.length === 24) {
//         // 2017-01-01T00:00:00.000Z
//     }

//     if (dt.length === 25) {
//         // 2015-02-07T13:28:17-05:00
//     }
// }