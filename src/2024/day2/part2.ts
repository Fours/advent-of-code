import fs from "node:fs"

function part2(input: string): number {
    
    const reports: number[][] = input.split("\n").map(row => {
        return row.split(" ").map(Number)
    })

    let safeCount = 0

    reports.forEach(report => {
        let isSafe = getIsSafe(report)
        if (isSafe) {
            safeCount += 1        
        } else {
            // slow retry - nested iteration over each element until success found
            for (let i = 0; !isSafe && i < report.length; i++) {
                const retryReport = [...report]
                retryReport.splice(i, 1)
                isSafe = getIsSafe(retryReport)
                if (isSafe) {
                    safeCount += 1
                }
            }
        }
    })
    
    return safeCount
}

function getIsSafe(report: number[]): boolean {
    let isSafe = true
    const isAsc = report[0] < report[1]
    for (let i = 0; isSafe && i < report.length - 1; i++) {
        const diff = isAsc ? report[i + 1] - report[i] : report[i] - report[i + 1]
        if (diff < 1 || diff > 3) {
            isSafe = false
        }
    }
    return isSafe
}

const input = fs.readFileSync("src/2024/day2/input.txt", "utf8")
const startTime = performance.now()
const solution = part2(input)
const endTime = performance.now()
console.log(`The solution took ${(endTime - startTime).toFixed(4)} milliseconds.`);
console.log("solution:", solution)