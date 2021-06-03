import Navbar from "../../FormType/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCard from "./ShowCard";

export default function SearchCard(){
    const {id} = useParams();

    const [product , setProducts] = useState([]);
    const fetchData = ()=>{
        // console.log(id)
        let sentContent = {
            Id : id
        }
        console.log(sentContent)
        fetch("http://localhost:8000/product/product/by/searchCard",{
            method:"POST",
            headers: {
                Accept: "applications/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify(sentContent),
        }).then(res=>res.json())
        .then(data=>{
            if(data && data.error){
                alert("Data not found")
            }else{
                console.log(data)
                setProducts(data);
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchData();
    },[])



    return(
        <>
            <Navbar />
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="clo-10 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-4">
                                    {product !== undefined && product !==null && (
                                        product.map((value , index) => {
                                            console.log(value)
                                            return (
                                                <ShowCard
                                                    id = {index}
                                                    productInfo={value}
                                                />
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}