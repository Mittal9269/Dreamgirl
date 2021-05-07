import {useState} from 'react';

export default function ScollCard(props) {
    const [selected , setSelected] = useState(null);
    const toggle = (i) =>{
        if(selected === i) {
            return setSelected(null);
        }

        setSelected(i)
    }
    return (
        <>
            <div className="itemAccro">
                <div className="title" onClick={() =>toggle(props.index) }>
                    <h4>{props.item.Title}</h4>
                    <span>{selected === props.index ? '-' : '+'}</span>
                </div>
                <div className={selected === props.index ? 'content show' : 'content'}>
                    {props.item.middle.map((val) => (
                        <h6>{val}</h6>
                    ))}
                </div>
            </div>
        </>
    )
}