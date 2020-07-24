(function(window) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i in names){
    	var first=((names[i]).charAt(0)).toLowerCase();
    	if(first=='j'){
    		window.byeSpeaker.speak(names[i]);
    	}
    	else{
    		window.helloSpeaker.speak(names[i]);
    	}
    }
})(window);