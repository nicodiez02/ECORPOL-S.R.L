window.addEventListener("load", function (event) {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'Nombre');
                break;
            case "apellido":
                validarCampo(expresiones.nombre, e.target, 'Apellido');
                break;
            case "email":
                validarCampo(expresiones.correo, e.target, 'Email');
                break;
            case "razon":
                validarCampo(expresiones.nombre, e.target, 'Razon');
                break;
            case "rubrito":
                validarCampo(expresiones.nombre, e.target, 'Rubro');
                break;
            case "mensajito":
                validarCampo(expresiones.nombre, e.target, 'Mensaje');
                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupos__input${campo}`).classList.remove('grupo__input-incorrecto');
            document.getElementById(`grupos__input${campo}`).classList.add('grupo__input-correcto');
            document.getElementById(`input-error${campo}`).classList.remove('mensaje__error-activo');
            
            document.querySelector(`#grupos__input${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupos__input${campo} i`).classList.remove('fa-times-circle');
    
            
        } else {
            document.getElementById(`grupos__input${campo}`).classList.add('grupo__input-incorrecto');
            document.getElementById(`grupos__input${campo}`).classList.remove('grupo__input-correcto');
            document.getElementById(`input-error${campo}`).classList.add('mensaje__error-activo');
            
            document.querySelector(`#grupos__input${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupos__input${campo} i`).classList.remove('fa-check-circle');
            /*
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            */
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); 

        let datos = new FormData(formulario);

        fetch('./php/validacion.php', {
            method: 'POST',
            body: datos
        })
            .then(res => res.json())
            .then(data => {
                if (data === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Su consulta se ha enviado con exito',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else if (data === 'unsuccess-mail') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error al procesar la informacion, intentelo mas tarde',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Revise sus datos e intentelo nuevamente',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    })
    
});
