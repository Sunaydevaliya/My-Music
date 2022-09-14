//initialize variables

let audioElement = new Audio("./songs/1.mp3");
let audioIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs= [
    {songName:"Aaja ve mahiya - Imrankhan" ,coverPath:"/covers/1.jpg", filePath:"/songs/1.mp3"},
    {songName:"Kesariya" ,coverPath:"/covers/2.jpg", filePath:"/songs/2.mp3"},
    {songName:"Bewafa" ,coverPath:"/covers/3.jpg", filePath:"/songs/3.mp3"},
    {songName:"Dil tod ke" ,coverPath:"/covers/4.jpg", filePath:"/songs/4.mp3"},
    {songName:"Rishte naate" ,coverPath:"/covers/5.jpg", filePath:"/songs/5.mp3"},
    {songName:"Dholna" ,coverPath:"/covers/6.jpg", filePath:"/songs/6.mp3"},
    {songName:"Amplifier" ,coverPath:"/covers/7.jpg", filePath:"/songs/7.mp3"},
    // {songName:"Let me love you" ,coverPath:"/covers/8.jpg", filePath:"/songs/8.mp3"},
    // {songName:"Tera ban jaunga" ,coverPath:"/covers/9.jpg", filePath:"/songs/9.mp3"},
    // {songName:"Nira ishq" ,coverPath:"/covers/10.jpg", filePath:"/songs/10.mp3"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})
//Listen to Events

masterPlay.addEventListener("click",()=>{
    // console.log("clicked");
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
});

myProgressbar.addEventListener("change",()=>{
    audioElement.currentTime = (myProgressbar.value*audioElement.duration)/100;
});


let makeAllplays = ()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        audioIndex = parseInt(e.target.id);
        makeAllplays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=(`./songs/${audioIndex+1}.mp3`);
        masterSongName.innerText = songs[audioIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        
    })

});

document.getElementById("next").addEventListener("click",()=>{
    if(audioIndex>=6){
        audioIndex = 0;
    }
    else{
        audioIndex +=1;
    }
    audioElement.src=(`./songs/${audioIndex+1}.mp3`);
    masterSongName.innerText = songs[audioIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    
})

document.getElementById("previous").addEventListener("click",()=>{
    if(audioIndex<=0){
        audioIndex = 0;
    }
    else{
        audioIndex -=1;
    }
    audioElement.src=(`./songs/${audioIndex+1}.mp3`);
    masterSongName.innerText = songs[audioIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})