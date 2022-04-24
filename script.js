// wiggle
for(var i=0; i<5 ;i++){
    (function() {
        // Init
        var container = document.getElementById("container"+i),
        inner = document.getElementById("inner"+i), 
        flower = document.getElementById("flower"+i);
    
        // Mouse
        var mouse = {
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            var rect = container.getBoundingClientRect();
            console.log(e.clientX)
            this.x = e.clientX - rect.left - Math.floor(container.offsetWidth/2);//x position within the element.
            this.y = Math.floor(container.offsetHeight/2) - (e.clientY - rect.top);  //y position within the element.

            flower.style.top = (0.15)*this.y ;
            flower.style.left = (-0.15)*this.x;
        },
        
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
        };
    
        // Track the mouse position relative to the center of the container.
        
    
        //-----------------------------------------
    
        var counter = 0;
        var updateRate = 1;
        var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
        };
    
        //-----------------------------------------
    
        var onMouseEnterHandler = function(event) {
        update(event);
        };
    
        var onMouseLeaveHandler = function() {
        inner.style = "";
        console.log(flower.style.top)
        flower.style.transform=`translate(${0.15*mouse.x}px, ${-0.15*mouse.y}px)`;
        // flower.style.transform=`translate(50px, 100px)`;
        // flower.style.top=0;
        // flower.style.left=0;
        };
    
        var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
        };
    
        //-----------------------------------------
    
        var update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
        };
    
        var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
        };
    
        //-----------------------------------------
    
        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
        
  })();

}