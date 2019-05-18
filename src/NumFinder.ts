import * as fs from 'fs'
import * as readline from 'readline'

// unicode hex chars: https://www.utf8-chartable.de/unicode-utf8-table.pl
const UNICODE_ZERO = 0x0030
const UNICODE_NINE = 0x0039

export class NumFinder {
    protected filePath: string = ''
    protected numCountMap: Map<number, number> = new Map<number, number>()

    /**
     * @param filePath absolute or relative path to file
     */
    public constructor(filePath: string) {
        this.filePath = filePath
    }

    public processFile(): Promise<void> {
        const reader = readline.createInterface({
            input: fs.createReadStream(this.filePath)
        })

        return new Promise<void>((resolve) => {
            reader.on('line', (line) => {
                this.recognizeLine(line)
            })

            reader.on('close', resolve)
        })
    }

    /**
     * recognize trash0001trash as 1,
     * trash9trash as 9
     * @param line
     */
    protected recognizeLine(line: string): void {
        let tempStr = ''
        let code = null
        const len = line.length
        for (let i = 0; i <= len; i++) {
            code = line.charCodeAt(i)
            if (code >= UNICODE_ZERO && code <= UNICODE_NINE) {
                tempStr += line[i]
            } else {
                if (tempStr.length > 0) {
                    this.saveNumber(tempStr)
                }
                tempStr = ''
            }
        }

        if (tempStr.length > 0) {
            this.saveNumber(tempStr)
        }
    }

    protected saveNumber(numStr: string): void {
        const num = Number.parseInt(numStr)
        const founded = this.numCountMap.get(num)
        if (founded === undefined) {
            this.numCountMap.set(num, 1)
        } else {
            this.numCountMap.set(num, founded + 1)
        }
    }

    /**
     * Sort recognized number by count desc, by number desc
     */
    public getSortedNumbersMap(): Map<number, number> {
        return new Map(
            [...this.numCountMap.entries()].sort(([numA, countA], [numB, countB]) => {
                // sort by count
                if (countA > countB) return -1
                if (countA < countB) return 1

                // sort by number
                if (numA > numB) return -1
                if (numA < numB) return 1
            })
        )
    }
}
