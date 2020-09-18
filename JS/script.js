
/*Transition SWUP */



const swup = new Swup({
    plugins: [new SwupOverlayTheme()]
});

/*______*/




function activeButton_1() {
    document.getElementById('button_1').style.borderColor = 'white'
}

function activeButton_2() {
    document.getElementById('button_2').style.borderColor = 'white'
}
function activeButton_3() {
    document.getElementById('button_3').style.borderColor = 'white'
}


function desactiveButton_1(){
    document.getElementById('button_1').style.borderColor = '#adb5bd'

}

function desactiveButton_2(){
    document.getElementById('button_2').style.borderColor = '#adb5bd'

}

function desactiveButton_3(){
    document.getElementById('button_3').style.borderColor = '#adb5bd'

}



let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration :750

})


tl.add({
    targets : '.name',
    top : '38%',
    opacity : 1,
    duration :4000

}, '-=1600' )


function contact() {
    document.getElementById('one').style.backgroundColor = '#adb5bd'

}



/*Skills*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Javascript', 'React', 'VueJs', 'AnimeJs', '', 'UX/UI', 'back'],
        datasets: [
            {
            label: "languages",
            /*backgroundColor: 'rgb(255, 99, 132)',*/

            fillColor: "rgba(43,176,212,.4)",
            strokeColor: "rgba(43,176,212,1)",
            pointColor: "rgba(43,176,212,1)",
            pointHighlightStroke: "rgba(43,176,212,1)",

            data: [10, 20, 30, 40, 50, 60, 70]
             },

            {
                label: "skills",
               /* backgroundColor: 'rgb(255, 99, 132)',*/

                fillColor: "rgba(43,176,212,.4)",
                strokeColor: "rgba(43,176,212,1)",
                pointColor: "rgba(43,176,212,1)",
                pointHighlightStroke: "rgba(43,176,212,1)",

                data: [5, 15, 25, 35, 45, 55, 65]
            }



        ]
    },

    // Configuration options go here
    options: {}
});
