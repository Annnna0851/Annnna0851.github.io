function change(){
	document.getElementById("img").src='https://th.bing.com/th/id/R.08d35a2025750ad2a8b40531e5cd41d1?rik=SL14DNhiWoLt8w&riu=http%3a%2f%2fpic.17rf.com%2f2018%2f07%2fsky%E5%85%89%E9%81%87.jpg&ehk=4as6ofOkVYvTTN%2bzD5aBRLy0u2XXABvAgn1WOThjlUw%3d&risl=&pid=ImgRaw&r=0';
}

function change1(){
	document.getElementById('2').innerHTML='2';
}
function change2(){
	var css=document.getElementById('3');
	document.getElementById('3').style.backgroundColor='grey';
	css.style.fontFamily='Arial';
	css.style.textAlign='center';
}

function change3(){
        document.getElementById('five').innerHTML=-12*5/9
}

function sum(){
	var n1=parseInt(prompt('enter number 1'));
    var n2=parseInt(promp('enter number 2'));
    return('sum').innerHTML=n1+n2;
}


function asking(){
	var firstName=prompt('what is your first name?');
	var lastName=prompt('what is your last name?');
	alert ( Nice to meet you, firstName+lastName);
}