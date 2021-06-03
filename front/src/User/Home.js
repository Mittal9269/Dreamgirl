import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import "./homeproducts.css";
import "jquery";
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';
// import Carousel from 'react-bootstrap/Carousel'
import Section from "./Section";
import Card from "./Card";
import Navbar from "../FormType/Navbar";

import Search from "./HomeComponent/Search";
import PopularSearch from "./HomeComponent/PopularSearch";
import ImageHome from "./ImageHome";
// import { Carousel } from "react-responsive-carousel";
import Transforming from "./HomeComponent/Transforming";
import CarouselCom from "./HomeComponent/Carousel";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Data from "./SearchData";


const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  
  const handleOnFocus = () => {
    // console.log('Focused')
  }




export default function Home() {
   
    const [searchValue , setSearchValue] = useState("");

    const ChangeSearchResult = (e) =>{
      setSearchValue(e.target.value);
      console.log(searchValue)
    }
    const handleOnSelect = (item) => {
      // the item selected
      // console.log(item)
      setSearchValue(item.name)
    }
    const SubmitSearch = (e) =>{
      e.preventDefault();
      
      if(searchValue === ""){
        alert("nothing wrote , nothing happen !")
      }else{
        let res = searchValue.replace(" ", "_");  
        window.location = "/api/search/" + res;
      }
    
    }
    return (
        <>
            <Navbar />
            {/* <div style={{ width: "200px" }}>

            </div> */}
            {/* <Section /> */}
            <div className="pl-0 pr-0 mx-0 nav_bg ceil-bottom" style={{ backgroundColor: "#fafafa" }}>
                
                        
                       <CarouselCom />
                        {/* <hr/> */}
                        {/* <Search /> */}
                    </div>
                    <form onSubmit={SubmitSearch}>
                    <div className="my-5 mx-5">
                    <ReactSearchAutocomplete
                            items={Data}
                            value = {searchValue}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            onChange={ChangeSearchResult}
                            className="text search-input"
                            placeholder="Type here to search..."
                            autoFocus
                            styling={{
                              // height: "44px",
                                border: "1px solid #dfe1e5",
                                borderRadius: "0px !important",
                                // width:"300px"
                                // backgroundColor: "red",
                              //   boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                              //   hoverBackgroundColor: "#eee",
                              //   color: "#212121",
                              //   fontSize: "16px",
                              //   fontFamily: "Arial",
                              //   iconColor: "grey",
                              //   lineColor: "rgb(232, 234, 237)",
                              //   placeholderColor: "grey",
                              //   clearIconMargin: '3px 14px 0 0',
                              //   searchIconMargin: '0 0 0 16px'
                            }}
                          />
                          <button className="my-3">Search</button>
                    
                    </div>
                    </form>
                   

            <ImageHome  />
            <Transforming />
            <PopularSearch />
        </>
    )
}