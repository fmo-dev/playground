export class Dice {

    private nbFaces: number;
    private color: string;
    public currentValue: number;
    private isSelected: boolean;

    constructor(nbFaces: number, color:string) {
        this.nbFaces = nbFaces;
        this.color = color;
    }   

    select = () => this.isSelected = !this.isSelected;  
    roll = () => { if(!this.isSelected) this.currentValue = Math.floor(Math.random() * this.nbFaces) + 1 };

    reset(){
        this.isSelected = false;
        this.currentValue = null;
    }
    
}
