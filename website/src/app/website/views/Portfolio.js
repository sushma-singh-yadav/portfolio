import React, { Component } from 'react';
// import { portfolio1 } from {require('../../../assets/img/portfolio/portfolio-1.jpg')};
class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="portfolio" className="portfolio">
          <div className="container">

            <div className="section-title">
              <span>My Work</span>
              <h2>My Work</h2>
              <p>Some of my projects that I worked upon</p>
            </div>

            <div className="row">
            <div className="col-md-3">
                <div class="card border-info">
                  <h5 class="card-header">Gardens Of Time</h5>
                  <div class="card-body text-secondary">
                    <h6 class="card-subtitle mb-2 text-muted">Jan 2023 - Present</h6>
                    <p class="card-text">Developed pet feature in game.</p>
                    {/* <a href="#" class="card-link">Card link</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card border-warning">
                  <h5 class="card-header">Warehouse management system</h5>
                  <div class="card-body text-secondary">
                    <h6 class="card-subtitle mb-2 text-muted">June 2022 - Dec 2022</h6>
                    <p class="card-text">Developed inventory feature in laravel and vue js.</p>
                    {/* <a href="#" class="card-link">Card link</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card border-secondary">
                  <h5 class="card-header">HRMS</h5>
                  <div class="card-body text-secondary">
                    <h6 class="card-subtitle mb-2 text-muted">Jul 2021 - May 2022</h6>
                    <p class="card-text">Developed payroll and timezone module in Codeigniter.Worked in a team and managing team members.</p>
                    {/* <a href="#" class="card-link">Card link</a> */}
                  </div>
                </div>
              </div>

            <div className="col-md-3">
              <div class="card border-primary">
                <h5 class="card-header">TeckCRM</h5>
                <div class="card-body text-secondary">
                  <h6 class="card-subtitle mb-2 text-muted">Feb 2021 - Jun 2021</h6>
                  <p class="card-text">Developed inventory feature in laravel and vue js.</p>
                  {/* <a href="#" class="card-link">Card link</a> */}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div class="card border-success">
                <h5 class="card-header">Onlinepadho</h5>
                <div class="card-body text-secondary">
                  <h6 class="card-subtitle mb-2 text-muted">Jan 2020 - Nov 2020</h6>
                  <p class="card-text">Developed online class scheduling system for students as well as teachers. Integrated payment gateway (payu) in codeigniter.
                    Created dynamic meta tag panel for seo team.</p>
                  {/* <a href="#" class="card-link">Card link</a> */}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div class="card border-danger">
                <h5 class="card-header">HR Portal</h5>
                <div class="card-body text-secondary">
                  {/* <h6 class="card-subtitle mb-2 text-muted">Feb 2021 - Jun 2021</h6> */}
                  <p class="card-text">Created api for hr portal in codeigniter 4.</p>
                  {/* <a href="#" class="card-link">Card link</a> */}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div class="card border-info">
                <h5 class="card-header">Petsouk</h5>
                <div class="card-body text-secondary">
                  <h6 class="card-subtitle mb-2 text-muted">Nov 2020 - Feb 2021</h6>
                  <p class="card-text">Implemented cart and checkout system in Codeigniter.</p>
                  {/* <a href="#" class="card-link">Card link</a> */}
                </div>
              </div>
            </div>

          

            <div className="col-md-3">
              <div class="card border-warning">
                <h5 class="card-header">Shahid ERP</h5>
                <div class="card-body text-secondary">
                  <h6 class="card-subtitle mb-2 text-muted">2018-2019</h6>
                  <p class="card-text">Developed leave system in core php. Integrated biometric attendance data in erp. Optimized code for better performance.</p>
                  {/* <a href="#" class="card-link">Card link</a> */}
                </div>
              </div>
            </div>
          </div>
          {/* <ul id="portfolio-flters" className="d-flex justify-content-center">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src={require('../../../assets/img/portfolio/portfolio-1.jpg').default} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src={require('../../../assets/img/portfolio/portfolio-2.jpg').default} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div> */}

        </div>
      </section>
     </>
			);
  }
}
export default Portfolio;