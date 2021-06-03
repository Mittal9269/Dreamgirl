import Navbar from "../../FormType/Navbar";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct(props){
    const {id} = useParams();
    const [data,setData] = useState({
        ProductName : "",
        Prize : "",
        Quantity :"",
        Available : "",
        ImgFront : "",
        categary : "",
        Discription : "",
        Section  : ""
    });

    const {ProductName,Prize,Quantity,Available,ImgFront,categary,Discription,Section} = data;

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
                console.log(fetchedata)
                setData({
                    ...data,
                    ProductName:fetchedata.ProductName,
                    Prize: fetchedata.Prize,
                    Quantity: fetchedata.Quantity,
                    Available: fetchedata.Available,
                    ImgFront: fetchedata.ImgFront,
                    categary:fetchedata.categary,
                    Discription:fetchedata.Discription,
                    Section:fetchedata.Section
                })
            })
            .catch(err=>console.log(err));
    }

    useEffect(()=>{
        console.log(props)
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
            Quantity: parseInt(data.Quantity),
            Available: data.Available,
            ImgFront: data.ImgFront,
            categary: data.categary,
            Discription: data.Discription,
            Section: data.Section
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
                    <label class="form-control-label text-muted">categary</label>
                    <input type="text"
                        placeholder="categary"
                        name="categary"
                        value={setData.categary}
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
                
                <div class="row justify-content-center my-3 px-3">
                    <button class="btn-block btn-color">Send request</button>
                </div>
            </form>
        </>
    )
}