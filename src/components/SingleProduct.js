import React from 'react'

export default function SingleProduct(props) {
    const {productname,brandname,specification,price,discountoffer,rating}=props.product;
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{productname}</h3>
          <p classNameName="card-text">rating:{rating}</p>
          <h5 className="card-text">{brandname}</h5>
          <p className="card-text">{specification}</p>
          <h4 className="card-text">$${price}</h4>
          <p className="card-text"><small className="text-muted">{discountoffer}</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}
