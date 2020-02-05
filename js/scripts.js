

document.addEventListener('DOMContentLoaded', (event) => {
    const player = new Plyr( '#player', {
  
        controls : [ 'play', 'current-time', 'progress' ],
        
        keyboard : { focused: true, global: true },
        
        seekTime : 15
      
      });
    
    console.log( player );
});


