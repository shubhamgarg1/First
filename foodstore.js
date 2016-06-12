var xmlHttp=createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	//alert("Hello");
	if(window.ActiveXObject){
		try{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e){
			xmlHttp=false;
		}
	}
	else{
		try{
			xmlHttp=new XMLHttpRequest();
		}
		catch(e){
			xmlHttp=false;
		}
	}
	if(!xmlHttp){
		alert("Can't create that object");
	}
	else{
		//alert("Hello");
		return xmlHttp;
	}
}
function process(){
	//alert(xmlHttp.readyState());
	//alert("hekko");
	if(xmlHttp.readyState()==0 || xmlHttp.readyState==4){
		
		food=encodeURIComponent(document.getElementById("userInput").value);
		xmlHttp.open("GET","foodstore.php?food="+food,true);
		xmlHttp.onreadystatechange=handleServerResponse;
		
		xmlHttp.send(null);
		
		
	}
	else{
		setTimeout('process()',1000);
	}
}
function handleServerResponse(){
	if(xmlHttp.readyState==4 ){
		if(xmlHttp.status==200){
			xmlResponse=xmlHttp.responseXML();
			xmlDocumentElement=xmlResponse.documentElement;
			message=xmlDocumentElement.firstChild.data;
			document.getElementById("underinput").innerHTML= '<span style="color:blue">' + message+'</span>';
			setTimeout('process()',1000);
		}
		else{
			alert('Something went wrong');
		}
	}
}