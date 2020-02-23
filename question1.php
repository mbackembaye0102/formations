<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/quizz.css">
    <link rel="stylesheet" type="text/css" href="css/animation.css">
    <title>Quizz</title>
    <style>
        .resultatapoint{
            color: #FF4080; font-size:40px;
        }
        link ul li a
        {
            margin-right: 50%;
            text-decoration: none;
        }
    
        button
        {
            background-color: #FF4080;
        }
    
            .header{
                width:100%;
                position :absolute;
            }
        </style>
</head>
<body>
    <style>
        .navbar {
            position: absolute;
            top: 0;
            right: 0;
            width: 100% !important;
            height: 11%;
            left: 0;
            background-color: #FF4080;

        }
        .corps{
            margin-top:50px;
            
        }
           .grow{
            float:right;
            margin-top:20px;
            
        }
    </style>
      <div class=" tete container">
        <nav class="navbar nav-color">
            <a class="navbar-brand" href=""> <img height="50" width="50"  src="images/grow-logo (2).png" alt=""></a>
            <form class=" grow form-inline">

                <a href="#">growstrategyzer.com</a>
            </form>
        </nav>
    </div>
    <br> <br>

    <div class="container" id="titrepage">
    <br> <br>
    <h3  class="titre" id="bordel">NAVIGUATEUR ET SITES WEB<br></h3> 
    <section class=" container" id="question1">
        <p class="titre" style="font-size: 20px;">Question <span id="question" style="color: #FF4080"></span> /10</p> <br>
      
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                             <div class="row" >
                                <div  id="soundimage" style="font-size: 25px;" >C'est quoi internet ?</div>
                            </div> <br>
                            <div class="row">
                                <div  id="image"> 
                                <img src="images/amidia1.jpg" alt=""> </div>
                            </div> <br>
                            <div class="row">
                                <div  id="soundimage">
                                <img src="images/fb.png" alt="">
                            </div>
                            </div>
            </div>
            <div class="col-md-6" style="margin-top: 75px;">
                   <div class="row">
                       <div class="col-md-8">
                       <a href="#"  onclick="premier()">
                            <p class="q" ><span style="font-size: 25px;" id="rep1">C'est une phrase</span> </p> 
                            
                        </a>
                       </div>
                       <div class="col-md-4">
                       <img src="images/fb.png" alt="">                       </div>
                   </div>
                   <div class="row">
                       <div class="col-md-8">
                       <a href="#"  onclick="premier()">
                            <p class="q" ><span style="font-size: 25px;" id="rep1">C'est une phrase</span> </p> 
                            
                        </a>
                       </div>
                       <div class="col-md-4">
                       <img src="images/fb.png" alt="">              </div>
                   </div>
                   <div class="row">
                       <div class="col-md-8">
                       <a href="#"  onclick="premier()">
                            <p class="q" ><span style="font-size: 25px;" id="rep1">C'est une phrase</span> </p> 
                            
                        </a>
                       </div>
                       <div class="col-md-4">
                       <img src="images/fb.png" alt="">                       </div>
                   </div>
                      
            </div>
                        <br>
               
                  
            </div>

            </div>

            <div class="row" style="text-align:center;">
    <div class="col-md-4">
    </div>
    <div class="col-md-4">
    <button  type="button" class="btn btn-danger btn-lg">Suivant</button>

    </div>
    <div class="col-md-4">
    </div>
</div>


               
            
        </div>
    </section>



  
    </div>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="yaya.js"></script>
    <script>
    </script>
</body>
</html>