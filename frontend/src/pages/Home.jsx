import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaLock,
    FaStar,
    FaWhatsapp
} from "react-icons/fa";


import {
    PhoneInput
} from "react-international-phone";


import "react-international-phone/style.css";


import AreasPractica from "../components/AreasPractica";
import Proceso from "../components/Proceso";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Testimonios from "../components/Testimonios";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import "../style/Home.css";



function Home(){


return(


<main>



{/* HERO */}


<section className="home-hero">



<div className="hero-content">


<h1>

¿FUISTE VÍCTIMA DE UNA ESTAFA?

</h1>



<h2>

RECUPERE SUS PÉRDIDAS

</h2>



<p>

Ayudamos a personas afectadas por fraudes financieros,
estafas digitales y pérdidas patrimoniales mediante
estrategias de investigación y recuperación.

</p>



<h3>

CONSULTA GRATUITA HOY MISMO

</h3>




<div className="hero-stats">



<div className="stat-box">

<div className="stars">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>

<strong>
4.9
</strong>

<p>
Basado en +500 casos
</p>

</div>




<div className="stat-box">

<strong>
+$50 M
</strong>

<p>
Recuperados para víctimas
</p>


</div>



</div>


</div>






{/* FORMULARIO */}


<form className="home-form">


<h2>

RECUPERE SUS PÉRDIDAS

</h2>


<p>

Solicite una evaluación gratuita de su caso.

</p>




<div className="form-input">


<FaUser/>


<input

type="text"

placeholder="Nombre completo"

/>


</div>





<div className="form-input">


<FaEnvelope/>


<input

type="email"

placeholder="Correo electrónico"

/>


</div>





<div className="form-phone">


<PhoneInput

defaultCountry="mx"

/>

</div>





<div className="form-input">


<FaDollarSign/>


<input

type="number"

placeholder="Monto aproximado perdido"

/>


</div>






<textarea

placeholder="Describa brevemente su caso (opcional)"

></textarea>






<button>

Solicitar evaluación gratuita

</button>






<small>

<FaLock/>

 Información protegida

</small>




</form>




</section>






{/* SECCIONES */}



<AreasPractica />


<Proceso />


<PorqueElegirnos />


<Testimonios />


<FAQ />






{/* MEDIOS */}


<section className="medios">


<h2>

Visto en medios de prestigio

</h2>


<div className="medios-grid">


<div>

Medio 1

</div>


<div>

Medio 2

</div>


<div>

Medio 3

</div>



</div>


</section>







<Footer />








{/* WHATSAPP */}



<a

className="whatsapp-button"

href="https://wa.me/5663820152"

target="_blank"

rel="noopener noreferrer"

>

<FaWhatsapp/>

</a>




</main>


);


}


export default Home;