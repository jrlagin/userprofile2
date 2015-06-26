
//function for likes
 var likes = 0;

    function likeMe() {

        likes += 1;
        document.getElementById("likeme").innerHTML = likes;
        document.getElementById('heart').style.display = 'block';
     }

	 function nextSlide() {
	 	document.getElementById('item1').style.display = 'none';
	  document.getElementById('item2').style.display = 'block';
		}
	 function prevSlide() {
	 	document.getElementById('item1').style.display = 'block';
         document.getElementById('item2').style.display = 'none';
		}

	//function to display comment
	  function btncomment(){
	  	document.getElementById('commentbox').style.display = 'block';
	  }



 //function heart
var likes2 = 25;
function btnColor(btn, testbtn, color) {
	  likes2 += 0;

        document.getElementById("commentme12").innerHTML =  likes2;

var property = document.getElementById(btn);
    if (property.className !== 'toggled') {
        property.style.color=color;
        property.className = 'toggled'
    }

    else {
        property.style.color = "";
        property.className = '';
        var likes3 = 23;
         likes3 += 1;
        document.getElementById("commentme12").innerHTML =likes3;
    }


var likes22 = 25;
likes22 += 0;
document.getElementById("commentme2").innerHTML =  likes22;

var property = document.getElementById(testbtn);
    if (property.className !== 'toggled') {
        property.style.color=color;
        property.className = 'toggled'
    }

    else {
        property.style.color = "";
        property.className = '';
        var likes33 = 23;
         likes33 += 1;
        document.getElementById("commentme2").innerHTML =likes3;
       
    }


}

//function to display post comment
 
     var clickss = 0;
    function test2(){
        
        clickss += 1;
        document.getElementById("commentme").innerHTML = clickss;


		if(clickss == 1){
		   
		    var v2 = document.getElementById('Search_Text').value;  
		     document.getElementById('postslide').innerHTML=v2;
		     document.getElementById('item1').style.display = 'none';
	          document.getElementById('item2').style.display = 'block';
		  
		}
		else if(clickss == 2){
		     
		      var v = document.getElementById('Search_Text').value;  
		      document.getElementById('postslideb').innerHTML=v;
		    
		}
		else { 
		     
		      var v0 = document.getElementById('Search_Text').value;  
		      document.getElementById('postc').innerHTML=v0;
		     }  
        
            document.getElementById('Search_Text').value ="";
        
    }
   
      var clickss2 = 0;
    function test3(){
        
        clickss2 += 1;
        document.getElementById("commentme2").innerHTML = clickss2;
          	
       

		if(clickss2 == 1){
		  
		    var v22 = document.getElementById('Search_Text2').value;  
		     document.getElementById('posta').innerHTML=v22;
		  
		}
		else if(clickss2 == 2){
		      
		      var v2 = document.getElementById('Search_Text2').value;  
		      document.getElementById('postb').innerHTML=v2;
		    
		}
		else { 
		      document.getElementById('noti').style.display = 'block';
		      
		     }  
        
         document.getElementById('Search_Text2').value ="";
        
    }