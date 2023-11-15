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
  
  return (
    <Layout>
          <div className="bg_details" role="detailsElement">
          {evento ? (
        <div className="card_details">
          <Inset clip="padding-box" side="top" pb="current">
            <div className="rounded-image">
            <img
              src={evento.image}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                backgroundColor: "var(--gray-5)",
              }}
            />
            </div>
          </Inset>
          <div className="details_content">
            <h2>{evento.name}</h2>
            <h3>
              {evento.date} at {evento.place}{" "}
            </h3>
            <p>{evento.description}</p>
            <p>Category: {evento.category}</p>
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
