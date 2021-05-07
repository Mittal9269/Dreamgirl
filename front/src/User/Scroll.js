import ScollCard from "./ScrollCard";
export default function Scroll() {
    return (
        <>
            <div className="left-part" style={{ textAlign: "center"}}>
                <h3 style={{ justifyContent: "center", paddingLeft: "20px", textAlign: "center" }}>Filter </h3>
                <hr />
                <div className="accordion">
                    {data.map((item , i) => (
                        <ScollCard item={item} index={i}/>
                    ))}
                </div>
            </div>
        </>
    )
}


const data = [
    {
        Title : "Age",
        middle : [
            "6-10",
            "10-14"
        ]
    },
    {
        Title : "Color",
        middle : [
            "yellow",
            "pink",
            "red"
        ]
    },
    {
        Title : "category",
        middle : [
            "Kurta",
            "lahnga",
            "jeans",
            "tops"
        ]
    },
    {
        Title : "Type",
        middle : [
            "boy",
            "girl"
        ]
    },
    {
        Title : "Prices",
        middle : [
            "low",
            "mediam",
            "high"
        ]
    }
]