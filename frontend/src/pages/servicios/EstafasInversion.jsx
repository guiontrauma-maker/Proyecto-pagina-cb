import { useState } from "react";

import "../../style/EstafasInversion.css";
import FormularioCaso from "../../components/FormularioCaso";
import {

FaChartLine,
FaExclamationTriangle,
FaGlobe,
FaMoneyBillWave,
FaLock,
FaSearch,
FaShieldAlt,
FaFileContract,
FaBalanceScale,
FaUserSecret,
FaQuoteLeft,
FaCheckCircle,
FaBitcoin,
FaUniversity,
FaHeart,
FaWhatsapp

} from "react-icons/fa";



function EstafasInversion(){



const [faqActivo,setFaqActivo]=useState(null);



const abrirFaq=(index)=>{

setFaqActivo(
faqActivo===index ? null : index
);

};






return(


<main className="ei-page">







{/* HERO */}



<section className="ei-hero">





<div className="ei-etiqueta">

<FaExclamationTriangle/>

Recuperación de Fraudes de Inversión

</div>







<h1>

Estafas de Inversión:

<br/>

Recuperamos Tu Capital Perdido

</h1>







<p>

¿Fuiste víctima de una plataforma falsa de trading,
Forex, CFDs o inversiones con altos rendimientos?

Analizamos tu caso, rastreamos el flujo del dinero
y buscamos alternativas para recuperar tu patrimonio.

</p>







<a href="/contacto">

Asesoría Confidencial

</a>






</section>









{/* COMO FUNCIONA */}





<section className="ei-seccion">





<div className="ei-titulo">



<h2>

El Engaño Detrás de las Inversiones Falsas

</h2>



<p>

Muchas plataformas utilizan tecnología simulada,
asesores falsos y promesas de ganancias para
convencer a las víctimas de entregar grandes cantidades
de dinero.

</p>



</div>








<div className="ei-grid">







<article className="ei-card">



<div className="ei-icono">


<FaGlobe/>

</div>





<h3>

Plataformas Falsas

</h3>





<p>

Crean sitios web profesionales y aplicaciones
simuladas para aparentar ser empresas financieras
legítimas.

</p>





</article>









<article className="ei-card">



<div className="ei-icono">


<FaChartLine/>

</div>





<h3>

Ganancias Manipuladas

</h3>





<p>

Muestran rendimientos falsos para generar confianza
y convencer al usuario de invertir más dinero.

</p>





</article>









<article className="ei-card">



<div className="ei-icono">


<FaLock/>

</div>





<h3>

Bloqueo de Retiros

</h3>





<p>

Cuando la víctima intenta retirar fondos aparecen
supuestos impuestos, comisiones o requisitos
imposibles.

</p>





</article>







</div>






</section>
{/* ESTRATEGIA LEGAL */}



<section className="ei-seccion ei-fondo">





<div className="ei-titulo">



<h2>

Estrategia Legal contra Fraudes de Inversión

</h2>




<p>

Combinamos investigación financiera, análisis digital
y acciones legales para aumentar las posibilidades
de recuperación del capital perdido.

</p>




</div>









<div className="ei-grid">







<article className="ei-card">



<div className="ei-icono">


<FaSearch/>

</div>





<h3>

Investigación Financiera

</h3>





<p>

Analizamos contratos, comprobantes, transferencias
y la estructura de la plataforma utilizada para
identificar responsables.

</p>





</article>









<article className="ei-card">



<div className="ei-icono">


<FaFileContract/>

</div>





<h3>

Análisis de Operaciones

</h3>





<p>

Revisamos movimientos financieros, empresas
relacionadas y documentos utilizados para captar
recursos.

</p>





</article>









<article className="ei-card">



<div className="ei-icono">


<FaBalanceScale/>

</div>





<h3>

Acción Legal

</h3>





<p>

Presentamos reclamaciones y acciones legales contra
los responsables del esquema fraudulento.

</p>





</article>









<article className="ei-card">



<div className="ei-icono">


<FaUserSecret/>

</div>





<h3>

Rastreo de Responsables

</h3>





<p>

Seguimos la ruta del dinero e investigamos cuentas,
empresas y personas relacionadas.

</p>





</article>







</div>







</section>









{/* PORQUE ELEGIRNOS */}





<section className="ei-seccion">





<div className="ei-titulo">


<h2>

¿Por qué elegirnos para Estafas de Inversión?

</h2>




<p>

Cada caso requiere una estrategia diferente.
Analizamos la operación antes de iniciar cualquier
proceso.

</p>



</div>









<div className="ei-grid cuatro">







<article className="ei-card">



<div className="ei-icono">


<FaShieldAlt/>

</div>





<h3>

Investigación Especializada

</h3>





<p>

Analizamos plataformas, empresas y movimientos
financieros relacionados con el fraude.

</p>




</article>









<article className="ei-card">



<div className="ei-icono">


<FaGlobe/>

</div>





<h3>

Alcance Internacional

</h3>





<p>

Muchos fraudes operan desde otros países.
Investigamos conexiones internacionales.

</p>




</article>









<article className="ei-card">



<div className="ei-icono">


<FaMoneyBillWave/>

</div>





<h3>

Seguimiento del Capital

</h3>





<p>

Buscamos identificar dónde terminó el dinero
y quiénes participaron.

</p>




</article>









<article className="ei-card">



<div className="ei-icono">


<FaChartLine/>

</div>





<h3>

Estrategia Personalizada

</h3>





<p>

Cada fraude tiene una estructura distinta.
Diseñamos una ruta según tu caso.

</p>




</article>








</div>









{/* TESTIMONIO */}



<div className="ei-testimonio">



<FaQuoteLeft/>





<p>

"Me convencieron de invertir en una plataforma
que parecía profesional. Después bloquearon mis
retiros y dejaron de responder. El equipo logró
identificar la ruta del dinero y recuperar parte
importante de mi inversión."

</p>






<strong>

Carlos M.

</strong>





<span>

Caso Verificado • Fraude de Inversión

</span>







</div>







</section>
{/* PREGUNTAS FRECUENTES */}



<section className="ei-seccion">





<div className="ei-titulo">


<h2>

Preguntas Frecuentes sobre Estafas de Inversión

</h2>


</div>









<div className="ei-faq">





{[


{

pregunta:
"¿Puedo recuperar mi dinero si invertí voluntariamente?",

respuesta:
"Sí. Aunque la transferencia haya sido autorizada, si fue obtenida mediante engaños, falsas promesas o manipulación, puede existir responsabilidad legal de los involucrados."

},



{

pregunta:
"¿Qué pasa si la plataforma está en otro país?",

respuesta:
"Muchos fraudes operan internacionalmente. Se pueden analizar conexiones, empresas relacionadas y movimientos financieros para identificar responsables."

},



{

pregunta:
"¿Qué información necesitan para revisar mi caso?",

respuesta:
"Contratos, comprobantes de depósitos, conversaciones con asesores, correos, capturas de la plataforma y movimientos bancarios."

},



{

pregunta:
"¿Cuánto tiempo tengo para actuar?",

respuesta:
"Entre más rápido se inicie la investigación, mayores posibilidades existen de localizar fondos y evitar que sean dispersados."

}



].map((item,index)=>(



<div 
className="ei-faq-item"
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

<div className="ei-faq-respuesta">

{item.respuesta}

</div>

}





</div>



))}





</div>






</section>









{/* CASO DE ÉXITO */}





<section className="ei-caso">







<div className="ei-resultado">





<FaCheckCircle/>





<h3>

Caso de Éxito

</h3>






<strong>

$120,000 USD

</strong>





<p>

Capital Recuperado

</p>





</div>









<div className="ei-historia">





<h2>

Plataforma de Trading Internacional

</h2>






<p>

Un inversionista fue contactado por una supuesta
empresa financiera que ofrecía rendimientos
mensuales garantizados mediante operaciones
de Forex.

Después de realizar varios depósitos, la plataforma
bloqueó los retiros solicitando nuevos pagos.

</p>







<h3>

Nuestra Intervención

</h3>






<p>

Mediante análisis documental y rastreo financiero,
identificamos inconsistencias en la operación,
empresas relacionadas y la ruta utilizada para
mover los fondos.

Se inició la estrategia legal correspondiente para
buscar la recuperación del patrimonio afectado.

</p>







<a href="/contacto">

Tengo un caso similar →

</a>






</div>






</section>









{/* EVALUACION */}





<section className="ei-evaluacion">





<h2>

Evaluación de Caso Gratuita

</h2>






<p>

Cada día es importante. Mientras más rápido se
analice la operación, mayores posibilidades existen
de encontrar información útil para la recuperación.

</p>







<div className="ei-beneficios">





<div>

<FaShieldAlt/>

Confidencialidad Total

</div>







<div>

<FaSearch/>

Análisis Inicial del Caso

</div>






</div>






</section>





<FormularioCaso origen="Estafas de Inversión"/>



{/* SERVICIOS RELACIONADOS */}





<section className="ei-relacionados">





<h2>

Otros Servicios Relacionados

</h2>







<div className="ei-relacionados-grid">





<a href="/servicios/forex">

<FaChartLine/>

Forex y CFDs

</a>








<a href="/servicios/criptomonedas">

<FaBitcoin/>

Criptomonedas

</a>








<a href="/servicios/fraude-bancario">

<FaUniversity/>

Fraude Bancario

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

className="ei-whatsapp"

>

<FaWhatsapp/>

</a>







</main>



);



}



export default EstafasInversion;



