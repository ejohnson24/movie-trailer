
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

     button.addEventListener( 'click' , function(){
    
     cat.classList.toggle('catDark')
     info.classList.toggle('darkInfo');
     header.classList.toggle('darkHeader');
     body.classList.toggle('dark');
});

    let portrait = document.querySelector('#tombo');
    let background = document.querySelector('.cast');

    portrait.addEventListener( 'click' , function(){
    
      background.classList.toggle('castTombo');
 });

});



