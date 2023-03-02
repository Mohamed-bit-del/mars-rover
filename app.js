// variables
let rover = {
    x: 0, //columns
    y: 0, //rows
    direction: 'N'
}

let travelLog = [[rover.x, rover.y]];

// Function
function turnLeft(rover) {
    console.log('turnLeft was called!');
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
}

function turnRight(rover) {
    console.log('turnRight was called!');
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
}

function moveForward(rover) {
    console.log('moveForward was called');
    switch (rover.direction) {
        case 'N':
            if (rover.y > 0) { rover.y--; } 
            break;
        case 'E':
            if (rover.x < 10) { rover.x++; }
            break;
        case 'S':
            if (rover.y < 10) { rover.y++; }
            break;
        case 'W':
            if (rover.x > 0) { rover.x--; }
            break;
    }
    travelLog.push([rover.x, rover.y]);
    console.log(`New rover position:[${rover.x},${rover.y}]. Direction: ${rover.direction}`);
}

function backForward(rover) {
    console.log('backForward was called');
    switch (rover.direction) {
        case 'N':
            if (rover.y > 0) { rover.y++; }
            break;
        case 'E':
            if (rover.y < 10) { rover.y--; }
            break;
        case 'S':
            if (rover.x < 10) { rover.x--; }
            break;
        case 'W':
            if (rover.x > 0) { rover.x++; }
            break;
    }
    travelLog.push([rover.x, rover.y]);
    console.log(`New rover position:[${rover.x},${rover.y}]. Direction: ${rover.direction}`);
}

function commandListRun(commandList) {
    for (i = 0; i < commandList.length; i++) {
        switch (commandList.charAt(i)) {
            case 'r':
                turnRight(rover);
                break;

            case 'b':
                turnLeft(rover);
                break;

            case 'f':
                moveForward(rover);
                break;

            case 'l':
                backForward(rover);
                break;
        }
    }
}

// Print node environment :
commandListRun('rffrffbflrlbllrllllbl');
console.log(travelLog);