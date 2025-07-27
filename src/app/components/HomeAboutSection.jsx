import React from 'react'

export const HomeAboutSection = () => {
  return (
   <section className="bg-[#f3eee6] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Left - Quote */}
        <div className="md:col-span-1 text-left">
          <p className="italic text-lg font-serif text-gray-700 leading-relaxed">
            Vel velit sint sed <span className="text-[#b86d3c]">alias earum</span><br />
            qui molestiae vero <span className="text-[#b86d3c]">eum</span><br />
            itaque veritatis.
          </p>
        </div>

        {/* Center - Orange Block */}
        <div className="md:col-span-1 flex justify-center">
          <div className="w-40 h-64 bg-[#b86d3c]"></div>
        </div>

        {/* Right - Headings and Text */}
        <div className="md:col-span-1 text-left space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-[#615B4D] uppercase">
            Hey, I’m Brittany
          </h1>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">
            I’m so honoured your here
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet. Ut dolores doloribus ea quibusdam quae sed exercitationem totam 
            et similique sunt aut repellat doloribus. Sed aut iure quae est vitae molestias id voluptatem 
            adipisci non quae recusandae non maiores odit repudiandae doloribus.
          </p>
        </div>
      </div>
    </section>
  )
}
