var name; //имя добавляемого файла
var ansString; //содержимое этого файла

function writeTestFile(){ /////////////////NAME, ANSSTRING/////////////////////////
	
	console.log("lol");

	 var documentsDir;
	 var dir = tizen.filesystem;
	 var flag = 0;
	 
	 
	 function onsuccess(files) {
	   for(var i = 0; i < files.length; i++) {
	     console.log("File Name is " + files[i].name); // displays file name
	     if (files[i].name===name){
	    	 flag = 33;
	     }
	     //var str = document.getElementById("list_of_files").innerHTML;
	     //document.getElementById("list_of_files").innerHTML = str + files[i].name + '; ';
	   }

	   console.log("после вывода списка файлов");

	   //var str = document.getElementById("list_of_files").innerHTML;
	   //document.getElementById("list_of_files").innerHTML = str + '<br>';
	   
	   console.log("перенос строки после вывода списка файлов");
	   console.log(flag);
	   
	   if (flag===33) {
		   reWriteF();
	   }
	   else {
		   newWriteF();
	   }

	   function newWriteF(){
		   console.log("newWriteF");
		   console.log(name);
		   //console.log(documentsDir);
		   var testFile = documentsDir.createFile(name);
		   console.log("FILE = " + testFile);
		   /*if (testFile != null) { // проверка на существование*/		     
		   testFile.openStream(
		         "w",
		         function(fs){
		           fs.write(ansString);//////////////////ansString/////////////////////
		           fs.close();
				   alert("Book successfully uploaded");
				   document.getElementById("restart").click();//////////////////////
		         }, function(e){
		           console.log("Error " + e.message);
		         }, "UTF-8"   
		     );
		   console.log("newWriteF");
		   /*}*/
	   }
	   function reWriteF() {
		   alert("File already exists");
		   console.log("File already exists");
		   document.getElementById("restart").click();
		}
	 }
	 
function onerror(error) {
	console.log("The error " + error.message + " occurred when listing the files in the selected folder");
}

	tizen.filesystem.resolve(
		     'documents',
		     function(dir){
		       documentsDir = dir; 
		       dir.listFiles(onsuccess,onerror);
		     }, function(e) {
		       console.log("Error" + e.message);
		     }, "rw"
		 );
}

function loadFile(files) {
	//alert('444444444444');
	var file = files[0];
	document.getElementById("file_name").innerHTML = document.getElementById("file_name").innerHTML + file.name; //чтобы скрыть оригинальный инпут
	var myReader = new FileReader();
	ansString = "";
	//alert('22222222222');
	myReader.readAsText(file);
	//alert('wait');
	myReader.onload = function(e) {
		//alert('555555555555');
		ansString = e.target.result;
		name = file.name;
		writeTestFile();
		//alert("333333333333");
		//alert("You choose" + file.name);
		//document.getElementById('ansBox').innerHTML = ansString;
	}
}