export class Circle {
    radius:number;
    color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
    getRadius=()=>this.radius;
    getColor=()=>this.color;

    setRadius=(radius)=>this.radius=radius;
    setColor=(color)=>this.color=color;

    getArea=()=>Math.PI*Math.pow(this.radius,2);
}