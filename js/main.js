var snowflakes = new Snowflakes({
    color: '#5ECDEF', 
    container: document.querySelector('#snowflakes-container'), 
    count: 40, 
    minOpacity: 0.1, 
    maxOpacity: 0.95, 
    minSize: 20, 
    maxSize: 30, 
    rotation: true, 
    speed: 1, 
    wind: true,
    height: 600
});

new Snowflakes({
    container: document.querySelector('#layer1'),
    count: 20,
    minOpacity: 0.1, 
    maxOpacity: 0.95, 
    minSize: 20, 
    maxSize: 30, 
    rotation: true, 
    speed: 1, 
    wind: true,
    height: 700
});

