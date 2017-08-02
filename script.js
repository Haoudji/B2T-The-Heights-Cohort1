//print all p elements
	  var ele =	document.getElementsByTagName("p");
	  console.log(ele);
	  //canges p text elements
	  var temp = document.getElementById("temp");
	  console.log(temp);
	  temp.innerHTML = "brrrr";
	  //changes p element to user input
	  
	  document.getElementById("message").innerHTML = prompt( "do something specific");
	  // change p element style
	  document.getElementById("message").style.color = "pink";
	  document.getElementById("message").style.fontSize = "50px";
	  //give a element href attribute
	  document.getElementById("link").setAttribute("href" , "https://www.google.com/");
	  //creating an element
	  var h1 = document.createElement("h1");
	  h1.innerHTML = "you used to call me in my cellphone";
	  document.getElementById("stuff").appendChild(h1);