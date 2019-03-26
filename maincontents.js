


var speak = new Array( );


/*function LanguageChange(lang)
{
    if(lang === "english")
    {
        window.external.ChangeLanguage("en-us");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "#ffffff";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "#ffffff";
        document.getElementById("btn_chinese").style.backgroundColor = "#FF6600";
        document.getElementById("btn_chinese").style.color = "#ffffff";

        document.getElementById("txt_service").innerHTML = "Service Center";
        document.getElementById("txt_maps").innerHTML = "Maps";
        document.getElementById("txt_info").innerHTML = "Info";
        document.getElementById("txt_departments").innerHTML = "Departments";
        document.getElementById("txt_employement").innerHTML = "Employment";
        document.getElementById("txt_check_in").innerHTML = "Check - In";

        speak[0] = "Here are some services we provide.";
        speak[1] = "Find your way around our great building.";
        speak[2] = "Answers to some commonly asked questions.";
        speak[3] = "Here is a list of all of our available departments.";
        speak[4] = "Apply to join one of our teams.";
        speak[5] = "Check in here.";


    }
    else if (lang === "spanish")
    {
        //window.external.ChangeLanguage("es-us");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "#ffffff";
        document.getElementById("btn_spanish").style.backgroundColor = "#ffffff";
        document.getElementById("btn_spanish").style.color = "#FF6600";
        document.getElementById("btn_chinese").style.backgroundColor = "#FF6600";
        document.getElementById("btn_chinese").style.color = "#ffffff";

        document.getElementById("txt_service").innerHTML = "centro de servicio";
        document.getElementById("txt_maps").innerHTML = "mapas";
        document.getElementById("txt_info").innerHTML = "información";
        document.getElementById("txt_departments").innerHTML = "departamentos";
        document.getElementById("txt_employement").innerHTML = "empleo";
        document.getElementById("txt_check_in").innerHTML = "registrarse";

        speak[0] = "Estos son algunos servicios que brindamos.";
        speak[1] = "Find your way around our great building.";
        speak[2] = "Answers to some commonly asked questions.";
        speak[3] = "Here is a list of all of our available departments.";
        speak[4] = "Apply to join one of our teams.";
        speak[5] = "Check in here.";
    }
    else if (lang === "chinese")
    {
        //window.external.ChangeLanguage("es-us");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "Chinese", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "#ffffff";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "#ffffff";
        document.getElementById("btn_chinese").style.backgroundColor = "#ffffff";
        document.getElementById("btn_chinese").style.color = "#FF6600";

        document.getElementById("txt_service").innerHTML = "服务中心";
        document.getElementById("txt_maps").innerHTML = "地图";
        document.getElementById("txt_info").innerHTML = "信息";
        document.getElementById("txt_departments").innerHTML = "部门";
        document.getElementById("txt_employement").innerHTML = "雇用";
        document.getElementById("txt_check_in").innerHTML = " 报到";


        speak[0] = "以下是我们提供的一些服务。";
        speak[1] = "Find your way around our great building.";
        speak[2] = "Answers to some commonly asked questions.";
        speak[3] = "Here is a list of all of our available departments.";
        speak[4] = "Apply to join one of our teams.";
        speak[5] = "Check in here.";
    }

}*/
    speak[0] = "";
    speak[1] = "Use your cell phone camera to scan the QR code, this way the map will go right to your phone.";
    speak[2] = "Please touch the screen to scroll through frequently asked questions.";
    speak[3] = "Click on a department to learn more.";
    speak[4] = "Press the below button to alert the County Clerk that you are on the way.";
    speak[5] = "";

function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);

    switch (strContentsName)
    {
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "ServiceCenter":
           // PlaySpeech(speak[0]);
           location.href = "Contents/ServiceCenter/index.html";
            break;
        case "Maps":
            PlaySpeech(speak[1]);
            location.href = "Contents/Maps/index.html";
            break;
        case "Info":
            //PlaySpeech(speak[2]);
            location.href = "Contents/Info/index.html";
            break;
        case "Departments":
            PlaySpeech(speak[3]);
           location.href = "Contents/Departments/index.html";
            break;
        case "Employment":
           //PlaySpeech(speak[4]);
           location.href = "Contents/Employment/index.html";
            break;
        case "checkin":
            PlaySpeech(speak[4]);
            location.href = "Contents/checkin/index.html";
            break;

        case "Selfie":
            PlaySpeech(speak[2]);
            location.href = "Contents/Selfie/index.html";
            break;
        case "Avatar":
            PlaySpeech(speak[3]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;

        case "Config":
            location.href = "Config/Config.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall


function OnUserApproached()
{
    //PlaySpeech("Hi, I'm Erin, thanks for traveling with us.  To get started, please press a button below.");
}



function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}

function ShowPopupMap(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}

$(document).ready(function(){

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
    var doubleTouchStartTimestamp = 0;
$(document).bind("touchstart", function(event){
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});
})


setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Ottawa, US";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d6ca94c15ab17256de7e07c8f5395f4a";

    $.getJSON(queryURL, function (data) {

        var temp = data.main.temp-273;
        var temp=Math.round((temp * (9/5)) + 32);
        
        var condition = data.weather[0].main;
        var loc = 'http://openweathermap.org/img/w/'+ data.weather[0].icon  + '.png' ;

        //$('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+condition);

        $('#condition').text(condition);
        $('#temp').append(temp + '</strong><sup>°f</sup>');

        $('#image-zoom').attr("src",loc);

        console.log("Weather Showed");
    });



}, 2000);



function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.PlaySpeech("Hello, I’m Francesca, please press a button on my screen to begin.");
    }

    if(btn_info[1] == '1'){
            window.external.PlaySpeech("I’m new on the job, I’m still learning.  I can’t tell you that answer yet.  Please press the Frequently Asked Questions button for more help.");
    }

    if(btn_info[2] == '1'){
            window.external.PlaySpeech("Hello, can I help you find your way?");
    }

    if(btn_info[3] == '1'){
            window.external.PlaySpeech("");
    }

}
