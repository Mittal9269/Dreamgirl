import Navbar from "../../FormType/Navbar";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct(props){
    const {id} = useParams();
    const [data,setData] = useState({
        ProductName: "",
        Prize: "",
        Size: "",
        Available: "",
        Color: "",
        ImgFront: "",
        ImgLeft: "",
        ImgRight: "",
        categary:""
    });

    const {ProductName,Prize,Size,Available,Color,ImgFront,ImgLeft,ImgRight,categary} = data;

    const fetchData = ()=>{
        fetch('http://localhost:8000/product/product/' + id , {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            })
            .then(res=>res.json())
            .then(fetchedata =>{
                setData({
                    ...data,
                    ProductName:fetchedata.ProductName,
                    Prize: fetchedata.Prize,
                    Size: fetchedata.Size,
                    Available: fetchedata.Available,
                    Color:fetchedata.Color,
                    ImgFront: fetchedata.ImgFront,
                    ImgLeft:fetchedata.ImgLeft,
                    ImgRight:fetchedata.ImgRight,
                    categary:fetchedata.categary
                })
            })
            .catch(err=>console.log(err));
    }

    useEffect(()=>{
        fetchData();
    },[])

    const InputData = name=>e=>{
        setData({...data,[name]:e.target.value})
    }

    const onUpdate = (e) =>{
        if(parseInt(data.Prize) && parseInt(data.Size)){
            alert("please don't write string");
        }
        e.preventDefault();
        const val = {
           ProductName: data.ProductName,
            Prize: parseInt(data.Prize),
            Size: parseInt(data.Size),
            Available: data.Available,
            Color: data.Color,
            ImgFront: data.ImgFront,
            ImgLeft: data.ImgLeft,
            ImgRight: data.ImgRight,
            categary: data.categary
       }
        fetch('http://localhost:8000/product/product/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify(val)
        }).then(res =>res.json()) // or res.json()
        // .then(text => window.location="/categery/categery")
        .then(text => 
            console.log(text))
        .catch(err => console.log(err))
        
    }

    const Noscroll = () =>{
        document.addEventListener("wheel", function(event){
            if(document.activeElement.type === "number" &&
               document.activeElement.classList.contains("noscroll"))
            {
                document.activeElement.blur();
            }
        });
    }
    return(
        <>
            <Navbar />
            <form onSubmit={onUpdate}>
                <div class="form-group">
                    <label class="form-control-label text-muted">ProductName</label>
                    <input type="text"
                        placeholder="Product Name"
                        value={ProductName}
                        onChange={InputData("ProductName")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Prize</label>
                    <input type="number"
                        placeholder="Prize"
                        value={Prize}
                        className="noscroll"
                        onSelect={Noscroll}
                        onChange={InputData("Prize")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Size</label>
                    <input type="number"
                        className="noscroll"
                        placeholder="Size"
                        value={Size}
                        onSelect={Noscroll}
                        onChange={InputData("Size")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Available</label>
                    <input type="text"
                        placeholder="Available"
                        value={Available}
                        onChange={InputData("Available")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Color</label>
                    <input type="number"
                        placeholder="Color"
                        value={Color}
                        className="noscroll"
                        onSelect={Noscroll}
                        onChange={InputData("Color")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">ImgFront</label>
                    <input type="text"
                        placeholder="ImgFront"
                        value={ImgFront}
                        onChange={InputData("ImgFront")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">ImgLeft</label>
                    <input type="text"
                        placeholder="ImgLeft"
                        value={ImgLeft}
                        onChange={InputData("ImgLeft")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">ImgRight</label>
                    <input type="text"
                        placeholder="ImgRight"
                        value={ImgRight}
                        onChange={InputData("ImgRight")} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">categary</label>
                    <input type="text"
                        placeholder="categary"
                        value={categary}
                        onChange={InputData("categary")} />
                </div>
                <div class="row justify-content-center my-3 px-3">
                    <button class="btn-block btn-color">Send request</button>
                </div>
            </form>
        </>
    )
}