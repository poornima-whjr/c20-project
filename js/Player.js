class Player{

  constructor(){
    this.index = null; 
    this.userId=null;
    this.grade=null;
    this.subject=null;
    this.password=null;
  }
  
  update(){
    console.log(this.userId);
    var playerIndex = "players/"+this.userId;
    database.ref(playerIndex).set({
       grade : this.grade,
       password : this.password,
      subject: this.subject
    });
  }
   
  loadUser(){
    var playerRef="player/"+this.userId;
    database.ref(playerRef).on("value",(data)=>{
      console.log(data.val());
    })
  }
  


}