


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

function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);

    switch (strContentsName)
    {
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "ServiceCenter":
            PlaySpeech(speak[0]);
           location.href = "Contents/ServiceCenter/index.html";
            break;
        case "Maps":
            //PlaySpeech(speak[1]);
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
           PlaySpeech(speak[4]);
           location.href = "Contents/Employment/index.html";
            break;
        case "checkin":
            PlaySpeech(speak[5]);
           location.href = "Contents/checkin/index.php";
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
    PlaySpeech("Hi, I'm Erin, thanks for traveling with us.  To get started, please press a button below.");
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

$(document).ready(function(){



    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Ottawa, IL, USA";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {

        var results = data.query.results;
        var firstResult = results.channel.item.condition;
        console.log(firstResult);


        var location = 'Unknown'; // not returned in response
        var temp = firstResult.temp;
        var text = firstResult.text;
        var image =  firstResult.code;
        var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

        // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

        $('#condition').append(text);
        $('#temp').append(temp+ '</strong><sup>°F</sup>');

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

            window.external.PlaySpeech("Hello, welcome to the Ottawa County Admin Building. Press a button on my screen to begin");

    }

}
