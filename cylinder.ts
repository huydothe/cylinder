import {Circle} from "./circle";

class Cylinder extends Circle {
    height:number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height;
    }

    getHeight=()=>this.height;

    getCylinderArea=()=>this.getArea()*this.height
}

let cyclinder1=new Cylinder(40,'brown', 70);
console.log(cyclinder1.getCylinderArea());
