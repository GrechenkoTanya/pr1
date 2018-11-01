function $()
{ var elements=new Array();
for (var i=0; i<arguments.length; i++)
{ var element=arguments[i];
if (typeof element=='string')
element=document.getElementById(element);
if (arguments.length==1)
return element;
elements.push(element);
}
return elements; }

function f4()
{
	document.getElementById("picture").src="images/java1.png";
}
function f3()
{
	document.getElementById("picture").src="images/java2.png";
}
function f2()
{
	document.getElementById("picture").src="images/java3.png";
}
function f1()
{
	document.getElementById("picture").src="images/java4.png";
}
function fff()
{
	document.getElementById("picture").value="images/java1.png";
	alert('сбросить');
}
