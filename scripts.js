var a=1;
var tff=false;
const m = new Map([
    ['q','c3'],
    ['2','db3'],
    ['w','d3'],
    ['3','eb3'],
    ['e','e3'],
    ['r','f3'],
    ['5','gb3'],
    ['t','g3'],
    ['6','ab3'],
    ['y','a3'],
    ['7','bb3'],
    ['u','b3'],
    ['i','c4'],
    ['9','db4'],
    ['o','d4'],
    ['0','eb4'],
    ['p','e4'],
    ['z','f4'],
    ['s','gb4'],
    ['x','g4'],
    ['d','ab4'],
    ['c','a4'],
    ['f','bb4'],
    ['v','b4'],
    ['b','c5'],
    ['h','db5'],
    ['n','d5'],
    ['j','eb5'],
    ['m','e5'],
    [',','f5'],
    ['l','gb5'],
    ['.','g5'],
    [';','ab5'],
    ['/','a5'],
    ["'", 'bb5']
])
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
function play(id){
    tf=false;
    var b=document.getElementById("audio"+a)
    b.src=id+".mp3";
    b.currentTime=0;
    b.play();
    function inter(){
        if(b.currentTime>0.08){
			b.pause();
			}
    }
    int=setInterval(inter(),10);
    a++;
    a%=10;
    var b=document.getElementById(id).style.backgroundColor;
    console.log(b);
    document.getElementById(id).style.backgroundColor="#aaa";
    try{document.getElementById(id+'1').style.backgroundColor="#aaa";}
    catch(error){console.error(error);}
    try{document.getElementById(id+'0').style.backgroundColor="#aaa";}
    catch(error){console.error(error);}
    delay(100).then(() => {
        if(document.getElementById(id).className=="black"){
            document.getElementById(id).style.backgroundColor="#000";
            document.getElementById(id+'1').style.backgroundColor="#000";
            document.getElementById(id+'0').style.backgroundColor="#000";
        }else{
        document.getElementById(id).style.backgroundColor="#fff";
        document.getElementById(id+'1').style.backgroundColor="#fff";
        document.getElementById(id+'0').style.backgroundColor="#fff";}
    })
}function keyAssist(){
    ps=document.getElementsByTagName('p')
    if(!tff){
        for(var i=0;i<ps.length;i++)ps[i].style.visibility='visible';
        tff=true;
        document.getElementById("key").style.backgroundColor="#bebebe"
    }else{
        for(var i=0;i<ps.length;i++)ps[i].style.visibility='hidden';
        tff=false;
        document.getElementById("key").style.backgroundColor="#efefef"
    }
}
document.addEventListener('keypress', (event) => {
    var note=m.get(event.key);
    play(note);
}, false);