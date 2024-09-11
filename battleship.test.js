const ship = require('./ship');


describe('Ship object testing', () => {
    const boat = new ship(2);
    test('Ship hp is properly set', () => {
        expect(boat.length  ).toBe(2);
    })
    test('Ship hp decreases on hit', () => {
        boat.hit();
        expect(boat.hits).toBe(1);
    })
    test('Ship can lose hp again', () => {
        boat.hit();
        expect(boat.hits).toBe(2);
    })
    test('Ship sinks at 0 hp', () => {
        expect(boat.sunk).toBe(true)
    })
})
