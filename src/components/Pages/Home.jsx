import React from 'react'
import VendorComponent from '../VendorSearch/VendorComponent'
import VendorCardsComponent from '../VendorSearch/VendorCardsComponent'
import PeekToolsComponent from '../VendorSearch/PeekToolsComponent'
import WeddingDressComponent from '../VendorSearch/WeddingDressComponent'
import IdeaAndTipsComponent from '../VendorSearch/IdeaAndTipsComponent'
import ForumsComponent from '../VendorSearch/ForumsComponent'
import WebsiteComponent from '../VendorSearch/WebsiteComponent'
import DestinationComponent from '../VendorSearch/DestinationComponent'

const Home = () => {
  return (
    <>
     <section
          className="w-full font-[Poppins] bg-cover bg-center md:bg-top bg-transition h-[full] pb-2"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/52/54/24/52542461317e09454235ce54b00c2b00.jpg")',
          }}
        >
      <VendorComponent />
    
        <VendorCardsComponent />
        </section>
        <PeekToolsComponent />
        <WeddingDressComponent />
        <IdeaAndTipsComponent />
        <ForumsComponent />
        <WebsiteComponent />
        <DestinationComponent />
    </>
  )
}

export default Home