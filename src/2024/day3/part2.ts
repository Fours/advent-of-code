import fs from "node:fs"

function part1(input: string): number {

    let total = 0

    const chunks = reduceInput(input).split("mul(").map(s => {
        return s.split(")")[0]
    })
    chunks.forEach(chunk => {
        const numbers = chunk.split(",")
        if (numbers.length === 2) {
            const n1 = Number(numbers[0])
            const n2 = Number(numbers[1])
            // must also check length because Number constructor ignores trailing spaces (which are invalid for this challenge)
            if (!isNaN(n1) && !isNaN(n2) && numbers[0].length < 4 && numbers[1].length < 4) {
                total += n1 * n2
            }
        }
    }) 
    
    return total
}

function reduceInput(input: string): string {
    
    let output: string[] = []
    let isDo = true
    let list = input.split("\n").join("").split("")

    while (list.length > 0) {

        if (isDo) {
            if (list.slice(0, 7).join("") === "don't()") {
                isDo = false
            } else {
                output.push(list[0])
            }
        } else {
            if (list.slice(0, 4).join("") === "do()") {
                isDo = true
            }
        }
        list = list.slice(1)
    }

    return output.join("")
}

const input = fs.readFileSync("src/2024/day3/input.txt", "utf8")
const startTime = performance.now()
const solution = part1(input)
const endTime = performance.now()
console.log(`The solution took ${(endTime - startTime).toFixed(4)} milliseconds.`);
console.log("solution:", solution)