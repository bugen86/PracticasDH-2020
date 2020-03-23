function seAbre(cantidadMinima, ...ingresos) {
    let cantidadDeAlumnosQueCumplenConLaCondicion = 0;
    for (let i = 0; i < ingresos.length; i++) {
        if (ingresos[i] <= 0) {
            cantidadDeAlumnosQueCumplenConLaCondicion++;
        }
    }
    return cantidadDeAlumnosQueCumplenConLaCondicion >= cantidadMinima;
}

function aperturas(cantidadMinima, ...ingresosSemanales) {
    let arrayDev = [];
    for (let i = 0; i < ingresosSemanales.length; i++) {
        const resulSeAbre = seAbre(ingresosSemanales[i], cantidadMinima);

        arrayDev.push(resulSeAbre);
    }
    return arrayDev;
}

module.exports = {
    seAbre: seAbre,
    aperturas: aperturas
};
