import {
    FaShieldAlt,
    FaBalanceScale,
    FaSearch,
    FaHandshake
} from "react-icons/fa";



function PorqueElegirnos(){


const ventajas=[


{
icon:<FaShieldAlt />,
titulo:"Experiencia especializada",
texto:
"Nos enfocamos en casos de fraude financiero, digital y recuperación patrimonial."
},



{
icon:<FaBalanceScale />,
titulo:"Estrategia personalizada",
texto:
"Analizamos cada situación para definir la mejor ruta de acción según las características del caso."
},



{
icon:<FaSearch />,
titulo:"Investigación y análisis",
texto:
"Revisamos información, movimientos y evidencias para comprender el origen del fraude."
},



{
icon:<FaHandshake />,
titulo:"Acompañamiento continuo",
texto:
"Brindamos seguimiento durante cada etapa del proceso con comunicación constante."
}



];





return(


<section className="porque">



<div className="porque-header">


<h2>

¿Por qué elegirnos?

</h2>



<p>

Contamos con un enfoque especializado para ayudar a personas afectadas por fraudes financieros y patrimoniales.

</p>


</div>







<div className="porque-grid">



{

ventajas.map((item,index)=>(



<article

className="porque-card"

key={index}

>




<div className="porque-icon">


{item.icon}


</div>





<h3>

{item.titulo}

</h3>





<p>

{item.texto}

</p>





</article>



))


}




</div>





</section>


);


}


export default PorqueElegirnos;