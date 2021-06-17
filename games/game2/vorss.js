
let towardsX=1;
let towardsY=1;
let towardsX1=1;
let towardsY1=1;
let boomAngle;
let idw1;
let idw2;
let  forceМeter =document.getElementsByClassName('uj');
let payman=0;
let verjnakan;
let ball=document.getElementById('blokfatherp');
if (payman==0) {

}

ball.onmousedown = function(event) {

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  document.body.append(ball);


  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    console.log(pageX - ball.offsetWidth / 2);
    console.log(pageY - ball.offsetHeight / 2);
    var timevarkyan =40+pageY - ball.offsetHeight / 5;
    var timevarkyan2 =pageY - ball.offsetHeight / 5;
    boomAngle=timevarkyan2;

    towardsY=(pageY - ball.offsetHeight / 2-300)/11;

    console.log();
     towardsX=(pageX - ball.offsetWidth / 2-920)/15;
     towardsY1=(40+(towardsY/towardsX)*10);
     towardsX1=((towardsY/towardsX)*10);
    console.log();
    document.getElementById("axeximg").style.transform= 'rotate('+(40+(towardsY/towardsX)*60)+'deg)' ;
    document.getElementById("netimg").style.transform= 'rotate('+((towardsY/towardsX)*60)+'deg)' ;
    document.getElementById("netimg").style.left=10+'px'
    verjnakan=(40+(towardsY/towardsX)*60)
    console.log(towardsX);
    frametwt2()
    function frametwt2(){
      let  strength=Math.sqrt((towardsX*towardsX)+(towardsY*towardsY/2)*0.8)

      for (let j = 24; j > strength; j--) {
        forceМeter[j].style.backgroundColor='white';
      }
      for (let i = 0; i < strength; i++) {
        forceМeter[i].style.backgroundColor='#a6f242';
        if (i>3) {
          forceМeter[i].style.backgroundColor='#1ab322';
        }
        if (i>8) {
          forceМeter[i].style.backgroundColor='#ccc918';
        }
        if (i>15) {
          forceМeter[i].style.backgroundColor='red';
        }

      }
    }

  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
    ball.style.left = 1100+ 'px';
    ball.style.top = 350 + 'px';
    console.log(ball.style.left);
    console.log(towardsX);
    document.getElementById('blokfatherp').style.zIndex=0;
    idw1 = setInterval(frametwt, 20)



  };

};
let towardsXto=300;
var pageX2=920;
let boomAngle2
let payaman =0;
let towardsX2;
let towardsY2;

function frametwt(){

  towardsY=towardsY-0.13;
  pageX2-=(towardsX/2);
  towardsXto-=towardsY;
  boomAngle2=(towardsY/towardsX)*60
  if (boomAngle2>90) {
    boomAngle2=90
  }
  if (boomAngle2<-90) {
    boomAngle2=-90
  }
  if (towardsXto>370) {
    document.getElementById('blokfatherp').style.zIndex=3;
    clearInterval(idw1);
    result(pageX2, towardsXto, boomAngle2);
    boomAngle2=verjnakan-40;
    payman=0;
    towardsXto=300;
    pageX2=920;
  }
  if (pageX2<-180) {
    document.getElementById('blokfatherp').style.zIndex=3;
    clearInterval(idw1);
    result2(pageX2, towardsXto, boomAngle2);
    boomAngle2=verjnakan-40;
    payman=0;
    towardsXto=300;
    pageX2=920;
  }
  if (towardsXto>150 && towardsXto<250 ) {
    if (pageX2<2 && pageX2>-20) {
      document.getElementById('blokfatherp').style.zIndex=3;
      clearInterval(idw1);
      result(pageX2, towardsXto, boomAngle2);
      boomAngle2=verjnakan-40;
      payman=0;
      towardsXto=300;
      pageX2=920;

    }

  }
  document.getElementById("net").style.left = pageX2 + "px";
  document.getElementById("net").style.top = towardsXto + "px"
  document.getElementById("netimg").style.transform= 'rotate('+boomAngle2+'deg)' ;
  console.log(towardsXto);


}
var imegg=document.createElement('img');
var blok=document.createElement('div');

var boomNumber=0;
function result(secondX,secondY,angle){
  imegg[boomNumber]=document.createElement('img');
  blok[boomNumber]=document.createElement('div');
  document.getElementById('gamePage').appendChild(blok[boomNumber]);
  blok[boomNumber].class='imgfader1';
  imegg[boomNumber].class='imeggid';
  blok[boomNumber].style.position="absolute"
  imegg[boomNumber].style.width=80+"px";
  imegg[boomNumber].style.height=100+"px";
  imegg[boomNumber].src='https://images.ua.prom.st/1192828760_w640_h640_strela-dlya-luka.jpg'
  blok[boomNumber].appendChild(imegg[boomNumber]);

  blok[boomNumber].style.left = (secondX) + "px";
  blok[boomNumber].style.top = (secondY) + "px";
  imegg[boomNumber].style.transform= 'rotate('+angle+'deg)';
  boomNumber++;
  pageX2=920;
  towardsXto=300;
  document.getElementById("net").style.left = 920 + "px";
  document.getElementById("net").style.top = 300 + "px"
  document.getElementById("netimg").style.transform= 'rotate('+((towardsY/towardsX)*40)+'deg)' ;
  console.log("mi ban nitoya");

}
function result2(secondX,secondY,angle){

  pageX2=920;
  towardsXto=300;
  document.getElementById("net").style.left = pageX2 + "px";
  document.getElementById("net").style.top = towardsXto + "px"
  document.getElementById("netimg").style.transform= 'rotate('+((towardsY/towardsX)*40)+'deg)' ;
  console.log("mi ban nitoya");

}
