var homme;
var femme;
var Senegal;
var Afrique;
var Europe;
var Ameriques;
var Asie;
var Oceanie;
        $.get("phpchart/genre.php",function(data){
            let da=JSON.parse(data);
            console.log(da);
            homme=da.Homme;
            femme=da.Femme;
        });
        $.get("phpchart/pays.php",function(data){
            let da=JSON.parse(data);
            console.log(da);
                Senegal=da.Senegal;
                Afrique=da.Afrique;
                Europe=da.Europe;
                Ameriques=da.Ameriques;
                Asie=da.Asie;
                Oceanie=da.Oceanie;
        });
 $(function () {
    
    "use strict";
    // ============================================================== 
    // Gender Js
    // ============================================================== 
    Morris.Donut({
        element: 'gender_donut',
        data: [
            { value: femme, label: 'Femme' },
            { value: homme, label: 'Homme'}

        ],

        labelColor: 'black',
        colors: [
            'grey',
            '#FF4080',

        ],
        options:{
            
            labels: {
                fontColor: '#71748d',
                fontFamily: 'Circular Std Book',
                fontSize: 14,
            }
        },

        formatter: function(x) { return x + "%" }
    });

    Morris.Donut({
        element: 'gender_donuts',
        data: [
            { value: femme, label: 'Web' },
            { value: homme, label: 'Mobile'}

        ],
        labelColor: "black",
       
      
        colors: [
            'grey',
            '#FF4080',

        ],
        options:{
            labels: {
                fontSize: 25,
            }
        },

        formatter: function(x) { return x + "%" }
    });


    // ============================================================== 
    //  chart bar horizontal
    // ============================================================== 

    var ctx = document.getElementById("chartjs_bar_horizontal").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',

        data: {
            labels: ["Senegal", "Afrique", "Europe", "Amériques", "Asie", "Océanie"],
            datasets: [{
                data: [Senegal, Afrique, Europe, Ameriques, Asie, Oceanie,],
                backgroundColor: [
                    "#FF4080",
                    "grey",
                    "grey",
                    "grey",
                    "grey",
                    "grey",
                ],
            }]
        },
        options: {
            responsive: true,
            hover: false,
            legend: {
                display: false,
                position: 'bottom',

                labels: {
                    fontColor: '#71748d',
                    fontFamily: 'Circular Std Book',
                    fontSize: 14,
                }
            },
            scales: {

                legend: {
                    display: false
                   

                },
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        fontSize: 14,
                        fontFamily: 'Circular Std Book',
                        fontColor: '#71748d',
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        fontSize: 14,
                        fontFamily: 'Circular Std Book',
                        fontColor: '#71748d',
                    }
                }]



            }
        }
    });



 });
