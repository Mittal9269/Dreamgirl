import { useState } from "react";

export default function CategaryCard(){
    //get the categary from the storage
    let Cate = JSON.parse(sessionStorage.getItem('Cat'));
    const [id , setId] = useState("");

     const onSub = (e)=>{
         e.preventDefault();
         console.log(id);
         fetch('http://localhost:8000/categery/categery/' + id, {
                method: 'DELETE',
            })
            .then(res =>res.text()) // or res.json()
            .then(text => window.location = "/categery/categery")
            .catch(err => console.log(err))

            console.log("Nothing")
     }
     const onSb = (e) =>{
         e.preventDefault();
         window.location  = "/categery/update";
     }
     const CategaryC = (props) =>{
         setId(props.id);
        return (
            <div>
            <button>{props.name}</button>
            <form >
            <button>update</button>
            </form>
            <form onSubmit = {onSub}>
            <button>delete</button>
            </form>
            
            <br/>
            </div>
        )
     }

    return(
        <>
        {/* get all the categary */}
        {Cate.map((value) =>{
                return(
                    <CategaryC 
                    name = {value.Categary}
                    id = {value._id}
                    />
                )
            })}
            <form onSubmit={onSb}>
                <button>Add New</button>
            </form>
        </>
    )
}