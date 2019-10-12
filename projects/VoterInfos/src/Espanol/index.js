import React from "react";

const Espanol = () => {
    return (
        <div className="espanol-main-container">
            <h1 className="main-info-Header">Información de registro de votantes para Utah</h1>
            <div className="info-container">
                <h5 className="info-header">Registation is requiered</h5>
                <p className="info-paragraph">¿Recientemente cumplió 18 años? ¿Quieres cambiar tu fiesta de afiliación?
                     ¿Su dirección de registro de votante es incorrecta?
                     Asegúrese de ser elegible para votar en las próximas elecciones.
                     Tómese unos minutos y complete el formulario de registro de votante antes de que sea demasiado TARDE</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">Preinscripción</h5>
                <p className="info-paragraph">Los mayores de 16 años pueden preinscribirse para votar.
                      Cuando cumpla 18 años, su solicitud de registro de votante se procesará por completo.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header"> Registro el mismo día</h5>
                <p className="info-paragraph">Utah <span className="important-info">no ofrece la oportunidad</span> 
                de registrarse votar el día de las elecciones.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">Registro automático de votantes</h5>
                <p className="info-paragraph">Utah no se registra automáticamente elegible
                     ciudadanos para votar cuando van a una agencia gubernamental, como el DMV.
                     Debe seguir los pasos para completar los formularios de registro de votantes.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">Si te has mudado</h5>
                <p className="info-paragraph">Utah requiere que los solicitantes de registro vivan en
                    el estado durante al menos<span className="important-info"> 30 días</span> antes de
                    registrarse para votar.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header"> Documentos requeridos</h5>
                <p className="info-paragraph">Al enviar una solicitud de registro de votante,
                     No se requieren documentos adicionales para procesar su registro.
                    PERO necesitará saber <span>el número de licencia / ID emitido</span> por <span>el estado o los últimos 4 dígitos de su SSN.</span>
                    El estado confirma su ciudadanía y elegibilidad a través de la información
                     proporcionado en su formulario de registro.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">Restauración de los derechos de voto</h5>
                <p className="info-paragraph">En Utah, los derechos de voto de las personas condenadas son
                      restaurado automáticamente al soltarlo. PERO debes volver a registrarte para votar
                      Después de su liberación.</p>
            </div>
        </div>
    )
    
};
export default Espanol