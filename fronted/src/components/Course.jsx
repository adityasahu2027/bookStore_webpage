
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Course() {
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
   
return (
    <>
        <Navbar/>
    
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='items-center text-center justify-center mt-16'>
                    <h1 className='text-2xl font-semibold md:text-4xl dark:bg-slate-900 dark:text-white '>We're delighted to have you <span className='text-2xl font-semibold md:text-4xl text-pink-500'>Here! :</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique modi aut ab magni. Ratione repellat harum porro beatae qui! Praesentium molestiae molestias porro dolorem nostrum nisi unde aperiam voluptatum?</p>
                    <button className="btn btn-active btn-secondary mt-6 hover:bg-pink-600">
                        <Link to='/'>back</Link>
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-12 '>
                    {
                        book.map((item)=>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
       
        <Footer/>
    </>
)
}

export default Course