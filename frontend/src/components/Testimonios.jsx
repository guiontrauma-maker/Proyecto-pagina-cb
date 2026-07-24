import {
    FaQuoteLeft,
    FaUserCircle
} from "react-icons/fa";



function Testimonios(){


const testimonios=[


{
nombre:"Carlos M.",
caso:"Fraude Bancario",
texto:
"Me orientaron desde el primer momento y pude entender las opciones que tenía para recuperar mi dinero."
},



{
nombre:"Laura G.",
caso:"Estafa de Inversión",
texto:
"El análisis del caso fue claro y profesional. Recibí acompañamiento durante todo el proceso."
},



{
nombre:"Miguel R.",
caso:"Fraude Digital",
texto:
"Me ayudaron a organizar las pruebas y comprender los pasos necesarios después de la estafa."
}



];





return(


<section className="testimonios">



<div className="testimonios-header">


<h2>

Experiencias de nuestros usuarios

</h2>



<p>

Personas que recibieron orientación y acompañamiento en situaciones de fraude financiero.

</p>


</div>







<div className="testimonios-grid">



{

testimonios.map((item,index)=>(



<article

className="testimonio-card"

key={index}

>




<div className="testimonio-icon">

<FaUserCircle/>

</div>





<FaQuoteLeft className="quote-icon"/>





<p>

{item.texto}

</p>





<h3>

{item.nombre}

</h3>



<span>

{item.caso}

</span>





</article>



))


}



</div>






</section>


);


}



export default Testimonios;