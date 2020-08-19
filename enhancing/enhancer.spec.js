const { success, fail, repair } = require('./enhancer.js');
// test away!
const kzarka = {
    name: 'Kzarka Shortsword',
    durability: 90,
    enhancement:5
}
describe('enhancements', () => {
    describe('repairs', () => {
        it('repairs an item', () => {
            expect(repair(kzarka)).toHaveProperty('durability',100)
        })
    })
    describe('failures', () => {

    })
    describe('successes', () => {

    })
    
})