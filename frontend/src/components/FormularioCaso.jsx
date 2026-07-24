import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaLock
} from "react-icons/fa";

import { PhoneInput } from "react-international-phone";

import "react-international-phone/style.css";

import "../style/FormularioCaso.css";


function FormularioCaso(){


return (

<section className="formulario-seccion">


<form className="contact-form">



<h2>

RECUPERE SUS PÉRDIDAS

</h2>



<p>

Solicite una revisión de caso sin costo hoy mismo.

</p>






<div className="input-group">


<FaUser/>


<input

type="text"

placeholder="Nombre completo"

/>


</div>








<div className="input-group">


<FaEnvelope/>


<input

type="email"

placeholder="Correo electrónico"

/>


</div>








<div className="phone-row">


<PhoneInput

defaultCountry="mx"

/>


</div>








<div className="input-group">


<FaDollarSign/>


<input

type="number"

placeholder="Monto aproximado (USD)"

/>


</div>








<details className="comments-box">


<summary>

Agregar comentarios adicionales (Opcional)

</summary>




<textarea

placeholder="Describa brevemente su caso"

/>



</details>








<button type="submit">


Solicitar Evaluación Gratuita


</button>








<small className="secure">


<FaLock/>

Información encriptada


</small>





</form>


</section>


)


}


export default FormularioCaso;