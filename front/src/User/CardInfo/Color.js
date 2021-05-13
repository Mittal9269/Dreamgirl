import {useEffect, useState} from "react";

export default function Color(props){
    const [col , setColor] = useState([]);
    useEffect(() => {
        let color_temp = [];
        for(let i=0; i<props.colors; i++){
            let cl = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            color_temp.push(cl);
        }
        setColor(color_temp);
        console.log(color_temp)
        console.log(props.colors);
    }, [])
 return(
     <>
         <div className="colors">
                {
                col.map((color, index) =>(
                    <button style={{background: color}} key={index}></button>
                ))
                }
            </div>
     </>
 )
}