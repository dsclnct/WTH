var snowflakes = new Snowflakes({
    color: '#5ECDEF', 
    container: document.querySelector('#snowflakes-container'), 
    count: 30, 
    minOpacity: 0.1, 
    maxOpacity: 0.95, 
    minSize: 20, 
    maxSize: 30, 
    rotation: true, 
    speed: 0.7, 
    wind: false,
    width: 500, 
    height: 600, 
    zIndex: 9999
});
