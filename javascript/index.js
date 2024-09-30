function formacionCuotas() {
    let conversion;
    let intentos = 0;
    const MAX_INTENTOS = 3;

    do {
        conversion = prompt('¿Qué deseas consultar? (Cuotas o Asesor)').toLowerCase();
        intentos++;

        if (conversion === 'cuotas') {
            console.log('Has elegido consultar las cuotas.');
            alert('Has elegido consultar las cuotas.');
            
            // Mostrando las 5 formas de pago usando un bucle de conteo
            const montoTotal = 1500;
            let mensajeCuotas = "Formas de pago:\n";
            
            for (let i = 1; i <= 5; i++) {
                let montoCuota = (montoTotal / i).toFixed(2);
                mensajeCuotas += i + " cuota(s): $" + montoCuota + "\n";
                console.log(i + " cuota(s): $" + montoCuota);
            }

            alert(mensajeCuotas);
            break; // Salir del bucle después de mostrar las cuotas

        } else if (conversion === 'asesor') {
            console.log('Has elegido contactar con un asesor.');
            alert('Has elegido contactar con un asesor.');
            // Redirigir al enlace de WhatsApp
            window.open('https://wa.link/szvvkd', '_blank');
            break; // Salir del bucle si eligió contactar

        } else {
            console.log('Opción no válida. Por favor elegir una de las opciones indicadas.');
            alert('Opción no válida. Por favor elegir una de las opciones indicadas.');
        }
    } while (intentos < MAX_INTENTOS);

    if (intentos === MAX_INTENTOS) {
        console.log('Se han superado los intentos permitidos.');
        alert('Se han superado los intentos permitidos.');
    }
}

formacionCuotas();