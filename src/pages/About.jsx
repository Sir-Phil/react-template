import React from 'react'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import FeaturesZigzag from '../partials/FeaturesZigzag'
import PageIllustration from '../partials/PageIllustration'

const About = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">

        {/* page illustrator */}
        <PageIllustration />

        {/* about section */}
        <FeaturesZigzag />
        <FeaturesBlocks />
      </main>
     
    </div>
  )
}

export default About
