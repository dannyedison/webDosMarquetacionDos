import Header from "../components/Header";
import Footer from "../components/Footer";
import './AcercaDe.css'
const AcercaDe = () => {

  return (
    <section className="acerca">
      <Header />
      <div className="contenedor_acerca">
      <h1 className="titulo_acerca">Acerca de</h1>
      <p className="parrafo_acerca">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque nostrum inventore mollitia rem velit cupiditate quas. Consequatur voluptatibus unde praesentium aperiam nemo architecto, quos ad dignissimos expedita natus sapiente!
      </p>
      </div>
      <Footer />
    </section>

  )
};

export default AcercaDe;
