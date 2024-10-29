import Header from "../components/Header";
import Footer from "../components/Footer";
import './Contactos.css'
const Contactos = () => {
  return (
    <section className="contactos">
      <Header />
      <div className="contenedor_contactos">
        <h1 className="titulo_contactos">Contacto</h1>
        <div className="formulario_contactos">
        <h2>Group Name</h2>
          <input type="date" id="fecha" name="fecha" />
          <select id="opciones" name="opciones">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>


        </div>
      </div>
      <Footer />
    </section>
  )
};

export default Contactos;
