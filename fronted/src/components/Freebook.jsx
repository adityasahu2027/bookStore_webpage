
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";
function Freebook(){
   const [book,setBook] = useState([]);
       useEffect(()=>{
  const fetchBookData = async ()=>{
      try {
         const res = await axios.get("http://localhost:5000/books")
         console.log(res.data);
           setBook(res.data);
      } catch (error) {
          console.log(error);
      }
  }
  fetchBookData();
     },[])

const filterData = book.filter((data) =>
    data.category === "Free");
// console.log(filterData);
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
 <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
 <p>Discover a treasure trove of knowledge and stories—completely free! Our Free Books section offers a curated selection of digital reads across various genres, from timeless classics to insightful non-fiction. Whether you're looking to dive into a thrilling novel, expand your knowledge, or explore new perspectives, these books are available for download at no cost. Embrace the joy of reading without limits!</p>
   </div>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div>
    <Slider {...settings}>
{filterData.map((item) => (
  <Cards item = {item} key={item.id}/>
))}
       
      
      </Slider>
      </div>
   </div>
   </>
  );
}

export default Freebook