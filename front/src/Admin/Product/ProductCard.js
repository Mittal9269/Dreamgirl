import { useState } from "react";
import Navbar from "../../FormType/Navbar";
import "./product.css";


export default function CategaryCard() {
    //get the categary from the storage
    const [data, setData] = useState({
        ProductName : "",
        Prize : 0,
        Quantity : 0,
        Available : true,
        ImgFront : "",
        categary : "",
        Discription : "",
        Section  : ""

    })
    let Cate = JSON.parse(sessionStorage.getItem('Cat'));
    const [id, setId] = useState("");

    const Noscroll = () =>{
        document.addEventListener("wheel", function(event){
            if(document.activeElement.type === "number" &&
               document.activeElement.classList.contains("noscroll"))
            {
                document.activeElement.blur();
            }
        });
    }
    const AddSubmit = (e) =>{
        e.preventDefault();
        const val = {
            ProductName : data.ProductName,
            Prize : data.Prize,
            Quantity : data.Quantity,
            Available : data.Available,
            ImgFront : data.ImgFront,
            categary : data.categary,
            Discription : data.Discription,
            Section  : data.Section
        }
        // console.log(val)
        fetch('http://localhost:8000/product/product', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(val),
              credentials: "same-origin"
            })
            .then(res=>res.json())
            .then(text => window.location = "/product/Product")
            // .then(text => console.log(text))
            .catch(err=>console.log(err));
    }

    const InputData = (event) =>{
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    return (
        <>
            {/* get all the categary */}
            <Navbar />
            <form onSubmit={AddSubmit} className=" form-center">
                <div class="form-group">
                    <label class="form-control-label text-muted">ProductName</label>
                    <input type="text"
                        placeholder="Product Name"
                        name="ProductName"
                        value={setData.ProductName}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Prize</label>
                    <input type="number"
                        placeholder="Prize"
                        name="Prize"
                        className="noscroll"
                        onSelect={Noscroll}
                        value={setData.Prize}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Quantity</label>
                    <input type="number"
                        placeholder="Quantity"
                        className="noscroll"
                        onSelect={Noscroll}
                        name="Quantity"
                        value={setData.Quantity}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Available</label>
                    <input type="text"
                        placeholder="Available"
                        name="Available"
                        value={setData.Available}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">ImgFront</label>
                    <input type="text"
                        placeholder="ImgFront"
                        name="ImgFront"
                        value={setData.ImgFront}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Discription</label>
                    <input type="text"
                        placeholder="Discription"
                        name="Discription"
                        value={setData.Discription}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Section</label>
                    <input type="text"
                        placeholder="Section"
                        name="Section"
                        value={setData.Section}
                        onChange={InputData} />
                </div>
                <div class="">
                    <label class="form-control-label text-muted">categary</label>
                    <input type="text"
                        placeholder="categary"
                        name="categary"
                        value={setData.categary}
                        onChange={InputData} />
                </div>
                <div class="row justify-content-center my-3 px-3">
                    <button class="btn-block btn-color">Send request</button>
                </div>
            </form>
            

            
        </>
    )
}