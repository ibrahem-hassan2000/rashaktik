import React from 'react'

function Map() {
  return (
    <section className='map'>
        <div className='con'> 
        <div className='content'>
            <div className='imgMap'>
                <img src='/images/Basemap.png' alt='map'/>
            </div>
            <div className='titleMap'>
                <h2>موقعنا</h2>
                <p>50, Afif 17532, Saudi Arabia, المملكة العربية السعودية</p>
            </div>
            <div className="pulse">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div> 
        </div>

        </div>

    </section>
  )
}

export default Map