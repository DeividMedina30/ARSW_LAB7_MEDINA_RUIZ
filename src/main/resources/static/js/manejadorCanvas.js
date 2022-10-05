console.info('Entro 1');
var moduloCanvas = (function() {
    console.info('Entro 2');
    //Private Variables
    var _canvas = document.getElementById("idCanvas");
    console.info('Entro Obtuvo canvas');
    //var _context = _canvas.getContext("2d");
    var init =function(){
        console.info('initialized');
        console.log(_canvas);    
        //si el navegador admite PointerEvent:
        if(window.PointerEvent) {
            _canvas.addEventListener("pointerdown", capturarPuntos);
        }
        else{
            _canvas.addEventListener("mousedown", noCompatible);
        }
    }

    var noCompatible = function(){
        alert('mousedown at '+event.clientX+','+event.clientY); 
    }

    var capturarPuntos = function(){
        alert('Los puntos Obtenidos fueron: Posición X:'+ event.pageX +', Posición Y:'+event.pageY);
    }
    return{
        init:init
    };
})();