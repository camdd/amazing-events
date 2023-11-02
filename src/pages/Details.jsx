/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import "./Details.css";
import { Inset } from "@radix-ui/themes";
import ButtonGoBack from "../components/ButtonGoBack";


const Details = ({ eventos }) => {
  const { id } = useParams();
  const evento = eventos.find((evento) => evento._id.toString() === id);

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
