export class Player {
  constructor(name,level) {
    this.name = name
    this.level = level
    this.info = function(){
      console.log(this.name +  this.level )
}
}

}
