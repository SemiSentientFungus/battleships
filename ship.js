class ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }
    hit() {
        this.hits++;
        this.isSunk()
    }
    isSunk() {
        if (this.length == this.hits){
            this.sunk = true;
        }
    }
}

module.exports = ship;