import { Link } from "react-router-dom";


import {
    FaUniversity,
    FaLaptopCode,
    FaUserShield,
    FaChartLine,
    FaHeart,
    FaUsers
} from "react-icons/fa";



function AreasPractica(){


const areas = [


{
icon:<FaUniversity />,
titulo:"Fraude Bancario",
texto:
"Analizamos cargos no reconocidos, transferencias SPEI y operaciones bancarias fraudulentas para buscar alternativas de recuperación.",
ruta:"/servicios/fraudes-bancarios"
},



{
icon:<FaLaptopCode />,
titulo:"Fraudes Digitales",
texto:
"Atendemos engaños realizados mediante internet, plataformas digitales, redes sociales y medios electrónicos.",
ruta:"/servicios/fraudes-digitales"
},



{
icon:<FaUserShield />,
titulo:"Robo de Identidad",
texto:
"Investigamos el uso indebido de información personal para generar créditos, cuentas u operaciones no autorizadas.",
ruta:"/servicios/robo-identidad"
},



{
icon:<FaChartLine />,
titulo:"Estafas de Inversión",
texto:
"Evaluamos pérdidas relacionadas con brokers fraudulentos, inversiones falsas y plataformas financieras engañosas.",
ruta:"/servicios/estafas-inversion"
},



{
icon:<FaHeart />,
titulo:"Estafas Románticas",
texto:
"Analizamos fraudes donde la confianza emocional es utilizada para obtener dinero o beneficios económicos.",
ruta:"/servicios/estafas-romanticas"
},



{
icon:<FaUsers />,
titulo:"Estafas Piramidales",
texto:
"Representamos casos relacionados con esquemas Ponzi, inversiones colectivas fraudulentas y fraudes masivos.",
ruta:"/servicios/estafas-piramidales"
}



];





return(


<section className="areas-practica">



<div className="areas-header">


<h2>

Áreas de práctica

</h2>



<p>

Soluciones especializadas para diferentes tipos de fraude financiero.

</p>


</div>







<div className="areas-grid">


{

areas.map((area,index)=>(



<article

className="area-card"

key={index}

>




<div className="area-icon">

{area.icon}

</div>





<h3>

{area.titulo}

</h3>





<p>

{area.texto}

</p>





<Link

to={area.ruta}

className="area-link"

>

Ver detalles →

</Link>





</article>



))


}



</div>






</section>


);


}


export default AreasPractica;