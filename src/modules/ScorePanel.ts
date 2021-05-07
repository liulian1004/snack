
class ScorePanel{
    score = 0;
    level = 1;

    scoreElement: HTMLElement;
    levelElement:HTMLElement;
    
    maxLevel: number
    upScore : number

    // input : the max level if not input, the default max level is 10
    constructor(maxLevel: number = 10, upScore: number = 10){
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //every 10 score, up one level
    addScore(){
        this.score++;
        this.scoreElement.innerHTML = this.score+ "";
        if(this.score%this.upScore === 0 ){
            this.updateLevel();
        }
    
    }
    private updateLevel(){
        if(this.level < this.maxLevel) {
            this.level++;
            this.levelElement.innerHTML = this.level + "";
        }
        
    }

}


export default ScorePanel;

