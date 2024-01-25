import React from 'react'
import { data } from '/src/utils/data'
import { Link } from 'react-router-dom';

 export const CardProduct = () => {
    return (
      <>
        <div className="container">
         <br /> <h3><b><u>Cards Products (Assignment-10):-</u></b></h3><br />
          <div className="row d-flex">
            {data.map((current_obj, index) => {
              const { id, title, price, description, images } = current_obj;
              return (
                <div className="col-md-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={images[0]} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text">price :{price}</p>
                      <Link to={`/cardproduct/${id}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
