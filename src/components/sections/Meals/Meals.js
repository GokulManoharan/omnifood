import React from 'react'

import img1 from '../../../images/1.jpg'
import img2 from '../../../images/2.jpg'
import img3 from '../../../images/3.jpg'
import img4 from '../../../images/4.jpg'
import img5 from '../../../images/5.jpg'
import img6 from '../../../images/6.jpg'
import img7 from '../../../images/7.jpg'
import img8 from '../../../images/8.jpg'

function Meals () {
    return(
        <section className="section-meals">
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meal-photo">
              <img src={img1} alt="Image 1" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img2} alt="Image 2" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img3} alt="Image 3" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img4} alt="Image 4" />
            </figure>
          </li>
        </ul>
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meal-photo">
              <img src={img5} alt="Image 5" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img6} alt="Image 6" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img7} alt="Image 7" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={img8} alt="Image 8" />
            </figure>
          </li>
        </ul>
     </section>
    )
}

export default Meals