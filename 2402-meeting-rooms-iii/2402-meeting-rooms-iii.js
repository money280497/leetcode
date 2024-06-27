/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    const roomTime = new Array(n).fill(0);
    const countRoomFreq = new Array(n).fill(0);
    for (let [startTime, endTime] of meetings) {
        let freeRoomIndex = roomTime.findIndex(endTime => endTime <= startTime);
        if (freeRoomIndex < 0) {
            freeRoomIndex = roomTime.indexOf(Math.min(...roomTime));
        }
        countRoomFreq[freeRoomIndex]++;
        let lastMeetingEndtime = roomTime[freeRoomIndex];
        let meetingEndTime;
        if (startTime < roomTime[freeRoomIndex]) {
            meetingEndTime = (lastMeetingEndtime - startTime) + endTime;
        }
        else {
            meetingEndTime = endTime;
        }
        roomTime[freeRoomIndex] = meetingEndTime
    }
    return countRoomFreq.indexOf(Math.max(...countRoomFreq));
};