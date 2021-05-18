import Celloimage1 from "../Images/CelloPro/procello1.png";
import Celloimage2 from "../Images/CelloPro/procello2.png";
import Celloimage3 from "../Images/CelloPro/procello3.png";
import Celloimage4 from "../Images/CelloPro/procello4.png";
import Celloimage5 from "../Images/CelloPro/procello5.png";
import Miltonimage1 from "../Images/MiltonPro/mil1.png";
import Miltonimage2 from "../Images/MiltonPro/mil2.png";
import Miltonimage3 from "../Images/MiltonPro/mil3.png";
import Miltonimage4 from "../Images/MiltonPro/mil4.png";
import Miltonimage5 from "../Images/MiltonPro/mil5.png";
import Borosil from "../Images/Borosil/borosil.png";
import Prastige from "../Images/Prastige/prastige.png";

export default function ImageHome(){
    return(
        <>
            <div className="mt-4 mt-5" style={{color:"white" , backgroundColor:"black"}}>
                <h6 style={{display:"hidden" ,opacity:"0"}}>Hello</h6>
                <h1 className="text-center">Cello Products</h1>
                <h3 className="text-center">Brand to satisfy your requirement</h3>
                <h5 className="mt-4 text-center">Available Order Now</h5>
                <div className="row home-product1 mr-4 ml-4 ">
                    <img src={Celloimage1} />
                    <img src={Celloimage2} style={{width:"200px" , height:"200px"}} />
                    <img src={Celloimage3} />
                    <img src={Celloimage4} />
                    <img src={Celloimage5} />
                </div>
            </div>
            <hr/>
            <div className="" style={{ backgroundColor:"#fafafa"}}>
                <h1 className="text-center">Milton Products</h1>
                <h3 className="text-center">Brand to satisfy your requirement</h3>
                <h5 className="mt-4 text-center">Available Order Now</h5>
                <div className="row home-product1 mr-4 ml-4 ">
                    <img src={Miltonimage1} style={{width:"200px" , height:"200px"}} />
                    <img src={Miltonimage2} style={{width:"200px" , height:"200px"}} />
                    <img src={Miltonimage3} />
                    <img src={Miltonimage4} />
                    <img src={Miltonimage5} />
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-6 center" style={{color:"white" , backgroundColor:"black"}}>
                    <h1 className="text-center">Some Prastige Products</h1>
                    <h5 className="text-center">Brand to satisfy your requirement</h5>
                    <h6 className="mt-4 text-center">Available Order Now</h6>
                    <img className="img-home" src={Prastige} />
                </div>
               
                <div className="col-6" style={{ backgroundColor:"#fafafa"}}>
                <h1 className="text-center">Some Borosil Products</h1>
                    <h3 className="text-center">Brand to satisfy your requirement</h3>
                    <h5 className="mt-4 text-center">Available Order Now</h5>
                <img className="img-home" src={Borosil} />
                </div>
            </div>
        </>
    )
}