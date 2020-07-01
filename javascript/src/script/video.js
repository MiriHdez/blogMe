import fnMediaPlayer from './mediaPlayer.js';

const video=document.querySelector("video"),
			button= document.querySelector("button");

const player = new fnMediaPlayer({el:video});
button.onclick =()=>player.togglePay();