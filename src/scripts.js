class Flash {
  constructor(right, wrong){
    this.right = true;
    this.wrong = true;
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
        this.sore = this.score;
      }
    }, 2000);
  }

}//close class

export { Flash };
