import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useState, useEffect } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function App(props) {

  const [product, setProducts] = useState([]);

  useEffect(() => {
    console.log(props)
    let sentContent = {
      Id: props.cat,
      ID: props.identity
    }
    console.log(sentContent)
    fetch("http://localhost:8000/product/product/by/RelatedSearch/" + props.identity, {
      method: "POST",
      headers: {
        Accept: "applications/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentContent),
    }).then(res => res.json())
      .then(data => {
        if (data && data.error) {
          
        } else {
          console.log(data)
          setProducts(data);
        }
      }).catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Some Related products
        </h1>
      <div>
        <Carousel breakPoints={breakPoints}>
          {product.length !== 0 && (
            product.map((value) => {
              return (
                <Item
                >
                  {value.ProductName}
                </Item>
              )
            })
          )}
        </Carousel>
      </div>
    </>
  );
}

