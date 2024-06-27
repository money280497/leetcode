/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {

    const sortedMeetings = meetings.sort((a, b) => a[0] - b[0])

    const roomsEndTimer = new Array(n).fill(0);
    const roomsOccupancyTime = new Array(n).fill(0);

    for (let i = 0; i < sortedMeetings.length; i++) {
        const emptyRoomIndex = roomsEndTimer.findIndex((element) => element <= sortedMeetings[i][0])
        if (emptyRoomIndex != -1) {
            roomsEndTimer[emptyRoomIndex] = sortedMeetings[i][1]
            roomsOccupancyTime[emptyRoomIndex]++
        }
        else {
            const roomToBeEmpty = Math.min(...roomsEndTimer)
            const roomToBeEmptyIndex = roomsEndTimer.indexOf(roomToBeEmpty)

            //increase room end timer
            roomsEndTimer[roomToBeEmptyIndex] = roomsEndTimer[roomToBeEmptyIndex] >= sortedMeetings[i][0] ? endCalculator(roomsEndTimer, roomToBeEmptyIndex, sortedMeetings, i) : sortedMeetings[i][1]

            //increase meetings held in room
            roomsOccupancyTime[roomToBeEmptyIndex]++;
        }
    }

    const roomWithMaxMeetings = Math.max(...roomsOccupancyTime)
    const indexOfRoomWithMaxMeetings = roomsOccupancyTime.indexOf(roomWithMaxMeetings)
    return indexOfRoomWithMaxMeetings
};

const endCalculator = (roomsEndTimer, roomToBeEmptyIndex, sortedMeetings, i) => {
    return roomsEndTimer[roomToBeEmptyIndex] - sortedMeetings[i][0] + sortedMeetings[i][1]
}