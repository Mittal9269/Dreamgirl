import {useState} from "react";

export default function CategaryC(props){
    const [data , setData] = useState("");

    const InputData = (event) =>{
        setData(event.target.value);
    }

    const onUpdate = (e) =>{
        console.log(props.id);
        e.preventDefault();
        const val = {
           Categary : data
       }
       console.log(val)
        fetch('http://localhost:8000/categery/categery/' + props.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify(val)
        }).then(res =>res.json()) // or res.json()
        .then(text => window.location="/categery/categery")
        .catch(err => console.log(err))

    }

    const onSub = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/categery/categery/' + props.id, {
               method: 'DELETE',
           })
           .then(res =>res.text()) // or res.json()
           .then(text => window.location = "/categery/categery")
           .catch(err => console.log(err))
    }
    return(
        <>
            <div>
            <button>{props.name}</button>
            <form onSubmit={onUpdate} style={{display:'flex' , flexDirection:"row"}}>
            <input 
                type="text"  
                placeholder="Please write"
                onChange={InputData}
                value={data}
                name = {props._id}
                className="inputSize"
                style={{marginRight:"30px"}}
            />
            <button
            style={{width:"9 0px"}}
            >update</button>
            </form>
            <form onSubmit = {onSub}>
            <button>delete</button>
            </form>
            
            <br/>
            </div>
        </>
    )
}