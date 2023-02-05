import React from 'react'
import SimpleBookmarkFeatures from './BodyComponent/SimpleBookmarkFeatures'
import Slides from './BodyComponent/Slides'
import Extension from './BodyComponent/Extension'
import FAQ from './BodyComponent/FAQ'

function HomeBody() {
  return (
    <div>
        <SimpleBookmarkFeatures/>
        <Slides/>
        <Extension/>
        <FAQ/>
    </div>
  )
}

export default HomeBody