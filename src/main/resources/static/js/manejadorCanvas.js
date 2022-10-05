console.info('Entro 1');
var moduloCanvas = (function() {
    console.info('Entro 2');
    //Private Variables
    var _canvas = document.getElementById("idCanvas");
    var _actualBP;
    console.info('Entro Obtuvo canvas');
    var _context = _canvas.getContext("2d");
    var init =function(){
        console.info('initialized');
        console.log("Capturando canvas"+_canvas);    

        //si el navegador admite PointerEvent:
        if(window.PointerEvent ) {
            _canvas.addEventListener("pointerdown", capturarPuntos);
        }
        else{
            _canvas.addEventListener("mousedown", noCompatible);
        }
    }

    var noCompatible = function(){
        alert('No es compatible con PoitnEvent.');
    }

    var capturarPuntos = function(){
        _actualBP = modulo.getBluePrint();
        console.log("Actual BP:"+_actualBP);  
        if(_actualBP !== undefined){
            console.log("Entro capturar Puntos");   
            
            var puntoX = event.clientX; 
            var puntoY = event.clientY;

            var boxRectangle = event.target.getBoundingClientRect();

            var localX = (puntoX - boxRectangle.left);
            var localY = (puntoY - boxRectangle.top);

            var borderWidth = parseInt(window.getComputedStyle(event.target).borderTopWidth, 10);
            localX -= borderWidth;
            localY -= borderWidth; 
            _context.lineTo(puntoX , puntoY ); //lineTo(), parte de Canvas 2D API, agrega una línea recta a la ruta secundaria actual al conectar el último punto de la ruta secundaria a las (x, y)coordenadas especificadas.
            _context.stroke(); //stroke() método de la API Canvas 2D traza (delinea) la ruta actual o dada con el estilo de trazo actual.
        }
        else{
            alert('Primero debe de abrir un palno, para seleccionar un punto.');
        }
    }
    return{
        init:init
    };
})();