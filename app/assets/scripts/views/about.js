'use strict';
import React from 'react';
import { connect } from 'react-redux';
import JoinFold from '../components/join-fold';

var About = React.createClass({
  displayName: 'About',

  propTypes: {
  },

  render: function () {
    return (
      <section className='inpage'>
        <header className='inpage__header'>
          <div className='inner'>
            <div className='inpage__headline'>
              <h1 className='inpage__title'>About Us</h1>
              <div className='inpage__introduction'>
                <p>Our mission is to fight air inequality by opening up air quality data and connecting a diverse global, grassroots community of individuals and organizations.</p>
              </div>
            </div>
          </div>

          <figure className='inpage__media inpage__media--cover media'>
            <div className='media__item'>
              <img src='/assets/graphics/content/view--home/cover--home.jpg' alt='Cover image' width='1440' height='712' />
            </div>
          </figure>
        </header>
        <div className='inpage__body'>

          <section className='fold fold--intro' id='about-fold-intro'>
            <div className='inner'>
              <header className='fold__header'>
                <h1 className='fold__title'>We are guided by principles</h1>
              </header>

              <ul className='principles-list'>
                <li>
                  <article className='card card--principle'>
                    <div className='card__contents'>
                      <figure className='card__media'>
                        <div className='card__badge'>
                          <img src='/assets/graphics/layout/oaq-icon-illu-48-historical.svg' width='40' height='40' alt='Illustration' />
                        </div>
                      </figure>
                      <header className='card__header'>
                        <div className='card__headline'>
                          <h1 className='card__title'>Historical + Programmatic access</h1>
                        </div>
                      </header>
                      <div className='card__body'>
                        <div className='card__prose prose prose--responsive'>
                          <p>Giving air quality data a wider audience.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>

                <li>
                  <article className='card card--principle'>
                    <div className='card__contents'>
                      <figure className='card__media'>
                        <div className='card__badge'>
                          <img src='/assets/graphics/layout/oaq-icon-illu-48-opensource.svg' width='40' height='40' alt='Illustration' />
                        </div>
                      </figure>
                      <header className='card__header'>
                        <div className='card__headline'>
                          <h1 className='card__title'>Open source</h1>
                        </div>
                      </header>
                      <div className='card__body'>
                        <div className='card__prose prose prose--responsive'>
                          <p>Encouraging open collaboration in the open.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>

                <li>
                  <article className='card card--principle'>
                    <div className='card__contents'>
                      <figure className='card__media'>
                        <div className='card__badge'>
                          <img src='/assets/graphics/layout/oaq-icon-illu-48-community.svg' width='40' height='40' alt='Illustration' />
                        </div>
                      </figure>
                      <header className='card__header'>
                        <div className='card__headline'>
                          <h1 className='card__title'>Community driven</h1>
                        </div>
                      </header>
                      <div className='card__body'>
                        <div className='card__prose prose prose--responsive'>
                          <p>Working to help each other do impactful work.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </section>

          <section className='fold fold--semi-light' id='about-fold-sponsors'>
            <div className='inner'>
              <header className='fold__header'>
                <h1 className='fold__title'>Partners and Sponsors</h1>
              </header>
              <ul className='sponsor-list'>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.climateworks.org/'><img src='assets/graphics/content/sponsors/climateworks.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://developmentseed.org/'><img src='assets/graphics/content/sponsors/devseed.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://aws.amazon.com/'><img src='assets/graphics/content/sponsors/aws.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://www.fz-juelich.de/portal/DE/Home/home_node.html/'><img src='assets/graphics/content/sponsors/fj.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://erc.europa.eu/'><img src='assets/graphics/content/sponsors/erc.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://sites.agu.org/'><img src='assets/graphics/content/sponsors/agu.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://earthjournalism.net/'><img src='assets/graphics/content/sponsors/ejn.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.internews.org/'><img src='assets/graphics/content/sponsors/internews.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://keen.io/'><img src='assets/graphics/content/sponsors/keenio.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.nih.gov/'><img src='assets/graphics/content/sponsors/nih.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.openscienceprize.org/'><img src='assets/graphics/content/sponsors/openscience.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://thrivingearthexchange.org/'><img src='assets/graphics/content/sponsors/tex.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://wellcome.ac.uk/'><img src='assets/graphics/content/sponsors/wellcome.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.hhmi.org/'><img src='assets/graphics/content/sponsors/hhmi.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://www.echoinggreen.org/'><img src='assets/graphics/content/sponsors/echoing-green.jpeg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://www.wri.org/'><img src='assets/graphics/content/sponsors/WRI.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.paulhastings.com/'><img src='assets/graphics/content/sponsors/PH.jpg' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='http://godleyfamilyfoundation.org/'><img src='assets/graphics/content/sponsors/godley.png' alt='View sponsor website'/></a></li>
                <li><a className='sponsor-list__item' target='_blank' href='https://www.radiant.earth/'><img src='assets/graphics/content/sponsors/radiantearth.png' alt='View sponsor website'/></a></li>
              </ul>
              <footer className='fold__footer'>
                <a href='mailto:' className='sponsor-button' title='View page'><span>Become a sponsor</span></a>
              </footer>
            </div>
          </section>

          <JoinFold />

        </div>
      </section>
    );
  }
});

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function selector (state) {
  return {
  };
}

function dispatcher (dispatch) {
  return {
  };
}

module.exports = connect(selector, dispatcher)(About);
