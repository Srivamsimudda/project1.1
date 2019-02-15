function getfile(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 &&xhr.status=="200"){

			callback(xhr.responseText);
		}
	}
	xhr.send(null);

}

getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
	
});
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.name;
	left.appendChild(h2);
	var h21=document.createElement("h3");
	h21.textContent=e.roll;
	left.appendChild(h21);
	var h22=document.createElement("h3");
	h22.textContent=e.place;
	left.appendChild(h22);
	var h23=document.createElement("h3");
	h23.textContent=e.des;
	left.appendChild(h23);
}
var right=document.querySelector(".right");
function career(c){
	var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.appendChild(h1);
	var c2=document.createElement("h2");
	c2.textContent="career";
	right.appendChild(c2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var r=document.createElement("r");
	r.textContent=c.info;
	right.appendChild(r);
}
function education(t){
	var h2=document.createElement("h2");
	h2.innerHTML="EDUCATIONAL DETAILS";
	right.appendChild(h2);
	var wo=document.createElement("hr");
	right.appendChild(wo);
	var table=document.createElement("table");
	table.border="1";
	var tr1="<tr1><td>sno</td><td>degree</td><td>college</td><td>per</td><td>yop</td></tr1>";
	var tr2="";
	for(i=0;i<t.length;i++)
	{
		tr2=tr2+"<tr><td>"+t[i].sno+"</td><td>"+t[i].degree+"</td><td>"+t[i].college+"</td><td>"+t[i].per+"</td><td>"+t[i].yop+"</td></tr>";

	}
	table.innerHTML=tr1+tr2;
	right.appendChild(table);

}
function languages(l){
 	var h2=document.createElement("h2");
 	h2.innerHTML="languages";
 	right.appendChild(h2);
 	var tt=document.createElement("hr");
 	right.appendChild(tt);
 	var ul=document.createElement("ul");
 	right.append(ul);
 	for(i=0;i<l.length;i++)
 	{
 		var li=document.createElement("li");
 		li.innerHTML=l[i].lang;
 		ul.append(li);
 	}

 }