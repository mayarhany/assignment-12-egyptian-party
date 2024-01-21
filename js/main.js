// * side bar

const left = $('.side-bar-content').innerWidth();

$('.side-bar').css('left', -left);

$('.open').click(() =>{
    $('.side-bar').css('left', 0);
    $('.side-bar').css('position', 'fixed')
})

$('.side-bar-content .close').click(() =>{
    
    $('.side-bar').css('left', -left);
})


// & naviation in side bar

$('.side-bar a').click(function(e){
    const sectionOffset = $(e.target.getAttribute('href')).offset().top
    $('html, body').animate({'scrollTop' : sectionOffset}, 1000)
})

// ^ drop down

$('.singer').click((e) =>{
    $('.content').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
})

// ! counter
function countToGivenTime(time){
    let currentTime = new Date();
    currentTime = currentTime.getTime()/1000;
    // console.log(currentTime);

    let commingDate = new Date(time)
    commingDate = commingDate.getTime()/1000;
    // console.log(commingDate);

    let timeDifference = commingDate - currentTime;
    // console.log(timeDifference);

    let days = Math.floor(timeDifference / (60 * 60 *24));
    // console.log(days);


    let hours = Math.floor((timeDifference - (days * (60 * 60 * 24))) / 3600)
    // console.log(hours);

    let mins = Math.floor((timeDifference - (days * (60 * 60 * 24)) - (hours * 3600)) / 60)
    // console.log(mins);

    let sec = Math.floor((timeDifference - (days * (60 * 60 * 24)) - (hours * 3600) - (mins * 60)))
    // console.log(sec);

    $('.sec').text(`${sec} s`)
    $('.min').text(`${mins} m`)
    $('.hours').text(`${hours} h`)
    $('.days').text(`${days} D`)

    setInterval(()=>{
        countToGivenTime(time)
    }, 1000)
}

window.onload = () =>{
    countToGivenTime('25 july 2024 10:00:00')
}



// & textarea
const maxCharacters = 100;
$('textarea').keyup(() =>{
    let currentCharacters = $('textarea').val().length
    console.log(currentCharacters);
    let remainingChars = maxCharacters - currentCharacters;
    console.log(remainingChars);
    if(remainingChars > 0){
        $('.num').text(remainingChars);
    }
    else{
        $('.char').text('your available character finished');
    }
})
