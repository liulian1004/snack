class Snake{

    element: HTMLElement;
    head:HTMLElement;
    bodies: HTMLCollection;
    
    constructor(){
        this.element = document.getElementById("snake")!;
        //get the query of first element
        this.head = document.querySelector('#snake > div') as HTMLElement;
    
        //get the all elements inside of snake div
        this.bodies = this.element.getElementsByTagName("div")
        
    }

    getHeadX(){
       return this.head.offsetLeft;
    }

    getHeadY(){
        return this.head.offsetTop;
    }

    setHeadX(value:number){
        if(this.getHeadX() === value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error("Snake dead")
        }
        // can't return if the body after head become the same as head
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // move to right, continue to right
             if(value > this.getHeadX()){
                value = this.getHeadX()-10;
             }else{
                 value = this.getHeadX()+10;
             }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
        
    }

    setHeadY(value: number){
        if(this.getHeadY() === value){
            return;
        } 
        if(value < 0 || value > 290){
            throw new Error("Opps~")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // move to right, continue to right
             if(value > this.getHeadY()){
                value = this.getHeadY()-10;
             }else{
                value = this.getHeadY()+10;
             }
        }
        this.moveBody();
        this.head.style.top = value+ 'px';
        this.checkHeadBody();
        
    }
    //add one div inside the snake div
    extendBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
    //change from the tail, the tail position = the one before tail
    // don't need to change the head
    //head will move by the method in the control class
    private moveBody(){
        for(let i = this.bodies.length-1; i > 0; i--){
                let prevX = (this.bodies[i-1] as HTMLElement).offsetLeft;
                let prevY = (this.bodies[i-1] as HTMLElement).offsetTop;
                (this.bodies[i] as HTMLElement).style.left = prevX + 'px';
                (this.bodies[i] as HTMLElement).style.top = prevY + 'px';
        }
    }
    //cross itself
    //check if header == the body's position
    private checkHeadBody(){
        for(let i  = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if(this.getHeadX() === bd.offsetLeft && this.getHeadY() === bd.offsetTop){
                throw new Error("cross itself");
            }
        }
    }
}


export default Snake;
