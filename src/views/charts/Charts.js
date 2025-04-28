import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/components'

import peidmont from '../../assets/images/peidmont.png'
import wo from '../../assets/images/westoakland.png'

const Charts = () => {


  return (
    <React.Fragment>
  <CRow>
    <CCol>
      <CCard style={{ backgroundColor: "#D6EFFF", color: "black" }}>
        <CCardHeader style={{ backgroundColor: "#D6EFFF", color: "black" }}>
          <h5 style={{ color: "black" }}>Graphs</h5>
        </CCardHeader>

        {/* Divider line below header */}
        <div style={{ borderTop: "1px solid black", width: "100%", marginTop: "8px" }}></div>

        <CCardBody>
          <div className="flex justify-center gap-6 mb-4">
            {/* Graph/Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src={peidmont}
                alt="Graph 1"
                style={{ width: '800px', height: '400px' }}
                className="object-contain rounded"
              />
              <p className="mt-2 text-sm font-medium text-center" style={{ color: "black" }}>
                Piedmont - Lead exposure per hour vs Coverage
              </p>
            </div>

            {/* Graph/Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src={wo}
                alt="Graph 2"
                style={{ width: '800px', height: '400px' }}
                className="object-contain rounded"
              />
              <p className="mt-2 text-sm font-medium text-center" style={{ color: "black" }}>
                West Oakland - Lead exposure per hour vs Coverage
              </p>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</React.Fragment>
  

  )
}

export default Charts
