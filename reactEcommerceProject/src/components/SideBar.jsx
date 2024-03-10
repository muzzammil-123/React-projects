import React from 'react'

export default function SideBar() {
  return (
    <>
      <div className="container" style={{ marginTop: '100px' }}>
          <div className="row">
            <div className="col-2">
              <h2>Categories</h2>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  All products
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Sneakers
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Flats
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Sandals
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Heels
                </label>
              </div>
              <h2>Price</h2>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  $0 - $100
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  $200 - $300
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  $400 - $500
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  $600 - $700
                </label>
              </div>
              <h2>Colors</h2>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Red
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Blue
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Orange
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{width : 'max-content'}} className="form-check-label" htmlFor="flexRadioDefault1">
                  Purple
                </label>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}
