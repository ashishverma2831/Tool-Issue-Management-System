import React from 'react'

const ErrorPage = () => {
  return (
    <>
        <section className='bg-blue-500/50 flex justify-center items-center h-screen'>
            <div className='p-10 text-center '>
                <h1 className='text-4xl font-bold'>Error</h1>
                <p className='text-lg'>Try again later</p>
            </div>
        </section>
    </>
  )
}

export default ErrorPage