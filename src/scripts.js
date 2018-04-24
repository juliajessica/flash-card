class Flash {
  constructor(right, wrong){
    this.right = right;
    this.wrong = wrong;
  }

  correct(){
    setInterval((){
      if (this.right === true){
        return this.right++;
      }, 2000);
    }
  }

}//close class

export { Flash };
