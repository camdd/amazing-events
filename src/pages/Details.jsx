import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";

const Details = ({ eventos }) => {
  const { id } = useParams();
  const evento = eventos.find(evento => evento._id.toString() === id);

  return (
    <Layout>
      {evento ? (
        <>
          <h1>{evento.name}</h1>
          <img src={evento.image} alt={evento.name} />
          <p>{evento.description}</p>
          {/* Otros detalles del evento */}
        </>
      ) : (
        <div>Evento no encontrado.</div>
      )}
    </Layout>
  );
};

export default Details;