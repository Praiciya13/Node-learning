//global object

// console.log("gobal object", global)

//setTimeout (it will execute after passed second only once)

const timeout = (time) => {
    setTimeout(() => {
        console.log(`This is set timeout function after ${time} seconds`)
    }, time * 1000)
}

timeout(2)

// setInterval -->(it will execute each 5 second)

const interval = setInterval(() => {
    console.log("I'm the setinterval function")
    clearInterval(interval) // clear the interal
}, 5000)