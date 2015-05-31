function onhover(dp)
      {
      	dp.style.width=2*10.98+"%"; 
      	dp.style.height=2*19.53+"%"; 
      	dp.style.left="39%";
      	 dp.style.top="13%"; 
      	}
      	 function onout(dp) 
      	{
      		dp.style.width="10.98%";
      		 dp.style.height="19.53%";
      		  dp.style.left="44.5%"; 
      		  dp.style.top="20%";
      		   }
      		   function onclickpic(dp)
      		   {
                	if(dp.id=="dp1"){dp.id="dp2";}
                	else if(dp.id=="dp2"){dp.id="dp3";}
                	else{dp.id="dp1";}

                		   }

                      function view1()
                      {
document.getElementById("view1").style.display="block";
document.getElementById("trigger").style.display="none";
document.getElementById("view2").style.display="none";
document.getElementById("view3").style.display="none";
document.getElementById("view4").style.display="none";

document.getElementById("calc").style.display="none";
document.getElementById("scicalc").style.display="none";
document.getElementById("1").className="type2";
document.getElementById("2").className="type";
document.getElementById("3").className="type";
document.getElementById("4").className="type";
document.getElementById("5").className="type";

                      }
    function view2()
    {

document.getElementById("view1").style.display="none";
document.getElementById("trigger").style.display="none";
document.getElementById("view2").style.display="block";
document.getElementById("view3").style.display="none";
document.getElementById("view4").style.display="none";

document.getElementById("calc").style.display="none";
document.getElementById("scicalc").style.display="none";

document.getElementById("1").className="type";
document.getElementById("2").className="type2";
document.getElementById("3").className="type";
document.getElementById("4").className="type";
document.getElementById("5").className="type";
    }

    function view3()
    {

document.getElementById("view1").style.display="none";
document.getElementById("trigger").style.display="none";
document.getElementById("view2").style.display="none";
document.getElementById("view3").style.display="block";
document.getElementById("view4").style.display="none";
    
document.getElementById("calc").style.display="none";
document.getElementById("scicalc").style.display="none";

document.getElementById("1").className="type";
document.getElementById("2").className="type";
document.getElementById("3").className="type2";
document.getElementById("4").className="type";
document.getElementById("5").className="type";
    }
    function view4()
    {

document.getElementById("view1").style.display="none";
document.getElementById("trigger").style.display="none";
document.getElementById("view2").style.display="none";
document.getElementById("view3").style.display="none";
document.getElementById("view4").style.display="block";

document.getElementById("calc").style.display="none";
document.getElementById("scicalc").style.display="none";

document.getElementById("1").className="type";
document.getElementById("2").className="type";
document.getElementById("3").className="type";
document.getElementById("4").className="type";
document.getElementById("5").className="type";
    }
    function calc()
    {

document.getElementById("view1").style.display="none";
document.getElementById("trigger").style.display="none";
document.getElementById("view2").style.display="none";
document.getElementById("view3").style.display="none";
document.getElementById("view4").style.display="none";
document.getElementById("calc").style.display="block";
document.getElementById("scicalc").style.display="none";

document.getElementById("1").className="type";
document.getElementById("2").className="type";
document.getElementById("3").className="type";
document.getElementById("4").className="type2";
document.getElementById("5").className="type";



    }
    function scicalc()
    {
    

document.getElementById("view1").style.display="none";
document.getElementById("trigger").style.display="none";
document.getElementById("view2").style.display="none";
document.getElementById("view3").style.display="none";
document.getElementById("view4").style.display="none";
document.getElementById("calc").style.display="none";
document.getElementById("scicalc").style.display="block";

document.getElementById("1").className="type";
document.getElementById("2").className="type";
document.getElementById("3").className="type";
document.getElementById("4").className="type";
document.getElementById("5").className="type2";






    }