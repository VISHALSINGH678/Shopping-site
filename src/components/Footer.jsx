import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='lg' className='text-center text-lg-start text-muted'>
        <hr />
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Shopping_Cart
              </h6>
              <p>
                Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigation</h6>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/services' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Resources</h6>
              <p>
                <a href='https://github.com/VISHALSINGH678' className='text-reset'>
                  GitHub
                </a>
              </p>
              <p>
                <a href='/https://linkdin.com/' className='text-reset'>
                  Linkdin
                </a>
              </p>
              <p>
                <a href='https://indeed.com/' className='text-reset'>
                  Indeed
                </a>
              </p>
              <p>
                <a href='https://instagram.com/' className='text-reset'>
                  Instagram
                </a>
              </p>
            </MDBCol>


            
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Help Pages</h6>
              <p>
                <a href='/contact' className='text-reset'>
                  Customer
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Developers
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  Our Story
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
            </MDBCol>


            
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright © 2024, All Rights Reserved.
      </div>
    </MDBFooter>
  );
}