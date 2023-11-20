import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
} from "../Pages/export";

function Clients() {
  const images = [
    { src: c1, alt: "Image 1", name: "Mr.Kailash Satyarthi (Nobel Prize Winners)" },
    { src: c2, alt: "Image 2", name: "Mr.Arup Raha (IAF Chief)" },
    { src: c3, alt: "Image 3", name: "Mr.SBP Sinha (Air Marshal)" },
    { src: c4, alt: "Image 4", name: "Japan Prime Minister Mr.Shinzō Abe" },
    { src: c5, alt: "Image 5", name: "Saif Ali Khan and Kareena Kapoor" },
    { src: c6, alt: "Image 6", name: "Mr.Syamal Sircar IAS. Ex.Secretary." },
    { src: c7, alt: "Image 7", name: "Dr.Rajinder Gill. Director NZCC (Ministry of Culture)" },
    { src: c8, alt: "Image 8", name: "Mr.Gyanesh Kumar IAS (Ex.Resident Commissioner Kerala.)" },
    { src: c9, alt: "Image 9", name: "Prof. GK Rath. AIIMS" },
    { src: c10, alt: "Image 10", name: "Mr.Ramesh Tiwari IAS" },
    { src: c11, alt: "Image 11", name: "Mr.J.S. Mukul, Indian Ambassador to the Sultanate of Oman" },
    { src: c12, alt: "Image 12", name: "Mr.Shankar Aggrwal IAS" },
    // { src: c13, alt: "Image 13", name: "Mrs.Stuti Narain Kacker IAS" },
  ];

  return (
    <MDBContainer className="py-2">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h1 className="mb-4">Our Clients</h1>

          <p className="mb-4 pb-2 mb-md-5 pb-md-0 fs-5">
          Our clients range from weddings to cultural events, each touched by the soulful melodies of our skilled musicians. Elevate your special moments with the harmonious tunes that have delighted our valued clients. Discover the magic of Shehnai music with us.
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="text-center d-flex align-items-stretch">
        {images.map((testimonial) => (
          <MDBCol
            md="4"
            key={testimonial.name}
            className="mb-5 mb-md-0 d-flex align-items-stretch"
          >
            <MDBCard className="testimonial-card shadow-lg hover:shadow-sm mb-4" style={{ background: 'var(--background)', width: '100%' }}>
              <div
                className="card-up"
                style={{ background: 'var(--gradient)' }}
              ></div>

              <div className="avatar mx-auto bg-white">
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="rounded-circle img-fluid"
                />
              </div>

              <MDBCardBody>
                <h4 className="mb-4">{testimonial.name}</h4>

                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Clients;
