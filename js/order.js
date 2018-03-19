window.onload=function(){
	var jia=document.getElementsByClassName('two_seven')[0];
	var number=document.getElementsByClassName('two_six')[0];
	var jian=document.getElementsByClassName('two_five')[0];
	
	var shu1=document.getElementById('shu1')
	var shu2=document.getElementById('shu2')
	var shu3=document.getElementById('shu3')
	
	var c=1;
	jia.onclick=function(){
		c++;
		number.innerHTML++;
		var shu=number.innerHTML;
		//shu1.innerHTML=c*66.00+'.00'
		shu2.innerHTML=c*66.00+'.00'
		shu3.innerHTML=c*66.00+'.00'
		//alert(shu)
	}
	jian.onclick=function(){
		c--;
		if(c<=0){
			c=0;
		}
		number.innerHTML--;
		if(number.innerHTML<=-1){
			number.innerHTML=0;
		}
//		shu1.innerHTML=c*66.00+'.00'
		shu2.innerHTML=c*66.00+'.00'
		shu3.innerHTML=c*66.00+'.00'
		var shu=number.innerHTML;
		//alert(shu);
	}
}
