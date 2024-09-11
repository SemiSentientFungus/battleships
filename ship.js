class ship {
    constructor(hp) {
        this.hp = hp;
    }
    hit() {
        this.hp -= 1;
    }
}

module.exports = ship;