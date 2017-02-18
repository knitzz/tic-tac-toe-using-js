
var t=0;
function reset(){
                t=0;
                document.getElementById('b1').innerHTML=' ';
                document.getElementById('b2').innerHTML=' ';
                document.getElementById('b3').innerHTML=' ';
                document.getElementById('b4').innerHTML=' ';
                document.getElementById('b5').innerHTML=' ';
                document.getElementById('b6').innerHTML=' ';
                document.getElementById('b7').innerHTML=' ';
                document.getElementById('b8').innerHTML=' ';
                document.getElementById('b9').innerHTML=' ';

               }


document.getElementById("start").onclick=func1 ,reset;


function func1() {
                    document.getElementById('box').style.display= 'block';
                }


function func2(id){
                     if( (document.getElementById(id).innerHTML=='X'|| document.getElementById(id).innerHTML=='O')&& t!=0){
                                                                                                                          window.alert("cant click on this");
                                                                                                                          }


     else if(t%2!=0){
                     document.getElementById(id).innerHTML='O';
                    var x='X';
                    var o='O';
                    t++;
                    var b1=document.getElementById('b1').innerHTML;
                    var b2=document.getElementById('b2').innerHTML;
                    var b3=document.getElementById('b3').innerHTML;
                    var b4=document.getElementById('b4').innerHTML;
                    var b5=document.getElementById('b5').innerHTML;
                    var b6=document.getElementById('b6').innerHTML;
                    var b7=document.getElementById('b7').innerHTML;
                    var b8=document.getElementById('b8').innerHTML;
                    var b9=document.getElementById('b9').innerHTML;

                    if((b1==x && b5==x && b9==x)||(b3==x && b5==x && b6==x)||(b1==x && b2==x && b3==x)||(b4==x && b5==x && b6==x)||(b7==x && b8==x && b9==x)||(b1==x && b4==x && b7==x)||(b2==x && b5==x && b8==x)||(b3==x && b6==x && b9==x)){
                        window.alert("player1 WON ");
                    reset();
            
                    }
                    if((b1==o && b5==o && b9==o)||(b3==o && b5==o && b6==o)||(b1==o && b2==o && b3==o)||(b4==o && b5==o && b6==o)||(b7==o && b8==o && b9==o)||(b1==o && b4==o && b7==o)||(b2==o && b5==o && b8==o)||(b3==o && b6==o && b9==o)){
                        window.alert("player2 WON ");
                        reset();
        

                    }
                }

    else if(t%2==0){
    
                        document.getElementById(id).innerHTML='X';
                    t++;
                        
                        var x='X';
                    var o='O';
                    var b1=document.getElementById('b1').innerHTML;
                    var b2=document.getElementById('b2').innerHTML;
                    var b3=document.getElementById('b3').innerHTML;
                    var b4=document.getElementById('b4').innerHTML;
                    var b5=document.getElementById('b5').innerHTML;
                    var b6=document.getElementById('b6').innerHTML;
                    var b7=document.getElementById('b7').innerHTML;
                    var b8=document.getElementById('b8').innerHTML;
                    var b9=document.getElementById('b9').innerHTML;

                    if((b1==x && b5==x && b9==x)||(b3==x && b5==x && b6==x)||(b1==x && b2==x && b3==x)||(b4==x && b5==x && b6==x)||(b7==x && b8==x && b9==x)||(b1==x && b4==x && b7==x)||(b2==x && b5==x && b8==x)||(b3==x && b6==x && b9==x)){
                        window.alert("player1 WON ");
                        reset();
                        
                    }


                    if((b1==o && b5==o && b9==o)||(b3==o && b5==o && b6==o)||(b1==o && b2==o && b3==o)||(b4==o && b5==o && b6==o)||(b7==o && b8==o && b9==o)||(b1==o && b4==o && b7==o)||(b2==o && b5==o && b8==o)||(b3==o && b6==o && b9==o)){
                        window.alert("player2 WON ");
                        reset();
                    
                     }

                     
                }

                
}
