import { useState } from "react";

import "../../style/FraudesDigitales.css";
import FormularioCaso from "../../components/FormularioCaso";
import {
    FaShieldAlt,
    FaLink,
    FaUserSecret,
    FaLaptop,
    FaLock,
    FaSearch,
    FaFileAlt,
    FaGavel,
    FaGlobe,
    FaQuoteLeft,
    FaCheckCircle,
    FaWhatsapp,
    FaUniversity,
    FaIdCard,
    FaBitcoin,
    FaChartLine
} from "react-icons/fa";
function FraudesDigitales(){



const [faqActivo,setFaqActivo]=useState(null);



const abrirFaq=(index)=>{

setFaqActivo(
faqActivo===index ? null:index
);

};





return(


<main className="fd-page">








{/* HERO */}



<section className="fd-hero">






<div className="fd-etiqueta">


<FaShieldAlt/>

Seguridad contra Fraudes Digitales


</div>







<h1>

Fraudes Digitales:

<br/>

Protege Tu Patrimonio en Internet

</h1>







<p>

¿Fuiste víctima de phishing, enlaces falsos,
suplantación digital o accesos no autorizados?

Investigamos la operación, analizamos la evidencia
digital y buscamos ayudarte a recuperar el control.

</p>







<a href="/contacto">

Asesoría Confidencial

</a>







</section>









{/* COMO FUNCIONA */}





<section className="fd-seccion">





<div className="fd-titulo">



<h2>

El Engaño Detrás de los Fraudes Digitales

</h2>




<p>

Los delincuentes utilizan tecnología, ingeniería
social y manipulación psicológica para obtener
información, dinero o acceso a cuentas personales.

</p>



</div>








<div className="fd-grid">







<article className="fd-card">



<div className="fd-icono">


<FaLink/>

</div>





<h3>

Phishing y Enlaces Falsos

</h3>





<p>

Crean páginas, correos o mensajes falsos para
obtener contraseñas, datos bancarios o información
personal.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaUserSecret/>

</div>





<h3>

Suplantación Digital

</h3>





<p>

Utilizan identidades falsas para engañar a víctimas,
familiares o empresas mediante perfiles falsos.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaLaptop/>

</div>





<h3>

Acceso No Autorizado

</h3>





<p>

Ingresos ilegales a correos, cuentas bancarias,
redes sociales o plataformas digitales.

</p>






</article>







</div>







</section>
{/* ESTRATEGIA LEGAL Y DIGITAL */}



<section className="fd-seccion fd-fondo">





<div className="fd-titulo">



<h2>

Estrategia Legal contra Fraudes Digitales

</h2>





<p>

Combinamos análisis tecnológico, investigación
digital y acciones legales para identificar responsables
y proteger su patrimonio.

</p>



</div>









<div className="fd-grid">







<article className="fd-card">



<div className="fd-icono">


<FaSearch/>

</div>





<h3>

Investigación Digital

</h3>





<p>

Analizamos rastros digitales, conexiones,
comunicaciones y movimientos relacionados con
el fraude.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaFileAlt/>

</div>





<h3>

Análisis de Evidencia

</h3>





<p>

Revisamos correos, mensajes, capturas,
transferencias y archivos digitales para construir
el caso.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaGlobe/>

</div>





<h3>

Rastreo Digital

</h3>





<p>

Investigamos dominios, cuentas, plataformas y
elementos digitales utilizados por los responsables.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaGavel/>

</div>





<h3>

Acción Legal

</h3>





<p>

Buscamos establecer responsabilidades y ejercer
las acciones necesarias para defender sus derechos.

</p>






</article>








</div>








</section>









{/* PORQUE ELEGIRNOS */}





<section className="fd-seccion">





<div className="fd-titulo">



<h2>

¿Por qué elegirnos para Fraudes Digitales?

</h2>





<p>

Los delitos digitales requieren una combinación de
conocimiento tecnológico y estrategia legal.

</p>



</div>









<div className="fd-grid cuatro">







<article className="fd-card">



<div className="fd-icono">


<FaShieldAlt/>

</div>





<h3>

Seguridad Tecnológica

</h3>





<p>

Protegemos la información del caso y analizamos
cada evidencia digital disponible.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaLock/>

</div>





<h3>

Privacidad Total

</h3>





<p>

Cada investigación se maneja con confidencialidad
y protección de datos personales.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaIdCard/>

</div>





<h3>

Investigación Especializada

</h3>





<p>

Identificamos patrones de fraude y métodos usados
por los delincuentes digitales.

</p>






</article>









<article className="fd-card">



<div className="fd-icono">


<FaUniversity/>

</div>





<h3>

Defensa Patrimonial

</h3>





<p>

Buscamos proteger sus recursos económicos y
reducir el impacto del fraude.

</p>






</article>








</div>









{/* TESTIMONIO */}





<div className="fd-testimonio">





<FaQuoteLeft/>







<p>

"Recibí un mensaje que parecía provenir de mi banco
y terminé entregando información personal. El equipo
analizó las pruebas digitales y me ayudó a entender
qué ocurrió y cómo actuar."

</p>







<strong>

Andrea M.

</strong>







<span>

Caso Verificado • Fraude Digital

</span>







</div>








</section>
{/* PREGUNTAS FRECUENTES */}



<section className="fd-seccion">





<div className="fd-titulo">


<h2>

Preguntas Frecuentes sobre Fraudes Digitales

</h2>



</div>









<div className="fd-faq">





{[


{

pregunta:
"¿Qué hago si caí en un enlace falso o phishing?",

respuesta:
"Debe cambiar sus contraseñas, proteger sus cuentas, documentar las pruebas y realizar un análisis de la operación para determinar el alcance del fraude."

},



{

pregunta:
"¿Se puede rastrear a una persona que cometió un fraude digital?",

respuesta:
"Dependiendo de la información disponible, pueden analizarse dominios, cuentas, comunicaciones y rastros digitales relacionados con la operación."

},



{

pregunta:
"¿Necesito conservar mensajes y capturas?",

respuesta:
"Sí. Correos, conversaciones, comprobantes, enlaces y capturas pueden ser evidencia importante para la investigación."

},



{

pregunta:
"¿Qué pasa si el responsable está en otro país?",

respuesta:
"Muchos fraudes digitales operan internacionalmente. Se pueden analizar conexiones y elementos digitales para identificar rutas y responsables."

}



].map((item,index)=>(



<div

className="fd-faq-item"

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


<div className="fd-faq-respuesta">

{item.respuesta}

</div>


}




</div>



))}





</div>






</section>









{/* CASO DE ÉXITO */}





<section className="fd-caso">







<div className="fd-resultado">





<FaCheckCircle/>





<h3>

Caso de Éxito #407

</h3>







<strong>

$65,000 MXN

</strong>







<p>

Recuperados

</p>







</div>









<div className="fd-historia">





<h2>

Fraude mediante Suplantación Bancaria Digital

</h2>







<p>

Una víctima recibió una comunicación falsa
aparentemente enviada por su institución financiera.
Mediante ingeniería social obtuvo acceso a información
personal y realizó movimientos no autorizados.

</p>







<h3>

Nuestra Intervención

</h3>







<p>

Analizamos las comunicaciones digitales, identificamos
elementos utilizados para la suplantación y revisamos
la ruta de las operaciones realizadas.

Con la evidencia obtenida se estableció la estrategia
correspondiente para buscar la recuperación del
patrimonio afectado.

</p>








<a href="/contacto">

Tengo un caso similar →

</a>






</div>







</section>









{/* EVALUACIÓN */}





<section className="fd-evaluacion">





<h2>

Evaluación de Caso Gratuita

</h2>







<p>

El tiempo es importante en los fraudes digitales.
Entre más rápido se preserve la evidencia, mayores
posibilidades existen de analizar lo ocurrido.

</p>







<div className="fd-beneficios">





<div>

<FaLock/>

Confidencialidad Total

</div>







<div>

<FaSearch/>

Análisis Digital Inicial

</div>






</div>







</section>




<FormularioCaso origen="Fraudes Digitales"/>




{/* SERVICIOS RELACIONADOS */}





<section className="fd-relacionados">





<h2>

Otros Servicios Relacionados

</h2>







<div className="fd-relacionados-grid">





<a href="/servicios/fraude-bancario">

<FaUniversity/>

Fraude Bancario

</a>







<a href="/servicios/robo-identidad">

<FaIdCard/>

Robo de Identidad

</a>







<a href="/servicios/criptomonedas">

<FaBitcoin/>

Criptomonedas

</a>







<a href="/servicios/estafas-inversion">

<FaChartLine/>

Estafas de Inversión

</a>






</div>







</section>









{/* WHATSAPP */}





<a

href="https://wa.me/5215573421286"

target="_blank"

rel="noopener noreferrer"

className="fd-whatsapp"

>



<FaWhatsapp/>




</a>







</main>



);



}



export default FraudesDigitales;