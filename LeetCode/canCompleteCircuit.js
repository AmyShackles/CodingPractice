/*
There are N gas stations along a circular route, where the amount
of gas at station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of 
gas to travel from station i to the next station (i+1).
You begin the journey with an empty tank of gas at one of the stations.
Return the starting gas station's index if you can travel around
the circuit once in a clockwise direction, otherwise -1
*/

// Solution 1
function canCompleteCircuit(gas, cost) {
    let offsets = [];
    for (let i = 0; i < gas.length; i++) {
        offsets[i] = gas[i] - cost[i];
    }
    if (canCircuit(offsets)) {
        for (let i = 0; i < offsets.length; i++) {
            if (startingAtIndex(i, offsets)) {
                return i;
            }
        }
    }
    return -1;
}
function startingAtIndex(index, offsets) {
    let arr = [...offsets.slice(index), ...offsets.slice(0, index)];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum < 0) return false;
    }
    return true;
}

function canCircuit(offsets) {
    return offsets.reduce((total, current) => total + current) >= 0;
}

// Solution 2
function canCompleteCircuit(gas, cost) {
    let offsets = [];
    let sum = 0;
    for (let i = 0; i < gas.length; i++) {
        offsets[i] = gas[i] - cost[i];
        sum += gas[i] - cost[i];
    }
    if (sum < 0) {
        return -1;
    }
        for (let i = 0; i < offsets.length; i++) {
            if (startingAtIndex(i, offsets)) {
                return i;
            }
        }
    return -1;
}
function startingAtIndex(index, offsets) {
    let arr = offsets.slice(index).concat(offsets.slice(0, index));
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum < 0) return false;
    }
    return true;
}

// Solution 3
function canCompleteCircuit(gas, cost) {
    let offsets = [];
    let sum = 0;
    for (let i = 0; i < gas.length; i++) {
        offsets[i] = gas[i] - cost[i];
        sum += gas[i] - cost[i];
    }
    if (sum < 0) {
        return -1;
    }
    for (let i = 0; i < offsets.length; i++) {
        if (offsets[i] < 0) continue;
        if (startingAtIndex(i, offsets)) {
            return i;
        }
    }
}
function startingAtIndex(index, offsets) {
    let i = index;
    let sum = 0;
    while (i < (index + offsets.length)) {
        if (i > offsets.length) {
            sum += offsets[i - offsets.length]
        } else {
            sum += offsets[i];
        }
        if (sum < 0) {
            return false;
        }
        i++
    }
    return true;
}

// Solution 4
function canCompleteCircuit(gas, cost) {
    let offsets = [];
    let sum = 0;
    let startingIndex = -1;
    for (let i = 0; i < gas.length; i++) {
        let difference = gas[i] - cost[i];
        offsets[i] = difference;
        sum += difference;
        if (startingIndex === -1 && difference >= 0) {
            startingIndex = i;
        }
    }
    if (sum < 0) {
        return -1;
    }
    for (let i = startingIndex; i < offsets.length; i++) {
        if (offsets[i] < 0) continue;
        if (startingAtIndex(i, offsets)) {
            return i;
        }
    }
}
function startingAtIndex(index, offsets) {
    let i = index;
    let sum = 0;
    while (i < (index + offsets.length)) {
        if (i > offsets.length) {
            sum += offsets[i - offsets.length]
        } else {
            sum += offsets[i];
        }
        if (sum < 0) {
            return false;
        }
        i++
    }
    return true;
}

// Favorite Solution -- Found reading other solutions
// Explanation mine
function canCompleteCircuit(gas, cost) {
    /* Instantiate a variable to track the sum of the difference
       between the gas and cost from a given index */
    let currentSum = 0;
    /* Instantiate a variable to track the sum of the difference
        between the gas and cost from index 0 */
    let total = 0;
    /* Instantiate a variable to keep track of the index
       the currentSum is counting from */
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        currentSum += gas[i] - cost[i];
        total += gas[i] - cost[i];
        /* If the currentSum is less than 0, 
           we want to start the currentSum back at 0
           since that's the amount of gas we're meant to start
           with at whatever station we start with.
           We also want to change the start index to reflect
           that we can't have started from any gas stations
           we've previously looked at because the currentSum 
           dropped below 0. */
        if (currentSum < 0) {
            currentSum = 0;
            start = i + 1;
        }
    }
    /* If the value of the total sum is greater than or equal
        to 0, we know we were able to make a complete circuit
        and we can return the index of the station we started 
        counting from the last.
        If the value of the total sum is less than 0, return -1 */
    return total >= 0 ? start : -1;
}