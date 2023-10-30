/* eslint-disable react/prop-types */
import { Card, Inset, Text, Button } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './Card.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CardComponent = ({evento}) => {
  let navigate = useNavigate()
  let handleDetailsClick = () => {
    navigate(`/details/${evento._id}`);
  }
  return (
    <>
      { evento != {} ? 
        <div className='container'>
          <Card size="2" style={{ maxWidth: 240 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <img
                // eslint-disable-next-line react/prop-types
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
            <Text as="p" size="3">
              <h3>{evento.name ? evento.name : "no hay titulo"}</h3>
              <p>{evento.description ? evento.description : "no hay descripción"}</p>
              <br />
              <div className='price_button'>
              <p>${evento.price}</p>
              <Link to={`/details/${evento._id}`}>
              <Button color="crimson" variant="soft" className='DetailsButton' onClick={handleDetailsClick}>Details</Button>
              </Link>
              </div>
            </Text>
          </Card> 
        </div> 
        : <></>
      } 
    </>
  );
}

export default CardComponent