	var d = new Date();
	//----------------------------------------------------------------------------------
									//SECONDS
			var timings = setInterval (Sec, 1000);
				 
			var s=d.getSeconds();	
			var y=(s*6);
			function Sec(){
				
				if(y==360){
							y=0;
							y+=6;
							handsec.style.setProperty('--x', y+'deg');
							}
				
					
						y=y+6;
						
						handsec.style.setProperty('--x', y+'deg');
							
							}
	//	------------------------------------------------------------------------------------------		
									//MINUTES
			var timings1 = setInterval (Min, 1000);	
			var m=d.getMinutes();
			var z=(m*6.0);
			function Min(){
			
					if(z==360){
								z=0;
								z+=0.1;
								handmin.style.setProperty('--x',z+'deg');
							  }
						z+=0.1;
						handmin.style.setProperty('--x', z+'deg');
			
							}
	//----------------------------------------------------------------------------------------------	
									//HOURS
			var timings2 = setInterval (Hou, 1000);	
					
			var h=d.getHours(); 	
			if(h>=12){h=h-12;}		
			var k=(h*30);
			
			function Hou(){
							if(k>=360)
								{	while(k>0){k-=360;}
									k+=0.0083333333333333;
									handhour.style.setProperty('--x',k+'deg');
								}
							k+=0.0083333333333333;	
							handhour.style.setProperty('--x', k+'deg'); 
						   }
				