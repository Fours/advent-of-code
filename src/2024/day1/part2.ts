import fs from "node:fs"

function part2(input: string): number {
    
    const list1: number[] = []
    const list2: number[] = []

    input.split("\n").forEach((row: string) => {
        const numbers = row.split("   ").map(Number)        
        list1.push(numbers[0])
        list2.push(numbers[1])
    })

    return list1.reduce((acc, value1, i) => {        
        const score = value1 * list2.filter(value2 => value1 === value2).length
        return acc + score
    }, 0)
}

const input = fs.readFileSync("src/2024/day1/input.txt", "utf8")
const solution = part2(input)

console.log("solution:", solution)