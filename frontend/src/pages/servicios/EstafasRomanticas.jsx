import { useState } from "react";

import "../../style/EstafasRomanticas.css";
import FormularioCaso from "../../components/FormularioCaso";

import {

FaHeartBroken,
FaUserSecret,
FaMoneyBillWave,
FaLock,
FaFingerprint,
FaSearch,
FaGavel,
FaUsers,
FaGlobe,
FaShieldAlt,
FaQuoteLeft,
FaCheckCircle,
FaBitcoin,
FaChartLine,
FaUniversity,
FaWhatsapp

} from "react-icons/fa";





function EstafasRomanticas(){



const [faqActivo,setFaqActivo] = useState(null);



const abrirFaq=(index)=>{


setFaqActivo(

faqActivo === index ? null : index

);


};





return(


<main className="estafas-romanticas-page">






{/* HERO */}



<section className="romanticas-hero">



<div className="etiqueta-romantica">

💗 Recuperación de Fraudes Sentimentales

</div>




<h1>

Estafas Románticas:

<br/>

No Estás Solo

</h1>




<p>

Recuperamos tu confianza y tu dinero.
Entendemos la devastación emocional y financiera
de ser víctima de una persona en la que confiabas.
Nuestro equipo legal y forense actúa con total
discreción para rastrear al estafador.

</p>




<a href="/contacto">

Asesoría Confidencial

</a>




</section>









{/* COMO FUNCIONA */}



<section className="como-funciona">


<div className="section-header">


<h2>

El Engaño Detrás del "Amor" Virtual

</h2>



<p>

Los estafadores sentimentales utilizan manipulación
psicológica para crear confianza y obtener beneficios
económicos.

</p>


</div>





<div className="tarjetas-engano">





<article>


<div className="icon-card">

<FaHeartBroken/>

</div>



<h3>

Manipulación Emocional

</h3>



<p>

Utilizan técnicas como Love Bombing para crear
una conexión intensa y controlar las decisiones
de la víctima.

</p>


</article>







<article>


<div className="icon-card">

<FaUserSecret/>

</div>




<h3>

Perfiles Falsos y Catfishing

</h3>



<p>

Usan identidades falsas de médicos, militares,
pilotos o profesionales para generar confianza.

</p>



</article>








<article>


<div className="icon-card">

<FaMoneyBillWave/>

</div>




<h3>

Explotación Financiera

</h3>



<p>

Inventan emergencias, problemas legales o inversiones
falsas para obtener transferencias.

</p>



</article>






</div>


</section>
{/* ESTRATEGIA LEGAL */}


<section className="estrategia-fraude">


<div className="section-header">


<h2>

Estrategia Legal contra el Fraude Romántico

</h2>



<p>

Combinamos investigación digital y estrategias legales
para identificar responsables y buscar la recuperación
de fondos.

</p>


</div>






<div className="estrategia-grid">





<article>


<div className="estrategia-icon">

<FaLock/>

</div>



<h3>

Discreción Absoluta

</h3>



<p>

Manejamos cada caso con privacidad total,
evitando la exposición de la víctima.

</p>



</article>







<article>


<div className="estrategia-icon">

<FaFingerprint/>

</div>



<h3>

Análisis Forense Digital

</h3>



<p>

Rastreamos direcciones IP, correos, fotografías
y conexiones digitales utilizadas por el estafador.

</p>



</article>







<article>


<div className="estrategia-icon">

<FaSearch/>

</div>



<h3>

Rastreo de Activos

</h3>



<p>

Seguimos movimientos bancarios, cuentas receptoras
y posibles redes utilizadas para mover el dinero.

</p>



</article>







<article>


<div className="estrategia-icon">

<FaGavel/>

</div>



<h3>

Acción Penal y Recuperación

</h3>



<p>

Desarrollamos estrategias para acreditar el engaño
y buscar la reparación del daño.

</p>



</article>






</div>


</section>









{/* PORQUE ELEGIRNOS */}



<section className="porque-testimonio">





<div className="porque-dentro">



<h2>

¿Por qué elegirnos?

</h2>




<p className="subtitulo-porque">

Tratamos cada caso con la sensibilidad humana que merece
y la estrategia especializada necesaria para enfrentar
fraudes sentimentales.

</p>







<div className="porque-grid">






<article className="porque-card">



<div className="porque-icon">

<FaUsers/>

</div>




<h3>

Apoyo Empático

</h3>




<p>

Entendemos el impacto emocional de una estafa romántica.
Te acompañamos durante todo el proceso sin juzgar.

</p>



</article>









<article className="porque-card">



<div className="porque-icon">

<FaShieldAlt/>

</div>




<h3>

Seguridad y Privacidad

</h3>




<p>

Tu información personal, conversaciones y evidencia
son manejadas con absoluta confidencialidad.

</p>



</article>









<article className="porque-card">



<div className="porque-icon">

<FaGlobe/>

</div>




<h3>

Red Internacional

</h3>




<p>

Muchos estafadores operan desde otros países.
Analizamos conexiones digitales internacionales.

</p>



</article>









<article className="porque-card">



<div className="porque-icon">

<FaGavel/>

</div>




<h3>

Litigio Especializado

</h3>




<p>

Creamos estrategias legales enfocadas en demostrar
el engaño y buscar recuperación patrimonial.

</p>



</article>






</div>



</div>









{/* TESTIMONIO */}




<div className="comentario-cliente">



<FaQuoteLeft className="comilla"/>




<p>

"Estaba avergonzada y pensé que había perdido
mis ahorros de jubilación por un 'médico' que conocí
en línea. El equipo no solo recuperó el 70% de los fondos,
sino que me trataron con una dignidad y respeto que
me ayudó a sanar."

</p>







<strong>

María R.

</strong>







<span>

Caso Verificado • Fraude "Romance Scam"

</span>





</div>







</section>
{/* PREGUNTAS FRECUENTES */}



<section className="faq-romanticas">



<div className="section-header">



<h2>

Preguntas Frecuentes sobre Estafas Románticas

</h2>




<p>

Resolvemos las dudas más comunes antes de iniciar
una investigación.

</p>



</div>








<div className="faq-list">





{

[


{

pregunta:
"¿Puedo recuperar mi dinero si lo envié voluntariamente?",


respuesta:
"Sí. Aunque la transferencia haya sido autorizada, si fue obtenida mediante engaño, manipulación emocional o falsas promesas puede existir responsabilidad por fraude."

},




{

pregunta:
"¿Mi identidad será pública al denunciar?",


respuesta:
"No. Toda la información del caso se maneja bajo estricta confidencialidad para proteger la privacidad de la víctima."

},





{

pregunta:
"¿Qué información necesitan para investigar?",


respuesta:
"Conversaciones, comprobantes de pago, perfiles utilizados, correos electrónicos, números telefónicos y cualquier evidencia disponible."

},





{

pregunta:
"¿Atienden casos de Pig Butchering?",


respuesta:
"Sí. Analizamos casos donde la víctima es manipulada durante meses mediante inversiones falsas y promesas económicas."

}



].map((faq,index)=>(



<div 
className="faq-item"
key={index}
>



<button

onClick={()=>abrirFaq(index)}

>


{faq.pregunta}



<span>

{

faqActivo === index
?
"-"
:
"+"

}

</span>



</button>






{

faqActivo === index && (



<div className="faq-respuesta">


<p>

{faq.respuesta}

</p>



</div>



)



}





</div>




))}



</div>



</section>









{/* CASO DE ÉXITO */}




<section className="caso-exito-grid">






<div className="resultado-caso">



<FaCheckCircle/>




<h3>

Caso de Éxito

</h3>




<strong>

$85,000 USD

</strong>




<span>

Recuperados

</span>



</div>









<div className="historia-caso">





<h2>

El Caso del "Ingeniero" en Medio Oriente

</h2>






<p>

La víctima mantuvo una relación a distancia de 8 meses
con un supuesto ingeniero civil en Dubai.
Fue convencida de enviar dinero para "liberar maquinaria
de aduanas".

</p>







<h3>

Nuestra Intervención

</h3>







<p>

Mediante análisis de IP en correos electrónicos,
ubicamos al estafador en Lagos, Nigeria, no en Dubai.
Rastreamos los fondos hasta una cuenta mula en México,
la cual congelamos legalmente antes de que el dinero
saliera del país.

</p>







<a href="/contacto">

Ver si mi caso es similar →

</a>







</div>





</section>




<FormularioCaso origen="Estafas Románticas"/>




{/* OTROS SERVICIOS RELACIONADOS */}





<section className="servicios-relacionados">





<h2>

Otros Servicios Relacionados

</h2>








<div className="relacionados-grid">






<a href="/servicios/estafas-inversion">


<FaChartLine/>


<span>

Forex y CFDs

</span>


</a>







<a href="/servicios/criptomonedas">


<FaBitcoin/>


<span>

Criptomonedas

</span>


</a>







<a href="/servicios/estafas-piramidales">


<FaUsers/>


<span>

Esquemas Ponzi

</span>


</a>







<a href="/servicios/fraudes-bancarios">


<FaUniversity/>


<span>

Fraude Bancario

</span>


</a>






</div>





</section>









{/* WHATSAPP */}





<a

href="https://wa.me/5663820152"

target="_blank"

rel="noopener noreferrer"

className="whatsapp-float"

>


<FaWhatsapp/>


</a>








</main>


);



}



export default EstafasRomanticas;