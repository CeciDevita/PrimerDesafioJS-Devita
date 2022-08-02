function tarjetas (valor) {
    let eligeTarjeta = prompt("Ingresa tu tarjeta\nVisa\nMasterCard\nAmEx");
    if (eligeTarjeta == "Visa"|| eligeTarjeta == "MasterCard"|| eligeTarjeta == "AmEx"){
        let promo;
        switch (eligeTarjeta) {
            case "Visa":
                alert("6 cuotas sin interés con todos los bancos!");
                promo = valor/6;
                break;
            case "MasterCard":
                alert("3 cuotas sin interés con todos los bancos!");
                promo = valor/3;
                break;
            case "AmEx":
                alert("12 cuotas sin interés con todos los bancos!");
                promo = valor/12;
                break;
        }
        return promo;
    } else {
        alert ("Las promociones son válidas sólo para Visa, MasterCard y AmEx");
        return null;
    }
    
}
let precio = prompt("Ingresa el valor a calcular en cuotas");
do {
    calculoCuotas = tarjetas(precio);
} while (calculoCuotas == null);
alert("El valor de la promo es: " + calculoCuotas);
