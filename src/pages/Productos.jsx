import Header from "../components/Header";
import Footer from "../components/Footer";
import './Productos.css'
const Productos = () => {
  return (
    <section className="productos">
      <Header />
      <div className="contenedor_productos">
        <h1 className="titulo_productos">Productos</h1>
        <div className="imagen_productos">
          <img src="public\Imagen1.png" alt="" />
          <img src="public\Imagen1.png" alt="" />
          <img src="public\Imagen1.png" alt="" />
          <img src="public\Imagen1.png" alt="" />
          <img src="public\Imagen1.png" alt="" />
        </div>
      </div>
      <Footer />
    </section>
  )
};

export default Productos;
