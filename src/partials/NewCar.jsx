import React from 'react'
import { Link } from 'react-router-dom'
import Addcars from '../constant/add'

const NewCar = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-9 px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">New List</h2>
            <p className="text-xl text-gray-400">Select from our car fleet and contact WJ-Motors</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 lg:max-w-none">
            
            {Addcars.map((add, index) => (
              <Link to='/cardetails' className="flex justify-center items-start flex-wrap h-[250px] max-w-full rounded-[15px] bg-gray-800" data-aos="fade-up">
              <div className="flex flex-col justify-start items-start  mb-4 w-full" key={add.more + index}>
                <img className="h-[200px] w-full object-cover rounded-[15px]" src={add.url} alt={add.more} />
                <div className=" text-gray-700 font-medium ml-4 mt-6 border-t border-[#5d5dff]">
                <cite className=" text-gray-100 not-italic ml-[8px]">{add.more}</cite>
                </div>
              </div>
              </Link>
            ))}
              </div>
            
            </div>
          </div>
</section>
  )
}

export default NewCar
