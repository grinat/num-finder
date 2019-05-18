import {NumFinder} from './NumFinder'

/**
 * Usage: npm run show-numbers path-to-file
 */

const filePath = process.argv[2]
if (!filePath) {
    console.error('No file path arg')
    console.log('Usage: npm run show-numbers path-to-file')
    process.exit(1)
}

const numFinder = new NumFinder(filePath)
numFinder.processFile().then(() => {
    numFinder.getSortedNumbersMap().forEach((count, num) => {
        console.log(`${num} - ${count}`)
    })
})
