//******************************Global Variables*************************************************
var status =[];
status=getstoredstatus();
console.log(status);
var left_box=document.getElementById("id_left_box");
var search_box=document.getElementById("search_box");
var search_btn=document.getElementById("search_box_btn");



var ENTER_KEY_CODE=13;
var DOWN_ARROW_KEY_CODE=40;
var UP_ARROW_KEY_CODE=38;

//*****************************Search Box Functions Starts Here**********************************
var prev_term="";
var suggestion_list=document.getElementById("suggestions");

search_box.addEventListener('keyup',function(event){
	if(event.keyCode===ENTER_KEY_CODE)
		return;
	var search_term=search_box.value.toLowerCase();
	if(search_term===prev_term)
		return;
	suggestion_list.innerHTML="";
	if(search_term!==""){
		data.forEach(function(data){
			if(data.toLowerCase().indexOf(search_term)!==-1){
				var list_element=document.createElement("li");
				list_element.innerHTML=data;
				suggestion_list.appendChild(list_element);
				list_element.addEventListener('click',function(event){
					search_box.value=list_element.innerHTML;
					suggestion_list.innerHTML="";
				});
			}
		});
	}
	prev_term=search_term;
});


//*****************************Search Box Functions Ends Here************************************

var elemts=["Pawan","Navroop","Name1","Name2","Hello"];
var right=document.getElementById("right_box");
var list=document.createElement("ol");
list.setAttribute("id","Listofdatatobedisplayed")
right.appendChild(list);
for(var counter=0;counter<elemts.length;counter++){
	var ele=document.createElement("li");
	ele.setAttribute("id","listofactivity");
	var text=document.createTextNode(elemts[counter]);
	ele.appendChild(text);
	list.appendChild(ele);
}

var initiallength=elemts.length;
newentryinactivity("pawan");

function newentryinactivity(x){
	var toremove=document.getElementById("listofactivity");
	var getlast=toremove.lastChild;
	document.getElementById("Listofdatatobedisplayed").removeChild(toremove);
	console.log("Hello");
	var ele=document.createElement("li");
	ele.setAttribute("id","listofactivity");
	var text=document.createTextNode(x);
	ele.appendChild(text);
	list.appendChild(ele);
}

//Up here is code for currently trending
//down here is for adding and deleting status

function getstoredstatus(){
    if (!localStorage.currentuser){
		localStorage.currentuser = JSON.stringify([]); 
	}
    return JSON.parse(localStorage.currentuser); 
}


if(status.length>0){
	displayallstatus();
}


function displayallstatus(){
	for(var i=0;i<status.length;i++){
		var appendhere=document.getElementById("allstatushere");
		var newdiv=document.createElement("div");
		appendhere.appendChild(newdiv);
		var te=document.createTextNode("Name of Person : \n");
		var textinstatus=status[i].status;
		var textnode=document.createTextNode(textinstatus);
		newdiv.appendChild(te);
		newdiv.appendChild(textnode);
    	var btt=document.createElement("button");
    	var tt=document.createTextNode("Delete");
    	btt.appendChild(tt);
    	newdiv.appendChild(btt);
    	btt.addEventListener("click",function(event){
       	 	var paa=event.target.parentNode;
        	var grandpaa=event.target.parentNode.parentNode;
        	grandpaa.removeChild(paa);
		});
	}
}


function storecurrentstatus(x){
	localStorage.currentuser = JSON.stringify(x);
}





function addstatus(){
	var obb=new Object();
		
		var appendhere=document.getElementById("allstatushere");
		var newdiv=document.createElement("div");
		appendhere.appendChild(newdiv);
		var te=document.createTextNode("Name of Person : \n");
		var textinstatus=document.getElementById("Inputforstatus");
		var textnode=document.createTextNode(textinstatus.value);
		newdiv.appendChild(te);
		newdiv.appendChild(textnode);
    	obb.status=textinstatus.value;
		//status.push(obb);
		var btt=document.createElement("button");
    	var tt=document.createTextNode("Delete");
    	btt.appendChild(tt);
    	newdiv.appendChild(btt);
    	btt.addEventListener("click",function(event){
       	 	var paa=event.target.parentNode;
        	var grandpaa=event.target.parentNode.parentNode;
        	grandpaa.removeChild(paa);
		});
		
		storecurrentstatus(status);
		
}

//for image
function readURL(input) {
	if (input.files && input.files[0]) {
  
	  var reader = new FileReader();
  
	  reader.onload = function(e) {
		$('.image-upload-wrap').hide();
  
		$('.file-upload-image').attr('src', e.target.result);
		$('.file-upload-content').show();
  
		$('.image-title').html(input.files[0].name);
	  };
  
	  reader.readAsDataURL(input.files[0]);
  
	} else {
	  removeUpload();
	}
  }
  
  function removeUpload() {
	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
	$('.file-upload-content').hide();
	$('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
		  $('.image-upload-wrap').addClass('image-dropping');
	  });
	  $('.image-upload-wrap').bind('dragleave', function () {
		  $('.image-upload-wrap').removeClass('image-dropping');
  });
