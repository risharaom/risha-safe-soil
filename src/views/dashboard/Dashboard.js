import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "40px", 
      fontFamily: "Arial, sans-serif", 
      backgroundColor: "#808080", // grey background
      color: "white", // make all default text white
      minHeight: "100vh" 
    }}>
      
      {/* Heading */}
      <h1 style={{ 
        fontSize: "3rem", 
        marginBottom: "20px", 
        color: "white", // heading text white
        fontWeight: "bold" 
      }}>
        EBAYS Lead Research
      </h1>
    
      {/* Content Section */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        maxWidth: "900px", 
        backgroundColor: "#4d4d4d", // slightly darker grey for content box
        padding: "20px", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" 
      }}>
        
        {/* Paragraph */}
        <p style={{ 
          fontSize: "1rem", 
          flex: 1, 
          marginRight: "20px", 
          lineHeight: "1.6", 
          color: "white" // paragraph text white
        }}>
          Lead exposure is a serious health risk, especially for children playing in contaminated areas. Our Lead Concentration Prediction Website provides data-driven insights to help communities identify and address lead risks.
    
          Using findings from an EBAYS study in Piedmont and West Oakland, our platform visualizes contamination levels, highlighting West Oakland’s significantly higher lead concentrations. This emphasizes the need for awareness and action.
    
          By leveraging predictive models, we empower residents, researchers, and policymakers with critical lead exposure data. Future efforts will expand datasets to include backyard soil samples for a more comprehensive analysis.
        </p>
    
        {/* Image */}
        <img
          src="https://lawrencehallofscience.org/wp-content/uploads/2024/10/envscienceresearch2-1.jpg"
          alt="Lead Research Visualization"
          style={{ 
            width: "300px", 
            height: "auto", 
            borderRadius: "10px", 
            objectFit: "cover", 
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" 
          }}
        />
      </div>
    </div>
  );
  
}

const otherDash=()=>{}

export default Dashboard
