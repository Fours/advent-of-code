import fs from "node:fs"

function part1(input: string): number {

    let total = 0

    input.split("\n").forEach(line => {
        const chunks = line.split("mul(").map(s => {
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
        
    })
    
    return total
}

const input = fs.readFileSync("src/2024/day3/input.txt", "utf8")
const startTime = performance.now()
const solution = part1(input)
const endTime = performance.now()
console.log(`That solution took ${(endTime - startTime).toFixed(4)} milliseconds.`);
console.log("solution:", solution)