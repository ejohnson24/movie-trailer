
document.addEventListener('DOMContentLoaded', (event) => {
    const player = new Plyr( '#player', {
  
        controls : [ 'play', 'current-time', 'progress' ],
        
        keyboard : { focused: true, global: true },
        
        seekTime : 15
      
      });
    
    console.log( player );

    let button = document.querySelector('#cat');
    let cat = document.querySelector('#cat')
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let info = document.querySelector('.info');
    let footer = document.querySelector('footer')
     button.addEventListener( 'click' , function(){
    
     cat.classList.toggle('catDark')
     info.classList.toggle('darkInfo');
     header.classList.toggle('darkHeader');
     body.classList.toggle('dark');
     footer.classList.toggle('darkfooter')
});

let portrait = document.querySelector('#tombo');
let background = document.querySelector('.cast');
let portrait2 = document.querySelector('#Osono');
let portrait3 = document.querySelector('#Ursula');
let portrait4 = document.querySelector('#Kiki');
let portrait5 = document.querySelector('#Jiji');

portrait.addEventListener( 'click' , function(){

  background.classList.toggle('castTombo');

});

portrait3.addEventListener( 'click', function() {

  background.classList.toggle('castUrsula');
});

portrait2.addEventListener( 'click', function() {

  background.classList.toggle('castOsono');
});

portrait4.addEventListener( 'click', function() {

  background.classList.toggle('castKiki');
});

portrait5.addEventListener( 'click', function() {

  background.classList.toggle('castJiji');
});

});


