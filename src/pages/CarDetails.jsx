import React from 'react'

const CarDetails = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* page content */}

      <main  className="grow">

        {/* page illustrator */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Page Under construction !
                </h1>
                <a className="btn text-purple-600 bg-purple-100 hover:bg-white shadow" href="/">Back Home</a>
              </div>
          
      </main>
     
    </div>
  )
}

export default CarDetails
