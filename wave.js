import {
    Point
}from './point.js';

export class Wave {
    constructor(index, totalPoints, color){
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.center_x = stageWidth / 2;
        this.center_y = stageHeight / 2;

        this.gap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init(){
        //this.point = new Point(this.center_x, this.center_y);
        this.points = [];

        for (let i = 0; i < this.totalPoints; i++){
            const point = new Point(
                this.index + i, this.gap * i, this.center_y,
            );
            this.points[i] = point;
        }
    }

    draw(ctx){

        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        let prev_x = this.points[0].x; //initialize
        let prev_y = this.points[0].y;

        ctx.moveTo(prev_x, prev_y);

        for (let i = 1; i < this.totalPoints; i++){
            if(i < (this.totalPoints - 1)){
                this.points[i].update();
            }
            const cx = (prev_x + this.points[i].x) / 2;
            const cy = (prev_y + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prev_x, prev_y, cx, cy);

            prev_x = this.points[i].x;
            prev_y = this.points[i].y;
        }
        
        ctx.lineTo(prev_x, prev_y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}