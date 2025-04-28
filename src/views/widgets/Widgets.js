import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

// Example handlePredict function
const handlePredict = async () => {
  const lat = parseFloat(document.getElementById("Latitude").value);
  const lon = parseFloat(document.getElementById("Longitude").value);
  console.log(lat,lon)

  if (isNaN(lat) || isNaN(lon)) {
    alert("Please enter valid latitude and longitude.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ latitude: lat, longitude: lon })
    });

    // Always try to parse response as JSON
    const data = await response.json();

    if (response.ok && data.prediction !== undefined) {
      alert(`Predicted Lead Concentration: ${data.prediction} ppm`);
    } else {
      alert("Prediction failed: " + (data.error || "Unknown error"));
    }
  } catch (err) {
    alert("Network or server error: " + err.message);
  }
};

const Widgets = () => {
  return (
    <React.Fragment>
      <CRow>
        <CCol xl={9} style={{ position: 'relative' }}>
          <CCard>
            <CCardHeader>
              <h5>Lead Concentration</h5>
              <div><p></p></div>
              <h6>Only have data for Oakland and Piedmont Areas</h6>
            </CCardHeader>

            <CCardBody style={{ padding: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96791.57549558603!2d-122.27714386944432!3d37.7859145153001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d8b28aaed03%3A0x71b415d535759367!2sOakland%2C%20CA!5e0!3m2!1sen!2sus!4v1745802518837!5m2!1sen!2sus"
                height="400"
                style={{ border: 0, width: '100%' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xl={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <CCard style={{ width: '100%' }}>
            <CCardBody>
              <button
                style={{
                  width: '180px',
                  borderRadius: '8px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  border: 'none',
                  padding: '14px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  marginBottom: '20px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#2c3e50')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
                onClick={handlePredict}
              >
                Predict
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                  type="number"
                  id="Latitude"
                  placeholder="Latitude"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    marginBottom: '10px',
                  }}
                />
                <input
                  type="number"
                  id="Longitude"
                  placeholder="Longitude"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  }}
                />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </React.Fragment>
  )
}

export default Widgets
