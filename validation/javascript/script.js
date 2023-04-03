
	//node target
			var cname=document.getElementById("name");	
			var cphone=document.getElementById("phone");	
			var cmail=document.getElementById("mail");	
			var cpassword=document.getElementById("password");	
			var crpassword=document.getElementById("rpassword");
			var cfile=document.getElementById("file");

	//variables
			var msg="";
			var arr=[0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','&','*','(',')','_','+','<','>',',',';',':','?',"\\","|","'",'"','[',']','{','}','`','~','-','=','.'];

	//main function
	function fetchfun() {
			var name=document.getElementById("name").value;	
			var phone=document.getElementById("phone").value;	
			var mail=document.getElementById("mail").value;	
			var password=document.getElementById("password").value;	
			var rpassword=document.getElementById("rpassword").value;
			var file=document.getElementById("file").value;
			var nameval = name.trim();
			var phoneval = phone.trim();
			var mailval = mail.trim();
			var passwordval = password.trim();
			var rpasswordval = rpassword.trim();
			var fileval = file.trim();

	//split function for mail validation
			var split1=mailval.split("@");
			var split2=mailval.split(".");
			var v1=false; var v2=false; var v3=false; var v4=false; var v5=false; var v6=false;

	//warning message fuctions
			function success(cls,msg,id){
				cls.style="border-color:green";
				document.getElementById(id).style="visibility : visible; color : green;";
				document.getElementById(id).innerHTML=msg;
				return true;
			}
			function unsuccess(cls,msg,id){
				document.getElementById(id).style="visibility : visible; color : red;";
				document.getElementById(id).innerHTML=msg;
				cls.style="border:3px solid red";
			}

	//name validation
			for (var i = nameval.length - 1; i >= 0; i--) 
			{
				for (var j = arr.length - 1; j >= 0; j--) 
				{
					if (nameval[i]==arr[j] )
					{
						msg="number and special char. can't use";
						unsuccess(cname,msg,"small1");
					}
				}
			}
			if(nameval==''){
				msg="enter name";
				unsuccess(cname,msg,"small1");
			}else if(nameval.length<=3){
				msg="enter full name";
				unsuccess(cname,msg,"small1");
			}else{
				msg="Successful";
				v1=success(cname,msg,"small1");
			}

	//phone validation
			if(phoneval==''){
				msg="enter phone no.";
				unsuccess(cphone,msg,"small2");
			}else if(phone.length!=10){
				msg="enter valid phone no.";
				unsuccess(cphone,msg,"small2");
			}else if((phone[length-0]!=9)&&(phone[length-0]!=8)&&(phone[length-0]!=7)&&(phone[length-0]!=6)){
				msg="enter valid phone no.";
				unsuccess(cphone,msg,"small2");
			}else{
				msg="Successful";
				v2=success(cphone,msg,"small2");
			}

	//mail validation
			if(mailval==''){
				msg="enter mail";
				unsuccess(cmail,msg,"small3");
			}else if(mailval.length<=11){
				msg="enter full mail";
				unsuccess(cmail,msg,"small3");
			}else if((mailval.charAt(0)=="@") || (mailval.charAt(mailval.length-1)==".")){
				msg="don't start with '@' or don't end with '.'";
				unsuccess(cmail,msg,"small3");
			}else if(!(split1[1]&&split2[1])) {
				msg="Enter full mail like 'xyz@gmail.com'";
				unsuccess(cmail,msg,"small3");
			}else{ 
				msg="Successful";
				v3=success(cmail,msg,"small3");
			}

	//password validation
			var flgCase=false;
			var flgSpcChar=false;
			for (var i = passwordval.length - 1; i >= 0; i--) {
				if(passwordval[i]==passwordval[i].toUpperCase()){
					flgCase=true;
				}
				for (var j = arr.length - 1; j >= 0; j--) {
					if(passwordval[i]==arr[j]){
						flgSpcChar=true;
					}
				}
			}
			
			if(passwordval==''){
				msg="enter password";
				unsuccess(cpassword,msg,"small4");
			}else if(passwordval.length<=4 || passwordval.length>=6){
				msg="password length must be 5 digit";
				unsuccess(cpassword,msg,"small4");
			}else if (flgCase==false) {
				msg="One letter must be capital";
				unsuccess(cpassword,msg,"small4");
			}else if (flgSpcChar==false) {
				msg="One char must be special letter";
				unsuccess(cpassword,msg,"small4");
			}else{
				msg="Successful";
				v4=success(cpassword,msg,"small4");
			}

	//re-password validation
			if(rpasswordval==""){
				msg="enter password";
				unsuccess(crpassword,msg,"small5");
			}else if(!(passwordval==rpasswordval)){
				msg="re-password is not matching";
				unsuccess(crpassword,msg,"small5");
			}else if(rpasswordval.length<=4){
				msg="re-password length must be 5 digit";
				unsuccess(crpassword,msg,"small5");
			}else{
				msg="Successful";
				v5=success(crpassword,msg,"small5");
			}


	//file validation
			var fileval_split=fileval.split(".");
			console.log(fileval_split[1]);

			if(fileval==""){
				msg="select a attechment";
				unsuccess(cfile,msg,"small6");
			}else if(fileval_split[1]!="pdf" && fileval_split[1]!="docx" && fileval_split[1]!="xlsx"){
				msg="submit only pdf,docx(word) and xlsx(Excle)";
				unsuccess(cfile,msg,"small6");
			}else{
				msg="Successful";
				v6=success(cfile,msg,"small6");
			}






	//final signal
			if(((v1 ==true) && (v2 ==true) && (v3 ==true) && (v4 ==true) && (v5 ==true) && (v6==true))) {
				document.getElementById("main_div").style="border: 5px solid green; border-radius: 10px";
				console.log(v1 +"\n"+ v2 +"\n"+ v3 +"\n"+ v4 +"\n"+ v5 +"\n"+ v6)
			}else{
				document.getElementById("main_div").style="border: 5px solid red; border-radius: 10px";
			}
	}

	//reset featu
			function btnreset(){
				cname.style="background-color: lightgray";
				cphone.style="background-color: lightgray";
				cmail.style="background-color: lightgray";
				cpassword.style="background-color: lightgray";
				crpassword.style="background-color: lightgray";
				cfile.style="background-color: lightgray";
			document.getElementById("small1").style="visibility: hidden;";
			document.getElementById("small2").style="visibility: hidden;";
			document.getElementById("small3").style="visibility: hidden;";
			document.getElementById("small4").style="visibility: hidden;";
			document.getElementById("small5").style="visibility: hidden;";
			document.getElementById("small6").style="visibility: hidden;";
			document.getElementById("main_div").style="border: 5px solid black;border-radius: 10px";
			}
