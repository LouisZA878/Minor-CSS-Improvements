'use client'

import { useState } from 'react'

const page = () => {
const [imageIndex, setImageIndex] = useState(0)

  const imageUrl = [
    'https://media.istockphoto.com/id/928231920/photo/stunning-wide-angle-aerial-drone-evening-view-of-camps-bay-an-affluent-suburb-of-cape-town.webp?s=1024x1024&w=is&k=20&c=41ITXYn-9dTxwCIesUsgp889cl3bqSpGyZnutOCGhHk=',
    'https://media.istockphoto.com/id/1037550730/photo/cape-town-taxi-terminal.jpg?s=612x612&w=0&k=20&c=krqigx754L3A3tpXTG9z1NN7qLCefpK83CmgQX_wYow=',
    'https://media.istockphoto.com/id/838552434/photo/flowers-protea-fynbos-waboom-cape-town-table-mountain-south-africa.jpg?s=612x612&w=0&k=20&c=qdw_sTRIApyhEKTBnpc_wUFAfaJ3smzccpxJdgRBOHU=',
    'https://media.istockphoto.com/id/500377685/photo/signal-hill-cape-town-south-africa.jpg?s=612x612&w=0&k=20&c=hQlH-h8qu69103njsXcNeTUOLHvZflXKmP9rEzIzOPE=',
    'https://media.istockphoto.com/id/505594874/photo/great-white-shark.jpg?s=612x612&w=0&k=20&c=MCoi6uh4BFfMlAE-k2oiW6YlWB7PERbIQdon0e70NJI='
  ]

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === imageUrl.length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return imageUrl.length - 1
      return index - 1
    })
  }

  return (
    <div className='carousel-container'>
        <div>
          <section
          >
          {
            imageUrl.map(url => (
              <img 
                key={url}
                src={url}
                style={{
                  translate: `${-100 * imageIndex}%`
                }}
              />
            ))
          }

          </section>
          <button
            onClick={showPrevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-200 80-480l440-280v240h360v80H520v240Zm-80-146v-268L229-480l211 134Zm0-134Z"/></svg>
          </button>
          <button
            onClick={showNextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-200 80-480l440-280v240h360v80H520v240Zm-80-146v-268L229-480l211 134Zm0-134Z"/></svg>
          </button>
        </div>
    </div>
  )
}

export default page