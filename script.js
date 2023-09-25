// Model
const app = document.getElementById('app');
var whatbox;
var rightbox;
var sequence1 = [];
var sequence2 = [];
var sequence3 = [];
var sequence4 = [];
var sequence1Player = [];
var sequence2Player = [];
var sequence3Player = [];
var sequence4Player = [];
var round = 1;
// View
updateView();
function updateView(){
    html = /*html*/ `
    <div id="input" >DONE</div>
    <div id="box">
    <div id="box1" onclick="button(this)"></div>
    <div id="box2" onclick="button(this)"></div>
    <div id="box3" onclick="button(this)"></div>
    <div id="box4" onclick="button(this)"></div>
    </div>

    
    
    <div id="center" onclick="getInput()"></div>
    <div id="center2"></div>

   
    
    
    </div><div id="center3"></div>
    
    <input id="btn" type="button" value="Start" onclick="Start()"/>
    <input id="btn" type="button" value="reset" onclick="reset()"/>
    `;
    app.innerHTML = html;
}

// Controler
function numGen(){
    num = Math.floor((Math.random())*4);
    return num;
}

//CSS visual effects
function button(btn){
    let myClick = btn.id;
    const myTime = setTimeout(responsive, 1000, btn);
    if( myClick == "box1"){
        btn.classList.add('lightUpYellow');
        myTime;
        whatbox = "0";
    }
    else if( myClick == "box2"){
        btn.classList.add('lightUpBlue');
        myTime;
        whatbox = "1";
    }
    else if( myClick == "box3"){
        btn.classList.add('lightUpRed');
        myTime;
        whatbox = "2";
    }
    else if( myClick == "box4"){
        btn.classList.add('lightUpGreen');
        myTime;
        whatbox ="3";
    }
    console.log(myClick);
    console.log(whatbox);
    
}

function responsive(btn){
    let myClick = btn.id;
    if( myClick == "box1"){
        btn.classList.remove('lightUpYellow');
    }
    else if( myClick == "box2"){
        btn.classList.remove('lightUpBlue');
    }
    else if( myClick == "box3"){
        btn.classList.remove('lightUpRed');
    }
    else if( myClick == "box4"){
        btn.classList.remove('lightUpGreen');
    }
}
function responsive2(place){

    if(place == "0"){
        document.getElementById("box1").classList.remove('lightUpYellow');
        
    }
    else if( place == "1"){
        document.getElementById("box2").classList.remove('lightUpBlue');
        
    }
    else if( place == "2"){
        document.getElementById("box3").classList.remove('lightUpRed');
        
    }
    else if( place == "3"){
        document.getElementById("box4").classList.remove('lightUpGreen');
        
    }
}
function responsive3(place){

    if(place == "0"){
        document.getElementById("box1").classList.remove('lightUpYellow');
        
    }
    else if( place == "1"){
        document.getElementById("box2").classList.remove('lightUpBlue');
        
    }
    else if( place == "2"){
        document.getElementById("box3").classList.remove('lightUpRed');
        
    }
    else if( place == "3"){
        document.getElementById("box4").classList.remove('lightUpGreen');
        
    }
}
function responsive4(place){

    if(place == "0"){
        document.getElementById("box1").classList.remove('lightUpYellow');
        
    }
    else if( place == "1"){
        document.getElementById("box2").classList.remove('lightUpBlue');
        
    }
    else if( place == "2"){
        document.getElementById("box3").classList.remove('lightUpRed');
        
    }
    else if( place == "3"){
        document.getElementById("box4").classList.remove('lightUpGreen');
        
    }
}



// runder

function Start(){
    let place = numGen();
    sequence1.push(place);
    const myTime2 = setTimeout(responsive2, 1000, place);
    //const inputInterval = setTimeout(getInput, 2000, sequence1);
    console.log(place);
    if(place == "0"){
        document.getElementById("box1").classList.add('lightUpYellow');
        myTime2;

    }
    else if( place == "1"){
        document.getElementById("box2").classList.add('lightUpBlue');
        myTime2;
    }
    else if( place == "2"){
        document.getElementById("box3").classList.add('lightUpRed');
        myTime2;
    }
    else if( place == "3"){
        document.getElementById("box4").classList.add('lightUpGreen');
        myTime2;
    }
    //inputInterval;
}

function round2(){
    alert('runde 2');
    round = 2;
    let place;
    let timeFactor = 1;
    for(let i = 0; i<2; i++){
        place = numGen();
        sequence2[i]=place;
    }
    let result2='';
    for(let j=0; j <= sequence2.length; j++){   

    if(sequence2[j] == "0"){
        
        if(sequence2[0] == sequence2[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
         document.getElementById("box1").classList.add('lightUpYellow');
        timeDelay(j);   
        }, 1000*j*timeFactor);
    }
    else if(sequence2[j] == "1"){
        if(sequence2[0] == sequence2[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box2").classList.add('lightUpBlue');
        timeDelay(j);  
        }, 1000*j*timeFactor);
    }
    else if(sequence2[j] == "2"){
        if(sequence2[0] == sequence2[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box3").classList.add('lightUpRed');
        timeDelay(j);  
        }, 1000*j*timeFactor);
        
    }
    else if(sequence2[j] == "3"){
        if(sequence2[0] == sequence2[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box4").classList.add('lightUpGreen');
        timeDelay(j);  
        }, 1000*j*timeFactor);
        
    }
    }
}
function round3(){
    alert('runde 3');
    round = 3;
    let place;
    let timeFactor = 1;
    for(let i = 0; i<3; i++){
        place = numGen();
        sequence3[i]=place;
    }
    let result3='';
    for(let j=0; j <= sequence3.length; j++){   

    if(sequence3[j] == "0"){
        
        if(sequence3[0] == sequence3[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
         document.getElementById("box1").classList.add('lightUpYellow');
        timeDelay2(j);   
        }, 1000*j*timeFactor);
    }
    else if(sequence3[j] == "1"){
        if(sequence3[0] == sequence3[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box2").classList.add('lightUpBlue');
        timeDelay2(j);  
        }, 1000*j*timeFactor);
    }
    else if(sequence3[j] == "2"){
        if(sequence3[0] == sequence3[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box3").classList.add('lightUpRed');
        timeDelay2(j);  
        }, 1000*j*timeFactor);
        
    }
    else if(sequence3[j] == "3"){
        if(sequence3[0] == sequence3[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box4").classList.add('lightUpGreen');
        timeDelay2(j);  
        }, 1000*j*timeFactor);
        
    }
    }
}
function round4(){
    alert('runde 4');
    round = 4;
    let place;
    let timeFactor = 1;
    for(let i = 0; i<4; i++){
        place = numGen();
        sequence4[i]=place;
    }
    let result4='';
    for(let j=0; j <= sequence4.length; j++){   

    if(sequence4[j] == "0"){
        
        if(sequence4[0] == sequence4[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
         document.getElementById("box1").classList.add('lightUpYellow');
        timeDelay3(j);   
        }, 1000*j*timeFactor);
    }
    else if(sequence4[j] == "1"){
        if(sequence4[0] == sequence4[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box2").classList.add('lightUpBlue');
        timeDelay3(j);  
        }, 1000*j*timeFactor);
    }
    else if(sequence4[j] == "2"){
        if(sequence4[0] == sequence4[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box3").classList.add('lightUpRed');
        timeDelay3(j);  
        }, 1000*j*timeFactor);
        
    }
    else if(sequence4[j] == "3"){
        if(sequence4[0] == sequence4[1]){
            timeFactor = 2;
        }
        setTimeout(function(){
          document.getElementById("box4").classList.add('lightUpGreen');
        timeDelay3(j);  
        }, 1000*j*timeFactor);
        
    }
    }
}

/*function round4(){
    let result4='';
    if(result4 == "win"){
        round5();
    }
    else if(result4 == "lose"){
        Start();
    }
}
function round5(){
    let result5='';
    if(result5 == "win"){
        alert("you win")
    }
    else if(result5 == "lose"){
        Start();
    }
}*/
//user inputs
document.getElementById("box1").addEventListener("click", function(){sequence1Player.push(0)});
document.getElementById("box2").addEventListener("click", function(){sequence1Player.push(1)});
document.getElementById("box3").addEventListener("click", function(){sequence1Player.push(2)});
document.getElementById("box4").addEventListener("click", function(){sequence1Player.push(3)});

function afterR1(){
document.getElementById("box1").addEventListener("click", function(){sequence2Player.push(0)});
document.getElementById("box2").addEventListener("click", function(){sequence2Player.push(1)});
document.getElementById("box3").addEventListener("click", function(){sequence2Player.push(2)});
document.getElementById("box4").addEventListener("click", function(){sequence2Player.push(3)});
}
function afterR2(){
document.getElementById("box1").addEventListener("click", function(){sequence3Player.push(0)});
document.getElementById("box2").addEventListener("click", function(){sequence3Player.push(1)});
document.getElementById("box3").addEventListener("click", function(){sequence3Player.push(2)});
document.getElementById("box4").addEventListener("click", function(){sequence3Player.push(3)});
}
function afterR3(){
document.getElementById("box1").addEventListener("click", function(){sequence4Player.push(0)});
document.getElementById("box2").addEventListener("click", function(){sequence4Player.push(1)});
document.getElementById("box3").addEventListener("click", function(){sequence4Player.push(2)});
document.getElementById("box4").addEventListener("click", function(){sequence4Player.push(3)});
}

function getInput(){
    if(round == 1){evaluateStart();}
    else if(round == 2){evaluateR1(sequence2, sequence2Player);}
    else if(round == 3){evaluateR1(sequence3, sequence3Player);}
    else if(round == 4){evaluateR1(sequence4, sequence4Player);}
    else if(round == 5){evaluateR1();}
}

function evaluateStart(){
    let result;
    if(sequence1.length == sequence1Player.length && sequence1[0] == sequence1Player[0]){
        console.log('win');
        result = 'win';}
        else{ console.log('lose'); result = 'lose';}
    if( result == 'win'){
        round2();
        afterR1();}
    else{alert('you lost'); reset();} 
    return result;
}

//tids delays
function timeDelay(j){
    setTimeout(responsive3, 1000+(100*j), sequence2[j]);
}
function timeDelay2(j){
    setTimeout(responsive4, 1000+(100*j), sequence3[j]);
}
function timeDelay3(j){
    setTimeout(responsive4, 1000+(100*j), sequence4[j]);
}

// evaluation

function evaluateR1(pc, player){
    console.log('hei');
   let result = '';
   for(let i=0; i<player.length; i++){
        if(pc[i] == player[i]){
            console.log("yes");
            result = 'win';
            
        }
        else{ console.log("no"); result = 'lose';}
        
   }
    if( round== 2 && result == "win"){
       round3();
       afterR2(); 
    }
    else if(round == 3 && result == "win"){
        round4();
        afterR3();
    }
    else if(round == 4 && result == "win"){
        alert('du vant');
    }
    else if( result == "lose"){
        Start();
    } 
}




function reset(){
    location.reload();
}
/*Oppgave - Simon Says[edit]
Simon says!

Lag en web-utgave av spillet simon says. 
Du kan ha fire forskjellige firkanter av 
ulik farge som skal 'blinke'. 
Lag en tekst som holder styr på poengsummen til brukeren. 
Start med et 'blink', øk deretter med et ekstra blink i en 
random av fargene per tur. Brukeren skal trykke på de samme 
fargene som blir generert av datan. Trykker brukeren feil, 
mister den et poeng, mens trykker brukeren riktig, får de et poeng! 
Du må holde styr på alle trykkene dataene har generert i riktig rekkefølge, 
samt trykkene brukeren utfører.

Oppgaven løses med arrays, on-click, funksjoner med parameter */