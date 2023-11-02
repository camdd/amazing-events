/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Inset, Text, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";

const CardComponent = ({ evento }) => {
  let navigate = useNavigate();
  let handleDetailsClick = () => {
    navigate(`/details/${evento._id}`);
  };
  return (
    <>
      {evento != {} ? (
        <div className="card-container" role="cardElement">
          <li className="card">
          <Link to={`/details/${evento._id}`} className="card__link">
            <img src={evento.image} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                
                <div className="card__header-text">
                  <h3 className="card__title">
                    {evento.name ? evento.name : "No Title"}
                  </h3>
                  <span className="card__status">{evento.date}</span>
                </div>
              </div>
              <p className="card__description">
                {evento.description ? evento.description : "No Description"}
              </p>
            </div>
          </Link>
        </li>
        </div>
        
      ) : (
        <></>
      )}
    </>
  );
};

export default CardComponent;
