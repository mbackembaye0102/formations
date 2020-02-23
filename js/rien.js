
var points=0;
var titrepage=document.getElementById('titrepage');
var fisrtquestion=document.getElementById('question1');
var secondquestion=document.getElementById('question2');
var thirdquestion=document.getElementById('question3');
var fourthquestion=document.getElementById('question4');
var avantresultat=document.getElementById('avantresultat');
var formulaire=document.getElementById('formulaire');
var apresenregistrement=document.getElementById('apresenregistrement');
var resultatquestion=document.getElementById('resultatquestion');
//var vuebonnereponse=document.getElementById('repartition');
//var linketpartage=document.getElementById('linketpartage');
var repartitionsavebad=document.getElementById('repartitionsavebad');
var repartitionsavemoyen=document.getElementById('repartitionsavemoyen');
var repartitionsavegood=document.getElementById('repartitionsavegood');
var repartitionnonsavebad1=document.getElementById('repartitionnonsavebad1');
var repartitionnonsavemoyen1=document.getElementById('repartitionnonsavemoyen1');
var repartitionnonsavegood1=document.getElementById('repartitionnonsavegood1');
var bordel=document.getElementById('bordel');
var prenom;
var nom;
var telephone;
$.getJSON("http://api.db-ip.com/v2/free/self").then(
    function(addrInfo){
        // console.log(addrInfo.ipAddress + " is located in " + addrInfo.city + ", " + addrInfo.stateProv + ", " + addrInfo.countryName);
        console.log(addrInfo);
        if (addrInfo.continentName=="Africa" && addrInfo.countryName=="Senegal") {
            console.log("senegal");
            $.get("page/save.php?donner=pays&nation=Senegal",function(){
            })
            
        }
        else if(addrInfo.continentName=="Africa" && addrInfo.countryName!="Senegal"){
            console.log("afrique");
            $.get("page/save.php?donner=pays&nation=Africa",function(){
            })
            
        }
        else if(addrInfo.continentName=="Europe"){
            console.log("europe");
            $.get("page/save.php?donner=pays&nation=Europe",function(){
            })
            
        }
        else if(addrInfo.continentName=="North America" || addrInfo.continentName=="South America" ){
            console.log("amerique");
            $.get("page/save.php?donner=pays&nation=Amerique",function(){
            })
            
        }
        else if(addrInfo.continentName=="Asia"){
            console.log("asia");
            $.get("page/save.php?donner=pays&nation=Asia",function(){
            })
            
        }
        else if(addrInfo.continentName=="Australia"){
            console.log("australi");
            
        }
        
    }
);

    $.get("page/save.php?donner=visiteur",function(){
       
    })
    $.get("page/save.php?donner=newweek",function(){
       
    })
      // fisrtquestion.style.display="none";
        secondquestion.style.display="none";
        thirdquestion.style.display="none";
        fourthquestion.style.display="none";
        avantresultat.style.display="none";
        formulaire.style.display="none";
        apresenregistrement.style.display="none";
        resultatquestion.style.display="none";
      //  vuebonnereponse.style.display="none";
       // linketpartage.style.display="none";
        repartitionnonsavebad1.style.display="none";
        repartitionnonsavemoyen1.style.display="none";
        repartitionnonsavegood1.style.display="none";
        repartitionsavebad.style.display="none";
        repartitionsavemoyen.style.disy="none";
        repartitionsavegood.style.dlay="none";
    function good1(){
       
    fisrtquestion.style.display="none";
    secondquestion.style.display="block";
    points++;
    $.get("page/save.php?donner=michemin",function(){
       
    })
    };
    function bad1(){
        
    fisrtquestion.style.display="none";
    secondquestion.style.display="block";
    $.get("page/save.php?donner=michemin",function(){
       
    })
    }
    function good2(){
    secondquestion.style.display="none";
    thirdquestion.style.display="block";
    points++;

    }
    function bad2(){
    secondquestion.style.display="none";
    thirdquestion.style.display="block";

    }
    function good3(){
    thirdquestion.style.display="none";
    fourthquestion.style.display="block";
    points++;
    }
    function bad3(){
    thirdquestion.style.display="none";
    fourthquestion.style.display="block";
    }
function good4(){
fourthquestion.style.display="none";
avantresultat.style.display="block";
titrepage.style.display="none";
points++;
$.get("page/save.php?donner=endgame",function(){
   
})
document.getElementById('cpt1').innerHTML=points;
// document.getElementById('cpt2').innerHTML=points;
// document.getElementById('cpt3').innerHTML=points;
document.getElementById('cpt5').innerHTML=points;
repartitionscore();

}
function bad4(){
fourthquestion.style.display="none";
avantresultat.style.display="block";
titrepage.style.display="none";
$.get("page/save.php?donner=endgame",function(){
   
})
document.getElementById('cpt1').innerHTML=points;
// document.getElementById('cpt2').innerHTML=points;
// document.getElementById('cpt3').innerHTML=points;
document.getElementById('cpt5').innerHTML=points;
repartitionscore();
}
function recommancer(){
fisrtquestion.style.display="block"
secondquestion.style.display="none";
thirdquestion.style.display="none";
fourthquestion.style.display="none";
avantresultat.style.display="none";
formulaire.style.display="none";
apresenregistrement.style.display="none";
resultatquestion.style.display="none";
//vuebonnereponse.style.display="none";
//linketpartage.style.display="none";
}
function jerejoint(){
formulaire.style.display="block";
resultatquestion.style.display="none";
}
function jenerejointplus(){
formulaire.style.display="none";
resultatquestion.style.display="block";
}
function ouipartage(){
//linketpartage.style.display="block";
//vuebonnereponse.style.display="none";
}
function nonpartage(){
//vuebonnereponse.style.display="block";
}
function jevalide(){
formulaire.style.display="none";
apresenregistrement.style.display="block";
prenom=document.getElementById('valeurprenom').value;
nom=document.getElementById('valeurnom').value;
telephone=document.getElementById('valeurtelephone').value;
let age=document.getElementById('valeurage').value;
let sexe=document.getElementById('valeursexe').value;
// document.getElementById('prenomsave1').innerHTML=prenom;
document.getElementById('prenomsave2').innerHTML=prenom;
$.get("page/save.php?donner=save&prenom="+prenom+"&nom="+nom+"&telephone="+telephone+"&age="+age+"&sexe="+sexe,function(){
   
})
$.get("page/save.php?donner=inscrit",function(){
   
})
}
function jesaute(){
resultatquestion.style.display="block";
}
function repartitionscore(){
    if (points<2) {
        repartitionnonsavebad1.style.display="block";
        repartitionsavebad.style.display="block";
        console.log("part1");
        
    }
    else if(points>=2 || points<3){
        repartitionnonsavemoyen1.style.display="block";
        repartitionsavemoyen.style.display="block";
        console.log("part2");
    }
    else if (points>=3) {
        repartitionnonsavegood1.style.display="block";
        repartitionsavegood.style.display="block";
        console.log("part3");
    }
}
function partagefacebook(){
    console.log("je partage");
    
}
bordel.addEventListener("click",function(){
    console.log("je partage");
})