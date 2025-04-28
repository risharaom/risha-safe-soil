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
        <CCard>
          <CCardHeader>
            <h5>Graphs</h5>
          </CCardHeader>

          <CCardBody>
            <div className="mt-2" style={{ paddingBottom: '50px' }}>
              <a
                href="https://docs.google.com/document/d/1w_MfUSIfahyc2jbSR4qXe2gcuFrrSXwOtHy6EVhnSaI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn about lead exposure in Bay Area communities
              </a>
            </div>

            <div className="flex justify-center gap-6 mb-4">
              {/* Graph/Image 1 */}
              <div className="flex flex-col items-center">
                <img
                  src={peidmont}
                  alt="Graph 1"
                  style={{ width: '800px', height: '400px' }}
                  className="object-contain rounded"
                />
                <p className="mt-2 text-sm font-medium text-gray-700 text-center">
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
                <p className="mt-2 text-sm font-medium text-gray-700 text-center">
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
