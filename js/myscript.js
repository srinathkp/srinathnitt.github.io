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