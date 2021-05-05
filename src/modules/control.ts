
import Snake from "./snake";
import  Food from "./Food";
import ScorePanel from "./ScorePanel";

class Control{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //keep keyboard direction
    direction: string = '';

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    private init(){
        //bind the event to listen to which key is pressed 
        //第一个this表示的document， 第二个this是Control。这里需要绑定this
        //让keyDownHandler里面的this只的是Control，否则this会指向document
        //不确定this是哪一个，可以用console.log打印
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
        this.move();
    }

    //keyboard listener
    private keyDownHandler(event:KeyboardEvent){
        // return string "ArrowUp", "ArrowDown","ArrowLeft","ArrowRight"(chrome)
        // return string "Up", "Down","left","Right"(chrome)
        //if()
        this.direction = event.key // key the latest key direction
        
    }


    // up Y--
    // left X--
    //down Y++
    // right X++
    // move size == the px of each snake element
    private move(){
        let X = this.snake.getHeadX();
        let Y = this.snake.getHeadY();
        
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
            break;
            case "ArrowDown":
            case "Down":
                Y += 10;
            break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
            break;
            case "ArrowRight":
            case "Right":
                X += 10;
            break;
        }
        this.snake.headX= X;
        this.snake.headY = Y;
        //every 300ms trigger move() 
        // so that the move will keep triggering
        setTimeout(this.move.bind(this), 300)
    }

}
export default Control;