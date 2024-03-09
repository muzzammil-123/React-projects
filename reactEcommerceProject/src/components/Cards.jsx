import React, { useContext } from 'react'
import store from '../store/Store'

export default function Cards() {
    let {FaShoppingCart, IoStarSharp} = useContext(store)
  return (
    <>
      <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="card mx-2" style={{ width: '18rem' }}>
                <img src="https://th.bing.com/th/id/R.512b4b870390fac58da5206e88d228d6?rik=jJBGxN0jiDsoog&riu=http%3a%2f%2fpngimg.com%2fuploads%2frunning_shoes%2frunning_shoes_PNG5816.png&ehk=3qlYCpnvvypEQhvo89ErtkYlrtPcA7%2flMT6QJbccBWY%3d&risl=&pid=ImgRaw&r=0" className="card-img-top img-fluid w-75 mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shoe</h5>
                  <div className="pricing d-flex justify-content-between align-items-center pe-3">
                    <div>
                      <span className='text-decoration-line-through me-3'>$200</span>
                      <span className='fw-bold'>$150</span>
                    </div>
                    <div>
                      <FaShoppingCart />
                    </div>
                  </div>
                  <div className="pricing d-flex justify-content-between align-items-center pe-3">
                    <div>
                      <IoStarSharp className='text-warning' />
                      <IoStarSharp className='text-warning' />
                      <IoStarSharp className='text-warning' />
                      <IoStarSharp className='text-warning' />
                      <IoStarSharp className='text-warning' />
                    </div>
                    <div className='text-secondary fs-6'>100 reviews</div>
                  </div>
                  <a href="#" className="btn btn-primary d-block mt-3">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}
