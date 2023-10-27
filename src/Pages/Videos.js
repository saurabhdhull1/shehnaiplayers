import React from "react";
import YouTube from "react-youtube";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const Videos = () => {
  const videos = [
    { videoId: "SvHCzYXTF3Y" },
    { videoId: "kQc8dAlGXE4" },
    { videoId: "Y70Q0Tgs_WU" },
    { videoId: "rfhCfs72rLA" },
    { videoId: "E9uq4qi1cg0" },
    { videoId: "08Mh8Sbrwyo" },
  ];

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0, // Autoplay disabled
      controls: 1, // Show video controls
    },
  };

  return (
    <MDBContainer className="py-2 mb-3">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h1 className="mb-4">Our Videos</h1>

          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{ background:'var(--gradient)' }} className="py-2 rounded-3">
        {videos.map((video) => (
          <MDBCol md="4" key={video.videoId} className="p-3">
            <MDBCard className="overflow-hidden shadow-lg p-3" style={{ background:'var(--background)'}}>
              <YouTube videoId={video.videoId} opts={opts} />
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Videos;
