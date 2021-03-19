// Counts from 0 to 9
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
})
// Adds 1-100 to the previous sum and shows the final answer
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 100; index++) {
        Sum += index
    }
    basic.showNumber(Sum)
})
// Counts from 9 to 0
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
    }
})
let Sum = 0
Sum = 0
