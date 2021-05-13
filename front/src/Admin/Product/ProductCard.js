import { useState } from "react";
import Navbar from "../../FormType/Navbar";

export default function CategaryCard() {
    //get the categary from the storage
    const [data, setData] = useState({
        ProductName: "",
        Prize: 0,
        Size: 0,
        Available: true,
        Color: 0,
        ImgFront: "",
        ImgLeft: "",
        ImgRight: "",
        categary: ""

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
            ProductName: data.ProductName,
            Prize: data.Prize,
            Size: data.Size,
            Available: data.Available,
            Color: data.Color,
            ImgFront: data.ImgFront,
            ImgLeft: data.ImgLeft,
            ImgRight: data.ImgRight,
            categary: data.categary
        }
        console.log(val)
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
           
            <form onSubmit={AddSubmit}>
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
                    <label class="form-control-label text-muted">Size</label>
                    <input type="number"
                        placeholder="Size"
                        className="noscroll"
                        onSelect={Noscroll}
                        name="Size"
                        value={setData.Size}
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
                    <label class="form-control-label text-muted">Color</label>
                    <input type="number"
                        placeholder="Color"
                        name="Color"
                        className="noscroll"
                        onSelect={Noscroll}
                        value={setData.Color}
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
                    <label class="form-control-label text-muted">ImgLeft</label>
                    <input type="text"
                        placeholder="ImgLeft"
                        name="ImgLeft"
                        value={setData.ImgLeft}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">ImgRight</label>
                    <input type="text"
                        placeholder="ImgRight"
                        name="ImgRight"
                        value={setData.ImgRight}
                        onChange={InputData} />
                </div>
                <div class="form-group">
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