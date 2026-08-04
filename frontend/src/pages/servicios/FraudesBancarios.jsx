import { useState } from "react";

import "../../style/FraudesBancarios.css";
import FormularioCaso from "../../components/FormularioCaso";
import {
FaShieldAlt,
FaCreditCard,
FaExchangeAlt,
FaGavel,
FaUserShield,
FaSearch,
FaUniversity,
FaLaptop,
FaChartLine,
FaQuoteLeft,
FaCheckCircle,
FaBitcoin,
FaUsers,
FaHeart,
FaWhatsapp
} from "react-icons/fa";



function FraudesBancarios(){


const [faqActivo,setFaqActivo] = useState(null);



const abrirFaq = (index)=>{

setFaqActivo(
faqActivo === index ? null : index
);

};



return(

<main className="fb-page">





{/* HERO */}


<section className="fb-hero">


<div className="fb-etiqueta">

<FaShieldAlt/>

Recuperación de Fondos Bancarios

</div>



<h1>

Fraude Bancario:
<br/>

Protege Tu Dinero y Tus Tarjetas

</h1>



<p>

¿Víctima de transferencias SPEI no autorizadas,
cargos no reconocidos o clonación de tarjetas?

Si el banco se niega a devolver su dinero,
hacemos valer sus derechos.

</p>



<a href="/contacto">

Asesoría Confidencial

</a>



</section>









{/* COMO FUNCIONA */}



<section className="fb-seccion">


<div className="fb-titulo">


<h2>

El Banco Dice Que "Usted Autorizó el Cargo"

</h2>


<p>

Muchas instituciones financieras utilizan esta respuesta.
Analizamos las pruebas técnicas para demostrar si realmente
existió autorización.

</p>


</div>






<div className="fb-grid">





<article className="fb-card">


<div className="fb-icono">

<FaCreditCard/>

</div>


<h3>

Clonación de Tarjetas

</h3>


<p>

Cargos realizados en comercios físicos o digitales
que usted no reconoce.

</p>


</article>







<article className="fb-card">


<div className="fb-icono">

<FaExchangeAlt/>

</div>


<h3>

SPEI No Reconocido

</h3>


<p>

Transferencias electrónicas hacia cuentas desconocidas
por accesos indebidos.

</p>


</article>







<article className="fb-card">


<div className="fb-icono">

<FaGavel/>

</div>


<h3>

Omisión del Banco

</h3>


<p>

Negativas injustificadas alegando uso de NIP o Token
sin pruebas técnicas suficientes.

</p>


</article>





</div>



</section>
{/* ESTRATEGIA LEGAL */}


<section className="fb-seccion fb-fondo">



<div className="fb-titulo">


<h2>

Estrategia Legal contra Bancos

</h2>


<p>

No realizamos simples llamadas al banco.
Activamos mecanismos legales para buscar la restitución
de los fondos.

</p>


</div>







<div className="fb-grid cuatro">





<article className="fb-card">


<div className="fb-icono">

<FaUserShield/>

</div>


<h3>

Respaldo Legal

</h3>


<p>

Aplicamos la Ley de Instituciones de Crédito y
normativas que protegen al usuario financiero.

</p>


</article>







<article className="fb-card">


<div className="fb-icono">

<FaUniversity/>

</div>


<h3>

Reclamación ante UNE

</h3>


<p>

Presentamos reclamaciones técnicas solicitando
bitácoras, IP, geolocalización y pruebas de autenticación.

</p>


</article>







<article className="fb-card">


<div className="fb-icono">

<FaSearch/>

</div>


<h3>

Conciliación CONDUSEF

</h3>


<p>

Gestionamos audiencias y análisis del caso ante
las autoridades financieras correspondientes.

</p>


</article>







<article className="fb-card">


<div className="fb-icono">

<FaGavel/>

</div>


<h3>

Juicio Oral Mercantil

</h3>


<p>

Buscamos recuperación del dinero y los intereses
correspondientes mediante vía judicial.

</p>


</article>







</div>



</section>









{/* PORQUE ELEGIRNOS */}



<section className="fb-seccion">



<div className="fb-titulo">


<h2>

¿Por qué elegirnos para Fraude Bancario?

</h2>



<p>

Conocemos las tácticas de las instituciones financieras
y sabemos cómo enfrentar negativas injustificadas.

</p>


</div>







<div className="fb-grid cuatro">






<article className="fb-card">



<div className="fb-icono">

<FaShieldAlt/>

</div>




<h3>

Expertos en Ley Financiera

</h3>




<p>

Dominio de normativas bancarias mexicanas
y defensa del usuario financiero.

</p>




</article>









<article className="fb-card">



<div className="fb-icono">

<FaUniversity/>

</div>




<h3>

Contra la Banca Múltiple

</h3>




<p>

Análisis de conflictos con instituciones financieras
y sus departamentos legales.

</p>




</article>









<article className="fb-card">



<div className="fb-icono">

<FaLaptop/>

</div>




<h3>

Peritaje Informático

</h3>




<p>

Analizamos accesos, IP y rastros digitales para
identificar operaciones irregulares.

</p>




</article>









<article className="fb-card">



<div className="fb-icono">

<FaChartLine/>

</div>




<h3>

Recuperación Integral

</h3>




<p>

Buscamos recuperar el capital afectado y analizar
posibles compensaciones.

</p>




</article>







</div>






{/* COMENTARIO CLIENTE */}



<div className="fb-testimonio">



<FaQuoteLeft/>




<p>

"Desperté con mi cuenta de ahorros vacía por
3 transferencias SPEI que no hice. El banco dijo
que usaron mi token y cerraron el caso.
El equipo llevó el caso a tribunales y recuperé
los $180,000 pesos más intereses."

</p>




<strong>

María R.

</strong>



<span>

Caso Verificado • CDMX • Agosto 2023

</span>



</div>





</section>
{/* PREGUNTAS FRECUENTES */}



<section className="fb-seccion">



<div className="fb-titulo">


<h2>

Preguntas Frecuentes

</h2>


</div>







<div className="fb-faq">





{[

{
pregunta:
"¿Cuánto tiempo tengo para reportar un cargo no reconocido?",

respuesta:
"Legalmente existen plazos establecidos para reportar movimientos no reconocidos. Sin embargo, recomendamos actuar lo antes posible para fortalecer la reclamación."
},



{
pregunta:
"El banco ya me dio respuesta negativa, ¿aún puedo hacer algo?",

respuesta:
"Sí. Una negativa del banco no significa que el caso terminó. Se pueden solicitar pruebas técnicas y continuar mediante vías formales."
},



{
pregunta:
"¿Realmente sirve acudir a la CONDUSEF?",

respuesta:
"Sí. La CONDUSEF permite llevar procesos de conciliación y obtener elementos importantes para la defensa del usuario."
},



{
pregunta:
"¿Qué información necesitan para analizar mi caso?",

respuesta:
"Estados de cuenta, comprobantes, folios de reclamación, comunicaciones con el banco y cualquier evidencia disponible."
}



].map((item,index)=>(


<div 
className="fb-faq-item"
key={index}
>



<button
onClick={()=>abrirFaq(index)}
>



{item.pregunta}



<span>

{

faqActivo === index

?

"−"

:

"+"

}

</span>



</button>





{

faqActivo === index &&

<div className="fb-faq-respuesta">

{item.respuesta}

</div>

}



</div>



))}





</div>





</section>









{/* CASO DE ÉXITO */}




<section className="fb-caso">





<div className="fb-caso-resultado">



<FaCheckCircle/>




<h3>

Caso de Éxito #109

</h3>




<strong>

$245,000 MXN

</strong>




<p>

Recuperados + Intereses

</p>




</div>









<div className="fb-caso-historia">



<h2>

Transferencias Nocturnas "Autorizadas"

</h2>




<p>

Un cliente reportó 4 transferencias SPEI realizadas
a las 3:00 AM mientras dormía. El banco alegó que
se utilizó la aplicación móvil con contraseña y token,
negando el reembolso.

</p>




<h3>

Nuestra Intervención

</h3>




<p>

Mediante peritaje informático demostramos que la
dirección IP de las operaciones provenía de otro estado
de la República y que el banco no activó sus protocolos
de seguridad ante comportamiento inusual.

El juez determinó la nulidad de las operaciones.

</p>





<a href="/contacto">

Analizar mi caso bancario →

</a>



</div>






</section>




<FormularioCaso origin:="Fraudes Bancarios"/>




{/* OTROS SERVICIOS */}



<section className="fb-relacionados">





<h2>

Otros Servicios Relacionados

</h2>







<div className="fb-relacionados-grid">





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







<a href="/servicios/estafas-romanticas">

<FaHeart/>

<span>

Estafas Románticas

</span>

</a>






</div>






</section>









{/* WHATSAPP */}




<a

href="https://wa.me/5663820152"

target="_blank"

rel="noopener noreferrer"

className="fb-whatsapp"

>



<FaWhatsapp/>


</a>





</main>



);


}



export default FraudesBancarios;



