import { useState } from "react";

import "../../style/EstafasPiramidales.css";
import FormularioCaso from "../../components/FormularioCaso";
import {
FaExclamationTriangle,
FaChartLine,
FaUsers,
FaSadTear,
FaShieldAlt,
FaFileContract,
FaGavel,
FaSearch,
FaFolderOpen,
FaMapMarkedAlt,
FaBrain,
FaHandshake,
FaQuoteLeft,
FaCheckCircle,
FaBitcoin,
FaHeart,
FaUniversity,
FaWhatsapp
} from "react-icons/fa";



function EstafasPiramidales(){


const [faqActivo,setFaqActivo]=useState(null);



const abrirFaq=(index)=>{

setFaqActivo(
faqActivo === index ? null : index
);

};





return(

<main className="ep-page">





{/* HERO */}



<section className="ep-hero">



<div className="ep-etiqueta">

<FaExclamationTriangle/>

Litigio por Fraude Financiero

</div>




<h1>

Fraude Piramidal:

<br/>

Recuperamos Tu Inversión

</h1>




<p>

¿Fue víctima de Yox Holding, Grupo Peak,
Wolf Bet u otros esquemas de alto rendimiento?

No está solo. Unimos fuerzas con inversionistas
afectados para buscar la recuperación de su patrimonio.

</p>




<a href="/contacto">

Asesoría Confidencial

</a>



</section>









{/* ENTENDER LA ESTRATEGIA */}




<section className="ep-seccion">



<div className="ep-titulo">


<h2>

El Colapso de las "Inversiones Seguras"

</h2>



<p>

Empresas como Yox Holding, Grupo Peak y Wolf Bet
prometieron rendimientos imposibles mediante
sistemas inexistentes de inversión.

</p>



</div>






<div className="ep-grid">





<article className="ep-card">



<div className="ep-icono">

<FaChartLine/>

</div>



<h3>

La Promesa Rota

</h3>



<p>

Todo comienza con pagos puntuales para generar
confianza. Después aparecen excusas técnicas
hasta que los pagos desaparecen.

</p>



</article>








<article className="ep-card">



<div className="ep-icono">

<FaSadTear/>

</div>



<h3>

Impacto Emocional

</h3>



<p>

Las víctimas enfrentan ansiedad e incertidumbre,
especialmente cuando involucraron familiares
y amigos.

</p>



</article>








<article className="ep-card">



<div className="ep-icono">

<FaUsers/>

</div>



<h3>

La Fuerza del Grupo

</h3>



<p>

Las acciones colectivas permiten generar mayor
presión y mejores oportunidades de recuperación.

</p>



</article>





</div>






</section>
{/* NUESTRA ESTRATEGIA LEGAL */}



<section className="ep-seccion ep-fondo">



<div className="ep-titulo">


<h2>

Nuestra Estrategia Legal

</h2>



<p>

Combinamos la vía penal y mercantil para aumentar
las posibilidades de recuperación. Actuamos en
Guadalajara, CDMX, Monterrey y Querétaro.

</p>


</div>







<div className="ep-grid">







<article className="ep-card">


<div className="ep-icono">

<FaShieldAlt/>

</div>


<h3>

Protección Integral

</h3>


<p>

Buscamos recuperar el capital y establecer
responsabilidad penal contra socios y prestanombres.

</p>


</article>









<article className="ep-card">


<div className="ep-icono">

<FaFileContract/>

</div>


<h3>

Análisis de Contratos

</h3>


<p>

Revisamos contratos, pagarés y transferencias
para acreditar incumplimientos y rastrear fondos.

</p>


</article>









<article className="ep-card">


<div className="ep-icono">

<FaGavel/>

</div>


<h3>

Acción Colectiva

</h3>


<p>

Organizamos grupos de afectados para reducir costos
y generar mayor fuerza legal.

</p>


</article>









<article className="ep-card">


<div className="ep-icono">

<FaSearch/>

</div>


<h3>

Rastreo de Bienes

</h3>


<p>

Investigamos cuentas, propiedades y activos
para solicitar aseguramientos.

</p>


</article>







</div>





</section>









{/* PORQUE ELEGIRNOS */}





<section className="ep-seccion">



<div className="ep-titulo">


<h2>

¿Por qué elegirnos para Fraudes Piramidales?

</h2>


<p>

No somos un despacho generalista. Tenemos un equipo
especializado en delitos financieros y esquemas Ponzi.

</p>


</div>







<div className="ep-grid cuatro">







<article className="ep-card">


<div className="ep-icono">

<FaFolderOpen/>

</div>


<h3>

Casos Masivos

</h3>


<p>

Experiencia manejando grupos de afectados
en fraudes financieros colectivos.

</p>


</article>









<article className="ep-card">


<div className="ep-icono">

<FaMapMarkedAlt/>

</div>


<h3>

Cobertura Nacional

</h3>


<p>

Presencia y alianzas estratégicas en ciudades
donde operan estos fraudes.

</p>


</article>









<article className="ep-card">


<div className="ep-icono">

<FaBrain/>

</div>


<h3>

Inteligencia Financiera

</h3>


<p>

Investigación y análisis para localizar activos
ocultos de los responsables.

</p>


</article>









<article className="ep-card">


<div className="ep-icono">

<FaHandshake/>

</div>


<h3>

Honestidad Real

</h3>


<p>

Evaluamos la situación antes de iniciar cualquier
proceso legal.

</p>


</article>






</div>









{/* TESTIMONIO */}



<div className="ep-testimonio">



<FaQuoteLeft/>




<p>

"Mi familia perdió 2 millones de pesos en un esquema
inmobiliario fantasma. El equipo organizó a 40 afectados,
logramos el aseguramiento de un terreno comercial y
recuperamos el 70% de nuestra inversión."

</p>





<strong>

Roberto M.

</strong>



<span>

Caso Inmobiliario • Guadalajara, 2023

</span>




</div>







</section>
{/* PREGUNTAS FRECUENTES */}



<section className="ep-seccion">



<div className="ep-titulo">


<h2>

Preguntas Frecuentes sobre Fraudes Piramidales

</h2>


</div>







<div className="ep-faq">





{[


{

pregunta:
"¿Es posible recuperar mi dinero de empresas como Yox o Peak?",

respuesta:
"Sí, pero depende de la rapidez de la acción legal. El objetivo principal es localizar y asegurar activos antes de que sean ocultados o transferidos."

},



{

pregunta:
"¿Conviene más una demanda individual o colectiva?",

respuesta:
"En fraudes masivos, la acción colectiva permite unir pruebas, reducir costos y generar mayor presión legal."

},



{

pregunta:
"¿Qué documentos necesito para iniciar?",

respuesta:
"Contratos, comprobantes de depósitos, transferencias, comunicaciones y cualquier evidencia relacionada con la inversión."

},



{

pregunta:
"¿Cuánto tiempo tarda el proceso?",

respuesta:
"El tiempo depende de la complejidad del caso, la cantidad de afectados y la localización de los bienes."

}


].map((item,index)=>(


<div 
className="ep-faq-item"
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

<div className="ep-faq-respuesta">

{item.respuesta}

</div>


}



</div>



))}





</div>





</section>









{/* CASO DE ÉXITO */}




<section className="ep-caso">





<div className="ep-resultado">



<FaCheckCircle/>




<h3>

Caso de Éxito #219

</h3>




<strong>

$4.5 Millones MXN

</strong>




<p>

Valor Recuperado

</p>




</div>









<div className="ep-historia">



<h2>

Esquema de "Trading Deportivo"

</h2>





<p>

Un grupo de 15 inversionistas en Zapopan,
Jalisco, fue defraudado por una supuesta empresa
de arbitraje deportivo. La empresa cerró sus oficinas
físicas de la noche a la mañana.

</p>






<h3>

Resultado Legal

</h3>





<p>

Logramos localizar tres propiedades residenciales
a nombre de los socios fundadores que no habían sido
transferidas a terceros.

Mediante un embargo precautorio inmediato,
forzamos una negociación extrajudicial para la
devolución del capital principal.

</p>






<a href="/contacto">

Tengo un caso similar →

</a>





</div>







</section>









{/* EVALUACION */}



<section className="ep-evaluacion">





<h2>

Evaluación de Caso Gratuita

</h2>



<p>

El tiempo es crucial en casos de fraude piramidal.
Entre más rápido actuemos, mayores posibilidades
existen de localizar activos.

</p>







<div className="ep-beneficios">



<div>

<FaShieldAlt/>

Confidencialidad Total

</div>




<div>

<FaUsers/>

Integración a Grupo de Demandantes

</div>




</div>







</section>



<FormularioCaso/>





{/* SERVICIOS RELACIONADOS */}




<section className="ep-relacionados">



<h2>

Otros Servicios Relacionados

</h2>







<div className="ep-relacionados-grid">





<a href="/servicios/forex">

<FaChartLine/>

Forex y CFDs

</a>







<a href="/servicios/criptomonedas">

<FaBitcoin/>

Criptomonedas

</a>







<a href="/servicios/estafas-romanticas">

<FaHeart/>

Estafas Románticas

</a>







<a href="/servicios/fraude-bancario">

<FaUniversity/>

Fraude Bancario

</a>







</div>






</section>









{/* WHATSAPP */}




<a

href="https://wa.me/5215573421286"

target="_blank"

rel="noopener noreferrer"

className="ep-whatsapp"

>



<FaWhatsapp/>




</a>





</main>


);


}



export default EstafasPiramidales;