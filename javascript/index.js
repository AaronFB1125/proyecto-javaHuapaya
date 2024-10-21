document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-adquirir-curso').addEventListener('click', function() {
        startProcess('Curso Básico de Trading en Forex');
    });
});

function startProcess(courseName) {
    let course = courseName;
    let experience = prompt(`Excelente, gracias por tu interés en el curso ${course}. Permítenos conocerte mejor para saber si este curso es apto para ti.\nPrimero: ¿Tienes experiencia en el trading? (SI o NO)`);

    if (experience && experience.toUpperCase() === 'NO') {
        let purchase = prompt(`No te preocupes, con este curso podrás iniciar tus primeros pasos en el trading y aprender las bases necesarias para operar.\nEl precio del curso está a $50. ¿Deseas adquirirlo? (SI o NO)`);
        if (purchase && purchase.toUpperCase() === 'NO') {
            alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
        } else if (purchase && purchase.toUpperCase() === 'SI') {
            let name = prompt('De acuerdo, indícanos tu nombre por favor');
            let phone = prompt('Excelente, ahora indícanos tu número de celular por favor');
            let email = prompt('Muy bien, ahora indícanos tu correo electrónico');
            
            let confirmation = prompt(`Estos son los datos que tenemos:\nCurso: ${course}\nNombre: ${name}\nNúmero de celular: ${phone}\nCorreo electrónico: ${email}\n¿Todos estos datos son correctos? (SI o NO)`);

            if (confirmation && confirmation.toUpperCase() === 'SI') {
                alert('Muy bien, uno de nuestros asesores se contactará contigo a la brevedad.');
                console.log({
                    curso: course,
                    nombre: name,
                    celular: phone,
                    correo: email
                });
            } else {
                alert('Por favor, vuelve a iniciar el proceso.');
            }
        }
    } else if (experience && experience.toUpperCase() === 'SI') {
        let years = prompt('De acuerdo, indícanos el número de años de experiencia que tienes en el trading (solo número)');

        if (years >= 1 && years <= 2) {
            alert('Te recomendamos también nuestros cursos de MetaTrader o TradingView.');
            console.log(`Usuario con 1 a 2 años de experiencia, recomendamos MetaTrader o TradingView.`);
        } else if (years >= 3) {
            alert('Te recomendamos nuestro curso de Revisión y Manejo de Brokers.');
            console.log(`Usuario con 3 o más años de experiencia, recomendamos Revisión y Manejo de Brokers.`);
        }
    }
}


document.getElementById('btn-adquirir-tradingview').addEventListener('click', function() {
    startProcessTradingView('Curso de TradingView');
});

function startProcessTradingView(courseName) {
    let course = courseName;
    let experience = prompt(`Excelente, gracias por tu interés en el curso ${course}. Permítenos conocerte mejor para saber si este curso es apto para ti.\nPrimero: ¿Tienes experiencia en el trading? (SI o NO)`);

    if (experience && experience.toUpperCase() === 'NO') {
        let continueWithCourse = prompt(`Entendemos, en este caso te recomendamos iniciar con el curso Básico de Trading en Forex para iniciar tus primeros pasos en el trading.\n¿Aún así deseas continuar con el curso de TradingView? (SI o NO)`);

        if (continueWithCourse && continueWithCourse.toUpperCase() === 'NO') {
            alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
        } else if (continueWithCourse && continueWithCourse.toUpperCase() === 'SI') {
            let purchase = prompt(`El precio del curso está a $75. ¿Deseas adquirirlo? (SI o NO)`);

            if (purchase && purchase.toUpperCase() === 'NO') {
                alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
            } else if (purchase && purchase.toUpperCase() === 'SI') {
                proceedWithUserDetails(course);
            }
        }
    } else if (experience && experience.toUpperCase() === 'SI') {
        let years = prompt('De acuerdo, indícanos el número de años de experiencia que tienes en el trading (solo número)');

        if (years >= 1 && years <= 2) {
            alert('¡Perfecto! Este curso es adecuado para ti.');
            let purchase = prompt(`El precio del curso está a $75. ¿Deseas adquirirlo? (SI o NO)`);
            
            if (purchase && purchase.toUpperCase() === 'NO') {
                alert('Entendemos, esperamos que nuestra información pueda motivarte a continuar en el trading con Burs Advisory.');
            } else if (purchase && purchase.toUpperCase() === 'SI') {
                proceedWithUserDetails(course);
            }
        } else if (years >= 3) {
            alert('Te recomendamos nuestro curso de Revisión y Manejo de Brokers, pero también te comentamos que el precio del curso de MetaTrader es de $75.');
            let continueWithMetaTrader = prompt(`¿Deseas continuar con el curso de MetaTrader? (SI o NO)`);

            if (continueWithMetaTrader && continueWithMetaTrader.toUpperCase() === 'SI') {
                proceedWithUserDetails('Curso de MetaTrader');
            } else {
                alert('Entendemos, esperamos que nuestra información pueda ser útil para ti.');
            }
        }
    }
}

function proceedWithUserDetails(course) {
    let name = prompt('De acuerdo, indícanos tu nombre por favor');
    let phone = prompt('Excelente, ahora indícanos tu número de celular por favor');
    let email = prompt('Muy bien, ahora indícanos tu correo electrónico');

    let confirmation = prompt(`Estos son los datos que tenemos:\nCurso: ${course}\nNombre: ${name}\nNúmero de celular: ${phone}\nCorreo electrónico: ${email}\n¿Todos estos datos son correctos? (SI o NO)`);

    if (confirmation && confirmation.toUpperCase() === 'SI') {
        alert('Muy bien, uno de nuestros asesores se contactará contigo a la brevedad.');
        console.log({
            curso: course,
            nombre: name,
            celular: phone,
            correo: email
        });
    } else {
        alert('Por favor, vuelve a iniciar el proceso.');
    }
}


document.getElementById('btn-adquirir-metatrader').addEventListener('click', function() {
    startProcessMetaTrader('Curso de MetaTrader');
});

function startProcessMetaTrader(courseName) {
    let course = courseName;
    let experience = prompt(`Excelente, gracias por tu interés en el curso ${course}. Permítenos conocerte mejor para saber si este curso es apto para ti.\nPrimero: ¿Tienes experiencia en el trading? (SI o NO)`);

    if (experience && experience.toUpperCase() === 'NO') {
        let continueWithCourse = prompt(`Entendemos, en este caso te recomendamos iniciar con el curso Básico de Trading en Forex para iniciar tus primeros pasos en el trading.\n¿Aún así deseas continuar con el curso de MetaTrader? (SI o NO)`);

        if (continueWithCourse && continueWithCourse.toUpperCase() === 'NO') {
            alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
        } else if (continueWithCourse && continueWithCourse.toUpperCase() === 'SI') {
            let purchase = prompt(`El precio del curso está a $75. ¿Deseas adquirirlo? (SI o NO)`);

            if (purchase && purchase.toUpperCase() === 'NO') {
                alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
            } else if (purchase && purchase.toUpperCase() === 'SI') {
                proceedWithUserDetails(course);
            }
        }
    } else if (experience && experience.toUpperCase() === 'SI') {
        let years = prompt('De acuerdo, indícanos el número de años de experiencia que tienes en el trading (solo número)');

        if (years >= 1 && years <= 2) {
            alert('¡Perfecto! Este curso es adecuado para ti.');
            let purchase = prompt(`El precio del curso está a $75. ¿Deseas adquirirlo? (SI o NO)`);

            if (purchase && purchase.toUpperCase() === 'NO') {
                alert('Entendemos, esperamos que nuestra información pueda motivarte a continuar en el trading con Burs Advisory.');
            } else if (purchase && purchase.toUpperCase() === 'SI') {
                proceedWithUserDetails(course);
            }
        } else if (years >= 3) {
            alert('Te recomendamos nuestro curso de Revisión y Manejo de Brokers, pero también te comentamos que el precio del curso de MetaTrader es de $75.');
            let continueWithMetaTrader = prompt(`¿Deseas continuar con el curso de MetaTrader? (SI o NO)`);

            if (continueWithMetaTrader && continueWithMetaTrader.toUpperCase() === 'SI') {
                proceedWithUserDetails('Curso de MetaTrader');
            } else {
                alert('Entendemos, esperamos que nuestra información pueda ser útil para ti.');
            }
        }
    }
}

function proceedWithUserDetails(course) {
    let name = prompt('De acuerdo, indícanos tu nombre por favor');
    let phone = prompt('Excelente, ahora indícanos tu número de celular por favor');
    let email = prompt('Muy bien, ahora indícanos tu correo electrónico');

    let confirmation = prompt(`Estos son los datos que tenemos:\nCurso: ${course}\nNombre: ${name}\nNúmero de celular: ${phone}\nCorreo electrónico: ${email}\n¿Todos estos datos son correctos? (SI o NO)`);

    if (confirmation && confirmation.toUpperCase() === 'SI') {
        alert('Muy bien, uno de nuestros asesores se contactará contigo a la brevedad.');
        console.log({
            curso: course,
            nombre: name,
            celular: phone,
            correo: email
        });
    } else {
        alert('Por favor, vuelve a iniciar el proceso.');
    }
}


document.getElementById('btn-adquirir-brokers').addEventListener('click', function() {
    startProcessBrokers('Curso de Revisión y Manejo de Brokers');
});

function startProcessBrokers(courseName) {
    let course = courseName;
    let experience = prompt(`Excelente, gracias por tu interés en el curso ${course}. Permítenos conocerte mejor para saber si este curso es apto para ti.\nPrimero: ¿Tienes experiencia en el trading? (SI o NO)`);

    if (experience && experience.toUpperCase() === 'NO') {
        let continueWithCourse = prompt(`Entendemos, en este caso te recomendamos iniciar con el curso Básico de Trading en Forex para iniciar tus primeros pasos en el trading.\n¿Aún así deseas continuar con el curso de Revisión y Manejo de Brokers? (SI o NO)`);

        if (continueWithCourse && continueWithCourse.toUpperCase() === 'NO') {
            alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
        } else if (continueWithCourse && continueWithCourse.toUpperCase() === 'SI') {
            let purchase = prompt(`El precio del curso está a $125. ¿Deseas adquirirlo? (SI o NO)`);

            if (purchase && purchase.toUpperCase() === 'NO') {
                alert('Entendemos, esperamos que nuestra información pueda motivarte a comenzar en el trading con Burs Advisory.');
            } else if (purchase && purchase.toUpperCase() === 'SI') {
                proceedWithUserDetails(course);
            }
        }
    } else if (experience && experience.toUpperCase() === 'SI') {
        let years = prompt('De acuerdo, indícanos el número de años de experiencia que tienes en el trading (solo número)');

        if (years >= 1 && years <= 2) {
            let continueWithBrokers = prompt(`Con 1 o 2 años de experiencia, te recomendamos los cursos de MetaTrader o TradingView. ¿Deseas continuar con el curso de Revisión y Manejo de Brokers de todas formas? (SI o NO)`);

            if (continueWithBrokers && continueWithBrokers.toUpperCase() === 'NO') {
                alert('Te invitamos a conocer más sobre MetaTrader o TradingView.');
            } else if (continueWithBrokers && continueWithBrokers.toUpperCase() === 'SI') {
                let purchase = prompt(`El precio del curso está a $125. ¿Deseas adquirirlo? (SI o NO)`);

                if (purchase && purchase.toUpperCase() === 'NO') {
                    alert('Entendemos, esperamos que nuestra información pueda motivarte a continuar en el trading con Burs Advisory.');
                } else if (purchase && purchase.toUpperCase() === 'SI') {
                    proceedWithUserDetails(course);
                }
            }
        } else if (years >= 3) {
            alert('¡Perfecto! Con 3 o más años de experiencia, estás apto para el curso de Revisión y Manejo de Brokers.');
            let purchase = prompt(`El precio del curso está a $125. ¿Deseas adquirirlo? (SI o NO)`);

            if (purchase && purchase.toUpperCase() === 'NO') {
                alert('Entendemos, esperamos que nuestra información pueda motivarte a continuar en el trading con Burs Advisory.');
            } else if (purchase && purchase.toUpperCase() === 'SI') {
                proceedWithUserDetails(course);
            }
        }
    }
}

function proceedWithUserDetails(course) {
    let name = prompt('De acuerdo, indícanos tu nombre por favor');
    let phone = prompt('Excelente, ahora indícanos tu número de celular por favor');
    let email = prompt('Muy bien, ahora indícanos tu correo electrónico');

    let confirmation = prompt(`Estos son los datos que tenemos:\nCurso: ${course}\nNombre: ${name}\nNúmero de celular: ${phone}\nCorreo electrónico: ${email}\n¿Todos estos datos son correctos? (SI o NO)`);

    if (confirmation && confirmation.toUpperCase() === 'SI') {
        alert('Muy bien, uno de nuestros asesores se contactará contigo a la brevedad.');
        console.log({
            curso: course,
            nombre: name,
            celular: phone,
            correo: email
        });
    } else {
        alert('Por favor, vuelve a iniciar el proceso.');
    }
}


document.getElementById('experience-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir recarga de la página

    // Recoger valores del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);

    // Definir los cursos disponibles
    const courses = [
        {name: 'Curso Básico de Trading en Forex', img: './assets/trading_enforex.webp', minExperience: 0, maxExperience: 0},
        {name: 'Curso de MetaTrader', img: './assets/metatrader_curso.webp', minExperience: 1, maxExperience: 2},
        {name: 'Curso de TradingView', img: './assets/tradingview_desdecero.webp', minExperience: 1, maxExperience: 2},
        {name: 'Curso de Revisión y Manejo de Brokers', img: './assets/brokers_curso.webp', minExperience: 3, maxExperience: Infinity}
    ];

    // Limpiar cualquier recomendación previa
    document.getElementById('course-name').innerText = '';
    document.getElementById('course-images').innerHTML = '';

    // Filtrar los cursos según la experiencia usando filter() para obtener múltiples cursos
    const recommendedCourses = courses.filter(course => experience >= course.minExperience && experience <= course.maxExperience);

    // Mostrar los cursos recomendados
    if (recommendedCourses.length > 0) {
        document.getElementById('course-name').innerText = `Cursos Recomendados:`;

        // Mostrar las imágenes de los cursos recomendados
        recommendedCourses.forEach(course => {
            const imgElement = document.createElement('img');
            imgElement.src = course.img;
            imgElement.alt = course.name;
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = 'auto';
            imgElement.style.display = 'block'; // Para asegurarse que se muestren
            imgElement.classList.add('mb-3'); // Añadir margen inferior para separar imágenes
            document.getElementById('course-images').appendChild(imgElement);
        });
    } else {
        document.getElementById('course-name').innerText = 'No se encontró un curso adecuado para tu nivel de experiencia.';
    }

    // Mostrar en la consola los datos del usuario
    const userData = { nombre: name, celular: phone, correo: email, experiencia: experience };
    console.log(userData);
});
