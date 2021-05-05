class Snake{

    element: HTMLElement;
    head:HTMLElement;
   // bodies: HTMLCollection;
    
    constructor(){
        this.element = document.getElementById('snake') as HTMLElement;
        //get the query of first element
        this.head= document.querySelector('#snake > div') as HTMLElement;
        //get the all elements inside of snake div
        //this.bodies = this.element.getElementsByTagName("div")
        
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
export default Snake;
