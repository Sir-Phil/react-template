import React from 'react'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import FeaturesZigzag from '../partials/FeaturesZigzag'
import PageIllustration from '../partials/PageIllustration'

const About = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">

        {/* page illustrator */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/* about section */}
        <FeaturesZigzag />
        <FeaturesBlocks />
        {/*  */}
      </main>
     
    </div>
  )
}

export default About
