import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormCheck, CFormSwitch, CRow } from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

const ChecksRadios = () => {
  return (
    (
      <CCol xs={12}>
        <CCard style={{ backgroundColor: "#808080", color: "white" }}>
          <CCardHeader>
            <strong>Risha M Rao, Jim M Neiss-Cortez</strong>
          </CCardHeader>
          <CCardBody>
            <h5>Abstract</h5>
            <p>
            Lead originating from leaded gasoline and leaded housepaint can affect the residents of different communities. This magnifies the concerns about health risks associated with children playing outside and ingesting lead due to either ingestion, inhalation, or skin contact.
            </p>
            <p>In an EBAYS study, samples were collected at random from neighborhoods in Piedmont and West Oakland. Samples of soil and gloves were collected to be examined for lead particles. In Piedmont, there was subsequently less lead ppm found than in the West Oakland samples. On average the lead contained in the soil of Piedmont is 170 ppm while in Piedmont the average is 117 ppm. The count of lead retained on the gloves used to sample West Oakland is 19.6 ppm compared to the 19 ppm average for Piedmont. 
            </p>
            <p>This EBAYS study of lead exposure in children observed greater amounts of lead in the community of West Oakland than in Piedmont. Future efforts should sample from backyards rather than sidewalks to increase diversity in data.</p>
            {/* --- (you continue like this paragraph by paragraph) --- */}
            <h5>Introduction</h5>
            <p>
            Lead ( Pb ) is an ubiquitous urban contaminant that is  found in both interior and exterior dust. ( Caravanos et al.,2005 ) Many urban activities are responsible for the release of lead dust into suburban environments including the creation of leaded gasoline, house paint, electronic waste caused by improper disposal, factory waste which is a product of the industrial process, lead pipes from older plumbing systems, and improper disposal of lead-acid batteries. 

            </p>
            <p>Lead also can be found in other locations and places of origin. This is due to the combustion of leaded gasoline by vehicles during the early 1900’s. By the 1920’s lead was being used widely in all automobiles throughout the world. By 1973 the US mandated the phase-out of all lead in gasoline and by 1996 Refineries and importers must record and report cars labeled with unleaded fuel only. Lead was an addition to gasoline primarily because of its ability to increase engine longevity and to increase octane. The type of lead added was of an organic structure making the lead more bioavailable, through the skin and when inhaled. Lead was additionally added to house paint to shield the paint from the elements and as a quick-dry agent.  These activities cause lead to be ubiquitous in high vehicle trafficked areas. As a result, lead has a lasting legacy as it does not degrade to daughter products, lead is lead forever.
            </p>
            <p>Due to the enduring nature of lead, there are innumerable mechanisms by which lead can be exposed to residents in urban environments. The contrasts between West Oakland and Piedmont make it so that the manners of exposures are contrasted.
            </p>
            <p>The main methods of lead entering the body consist of ingestion, inhalation, and skin contact. Ingestion consists of consuming lead-contaminated dust, soil, or water, often through hand-to-mouth contact. Mouth contact is distinctly a problem for the reason that many studies have shown that young children put their hands in their mouths 18 times an hour ( Black et al., 2000). Lead dust is mainly picked up from contaminated surfaces such as floors, toys, and other objects during outdoor play. Lead can also be ingested through vegetables being grown in lead-contaminated soil. Inhalation is caused by breathing in leaded soil particles or chalking paint. These particles can be found in fumes/dust from renovations. People with occupations such as  gardeners are generally more at risk of lead poisoning due to inhalation because of the copious amounts of dirt they inhale every hour outside. There are generally two causes in which lead can be inhaled by humans. The first is renovation activities which can be caused by home repairs with lead-based paint. The other is Industrial emissions which cause us to inhale dust because of industries that release fumes containing lead and dust. Skin contact is caused when lead is absorbed through direct contact with contaminated materials or soil. Causations of this can be described by the following: contaminated soil which can come into contact with skin while playing or working in lead-contaminated soil. Occupational exposure is caused when workers in factories are exposed to fumes and materials containing lead. 
            </p>
            <p>Coming into contact with lead caused by ingestion, inhalation, and skin contact can result in short-term and long-term health effects. It is shown that for children, lead exposure can result in more damaging long-term problems due to their developing bodies. This results in such things as stunting growth such as increased height/weight , cognitive impairments like learning disabilities and reduced IQ , and Behavioral changes such as attention problems and aggression . It can also result in serious neurological effects such as brain development that affects neurotransmitter function , cognitive functions such as decreased attention span and problem-solving abilities , and language skills like speech and hearing problems . All these problems carry on to adulthood. Lead exposure in adults can also lead to damaging effects and problems though not as much as kids since adults have a stable gown body. The effects can be as follows: kidney damage which impairs kidney functions, cardiovascular effects, and bone health. There is a higher risk of lead exposure in pregnant women. This can result in the following: Fertility issues by reducing fertility in men and women, pregnancy risks that lead to miscarrage or stillborth, and can affect fetal development.
            </p>
            <p>The systemic racism of West Oakland and Piedmont affects the lead contamination in both areas. West Oakland has a history of being redlined by the Federal Housing Authority’s Homeowners Loan Corporation program. This was due to the racism of the house surveyors observing and publishing reports based on a dislike of people of color and immigrants especially Black Americans and Chinese immigrants into the community. West Oakland's population is primarily black and immigrant families with 40.5% white, while Piedmont is composed of 70% white families. As a result of redlining, West Oaklanders are more affected by contaminants because of their proximity to industries and freeways. Due to this West Oakland is surrounded by an elevated freeway on all sides releasing out leaded vehicle exhaust particularly the neighborhoods below. In the West Oakland neighborhood the median annual income is significantly less than the median annual income in a Piedmont household ( $145,474 compared to $404,409). On account of this ,the education system in West Oakland ( bottom 50% of schools ) is worse than the quality of education in Piedmont ( top 1% of schools ), this causes more crime rates in West Oakland.


</p>
<p>As our sampling team stepped into the different communities to collect data many differences were noticed. Piedmont had bigger houses, more greenery, cleaner streets while West Oakland had older homes, almost no greenery, and streets that contained copious amounts of trash.

The objectives of this study are to analyze the distribution patterns of external lead (Pb) deposition across the communities of Piedmont and West Oakland, conduct an initial assessment of lead ingestion risks for young children playing outdoors, and interpret the mechanisms that mitigate exposure.
</p>
          
            <h5>Methods</h5>
            <p>
            To start our led investigation we had to prepare our materials. Scrap pieces of cardboard were used to create stencils to map out the sampling section to precisely 20 by 20 centimeters. Cloth gloves were also weighed and numbered in order to calculate the weight difference before and after sampling.


            </p>
            <p>Sampling sites were chosen in proximity to Piedmont Park and Defremery Park in the surrounding neighborhood. The first sampling site was chosen at random in proximity to the park. Sampling sites were randomized by different pace groups.  Some groups paced 39 steps others paced 10 steps away from the current sampling location. Sampling was conducted as follows; First, a label was placed on a Ziploc bag containing the following information: Glove number, GPS coordinates, date, and the percentage of coverage ( 0% meaning no grass, 100% meaning soil is not visible and only grass is visible ). Secondly, the stencil was placed on the area of collection and a cloth glove was put on inthe  corresponding number. The glove was then rubbed up and down in the stencil 20 times to collect ample soil. Next, the glove was then placed in the previously labeled ziplock bag and put away. After the glove process, we moved on to the soilcollection process. A whirl pak bag labeled with the same information as before was filled up around ⅓ of the way with dirt from the area within the stencil. Occasionally we would move across streets either due to lack of soil or risky collection sites. 
            </p>
            <p>To collect data we first used an XRF ( x - ray fluorescence spectrometry ) to measure the amount of lead in the dirt and glove samples we gathered. We also weighed the gloves and subtracted the before amount from the after amount to find out how many grams of soil were retained on the glove. To store all this data we collected we used Google Sheets. </p>
            <h5>Results</h5>
            <p>
            Our results include the following: There was a higher percentage of 0% rooted material areas in West Oakland than Piedmont. There was a higher percentage of 100% rooted material coverage in Piedmont rather than West Oakland. In our random sampling protocol we no 100% coverage sites were found. Piedmont had an abundance of 100% coverage sample sites with almost no 0% coverage sites. The opposite was true for West Oakland with no 100% coverage. There was much more lead in the soil and gloves with areas that had a 0% coverage. The number of 0% coverages in Piedmont was 41 out of 92. The number of 100% coverages in Piedmont was 18 out of 92. The number of 0% coverages in West Oakland was 100 out of 123. The number of 100% coverages in West Oakland was 0 out of 123.


            </p>
            <p>There was little to no lead retained on the soil and gloves from samples collected from Piedmont. Ppm ( parts per million ) of lead in west Oakland dirt samples ranged from 6 to 71,300. The ppm for the glove sample from west Oakland ranged from 0 to 196. The average lead contained in the soil of Piedmont is 170 ppm while in Piedmont the average is 117 ppm. For the count of lead retained on the gloves used to sample west Oakland are 19.6ppm compared to the 19ppm average for piedmont. The data distinctly shows an increased risk of lead exposure and ingestion in West Oakland residents rather than Piedmont. The ppm for the soil samples from Piedmont ranged from 0 to 523. The ppm for the glove sample from Piedmont ranged from 0 to 204 with more 0 ppm than others. An acceptable ppm range for communities is 0-80 ppm. Comparing the amount of lead retained in the soil vs on the glove shows that overall more lead particles were retained in the soil than on the gloves. Overall more lead was retained in the soil than retained on the glove for both sampling sites. 


</p>
<p>The results indicate that West Oakland is overall more exposed to lead than Piedmont.</p>
            <h5>Discussion</h5>
            <p>
            Investigating different lead levels in different types of communities can help spread awareness and reduce lead poisining rates . This research examines how urban lead contamination are spread across the communities of Piedmont and West Oakland. It also evaluates lead ingestion risks for young children playing outside. Referring to the graphs, the graphs illustrate that the levels of lead in West Oakland contrast those of Piedmont. The average lead contained in the soil of Piedmont is 170 ppm while in Piedmont the average is 117 ppm. The count of lead retained on the gloves used to sample West Oakland is 19.6 ppm compared to the 19 ppm average for Piedmont. The data distinctly shows an increased risk of lead exposure and ingestion in West Oakland residents rather than in Piedmont. 


            </p>
            <p>Lead originally entered the soil of communities because of leaded gasoline and house paint. Through the graphs, we can see that lead is still present in soil, even though there is an absence of use for leaded gasoline and house paint from the 1990’s. This lead can also spread to nearby surrounding areas. Since there is still a presence of lead paint in residential areas, these paint chips can spread to other communities. As the paint naturally degrades and chips off, the wind, water, and other external factors can carry these lead-filled chips to other parts of the community. Owing to the different demographics of the communities, exposure is different for both. West Oakland is also a neighborhood that contains less greenery and plants than that of Piedmont. This leads to ample opportunities for civilians to come into contact with leaded soil and substances without the grass and plant barrier. Contrasting, Piedmont is an affluent neighborhood with many funds to expand the surrounding greenery which causes a barrier to be formed between the leaded soil and civilians. When children ( under 6 ) play outside in communities such as West Oakland the absence of a greenery barrier makes them more susceptible to ingesting more lead. West Oakland is also in turn a very dry neighborhood with much loose dirt in residential areas. West Oakland is surrounded by an elevated freeway. This is a dilemma since these loose dirt and dust particles can become airborne affecting more people. Chips of leaded housepaint can also become airborne due to other factors and be exposed to children through inhalation. 
            </p>
            <p>Exposure through ingestion can be shown in the graphs comparing the different percent coverages ( more percent coverage, less inhalation ). While 20% of samples in Piedmont had 100% coverage, 0% of samples in West Oakland had 100% coverage. Conflicting this, 44% of samples in Piedmont had 0% coverage while 81% of samples in West Oakland had 0% coverage.  This demonstrates the relationship between having a higher percent coverage and lead ingestion. Furthermore, this is a problem for west Oakland due to the higher amount of 0% coverage.
            </p>
            <h5>Conclusion</h5>
            <p>
            The amount of lead exposure in underprivileged communities such as West Oakland affects residents particularly children who are under 6. This is because of the historical redlining of this community, which affects the amount of resources they have and their voice in council. This in turn increases the risk of lead exposure due to ingestion, inhalation, and skin contact.  

            </p>
            <h5>Acknowledgments</h5>
            <p>
              EBAYS, Jim M Neiss-Cortez
            </p>
            <h5>References</h5>
            <p>
              S.L Shalat, H.M solo-Gabriele, L.E. Fleming, etc. <br />
              Mark A.S. Laidlaw, Gabriel M. Filippelli, etc. <br />
              Jack Caravanos, Arlene L. Weiss, Marc J Blaise, etc. <br />
              Berkeley City, California - Census Bureau Profile. <br />
              Oakland City, California - Census Bureau Profile.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
  ))
}

export default ChecksRadios
