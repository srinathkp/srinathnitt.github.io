var cnt=0;
var value;
function input1(btn)
{
if(cnt==0){                 document.getElementById("textbox1").value="";cnt=2;               }
if(btn.value=="x"){btn.value="*";}

document.getElementById("textbox1").value=document.getElementById("textbox1").value + btn.value;
if(btn.value=="*"){btn.value="x";}
answer();
}


function cleartext1()
{
document.getElementById("textbox1").value="0";
cnt=0;

}

function deletetext1()
{
var input=document.getElementById("textbox1").value;
document.getElementById("textbox1").value=input.substr(0,input.length-1);

}

function compute1()
{
try{
if(eval(document.getElementById("textbox1").value) || eval(document.getElementById("textbox1").value)==0)
{	document.getElementById("output1").innerHTML= eval(document.getElementById("textbox1").value);
cnt=0;
value=eval(document.getElementById("textbox1").value);
}
else{
throw(err);}
}
catch(err)
{
	document.getElementById("output1").innerHTML="SyntaxError";cnt=0;value=0;

}
}
function answer1()
{
try{
if(eval(document.getElementById("textbox1").value) || eval(document.getElementById("textbox1").value)==0)
{	document.getElementById("output1").innerHTML= eval(document.getElementById("textbox1").value);

value=eval(document.getElementById("textbox1").value);
}
else{
throw(err);}
}
catch(err)
{
	document.getElementById("output1").innerHTML="";

}

}


function btnonhover(btn)
{
btn.className="btnonhover";

}

function btnonhover1(btn)
{
btn.className="btnonhover1";

}

function btnnormal(btn)
{
	btn.className="btn";
}
function btnnormal1(btn)
{
btn.className="btn1";
}

function isNumberKey(evt){
	if(cnt==0){document.getElementById("textbox1").value="";cnt=2;}
    var charCode = (evt.which) ? evt.which : event.keyCode
if(charCode==13)
{compute();}    
else if (charCode > 31 && (charCode != 42 &&charCode != 43 &&charCode != 45 &&charCode != 46 &&charCode != 47 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}

function btnonhoverdc(btn)
{
btn.className="btnonhover1";
}

function btnnormaldc(btn)
{
	btn.className="btn1";
   document.getElementById("tip").style.display="none";


}

