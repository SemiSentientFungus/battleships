const ship = require('./ship');


describe('Ship object testing', () => {
    const boat = new ship(10);
    test('Ship hp is properly set', () => {
        expect(boat.hp).toBe(10);
    })
})
