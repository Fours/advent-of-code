import fs from "node:fs"

function part1(input: string): number {

    const reports: number[][] = input.split("\n").map(row => {
        return row.split(" ").map(Number)
    })

    let safeCount = 0

    reports.forEach(report => {
        let isSafe = true
        const isAsc = report[0] < report[1]

        for (let i = 0; isSafe && i < report.length - 1; i++) {
            const diff = isAsc ? report[i + 1] - report[i] : report[i] - report[i + 1]
            if (diff < 1 || diff > 3) {
                isSafe = false
            }
        }

        if (isSafe) safeCount += 1
    })

    return safeCount
}

const input = fs.readFileSync("src/2024/day2/input.txt", "utf8")
const startTime = performance.now()
const solution = part1(input)
const endTime = performance.now()
console.log(`That solution took ${(endTime - startTime).toFixed(4)} milliseconds.`);

console.log("solution:", solution)