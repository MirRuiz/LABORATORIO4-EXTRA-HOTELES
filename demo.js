

document.getElementById("precio").addEventListener("click", function () {
    const habitacion = document.getElementById("tipo-habitacion").value;
    const spa = document.getElementById("spa").checked;
    const ocupacion = document.getElementById("ocupacion").value;
    const noches = document.getElementById("noches").value;
    const parking = document.getElementById("parking").value;
    calcularPrecio(habitacion, spa, ocupacion, noches, parking);

})
function calcularPrecio(habitacion, spa, ocupacion, noches, parking) {
    let precio;
    if (habitacion === "standar") {
        precio = 100;
    } else if (habitacion === "junior-suite") {
        precio = 120;
    } else if (habitacion === "suite") {
        precio = 150;
    };

    if (spa) {
        precio = precio + 20;
    };

    if (ocupacion === "triple") {
        precio = precio * 1.25
    } else if (ocupacion === "individual") {
        precio = precio * 0.75
    };

    precio = precio * noches;


    if (parking >= 1) {
        precio = precio + (10 * parking);
    };
    document.getElementById("mostrar-precio").innerText = precio + " Euros";

};




