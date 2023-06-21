const testTimer = () => {
    const arr = []

    for (let i = 0; i < 4000; i++) {
        arr.push(i)
    }
}
console.time('test')
testTimer()
console.timeEnd('test')

