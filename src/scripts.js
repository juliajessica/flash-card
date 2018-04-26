class Flash {
  constructor(score){
    this.right;
    // this.wrong = true;
    this.score = 0;
    // this.bonus;
  }

  correct() { //breaking here
    this.right = 1;
    setInterval(() => {
      if (this.right === 1){
        this.score +=1; //add one
      } else {
        this.score;
      }
    }, 2000);
  }

  // incorrect(){
  //   setInterval(() => {
  //     if (this.wrong === true){
  //       // console.log(this.wrong);
  //       this.score = this.score;
  //       // console.log(this.score);
  //     } else {
  //       this.score;
  //     }
  //   }, 2000);
  // }

  bonusPoints(){
    // this.bonus = 5;
    // setInterval(() => {
      // if (this.bonus === true) {
      //   console.log(this.bonus);
        return this.score+5;
        // console.log(this.score);
      // } else {
      //   this.score;
      // }
    // }, 3000);
  }

}//close class

export { Flash };
