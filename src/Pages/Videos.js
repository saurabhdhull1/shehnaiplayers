import React from "react";
import YouTube from "react-youtube";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";

const Videos = () => {

  const location = useLocation();

  const videos = [
    { videoId: "SvHCzYXTF3Y" },
    { videoId: "kQc8dAlGXE4" },
    { videoId: "Y70Q0Tgs_WU" },
    { videoId: "rfhCfs72rLA" },
    { videoId: "E9uq4qi1cg0" },
    { videoId: "08Mh8Sbrwyo" },
    { videoId: "vD4IB_umAEw" },
    { videoId: "xS8JiwsRicg" },
    { videoId: "1dLXlmsrPrg" },
    { videoId: "6aCWEvMs_XY" },
    { videoId: "ffciOxm_1MM" },
    { videoId: "hq1ZuvGgSLI" },
    // { videoId: "GI0D1ykDndY" },
  ];

  const videos1 = [
    { videoId: "kQc8dAlGXE4" },
    { videoId: "Y70Q0Tgs_WU" },
    { videoId: "rfhCfs72rLA" },
  ];

  const allvideo = location.pathname === '/' ? videos1 : videos

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

          <p className="mb-4 pb-2 mb-md-5 pb-md-0 fs-5">
          Explore enchanting performances by our skilled musicians. From soulful classics to contemporary renditions, our videos capture the timeless beauty of Shehnai music. Unveil the magic, and let the melodies transport you to a realm of musical brilliance.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{ background:'var(--gradient)' }} className="py-2 rounded-3">
        {allvideo.map((video) => (
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
