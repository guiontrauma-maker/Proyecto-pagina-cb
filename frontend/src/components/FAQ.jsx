import { useState } from "react";

import {
    FaChevronDown
} from "react-icons/fa";



function FAQ(){


const preguntas=[


{
pregunta:"¿Puedo recuperar mi dinero después de una estafa?",
respuesta:
"Depende de cada caso. Analizamos la información disponible, movimientos, documentos y evidencias para determinar las posibles acciones."
},



{
pregunta:"¿Qué tipos de fraude atienden?",
respuesta:
"Atendemos casos relacionados con fraudes bancarios, digitales, robo de identidad, inversiones falsas, brokers fraudulentos y esquemas piramidales."
},



{
pregunta:"¿Qué información necesito para iniciar una evaluación?",
respuesta:
"Generalmente solicitamos comprobantes de pago, conversaciones, contratos, transferencias, datos de la plataforma o empresa involucrada y cualquier evidencia disponible."
},



{
pregunta:"¿La evaluación inicial tiene costo?",
respuesta:
"Realizamos una revisión inicial para conocer su situación y determinar las posibles alternativas de solución."
},



{
pregunta:"¿Cuánto tiempo tarda un proceso de recuperación?",
respuesta:
"El tiempo depende de la complejidad del caso, la cantidad de evidencia disponible y las acciones necesarias para avanzar."
}



];





const [activo,setActivo]=useState(null);





function abrirPregunta(index){


setActivo(

activo === index ? null : index

);


}





return(


<section className="faq">



<div className="faq-header">


<h2>

Preguntas frecuentes

</h2>


<p>

Resolvemos las dudas más comunes antes de iniciar una evaluación.

</p>


</div>







<div className="faq-container">



{

preguntas.map((item,index)=>(



<div

className="faq-item"

key={index}

>




<button

className="faq-question"

onClick={()=>abrirPregunta(index)}

>



<span>

{item.pregunta}

</span>



<FaChevronDown

className={activo===index ? "rotate" : ""}

/>



</button>







{

activo===index && (

<div className="faq-answer">

<p>

{item.respuesta}

</p>

</div>

)

}




</div>



))


}




</div>






</section>


);


}



export default FAQ;



