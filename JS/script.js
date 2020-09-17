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
