export class Point {
    constructor(index, x, y) {
        this.x = x; 
        this.y = y;
        this.fixed_y = y;
        this.speed = 0.1;
        this.current = index;
        this.max = Math.random() * 100 + 150;
    }

    update(){
        this.current += this.speed;
        this.y = this.fixed_y + (Math.cos(this.current) * this.max);
    }
}