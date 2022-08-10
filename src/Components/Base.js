import React from 'react'
import './Base.css'

function Base() {
  return (
    <div className='main'>
      <div className='all'>
            <div className='first'>
               <div className='firstbig'> 
                  <div className='f1'></div>
                  <div className='f2'>
                      <div className='f2i'> <h1> <span>WE 'RE</span> COMING SOON</h1></div>
                      <div className='f2ii'><p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.</p></div>


                  </div>
                  <div className='f3'>
                    <div className='f3i'><input/></div>
                    <div className='f3ii'><button></button></div>
                     <div className='last'>Please provide a valid email</div>
                  </div>
               </div>
            </div>


           <div className='second'></div>
       </div>
   </div>
  )
}

export default Base