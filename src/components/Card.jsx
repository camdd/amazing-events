import { Card, Inset, Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './Card.css'


// eslint-disable-next-line react/prop-types
const CardComponent = ({evento}) => {
  return (
    <>
      { evento != {} ? 
        <div className='container'>

          <Card size="2" style={{ maxWidth: 240 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
              {/* eslint-disable-next-line react/prop-types */}
              <h3>{evento.name ? evento.name : "no hay titulo"}</h3>
              {/* eslint-disable-next-line react/prop-types */}
              <p>{evento.description ? evento.description : "no hay descripción"}</p>
              <button>details</button>
            </Text>
          </Card> 

        </div>  

        : <></>
      } 

    </>
  );
}

export default CardComponent