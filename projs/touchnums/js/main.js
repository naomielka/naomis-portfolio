'use strict'
var gStopWatch;
var gNums;
var gSize;

function init(nums, sizeOfTable) {
    gNums = createRandomNums(nums);
    renderBoard(sizeOfTable, nums);
}

function createRandomNums(size) {
    var nums = []
    for (var i = 1; i <= size; i++) {
        nums.push(i)
    }
    shuffle(nums)
    return nums;
}


function renderBoard(sizeOfTable, nums) {
    var strHTML = ''
    for (var i = 0; i < sizeOfTable; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < sizeOfTable; j++) {
            var cellNum = gNums.pop(i)
            strHTML += `<td class=cell data-i="${i}" data-j="${j}" onclick="clicked(this, ${cellNum})">${cellNum}</td>`
        }
    }
    strHTML += '</tr>'
    var elTable = document.querySelector('.table');
    elTable.innerHTML = strHTML;
}

var prvCellNum = 0

function clicked(elCell, cellNum) {
    if (prvCellNum + 1 === cellNum) {
        elCell.classList = 'clicked'
        prvCellNum++
    }
    if (cellNum === 1) {
        startGame()
    }
    console.log('cellNum: ', cellNum)
    console.log('gSize', gSize)
    if (cellNum === gSize) {
        finishGame()
    }
}


function startGame() {
    var miliSeconds = 0;
    var microSeconds = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var time;
    gStopWatch = setInterval(function() {
        miliSeconds++
        time = miliSeconds
        if (miliSeconds === 1000) {
            miliSeconds++
            time += microSeconds
        }
        if (microSeconds === 100) {
            seconds++
            time += +seconds
        }
        if (seconds === 60) {
            minutes++
            time += minutes
        }
        if (minutes === 60) {
            hours++
            time += hours
        }
        renderTimer(time)

    }, 1)

}

function renderTimer(time) {
    var elTimer = document.querySelector('.timer');
    elTimer.innerText = (time / 1000).toFixed(3)
}


function finishGame() {
    console.log('finish')
    clearInterval(gStopWatch)
}


function chooseDifficulty(difficulty) {
    if (difficulty === 'eazy') {
        gSize = 16
        init(16, 4)
    }
    if (difficulty === 'medium') {
        init(25, 5)
    }
    if (difficulty === 'hard') {
        init(36, 6)
    }
}