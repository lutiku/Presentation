
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


let labels = ['Javascript', 'VueJs', 'React', 'ChartJS', 'Bootstrap', 'CSS', 'Swup', 'AnimeJS', 'ThreeJS'];
let myChart = document.getElementById("myChart").getContext('2d');

let chart = new Chart(myChart, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Skills',
                fill: true,
                backgroundColor: "rgba(179, 181, 198, 0.2)",
                borderColor: "rgba(179, 181, 198, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179, 181, 198, 1)",
                data: [42, 45, 35, 25, 32, 42, 38, 50, 50]
            }
        ]
    },
    options: {
        title: {
            text: "Front",
            display: true
        },

        scale: {
            gridLines: {
                color: 'white'/*['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo']*/
            }
        },

        legend:{
            labels:{
                fontColor: 'white'

            },

            text:{
                fontColor: 'white'
            },

        }
    }
});






