
document.addEventListener('DOMContentLoaded', (event) => {
    const player = new Plyr( '#player', {
  
        controls : [ 'play', 'current-time', 'progress' ],
        
        keyboard : { focused: true, global: true },
        
        seekTime : 15
      
      });
    
    console.log( player );

    let button = document.querySelector('#cat');
    let body = document.querySelector('body');
     button.addEventListener( 'click' , function(){
  
     body.classList.toggle('dark');
});

});



