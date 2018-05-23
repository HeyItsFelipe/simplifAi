import React from 'react';
import './MachineLearning.css';


const MachineLearning = (props) => {
  return (
    <div>
      <div className="section-about-ml">
          <div className="center-text margin-bottom-big-ml">
              <h2 className="heading-main">
                  What is Machine Learning?
                  <p> How it works, and why it matters </p>
              </h2>
          </div>
          <div className="row-ml">
              <div className="col-1-of-2">
                  {/* <h3 className="heading-tertiary margin-bottom-small">Use SimplifAi to simplify your life</h3> */}
                  <p className="paragraph">
                    Machine learning is a subset of artificial intelligence that uses various algorithms to learn trends within data and enables the user to request predictions about how a new piece of data might fit within that trend.
                  </p>
                  {/* <h3 className="heading-tertiary margin-bottom-small">Discover new things about your data</h3>
                  <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                  </p> */}
              </div>
              <div>
                  <div className="home-composition">
                      <img alt="Machine Learning"
                          className="home-composition__photo-ml home-composition__photo--p1-ml"
                          src="img/machine-learning-process.png"/>
                  </div>
              </div>
          </div>
      </div>
      <div className="section-features-ml">
          <div className="section-features__bg">
              <img className="section-features__bg__pic" src="img/ai-android.jpg" alt="ai android">
              </img>
          </div>
          <div className="center-text margin-bottom-big">
              <h2 className="heading-secondary">
                  People use machine learning every day
              </h2>
          </div>
          <div className="grid-ml">
              <div className="col-1-of-4">
                  <div className="feature-box-ml">
                    {/* <img ></img> */}
                  </div>
                  <h3 className="heading-tertiary-ml margin-bottom-small margin-top-small">Explore your data</h3>
                      <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
              </div>
              <div className="col-1-of-4">
                  <div className="feature-box-ml">
                      {/* <h3 className="heading-tertiary margin-bottom-small">Save time</h3>
                      <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p> */}
                  </div>
              </div>
              <div className="col-1-of-4">
                  <div className="feature-box-ml">
                      {/* <h3 className="heading-tertiary margin-bottom-small">Combine your data</h3>
                          <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p> */}
                  </div>
              </div>
              <div className="col-1-of-4">
                  <div className="feature-box-ml">
                      {/* <h3 className="heading-tertiary margin-bottom-small">Versatile support</h3>
                      <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p> */}
                  </div>
              </div>
          </div>
      </div>
      
    </div>
  );
}

export default MachineLearning;