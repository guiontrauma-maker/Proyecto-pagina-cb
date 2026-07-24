import { useState } from "react";

import "../../style/RoboIdentidad.css";
import FormularioCaso from "../../components/FormularioCaso";
import {

FaUserSecret,
FaIdCard,
FaCreditCard,
FaDatabase,
FaSearch,
FaShieldAlt,
FaGavel,
FaLock,
FaUserShield,
FaFileAlt,
FaQuoteLeft,
FaCheckCircle,
FaChartLine,
FaBitcoin,
FaWhatsapp,
FaUniversity,
FaHeart

} from "react-icons/fa";
function RoboIdentidad(){



const [faqActivo,setFaqActivo]=useState(null);



const abrirFaq=(index)=>{

setFaqActivo(
faqActivo===index ? null:index
);

};





return(


<main className="ri-page">







{/* HERO */}



<section className="ri-hero">



<div className="ri-etiqueta">


<FaUserSecret/>

Protección contra Robo de Identidad


</div>






<h1>

Robo de Identidad:

<br/>

Recupera el Control de Tu Información

</h1>







<p>

¿Alguien utilizó tus datos personales para abrir
cuentas, solicitar créditos o realizar operaciones
sin tu autorización?

Investigamos el origen del fraude y buscamos
proteger nuevamente tu patrimonio.

</p>







<a href="/contacto">

Asesoría Confidencial

</a>





</section>









{/* COMO FUNCIONA */}




<section className="ri-seccion">





<div className="ri-titulo">


<h2>

El Engaño Detrás del Robo de Identidad

</h2>



<p>

Los delincuentes utilizan información personal,
documentos falsos y técnicas digitales para hacerse
pasar por otra persona.

</p>


</div>








<div className="ri-grid">






<article className="ri-card">


<div className="ri-icono">

<FaIdCard/>

</div>




<h3>

Suplantación de Identidad

</h3>




<p>

Utilizan documentos, fotografías o datos personales
para crear una identidad falsa.

</p>



</article>








<article className="ri-card">


<div className="ri-icono">

<FaCreditCard/>

</div>




<h3>

Créditos y Cuentas Falsas

</h3>




<p>

Solicitan préstamos, tarjetas o servicios financieros
a nombre de la víctima.

</p>



</article>








<article className="ri-card">


<div className="ri-icono">

<FaDatabase/>

</div>




<h3>

Uso de Datos Personales

</h3>




<p>

Obtienen información mediante filtraciones,
engaños digitales o ingeniería social.

</p>



</article>






</div>







</section>
{/* ESTRATEGIA LEGAL */}



<section className="ri-seccion ri-fondo">





<div className="ri-titulo">


<h2>

Estrategia Legal contra el Robo de Identidad

</h2>



<p>

Combinamos investigación digital, análisis documental
y acciones legales para detener el uso indebido de su
información personal.

</p>



</div>








<div className="ri-grid">







<article className="ri-card">


<div className="ri-icono">


<FaShieldAlt/>

</div>




<h3>

Protección Patrimonial

</h3>




<p>

Buscamos detener operaciones fraudulentas y proteger
sus cuentas, créditos y activos financieros.

</p>



</article>









<article className="ri-card">


<div className="ri-icono">


<FaSearch/>

</div>




<h3>

Investigación Digital

</h3>




<p>

Analizamos rastros digitales, documentos utilizados,
cuentas relacionadas y movimientos sospechosos.

</p>



</article>









<article className="ri-card">


<div className="ri-icono">


<FaFileAlt/>

</div>




<h3>

Análisis Documental

</h3>




<p>

Revisamos contratos, solicitudes y documentos para
identificar inconsistencias y responsables.

</p>



</article>









<article className="ri-card">


<div className="ri-icono">


<FaGavel/>

</div>




<h3>

Acción Legal

</h3>




<p>

Presentamos las acciones necesarias para defender
sus derechos y buscar reparación del daño.

</p>



</article>








</div>







</section>









{/* PORQUE ELEGIRNOS */}





<section className="ri-seccion">





<div className="ri-titulo">


<h2>

¿Por qué elegirnos para Robo de Identidad?

</h2>




<p>

Un robo de identidad requiere más que cancelar
cuentas. Se necesita investigar cómo ocurrió y quién
utilizó la información.

</p>



</div>









<div className="ri-grid cuatro">







<article className="ri-card">


<div className="ri-icono">

<FaUserShield/>

</div>




<h3>

Defensa Especializada

</h3>




<p>

Protegemos sus derechos frente a instituciones
financieras y empresas.

</p>



</article>









<article className="ri-card">


<div className="ri-icono">

<FaLock/>

</div>




<h3>

Privacidad Total

</h3>




<p>

Tratamos cada caso con absoluta confidencialidad
y protección de información.

</p>



</article>









<article className="ri-card">


<div className="ri-icono">

<FaDatabase/>

</div>




<h3>

Análisis Digital

</h3>




<p>

Investigamos la ruta de los datos utilizados para
cometer el fraude.

</p>



</article>









<article className="ri-card">


<div className="ri-icono">

<FaGavel/>

</div>




<h3>

Acompañamiento Legal

</h3>




<p>

Guiamos todo el proceso hasta la solución del caso.

</p>



</article>







</div>









{/* TESTIMONIO */}





<div className="ri-testimonio">



<FaQuoteLeft/>





<p>

"Descubrí que habían solicitado créditos a mi nombre
y mi historial estaba afectado. El equipo investigó
el origen del fraude y logró aclarar mi situación
con las instituciones involucradas."

</p>






<strong>

Laura G.

</strong>





<span>

Caso Verificado • Robo de Identidad

</span>






</div>







</section>
{/* PREGUNTAS FRECUENTES */}



<section className="ri-seccion">





<div className="ri-titulo">


<h2>

Preguntas Frecuentes sobre Robo de Identidad

</h2>



</div>









<div className="ri-faq">





{[


{

pregunta:
"¿Qué debo hacer si alguien utilizó mis datos personales?",

respuesta:
"Lo primero es documentar cualquier operación no reconocida, proteger sus cuentas y realizar un análisis para determinar cómo ocurrió el uso indebido de la información."

},



{

pregunta:
"¿Puedo eliminar créditos o deudas que alguien hizo a mi nombre?",

respuesta:
"Sí, cuando se demuestra que la operación fue realizada mediante suplantación de identidad pueden existir vías legales para solicitar la aclaración y defensa correspondiente."

},



{

pregunta:
"¿Cómo descubren quién utilizó mi información?",

respuesta:
"Se analizan documentos, movimientos, registros digitales y la información relacionada con las operaciones fraudulentas."

},



{

pregunta:
"¿Cuánto tiempo tengo para actuar?",

respuesta:
"Es recomendable actuar lo antes posible para evitar que los responsables continúen utilizando sus datos o generen nuevos daños."

}



].map((item,index)=>(



<div

className="ri-faq-item"

key={index}

>




<button

onClick={()=>abrirFaq(index)}

>



{item.pregunta}




<span>


{

faqActivo===index

?

"−"

:

"+"

}


</span>




</button>







{

faqActivo===index &&


<div className="ri-faq-respuesta">

{item.respuesta}

</div>


}





</div>



))}





</div>






</section>









{/* CASO DE ÉXITO */}





<section className="ri-caso">







<div className="ri-resultado">





<FaCheckCircle/>





<h3>

Caso de Éxito #301

</h3>







<strong>

$85,000 MXN

</strong>







<p>

Recuperados

</p>







</div>









<div className="ri-historia">





<h2>

Crédito Solicitado con Identidad Falsa

</h2>






<p>

Una víctima detectó un crédito bancario que nunca
solicitó y descubrió que sus datos personales habían
sido utilizados para realizar una solicitud fraudulenta.

</p>








<h3>

Nuestra Intervención

</h3>







<p>

Realizamos un análisis documental de la operación,
identificamos inconsistencias en la solicitud y
gestionamos las acciones necesarias para demostrar
la suplantación de identidad ante las instituciones
correspondientes.

</p>







<a href="/contacto">

Tengo un caso similar →

</a>






</div>







</section>









{/* EVALUACION */}





<section className="ri-evaluacion">





<h2>

Evaluación de Caso Gratuita

</h2>






<p>

Cada minuto cuenta cuando sus datos están siendo
utilizados por terceros. Analizamos su situación y
definimos la estrategia adecuada.

</p>







<div className="ri-beneficios">





<div>

<FaLock/>

Confidencialidad Total

</div>







<div>

<FaUserShield/>

Protección de Datos

</div>






</div>







</section>



<FormularioCaso/>





{/* SERVICIOS RELACIONADOS */}





<section className="ri-relacionados">





<h2>

Otros Servicios Relacionados

</h2>







<div className="ri-relacionados-grid">





<a href="/servicios/fraude-bancario">


<FaUniversity/>

Fraude Bancario


</a>







<a href="/servicios/estafas-inversion">


<FaChartLine/>

Estafas de Inversión


</a>







<a href="/servicios/criptomonedas">


<FaBitcoin/>

Criptomonedas


</a>







<a href="/servicios/estafas-romanticas">


<FaHeart/>

Estafas Románticas


</a>







</div>






</section>









{/* WHATSAPP */}





<a

href="https://wa.me/5215573421286"

target="_blank"

rel="noopener noreferrer"

className="ri-whatsapp"

>



<FaWhatsapp/>




</a>






</main>



);



}



export default RoboIdentidad;