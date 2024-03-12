// Función para calcular el porcentaje que representa la propina.
function calcularPorcentaje(totalFactura, propinaDeseada) {
    return (100 * propinaDeseada) / totalFactura;
}

//Función para determinar el tipo de propina.
function determinarTipoPropina(porcentaje) {
    if (porcentaje <= 10) {
        return "Propina mínima";
    } else if (porcentaje <= 15) {
        return "Propina estándar";
    } else if (porcentaje <= 20) {
        return "Buena propina";
    } else {
        return "Propina generosa";
    }
}

// Primero necesito saber cuál fue el total $$.
let totalFactura = parseInt(prompt("Ingrese el total de su consumo"));

// Segundo le pregunto al usuario cuánto desea dejar de propina.
let propinaDeseada = parseInt(prompt("Ingrese la propina que deseas dejar"));

// Calculamos el porcentaje de propina.
let porcentaje = calcularPorcentaje(totalFactura, propinaDeseada);

// Determinamos el tipo de propina.
let tipoPropina = determinarTipoPropina(porcentaje);


// Mostramos el total a pagar.
console.log("Total a pagar: $" + (totalFactura + propinaDeseada));

// Mostramos el porcentaje de propina y el tipo.
console.log("Tu propina es del " + porcentaje + "%, " +tipoPropina);

// Si la propina es mínima o estándar, preguntamos si desea mejorarla.
if ((tipoPropina === "Propina mínima" || tipoPropina === "Propina estándar")) {
    let mejorarPropina = prompt("¿Desea mejorar su propina? (si/no)");
    if (mejorarPropina === 'si') {
        // Pedimos la nueva propina
        let nuevaPropina = parseInt(prompt("Ingrese la nueva propina que desea dejar:"));
        // Calculamos el nuevo porcentaje de propina y mostramos el tipo de propina
        let nuevoPorcentaje = calcularPorcentaje(totalFactura, nuevaPropina);
        console.log("Tu nueva propina es del " + nuevoPorcentaje + "%");
        console.log("Muchísimas gracias por mejorar tu propina, fue un placer atenderte y esperamos tenerte de nuevo pronto");
    } else {
        console.log("Fue un placer haberte atendido, esperamos tenerte pronto.");
    }
} else {
    // Si la propina es buena o generosa, mostramos un mensaje de agradecimiento específico.
    console.log("Nos alegra muchísimo que te haya gustado nuestro servicio, esperamos tenerte pronto.");
}
