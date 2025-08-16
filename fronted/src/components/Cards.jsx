import React from 'react'

function Cards({item}) {
    
return (
 <>
 <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-96 shadow-xl mt-8 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
            <img className='h-64 w-full object-cover'
                src={item.image}
                alt="book" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">Books</div>
            </h2>
            <p>{item.description}</p>
           
            <div className="mt-1 font-medium text-yellow-700">
                Category: {item.category}
            </div>
            <div className="card-actions  justify-between mt-4">
                  <div className="badge badge-outline text-green-700">₹{item.price}</div>
               
                <div className="badge badge-outline text-blue-600  hover:bg-blue-300 duration-200 px-2 py-1 ">Buy now!</div>
               
            </div>
        </div>
    </div>
    </div>
    </>
)
}

export default Cards