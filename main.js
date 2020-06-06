
var alert_email='';
var alert_subject='';
var alert_message='';


var subject = document.getElementById('form-subject');
var email = document.getElementById('form-email');
var message = document.getElementById('form-message');
var alert_subject1 = document.getElementById('form-subject-span');
var alert_email1 = document.getElementById('form-email-span');
var alert_message1 = document.getElementById('form-message-span');
var spanhide= document.getElementsByClassName('alert-style');


document.getElementById('form-submit').addEventListener('click', validate);


 
function validate(e)
{
    
    var alert_email='';
var alert_subject='';
var alert_message='';

    var ret=0;
    e.preventDefault();


    if(subject.value == "")
    {
        alert_subject='Please fill in the subject';
        ret=1;

    }
    
    if(message.value == "")
    {
        alert_message='Please fill in your message';
        ret=1;
    }
    
    if(email.value == "")
    {
    
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(email.value)) 
        {
        alert_email='Please provide a valid email address';   
        ret=1;          
                }
    }
    alert_subject1.innerHTML=`${alert_subject}`;
    alert_email1.innerHTML=`${alert_email}`;
    alert_message1.innerHTML=`${alert_message}`;

    setTimeout(hide,3000);
    
    if(ret==1)
    {
        return false;
    }
    else{
        return true;
    }

    
}



function hide()
{
                var alert_email='';
                var alert_subject='';
                var alert_message='';
                alert_subject1.innerHTML=`${alert_subject}`;
                alert_email1.innerHTML=`${alert_email}`;
                alert_message1.innerHTML=`${alert_message}`;
}









