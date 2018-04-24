class Flash {
  constructor(right, wrong){
    this.right = right;
    this.wrong = wrong;
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

}//close class

export { Flash };
