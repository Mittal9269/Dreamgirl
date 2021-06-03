import quality from "../../Images/Transform/quality.png";
import qualityPng from "../../Images/Transform/qualityPng.png";
import Inovation from "../../Images/Transform/innovation.png";
import durability from "../../Images/Transform/durability.png";
import customerservice from "../../Images/Transform/customerservice.png";

export default function Transforming() {
    return (
        <>
            <h1 className="text-center mt-5 mb-5 font-weight-light transform__header">Transforming lives, Great products Great Service</h1>

            <div className="col-10 mx-auto row service-image main__div__transform">
                <div className="text-center transform__img">
                    <img src={quality} alt="pngg" style={{filter:"invert(0.5)"}} />
                    <h4 className="my-4">quality</h4>
                </div>
                {/* <Line /> */}
                <div className = "vertical"></div>
                <div className="text-center transform__img">
                    <img src={Inovation} alt="pngg" style={{filter:"invert(0.5)"}} />
                    <h4 className="my-4">innovation</h4>
                </div>
                <div className = "vertical vertical3"></div>
                <div className="text-center transform__img">
                    <img src={durability} alt="pngg" style={{filter:"invert(0.5)"}} />
                    <h4 className="my-4">durability</h4>
                </div>
                <div className = "vertical"></div>
                <div className="text-center transform__img">
                    <img src={customerservice} alt="pngg" style={{filter:"invert(0.5)"}}  />
                    <h4 className="my-4">service</h4>
                </div>
            </div>
        </>
    )
}