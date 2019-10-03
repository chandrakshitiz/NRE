var caro1="url('banner1.jpeg')";
var caro2="url('banner2.jpeg')";
function caro()
{
	var x=document.querySelector(".carousel");
	x.style.backgroundImage=caro2;
	var temp=caro1;
	caro1=caro2;
	caro2=temp;
}
setInterval(caro, 3000);