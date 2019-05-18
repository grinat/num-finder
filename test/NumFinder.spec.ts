import * as path from 'path'
import 'mocha'
import {expect} from 'chai'
import {NumFinder} from "../src/NumFinder"

describe('NumFinder', () => {
    it('check count and order', async () => {
        const nf = new NumFinder(path.join(__dirname, './fixtures/file.txt'))
        await nf.processFile()
        const numCountMap = nf.getSortedNumbersMap()

        // check count
        expect(numCountMap.get(9)).to.equal(1)
        expect(numCountMap.get(234234)).to.equal(2)

        // check order
        const iterator = numCountMap.entries()
        const firstV = iterator.next().value[0]
        const secondV = iterator.next().value[0]
        expect(firstV).to.equal(234234)
        expect(secondV).to.equal(33)
    })
})
