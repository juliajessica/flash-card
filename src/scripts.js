class Flash {
  constructor(right, wrong, bonus){
    this.right = true;
    this.wrong = true;
    this.bonus = 5;
    this.score = 0;
  }

  correct() {
    setInterval(() => {
      if (this.right === true){
        this.score++; //add one
      } else {
        this.score;
      }
    }, 2000);
  }

  incorrect(){
    setInterval(() => {
      if (this.wrong === true){
        console.log(this.wrong);
        this.score = this.score;
        console.log(this.score);
      }
    }, 2000);
  }

  bonusPoints(){
    setInterval(() => {
      this.bonus += this.score;
      }
    }, 2000);
  }

}//close class

export { Flash };
