/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import "./Details.css";
import { Inset } from "@radix-ui/themes";
import ButtonGoBack from "../components/ButtonGoBack";
import { useSelector } from "react-redux/es/hooks/useSelector";



const Details = () => {
  const eventos = useSelector(store => store.eventos)
  const { id } = useParams();
  const evento = eventos.find((evento) => evento._id.toString() === id);
  
  //estamos con detalles, no sé como plantear bien mi duda pero sería algo así como yo dentro de mi función creo mi variable eventos en donde hago uso del useselector para acceder al store. luego en vez de props mi componente details recibe estos datos a los que accede desde el store. pero lo puedo pasar como parámetro si recién lo estoy declarando dentro de la función? por eso no entendí el "recibe", si lo estoy recién escribiendo dentro de la función 🥴 
  

  return (
        <Layout>
          <div className="bg_details" role="detailsElement">
          {evento ? (
        <div className="card_details">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={evento.image}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <div className="details_content">
            <h2>{evento.name}</h2>
            <h3>
              {evento.date} at {evento.place}{" "}
            </h3>
            <p>{evento.description}</p>
            <br />
            <p>Category: {evento.category}</p>
              <br />
            <p>Price: ${evento.price}</p>
              <ButtonGoBack/>
              
          </div>
        </div>
      ) : (
        <div>Evento no encontrado.</div>
      )}
          </div>
      
    </Layout>

    
  );
};

export default Details;
