import React from "react";

function Home(props) {
  return (
    <div>
      <section classNameName="py-5 text-center container">
        <div classNameName="row py-lg-5">
          <div classNameName="col-lg-6 col-md-8 mx-auto">
            <h1 classNameName="fw-light" />
            <p classNameName="lead text-muted">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://i.hizliresim.com/EAsF9B.jpg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.hizliresim.com/EAsF9B.jpg"
                      className="d-block w-100"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
