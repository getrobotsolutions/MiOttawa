
<!DOCTYPE html>
<html>
<head>
    <meta content="text/html" charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10"/>

    <script language="JavaScript" type="text/javascript" src="../../Scripts/BaseCommand.js"></script>
    <script language="JavaScript" type="text/javascript" src="../../Scripts/BaseEvent.js"></script>
    <script language="JavaScript" type="text/javascript" src="../../Scripts/LogConsole.js"></script>
    <script language="JavaScript" type="text/javascript" src="../../Scripts/Language.js"></script>
    <script language="JavaScript" type="text/javascript" src="../../Scripts/custom.js"></script>
    <script type="text/javascript" src="../../Scripts/jquery-3.3.1.min.js"></script>
    <script language="JavaScript" type="text/javascript" src="../../maincontents.js"></script>
    <script src="../../boots/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../../boots/css/bootstrap.min.css">

    <link href="../../css/Main.css" rel="stylesheet" type="text/css"/>
</head>


<body  onbeforeunload="JSUnload()" ondragstart="return false;" ondrop="return false;" style="-ms-user-select:none;" oncontextmenu="return false;">

<header>
    <div class="logo">
        <img onclick="FC_ContentsCall('Home')" src="../../assets/logo.png">
    </div>

    <span class="col-sm-3 date-time" style="text-align: left; color: #3c3c3c">
        <!--<div id= 'appcity'>San Antonio, TX</div>-->
          <div id="content_air"></div>
          <div id="content_date" ></div>
          <span id="condition"></span>
        <div>
            <img id ="image-zoom" style="width: 50px" src="">
             <span id="temp" ></span>
        </div>

    </span>

</header>

<nav>

    <div class="nav-language">
        <button onclick="LanguageChange('english');" id="btn_english" class="btn-english">English</button>
        <button onclick="LanguageChange('spanish');" id="btn_spanish" class="btn-spanish">Español</button>
        <button onclick="LanguageChange('chinese');" id="btn_chinese" class="btn-spanish">中文</button>
    </div>
</nav>

<section class="main-content">

  <div style="text-align: center; color: #FF6600; ">
    <p style="font-weight: bold; font-size: 50px;"> Thank you </p>
    <p style="font-weight: bold; font-size: 30px;">We look forward to see you!</p>

    <p style="font-weight: bold; font-size: 30px;">The office is on the first floor.</p>
  </div>

    <div class="main-menu-matrix">
      <!--<img src="assets/Fiesta-logo.png" class="fiesta-icon" onclick="FC_ContentsCall('Fiesta')">-->

    </div>


    <!--<div class="concessionaires" >
        <p>Robot Proudly Funded by SAT's Concessionaires</p>
    </div>-->
</section>

<footer>

      <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <!--<li data-target="#myCarousel" data-slide-to="1"></li>-->
          <!--<li data-target="#myCarousel" data-slide-to="2"></li>-->
          <!--<li data-target="#myCarousel" data-slide-to="3"></li>-->
          <!--<li data-target="#myCarousel" data-slide-to="4"></li>-->
          <!--<li data-target="#myCarousel" data-slide-to="5"></li> -->
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner " id="slide" role="listbox">

          <div class="item active">
            <img class="fixed-height" src="../../images/slider/1.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item ">
            <img class="fixed-height" src="../../images/slider/2.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item ">
            <img class="fixed-height" src="../../images/slider/3.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <!--<div class="item ">
            <img class="fixed-height" src="images/slider/5.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item ">
            <img class="fixed-height" src="images/slider/6.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item ">
            <img class="fixed-height" src="images/slider/8.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/22.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/55.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/66.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/7.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/9.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/10.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/11.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/12.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/13.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/14.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/19.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>
          <div class="item">
            <img class="fixed-height" src="images/slider/20.png" width="460" height="345">
            <div class="carousel-caption">
              <h3></h3>
              <p></p>
            </div>
          </div>-->

          <!--<div class="item">-->
            <!--<img class="fixed-height rotate" src="assets/slide1.png" width="460" height="345">-->
            <!--<div class="carousel-caption">-->
              <!--<h3></h3>-->
              <!--<p></p>-->
            <!--</div>-->
          <!--</div>-->
           <!--<div class="item">-->
            <!--<img class="fixed-height rotate" src="assets/slide1.png" width="460" height="345">-->
            <!--<div class="carousel-caption">-->
              <!--<h3></h3>-->
              <!--<p></p>-->
            <!--</div>-->
          <!--</div> -->
           <!--<div class="item">-->
            <!--<img class="fixed-height rotate" src="assets/slide1.png" width="460" height="345">-->
            <!--<div class="carousel-caption">-->
              <!--<h3></h3>-->
              <!--<p></p>-->
            <!--</div>-->
          <!--</div> -->
           <!--<div class="item">-->
            <!--<img class="fixed-height rotate" src="assets/slide1.png" width="460" height="345">-->
            <!--<div class="carousel-caption">-->
              <!--<h3></h3>-->
              <!--<p></p>-->
            <!--</div>-->
          <!--</div>        -->


        </div>
    </div>

    <img src="../../assets/bottom-line.png" onclick="ShowPopup()">
</footer>
<div id="dialog-overlay"></div>
<div id="dialog-box">

</div>

<script type="application/javascript">
    if(readCookie("CurrentLanguage") === "English")
    {
        LanguageChange('english');
    }
    else if(readCookie("CurrentLanguage") === "Spanish")
    {
        LanguageChange('spanish');
    }

    /*function redirectToSS(){
    window.location.href = "maincontents.htm";
}
var tempTime=setTimeout(redirectToSS,60000);

$(document).click(function(event) {
    clearTimeout( tempTime );
    tempTime=setTimeout(redirectToSS,240000);
});*/
</script>

</body>
</html>
