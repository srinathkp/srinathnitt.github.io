var cnt=0;
var value,pi=22/7;
var a,b;


function input2(btn)
{
if(cnt==0){                 document.getElementById("textbox2").value="";cnt=2;               }
if(btn.value=="x"){btn.value="*";}
if(btn.value=="^"){btn.value="pow(,";}
if(btn.value=="sin" || btn.value=="cos" || btn.value=="tan"||btn.value=="ln"||btn.value=="log"||btn.value=="e"||btn.value=="fact" || btn.value=="sqrt")
{ btn.value+="(";}


document.getElementById("textbox2").value=document.getElementById("textbox2").value + btn.value;
if(btn.value=="*"){btn.value="x";}
if(btn.value=="pow(,"){btn.value="^";}
if(btn.value=="sin(" || btn.value=="cos(" || btn.value=="tan("||btn.value=="ln("||btn.value=="log("||btn.value=="e("||btn.value=="fact(" || btn.value=="sqrt(")
{ btn.value=btn.value.substr(0,btn.value.length-1);}
answer();
}


function cleartext2()
{
document.getElementById("textbox2").value="0";
cnt=0;

}

function deletetext2()
{
var input=document.getElementById("textbox2").value;
document.getElementById("textbox2").value=input.substr(0,input.length-1);

}

function compute2()
{
try{
if(eval(document.getElementById("textbox2").value) || eval(document.getElementById("textbox2").value)==0)
{	document.getElementById("output2").innerHTML= eval(document.getElementById("textbox2").value);
cnt=0;
value=eval(document.getElementById("textbox2").value);
}
else{
throw(err);}
}
catch(err)
{
	document.getElementById("output2").innerHTML="SyntaxError";cnt=0;value=0;

}
}
function answer2()
{
try{
if(eval(document.getElementById("textbox2").value) || eval(document.getElementById("textbox2").value)==0)
{	document.getElementById("output2").innerHTML= eval(document.getElementById("textbox2").value);

value=eval(document.getElementById("textbox2").value);
}
else{
throw(err);}
}
catch(err)
{
	document.getElementById("output2").innerHTML="";

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
	if(cnt==0){document.getElementById("textbox2").value="";cnt=2;}
    var charCode = (evt.which) ? evt.which : event.keyCode
if(charCode==13)
{compute();}    
else if (charCode > 31 && (charCode != 42 &&charCode != 43 &&charCode!=44 &&charCode != 45 &&charCode != 46 &&charCode != 47 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}

function btnonhoverdc(btn)
{
btn.className="btnonhover1";
document.getElementById("tip").style.display="block";

}

function btnnormaldc(btn)
{
	btn.className="btn1";
   document.getElementById("tip").style.display="none";


}
 

function sin(rad)
{return Math.sin(rad);}
function cos(rad)
{ return Math.cos(rad);}
function tan(rad)
{return Math.tan(rad);}
function e(num)
{return Math.exp(num);}
function  ln(num)
{ return  Math.log(num);}
function log(num)
{ 
	return 2.303*Math.log(num);
}
function fact(num)
{   var fact=1;
	for(i=1;i<=num;i++)
	{
    fact=fact*i;
	}
return fact;
}

function sqrt(num)
{
	return Math.sqrt(num);
}
function pow(x,y)
{
	return Math.pow(x,y);
}
