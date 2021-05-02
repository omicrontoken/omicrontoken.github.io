window.onload = function(){
    checkScroll();
}

window.onscroll = checkScroll;

function checkScroll(){
    getScr = $(document).scrollTop();
    if(getScr != 0){
        $('#layout').addClass('scroll');
    } else{
        $('#layout').removeClass('scroll');
    }
}

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - $('#header').height()
    }, 500);
    return false;
});

let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});

unitsList.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        captionsList[index].classList.add('hovered');
    });
    
    item.addEventListener('mouseout', function () {
        captionsList[index].classList.remove('hovered');
    });
  });