
var t=0;
function reset(){
                t=0;
                document.getElementById('b1').value='NA';
                document.getElementById('b2').value='NA';
                document.getElementById('b3').value='NA';
                document.getElementById('b4').value='NA';
                document.getElementById('b5').value='NA';
                document.getElementById('b6').value='NA';
                document.getElementById('b7').value='NA';
                document.getElementById('b8').value='NA';
                document.getElementById('b9').value='NA';

               }


document.getElementById("start").onclick=func1 ,reset;


function func1() {
                    document.getElementById('box').style.display= 'block';
                }


function func2(id){
                     if( (document.getElementById(id).value=='X'|| document.getElementById(id).value=='O')&& t!=0){
                                                                                                                          window.alert("cant click on this");
                                                                                                                          }


     else if(t%2!=0){
                     document.getElementById(id).value='O';
                    var x='X';
                    var o='O';
                    t++;
                    var b1=document.getElementById('b1').value;
                    var b2=document.getElementById('b2').value;
                    var b3=document.getElementById('b3').value;
                    var b4=document.getElementById('b4').value;
                    var b5=document.getElementById('b5').value;
                    var b6=document.getElementById('b6').value;
                    var b7=document.getElementById('b7').value;
                    var b8=document.getElementById('b8').value;
                    var b9=document.getElementById('b9').value;

                    if((b1==x && b5==x && b9==x)||(b3==x && b5==x && b7==x)||(b1==x && b2==x && b3==x)||(b4==x && b5==x && b6==x)||(b7==x && b8==x && b9==x)||(b1==x && b4==x && b7==x)||(b2==x && b5==x && b8==x)||(b3==x && b6==x && b9==x)){
                        window.alert("player1 WON ");
                    reset();
            
                    }
                    if((b1==o && b5==o && b9==o)||(b3==o && b5==o && b7==o)||(b1==o && b2==o && b3==o)||(b4==o && b5==o && b6==o)||(b7==o && b8==o && b9==o)||(b1==o && b4==o && b7==o)||(b2==o && b5==o && b8==o)||(b3==o && b6==o && b9==o)){
                        window.alert("player2 WON ");
                        reset();
        

                    }
                }

    else if(t%2==0){
    
                        document.getElementById(id).value='X';
                    t++;
                        
                        var x='X';
                    var o='O';
                    var b1=document.getElementById('b1').value;
                    var b2=document.getElementById('b2').value;
                    var b3=document.getElementById('b3').value;
                    var b4=document.getElementById('b4').value;
                    var b5=document.getElementById('b5').value;
                    var b6=document.getElementById('b6').value;
                    var b7=document.getElementById('b7').value;
                    var b8=document.getElementById('b8').value;
                    var b9=document.getElementById('b9').value;

                    if((b1==x && b5==x && b9==x)||(b3==x && b5==x && b7==x)||(b1==x && b2==x && b3==x)||(b4==x && b5==x && b6==x)||(b7==x && b8==x && b9==x)||(b1==x && b4==x && b7==x)||(b2==x && b5==x && b8==x)||(b3==x && b6==x && b9==x)){
                        window.alert("player1 WON ");
                        reset();
                        
                    }


                    if((b1==o && b5==o && b9==o)||(b3==o && b5==o && b7==o)||(b1==o && b2==o && b3==o)||(b4==o && b5==o && b6==o)||(b7==o && b8==o && b9==o)||(b1==o && b4==o && b7==o)||(b2==o && b5==o && b8==o)||(b3==o && b6==o && b9==o)){
                        window.alert("player2 WON ");
                        reset();
                    
                     }

                     
                }

                
}
