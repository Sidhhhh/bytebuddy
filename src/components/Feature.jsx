import React from 'react'
import '../css/feature.css'

const Feature = () => {
  return (
    <div>
      <div>
    <section>
      <div className="row">
        <h2>Our Features</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <h3>User Friendly</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Super Secure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Quick Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
    </div>
  )
}

export default Feature
