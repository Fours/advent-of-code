import fs from "node:fs"

function part1(input: string): number {
    
    const list1: number[] = []
    const list2: number[] = []

    input.split("\n").forEach((row: string) => {
        const numbers = row.split("   ").map(Number)        
        list1.push(numbers[0])
        list2.push(numbers[1])
    })

    list1.sort((a, b) => a - b)
    list2.sort((a, b) => a - b)

    return list1.reduce((acc, value, i) => {
        return acc + Math.abs(value - list2[i])
    }, 0)
}

const input = fs.readFileSync("src/2024/day1/input.txt", "utf8")
const solution = part1(input)

console.log("solution:", solution)

