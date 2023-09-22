// Model
const app = document.getElementById('app');
var whatbox;
// View
updateView();
function updateView(){
    html = /*html*/ `
    <div id="box">
    <div id="box1" onclick="button(this)"></div>
    <div id="box2" onclick="button(this)"></div>
    <div id="box3" onclick="button(this)"></div>
    <div id="box4" onclick="button(this)"></div>
    </div>

    
    
    <div id="center"></div>
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


function button(btn){
    let myClick = btn.id;
    const myTime = setTimeout(responsive, 1000, btn);
    if( myClick == "box1"){
        btn.classList.add('lightUpYellow');
        myTime;
    }
    else if( myClick == "box2"){
        btn.classList.add('lightUpBlue');
        myTime;
    }
    else if( myClick == "box3"){
        btn.classList.add('lightUpRed');
        myTime;
    }
    else if( myClick == "box4"){
        btn.classList.add('lightUpGreen');
        myTime;
    }
    whatbox = myClick;
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

function reset(){
    location.reload();
}

function Start(){
    let place = numGen();
    const myTime2 = setTimeout(responsive2, 1000, place);
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
let result = '';
    if( result == "win"){
       round2(); 
    }
    else if( result == "lose"){
        Start();
    }
    
}

function round2(){
    let place1 = numGen();
    let place2 = numGen();
    let result2='';
    if(result2 == "win"){
        round3();
    }
    else if(result2 == "lose"){
        Start();
    }
}
function round3(){
    let result3='';
    if(result3 == "win"){
        round4();
    }
    else if(result3 == "lose"){
        Start();
    }
}
function round4(){
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