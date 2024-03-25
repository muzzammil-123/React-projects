import React, { useContext, useState } from 'react'
import store from '../store/Store'

export default function SideBar() {

  let { handleClick } = useContext(store)

  return (
    <>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col-2">
            <h2>Categories</h2>
            <div className="form-check">
              <input onChange={(e) => { handleClick(e.target.value) }} value='All products' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                All products
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" onClick={(e) => { handleClick(e.target.value) }} type="radio" name="flexRadioDefault" value='sneakers' id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Sneakers
              </label>
            </div>
            <div className="form-check">
              <input value='flats' className="form-check-input" type="radio" onClick={(e) => { handleClick(e.target.value) }} name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Flats
              </label>
            </div>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='sandals' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Sandals
              </label>
            </div>
            <div className="form-check">
              <input value='heels' className="form-check-input" type="radio" onClick={(e) => { handleClick(e.target.value) }} name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Heels
              </label>
            </div>
            <h2>Price</h2>
            <div className="form-check">
              <input value='All' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                $0 - $100
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                $200 - $300
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                $400 - $500
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                $600 - $700
              </label>
            </div>
            <h2>Colors</h2>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='All' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='red' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Red
              </label>
            </div>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='blue' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Blue
              </label>
            </div>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='white' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                White
              </label>
            </div>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='green' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Green
              </label>
            </div>
            <div className="form-check">
              <input onClick={(e) => { handleClick(e.target.value) }} value='black' className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label style={{ width: 'max-content' }} className="form-check-label" htmlFor="flexRadioDefault1">
                Black
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
