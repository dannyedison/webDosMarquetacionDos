import Header from "../components/Header";
import Footer from "../components/Footer";
import './Servicios.css'
const Servicios = () => {
  return (
    <section className="servicios">
      <Header />
      <div className="contenedor_servicios">
        <h1 className="titulo_servicios">Servicios</h1>
        <div className="texto_contenedores">
            <div className="texto_box">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium totam sapiente quia aliquid libero voluptatum labore. Nostrum itaque corrupti vel explicabo unde esse amet suscipit? Et incidunt rerum natus facilis!</p>
            </div>
            <div className="texto_box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deleniti, iusto quae deserunt omnis sint ullam quidem quia asperiores, reprehenderit distinctio, error labore mollitia! Ea laborum iure ratione nisi dolores?</p>
            </div>
        </div>
    </div>
      <Footer />
    </section>
  )
};

export default Servicios;
