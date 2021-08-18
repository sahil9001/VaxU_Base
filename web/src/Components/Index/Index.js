import React from "react";
import { withRouter } from "react-router-dom";
export default class Index extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push("/login");
  };
  render() {
      const { history } = this.props;
    return (
      <div>
        <nav
          class="navbar is-fixed-top signal-navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="container">
            <div class="navbar-brand">
              <a href="">
                <img class="signal-logo" src="assets/logo/VaxU_Logo.png" />
              </a>
              <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item"> Home </a>
                <a class="navbar-item" href="#whyus">
                  {" "}
                  Why VaxU?{" "}
                </a>
                <a class="navbar-item"> Home </a>

                <a class="navbar-item"> Get VaxU </a>

                <div class="navbar-item">
                  <div class="buttons">
                    {/* <!--<a class="button is-primary" href="login1.html"> Log in </a>--> */}
                    <button
                      class="button is-primary"
                      onClick={this.handleClick}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section class="hero-main hero">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-two-fifths">
                  <h1>Vaccinate world!</h1>
                  <p class="body1">
                    Welcome to the new experience of vaccination, VaxU makes it
                    easy to book your nearest vaccination center!
                  </p>
                  <p>
                    <br />
                    <button class="button button-white">
                      <a class="get-signal no-underline" href="/download/">
                        Get VaxU
                      </a>
                    </button>
                  </p>
                </div>
                <div class="column mobile-screenshots">
                  <img class="screenshot1" src="assets/screenshots/1.png" />
                  <img class="screenshot2" src="assets/screenshots/2.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="whyus" class="why-signal section">
          <div class="container">
            <div class="columns is-centered">
              <div class="column has-text-centered">
                <h2>Why use VaxU?</h2>
                <p class="body1">
                  Explore below to see why VaxU is your all in one COVID app!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section features">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-half has-text-centered">
                <div class="box">
                  <img src="assets/illustrations/undraw_medicine_b1ol.svg" />
                  <h3>Find best doctors near you!</h3>
                  <p class="body2">
                    Worried about where to go? VaxU got you covered, reach out
                    to nearest doctors in need!
                  </p>
                </div>
              </div>
              <div class="column is-half has-text-centered">
                <div class="box">
                  <img src="assets/illustrations/undraw_Relaxing_at_home_re_mror.svg" />
                  <br />
                  <br />
                  <br />

                  <h3>Apply from home!</h3>

                  <p class="body2">
                    Now vaccination process made easy with VaxU, you can apply
                    from home just by filling your basic details, an adhaar card
                    and a profile picture.
                  </p>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-half has-text-centered">
                <div class="box">
                  <img src="assets/illustrations/undraw_social_distancing_2g0u.svg" />
                  <h3>Test probability by COVID Cough Checker!</h3>
                  <p class="body2">
                    Try out an easy and simple COVID detetion test by coughing
                    into the microphone of your app and get instant results!
                  </p>
                </div>
              </div>
              <div class="column is-half has-text-centered">
                <div class="box">
                  <img src="assets/illustrations/undraw_two_factor_authentication_namy.svg" />
                  <br />
                  <br />
                  <br />
                  <br />

                  <h3>Secure and Fast</h3>
                  <p class="body2">
                    At VaxU your personal details remains safe and is shared
                    between the vaccinator assigned to you, with just a face
                    scan at the center get vaccinated fast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section information">
          <div class="container">
            <div class="columns is-desktop">
              <div class="column">
                <img src="assets/illustrations/undraw_security_o890.svg" />
              </div>
              <div class="column is-one-third">
                <h2>Secure. Safe. Fast.</h2>
                <p class="body1">
                  All your information at VaxU consisting of adhaar card and
                  selfies are kept secure using https protocol. We believe in
                  security of every individual on the app.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section information">
          <div class="container">
            <div class="columns is-desktop">
              <div class="column is-hidden-desktop">
                <img src="assets/illustrations/undraw_Around_the_world_re_n353.svg" />
              </div>
              <div class="column is-one-third">
                <h2>Free for Everyone</h2>
                <p class="body1">
                  VaxU is free for everyone! We believe that medical facilities
                  should be availabe to every individual in the hour of need. We
                  want to contribute to process of successful and fast
                  vaccinations of the country to make it COVID free! <br />
                  <br />
                </p>
              </div>
              <div class="column is-hidden-touch has-text-right">
                <img src="assets/illustrations/undraw_Around_the_world_re_n353.svg" />
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="container">
            <div class="columns">
              <div class="column is-two-fifths is-hidden-mobile">
                <span class="copyright"> © 2021 Team NEXA </span>
                <br />
                <br />
                <br />

                <span>Team Members: </span>
                <br />
                <span>Sahil Silare (2nd year CSE)</span>
                <br />
                <span>Prakhar Asaiya (2nd year CSE)</span>
                <br />
                <span>Siddharth Mishra (2nd year CSE)</span>
                <br />
                <span>Amitesh Agrawal (2nd year CSE)</span>
              </div>
              <div class="column">
                NIT Raipur, GE Road, Raipur, Chhatissgarh (492007)
              </div>
              <div class="column has-text-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5489569646056!2d81.60284041448581!3d21.249727185574887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology%2C%20Raipur!5e0!3m2!1sen!2sin!4v1612431218471!5m2!1sen!2sin"
                  width="500"
                  height="300"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
        <script src="styles/jquery-3.5.1.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script src="styles/app.js"></script>
      </div>
    );
  }
}
