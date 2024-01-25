import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '/src/utils/data'

 export  const Product_Details = () => {
    const params = useParams();
    const filteredData = data.find((product) => product.id === parseInt(params.id));

    if (!filteredData) {
      return <div>Product not found</div>;
    }
  
    const { title, price, description, images } = filteredData;
  
    return ( <>
        <br /><br />
      <div className='container' style={{border:'5px dotted black',margin:'0 auto'}}> <br />
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Price: {price}</p>
        {images.map((image, index) => (
          <img width='200' key={index} src={image}/>
        ))}
        
      </div>
      </>
    );
  };
  
  