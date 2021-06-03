import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from '3d-react-carousal';
import Img1 from "../../Images/image1.jpeg";
import Img2 from "../../Images/image2.jpeg";
import Img3 from "../../Images/image3.jpeg";
import "./Carousel.css";
import { useState } from "react";

export default function CarouselCom() {
    const [image , setImage] = useState(Img1);
    let slides = [
        <img src="https://picsum.photos/1500/600/?random" alt="1" />,
        <img src="https://picsum.photos/1500/601/?random" alt="2" />,
        <img src="https://picsum.photos/1500/602/?random" alt="3" />,
        <img src="https://picsum.photos/1500/603/?random" alt="4" />,
        <img src="https://picsum.photos/1500/604/?random" alt="5" />];

        const changeFun = (e) =>{
            setImage(Img1)
            document.getElementById('button1').style.borderColor = 'red' ;
            document.getElementById('button2').style.borderColor = 'white' ;
            document.getElementById('button3').style.borderColor = 'white' ;
        }
        const changeFun2 = (e) =>{
            setImage(Img2)
            document.getElementById('button1').style.borderColor = 'white' ;
            document.getElementById('button2').style.borderColor = 'red' ;
            document.getElementById('button3').style.borderColor = 'hite' ;
        }
        const changeFun3 = (e) =>{
            setImage(Img3)
            document.getElementById('button1').style.borderColor = 'white' ;
            document.getElementById('button2').style.borderColor = 'white' ;
            document.getElementById('button3').style.borderColor = 'red' ;
        }
    return (
        <>
            {/* <Carousel className="mx-5 mb-lg-5 pb-5"
             slides={slides} autoplay={true} interval={1000}/> */}
            <div className="row image-show">
                <img src={image} className="image-full" />
                <div className="row set_button">
                    <button className="button_style" id="button1" onClick={changeFun}></button>
                    <button className="button_style" id="button2" onClick={changeFun2}></button>
                    <button className="button_style" id="button3" onClick={changeFun3}></button>
                </div>
            </div>
            {/*
              <Carousel>
               <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={Page3}
                            alt="First slide"
                            style={{ opacity: "0" }}
                        />
                        <Carousel.Caption>
                            <Section style={{ position: "absolute", marginUp: "1000px" }} />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={Page2}
                            alt="Second slide"
                            style={{ opacity: "0.8" }}
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Page1}
                            alt="Third slide"
                            style={{ opacity: "0.8" }}
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>  */}
        </>
    )
}