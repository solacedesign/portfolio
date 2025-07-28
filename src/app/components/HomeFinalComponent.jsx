import React from 'react'

const HomeFinalComponent = () => {
  return (
    <section className='bg-[#C88250] py-20'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10'>
            <div className='flex flex-col justify-center items-start gap-10'>
                <h2 className='text-5xl font-bold -rotate-6 mb-10'>
                    Ready to start ?
                </h2>

                <p>
                    Lorem ipsum dolor sit amet. Ut dolores doloribus 
                    ea quibusdam quae sed exercitationem totam et
                    similique sunt aut repellat doloribus
                </p>

                <button className='uppercase font-bold bg-[#fff] text-[#994219] px-5 py-3'>
                Let's Connect
                </button>
            </div>

            <div >
                <img src="working.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default HomeFinalComponent