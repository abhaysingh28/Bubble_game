var circle=document.querySelector("#circle"); 
var timebox=document.querySelector("#time");
var content=document.querySelector("#content");
var clickbox=document.querySelector("#click");
var scorebox=document.querySelector('#score');

var time=60;
var score=0;


function bubbles(){
    var temp=``;
    for(i=0;i<=32;i++){
      
    temp+=`<div id="circle">
       <h3>${ Math.floor(Math.random()*10)}<h3>
    </div>`
    }
    document.querySelector('#content').innerHTML=temp;
    clickbox.textContent=Math.floor(Math.random()*10);
}

function timer(){

    setInterval(() => {
        if(time<0){
    
        }
        else{
            // console.log(time);
            timebox.textContent=time;
            time--;
        }
       
    }, 1000);
}

function click(){
    content.addEventListener('click',function(dets){
        var clickedno=Number(dets.target.textContent);
        var target=Number(clickbox.textContent);
        if(clickedno === target){
            // console.log('hey');
            result();
            bubbles();
            clickbox.textContent=Math.floor(Math.random()*10);
        }
        else{

        }
       
})
}

function result(){

   score = score + 10;
   scorebox.textContent = score;

}

bubbles();
timer();
click();