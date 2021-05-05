class Food{
    element:HTMLElement; //the type is HTMLElement
    constructor(){
        this.element = document.getElementById("food")!;
    }
    // get the food x position
    get X() {
        return this.element.offsetLeft;
    }
    //get food y position
    get Y(){
        return this.element.offsetTop;
    }
    //change food position randomly
    //the position must be 10x, because the snack move every 10px
    // the scope is 0 - 290
    change(){
        let left = Math.round(Math.random()*29)*10; // not including 0 and 290
        let top = Math.round(Math.random()*29)*10; // not including 0 and 290
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}



export default Food;


