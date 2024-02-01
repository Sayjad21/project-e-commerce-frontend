import React, { useState, useEffect } from 'react'
import SingleProduct from './SingleProduct';



export default function Product() {

  const [productCat, setProductCat] = useState('');
  const [productSubCat, setProductSubCat] = useState('');
  const [productInfo, setProductInfo] = useState(null);
  const [minprice, setminprice] = useState(0);
  const [maxprice, setmaxprice] = useState(8000);
  const [minrating, setminrating] = useState(0.0);
  const [maxrating, setmaxrating] = useState(5);
  const getProduct = async () => {
    const body = { productCat, productSubCat, minprice, maxprice, minrating, maxrating };
    console.log(body);
    try {
      const response = await fetch("http://localhost:3000/getProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      if (response.status === 200) {
        const responseData = await response.json();

        // Update the state with the new product information
        setProductInfo(responseData);
        console.log(responseData);
      }
      else {
        alert("No product found");
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // Call getProduct when the component mounts (initial load)
    getProduct();
  }, []); 
  // useEffect(() => {
  //     console.log(productInfo);
  //   }, [productInfo]);

  return (
    
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select class="form-select" aria-label="Default select example" value={productCat}
          onChange={e => setProductCat(e.target.value)}>
          <option value="">select category</option>

          <option value="pc accessories">pc accessories</option>
          <option value="laptop">laptop</option>
          <option value="mobile">mobile</option>
          <option value="camera">camera</option>
          <option value="tv">tv</option>
          <option value="others">others</option>


        </select>

        <div id="categoryHelp" className="form-text">Enter category name</div>
      </div>

      <div className="mb-3">
        <label htmlFor="subcategory" className="form-label">Subcategory</label>
        <select class="form-select" aria-label="Default select example" value={productSubCat}
          onChange={e => setProductSubCat(e.target.value)}>

          <option selected>select subcategory</option>
          <option value="mouse">mouse</option>
          <option value="keyboard">keyboard</option>
          <option value="monitor">monitor</option>
          <option value="headphone">headphone</option>
          <option value="speaker">speaker</option>
          <option value="webcam">webcam</option>
          <option value="microphone">microphone</option>
          <option value="ups">ups</option>
          <option value="printer">printer</option>
          <option value="scanner">scanner</option>
          <option value="projector">projector</option>
          <option value="processor">processor</option>

          <option value="ram">ram</option>
          <option value="hard disk">hard disk</option>
          <option value="ssd">ssd</option>
          <option value="graphics card">graphics card</option>
          <option value="motherboard">motherboard</option>
          <option value="cpu cooler">cpu cooler</option>
          <option value="gaming laptop">gaming laptop</option>
          <option value="business laptop">business laptop</option>
          <option value="student laptop">student laptop</option>
          <option value="gaming mobile">gaming mobile</option>
          <option value="feature mobile">feature mobile</option>
          <option value="smartphone">smartphone</option>
          <option value="dslr camera">dslr camera</option>
          <option value="mirrorless camera">mirrorless camera</option>
          <option value="action camera">action camera</option>
          <option value="smart tv">smart tv</option>
          <option value="oled tv">oled tv</option>
          <option value="smart watch">smart watch</option>
          <option value="smart band">smart band</option>
          <option value="smart speaker">smart speaker</option>
          <option value="drone">drone</option>
          <option value="smart toy">smart toy</option>


        </select>

        <div id="subcategoryHelp" className="form-text">Enter subcategory name</div>
        <div className="container mb-3">
          <label for="customRange1" class="form-label">Min price: {minprice}</label>
          <input type="range" class="form-range" min="0" max="8000" id="customRange1" value={minprice}
            onChange={e => setminprice(e.target.value)}></input>
        </div>
        <div className="container mb-3">
          <label for="customRange2" class="form-label">Max price: {maxprice}</label>
          <input type="range" class="form-range" min="0" max="8000" id="customRange2" value={maxprice}
            onChange={e => setmaxprice(e.target.value)}></input>
        </div>
        <div className="container mb-3">
          <label for="customRange3" class="form-label">Min Rating: {minrating}</label>
          <input type="range" class="form-range" min="0" max="5" step="0.1" id="customRange3" value={minrating}
            onChange={e => setminrating(e.target.value)}></input>
        </div>
        <div className="container mb-3">
          <label for="customRange4" class="form-label">Max Rating: {maxrating}</label>
          <input type="range" class="form-range" min="0" max="5" step="0.1" id="customRange4" value={maxrating}
            onChange={e => setmaxrating(e.target.value)}></input>
        </div>
        
      </div>
      <button type="button" class="btn btn-danger" onClick={getProduct} style={{ display: 'block' }}>Search</button>
      {/* Empty Table */}
      {/* ProductName, BrandName, ProductQuantity, Price, Specification, Rating, DiscountOffer, */}
      {(productInfo === null) ? (
       
       
        <div>loading.......</div>
        

      ) : productInfo.length > 0 || (productSubCat === '' || productCat === '') ? (
          
          <div className="container my-5">
            {productInfo.map((product) => (
              <SingleProduct product={product} />
            ))}
          </div>


      ) : (
        <p>No product information available.</p>
      )}


    </div>
  )
}



