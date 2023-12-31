/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import "./Details.css";
import { Inset } from "@radix-ui/themes";
import ButtonGoBack from "../components/ButtonGoBack";
import ButtonBuyTickets from "../components/ButtonBuy";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";

const Details = () => {
  const eventos = useSelector((store) => store.eventos);
  const { id } = useParams();
  const evento = eventos.find((evento) => evento._id.toString() === id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <div
        className={`bg_details ${
          mounted ? "details-enter-active" : "details-enter"
        }`}
        role="detailsElement"
      >
        {evento ? (
          <div className="details_container">
            <div className="banner">
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
            <div className="card_details">
              <div className="text_column">
                <div className="details_content">
                  <h2>{evento.name}</h2>
                  <h3>
                    {evento.date} at {evento.place}{" "}
                  </h3>
                  <p>{evento.description}</p>
                  <p>
                    <strong>Category:</strong> {evento.category}
                  </p>
                  <p>
                    <strong>Price: </strong>${evento.price}
                  </p>
                </div>
              </div>
              <div className="image_column">
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
                    <div className="buttons">
                      <ButtonBuyTickets />
                      <ButtonGoBack />
                    </div>
                  </div>
                </Inset>
              </div>
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
