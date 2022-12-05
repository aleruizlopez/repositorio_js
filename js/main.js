    let nombre = prompt("Ingrese Nombre");
    let direccion = prompt("Ingrese Dirección");
    let telefono = prompt("Ingrese Teléfono");
    let pedido = prompt("Ingrese Pedido:\nAmericana- Hamburguesa americana con papas.  \nQuesos- Hamburguesa 4 quesos con papas. \nVeggie- Hamburguesa veggie con papas. \nPresioná X para finalizar. ");

    let americana = 1800;
    let quesos = 1700;
    let veggie = 1900;
    let envio = 180;
    

    function sumar(americana, quesos, veggie, envio){
        americana= americana + envio;
        return americana
    }
    function sumar(quesos, envio){
        quesos= quesos + envio;
        return quesos
    }

    function sumar(veggie, envio){
        veggie= veggie + envio;
        return veggie
    }
        
    while(pedido != "X" && pedido != "x"){
        
        switch (pedido) {
            case "Americana":
                alert("Hola "+ nombre + " tu pedido se cargó con éxito. En aprox 45 minutos lo enviaremos a " + direccion +".El total es $"+sumar(americana,envio));
                break;
            case "Quesos":
                alert("Hola "+ nombre + " tu pedido se cargó con éxito. En aprox 45 minutos lo enviaremos a " + direccion +".El total es $"+sumar(quesos,envio));
                break;
            case "Veggie":
                alert("Hola "+ nombre + " tu pedido se cargó con éxito. En aprox 45 minutos lo enviaremos a " + direccion +".El total es $"+sumar(veggie,envio));
                break;
            default:
                alert("Opción no válida");
                break;
        }

        pedido = prompt("Ingrese Pedido:\nAmericana- Hamburguesa americana con papas. \nQuesos- Hamburguesa 4 quesos con papas. \nVeggie- Hamburguesa veggie con papas. \nPresioná X para finalizar. ");   
    };
    
    
    alert("Gracias por utilizar nuestra app♥");

    
    
    