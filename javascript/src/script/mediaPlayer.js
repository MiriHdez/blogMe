function fnMediaPlayer(config){
  this.media=config.el;
}

fnMediaPlayer.prototype.play= function(){
  this.media.play();
}

fnMediaPlayer.prototype.pause=function(){
  this.media.pause();
}

fnMediaPlayer.prototype.togglePay = function(){
  if(this.media.paused){
    this.play();
  }else{
    this.pause();
  }	
}

export default fnMediaPlayer;