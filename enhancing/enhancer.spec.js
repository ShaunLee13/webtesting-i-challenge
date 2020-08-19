const { success, fail, repair } = require('./enhancer.js');
// test away!
const kzarka = {
    name: 'Kzarka Shortsword',
    durability: 90,
    enhancement:5
}
const kutum = {
    name: 'Kutum Shuriken',
    durability: 75,
    enhancement: 20
}
const nouver = {
    name: 'Nouver Dagger',
    durability: 100,
    enhancement: 15
}
describe('enhancements', () => {
    describe('repairs', () => {
        it('repairs an item', () => {
            expect(repair({...kzarka})).toHaveProperty('durability',100)
            expect(repair({...kutum})).toHaveProperty('durability',100)
        })
    })
    describe('failures', () => {
        it('reduces durability by 5 if below 15', () => {
            expect(fail({...kzarka})).toHaveProperty('durability', 85)
            expect(fail({...nouver})).not.toHaveProperty('durability', 95)
        })
        it('reduces durability by 10 if 15 or more', () => {
            expect(fail({...nouver})).toHaveProperty('durability', 90)
            expect(fail({...kutum})).toHaveProperty('durability', 65)
            expect(fail({...kzarka})).not.toHaveProperty('durability', 80)
        })
        it('if more than 16, it reduces the enhancement level', () => {
            expect(fail({...nouver})).toHaveProperty('enhancement', 15)
            expect(fail({...kutum})).toHaveProperty('enhancement', 19)
            expect(fail({...kzarka})).toHaveProperty('enhancement', 5)
        })
    })
    describe('successes', () => {
        it('increases the enhancement level by 1', () => {
            expect(success({...kzarka})).toHaveProperty('enhancement', 6)
            expect(success({...nouver})).toHaveProperty('enhancement', 16)
        })
        it('does not go past 20', () => {
            expect(success({...kutum})).toHaveProperty('enhancement', 20)
        })
        it('does not change durability', () => {
            expect(success({...kutum})).toHaveProperty('durability', 75)
            expect(success({...kzarka})).toHaveProperty('durability', 90)
            expect(success({...nouver})).toHaveProperty('durability', 100)
    })
})

})