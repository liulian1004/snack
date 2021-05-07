class Snake{

    element: HTMLElement;
    head:HTMLElement;
    bodies: HTMLCollection;
    
    constructor(){
        this.element = document.getElementById("snake")!;
        //get the query of first element
        this.head = document.querySelector('#snake > div') as HTMLElement;
        //console.log("food in snake: ",document.getElementById("food"));
        //console.log("element_0", document.getElementById("snake"));
        //get the all elements inside of snake div
        this.bodies = this.element.getElementsByTagName("div")
        
    }

    getHeadX(){
       return this.head.offsetLeft;
    }

    getHeadY(){
        return this.head.offsetTop;
    }

    set headX(value:number){
        this.head.style.left = value + 'px';
    }

    set headY(value: number){
        this.head.style.top = value+ 'px';
    }
    //add one div inside the snake div
    extendBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

}

const snake = new Snake();
console.log("header0: ", snake.head);
console.log("element: ", snake.element);

export default Snake;
