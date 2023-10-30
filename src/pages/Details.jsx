import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import './Details.css'
import { Inset, Button } from "@radix-ui/themes";

// eslint-disable-next-line react/prop-types
const Details = ({ eventos }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const evento = eventos.find(evento => evento._id.toString() === id);

  return (
    <Layout>
      {evento ? (
        <div className="card_details">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src={evento.image}
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <div className="details_content">
                <h2>{evento.name}</h2>
                <h3>{evento.date} at {evento.place} </h3>
                <p>{evento.description}</p>
                <p>Category: {evento.category}</p>
            
                <p>Price: ${evento.price}</p>
                <Button><Link className="go_back" to="/">Go Back</Link></Button>
            </div>
        </div>
      ) : (
        <div>Evento no encontrado.</div>
      )}
    </Layout>
  );
};

export default Details;