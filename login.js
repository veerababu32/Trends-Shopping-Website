let username = $("#username");
let password = $("#password");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=$("#error1");
let tdNode2=$("#error2");
let formNode=$('#regForm');

$(function(){
    username.blur(()=>validate1());
    password.blur(()=>validate2());
    formNode.submit(()=>validateForm());
});

function validate1(){
    tdNode1.text("");
    let uname=username.val();
    if(uname==''){
        tdNode1.text("*this field is required");
        username.css('border',border1);
        return false;
    }
    else if(uname.length<3 || uname.length >10){
        tdNode1.text("*uname must have atleast 3 and at most 10 chars");
        username.css('border',border1);
        return false;
    }
    else if(uname=="Veerababu"){
        console.log("true")
        username.css('border',border2);
        return true;
    }
}

function validate2(){
    tdNode2.html("");
    let pass=password.val();
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(pass==''){
        tdNode2.text("*this field is required");
        password.css('border',border1);
        return false;
    }
    else if(regExp.test(pass)==false){
        let spanNode=$('<span>');
        console.log(spanNode);
        spanNode.text("*Password should contain atleast one");
        let ulNode=$('<ul>');
        let liNode1=$('<li>');
        let liNode2=$('<li>');
        let liNode3=$('<li>');
        let liNode4=$('<li>');
        liNode1.text("Capital letter");
        liNode2.text("Small letter");
        liNode3.text("Digit");
        liNode4.text("Special Symbol(@,!,#,$)");
        ulNode.append(liNode1,liNode2,liNode3,liNode4);
        tdNode2.append(spanNode,ulNode);
        return false;
    }
    else if(pass.length<5 || pass.length>12){
        tdNode2.text("*Password should be atleast 5 and atmost 12 characters long");
        password.css('border',border1);
        return false;
    }
    else if (pass=="Veeru@123") {
        password.css('border',border2);
        return true;
    }
}

function validateForm(){
    let st1=validate1(); 
    let st2=validate2();
    return st1 && st2;
}