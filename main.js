/*var myText;
*/
//var interval;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};/*
// 24/7 23:16
function writeTestFile(){
	var newDir, newFile;
	tizen.filesystem.resolve("documents", function(dir) 
	    {
	       newDir = dir.createDirectory("newDir");
	       newFile = newDir.createFile("newFilePath.txt");
	       newFile.openStream(
	        "w",
	        function(fs) {
	        	 fs.write("test test test");
	        	 fs.close();
	        }, function(e) {
	        	 console.log("Error " + e.message);
	        }, "UTF-8");
	    });
	console.log("OK W");
}
    
function readTestFile(){
	tizen.filesystem.resolve("documents", function(dir) 
	    {
	       file = dir.resolve("newDir/newFilePath.txt");
	       file.openStream(
	    	    "r", 
			    function(fs) {
	                var text = fs.read(file.fileSize);
	                fs.close();
	                console.log(text);
	            }, function(e) {
	                console.log("Error " + e.message);
	            }, "UTF-8");
	    });
	console.log("OK R");
}

function getXmlDoc(cont){
	document.getElementById("auth").innerHTML = "";
	var myText = cont;
	alert(text.children[0]); 
	parser = new DOMParser();
    xmlDoc = parser.parseFromString(myText,"text/xml");
    
    return xmlDoc;
    
    alert(xmlDoc.firstChild.textContent);

    $(xmlDoc).find("title-info").each(function () {
		$("#auth").append($(this).find("author").text());
	});
	
	
    var authA = xmlDoc.getElementsByTagName("title-info")[0].firstChild .getElementsByTagName("author")[0].nodeValue;
    
    alert(authA);
	document.getElementById("auth").innerHTML = authA;

    
    if(authA) {
    document.getElementById("auth").innerHTML = xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue + xmlDoc.getElementsByTagName("author")[0].childNodes[1].nodeValue + xmlDoc.getElementsByTagName("author")[0].childNodes[3].nodeValue;
    }
    else {
    	document.getElementById("auth").innerHTML = "ERR";
    }
        
}

function getAuth(text) {
	var cont = text;
	var xmlDoc = getXmlDoc(cont);
	$(xmlDoc).find("title-info").each(function () {
		$("#auth").append($(this).find("author").text());
	});
}

var indexP = 0;
var indexInP = 0;

function printOneWord(arrOfPar,numPar){
	console.log(indexP + '=>' + numPar);
	if (indexP < numPar) { // если параграфы не закончились, то выводим текущее слово нужного
		var parCont = arrOfPar[indexP]; // текст в параграфе
		var arrWordsInP = parCont.split(" "); // массив слов в параграфе
		if(indexInP < arrWordsInP.length) { // если пробежались не по всем словам, то выводим следующее
			document.getElementById("box").innerHTML = arrWordsInP[indexInP];
			indexInP++;
		}
		else { // иначе переходим к следующему параграфу
			indexP++;
			indexInP = 0;
		}
	}
	else { // чистим интервал
		clearInterval(interval);
	}
} 

function getText(text) {
	var cont = text;
	var xmlDoc = getXmlDoc(cont);
	
	var arrOfPar = [];
		
	$(xmlDoc).find("section").find("p").each(function () {
		$("#book_cont").append($(this).text()+"<br>&nbsp &nbsp &nbsp");
		
		var arrWords = [];
		
		var str = $(this).text();
		arrWords = str.split(" ");
			
		var lenArrW = arrWords.length;
		indexInP = 0;
		
		arrOfPar[arrOfPar.length] = $(this).text(); //массив параграфов

		//занести indexInP
	});
	
	indexP = 0;
	indexInP = 0;
	
	var numPar = arrOfPar.length;
	interval = setInterval(printOneWord,500,arrOfPar,numPar);
	clearInterval(interval);
}

function pauseReading() {
	alert(indexP + ' ' + indexInP);
	clearInterval(interval);
}

function readBookFile(path){
	tizen.filesystem.resolve("documents", function(dir) 
	    {
	       file = dir.resolve(path);
	       file.openStream(
	    	    "r", 
			    function(fs) {
	                var text = fs.read(file.fileSize);
	                fs.close();
	                console.log(text);
	                book = document.getElementById("book_cont");
	            	book.innerHTML = text;
	                getText(text);
	            	getAuth(text);
	            	myXml(text);
	            }, function(e) {
	                console.log("Error " + e.message);
	                book = document.getElementById("book_err");
	            	book.innerHTML = e.message;
	            }, "UTF-8");
	    });
	console.log("OK BOOK");
}*/