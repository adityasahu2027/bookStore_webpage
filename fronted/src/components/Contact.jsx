import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16'>
            <h1 className='text-2xl font-semibold md:text-4xl dark:bg-slate-900 dark:text-white text-center'>Contact Us</h1>
            <p className='mt-12 text-center'>If you have any questions or feedback, feel free to reach out to us!</p>
            <form className='mt-8 max-w-md mx-auto'>
            <div className='mb-4'>
                <label className='block mb-2'>Name</label>
                <input type='text' placeholder='Your Name' className='w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white' />
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Email</label>
                <input type='email' placeholder='Your Email' className='w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white' />
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Message</label>
                <textarea placeholder='Your Message' className='w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white'></textarea>
            </div>
            <button type='submit' className='btn btn-secondary w-full'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact