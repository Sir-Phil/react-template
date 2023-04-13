import React from 'react'
import PageIllustration from '../partials/PageIllustration'
import Testimonials from '../partials/Testimonials'

const Service = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* page content */}

      <main  className="grow">

        {/* page illustrator */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          {/* service section */}
          <Testimonials />

      </main>
     
    </div>
  )
}

export default Service
