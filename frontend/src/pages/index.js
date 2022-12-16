import * as React from "react"
import { Link } from "gatsby"
import Notice from '../components/Notice';
import TrendChart from '../components/TrendChart3';

import Layout from "../components/layout"
import Seo from "../components/seo"

import LiveIcon from "../images/live-icon.svg"

var todayDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 

const IndexPage = () => (
  <Layout>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
    
    <div className="grid grid-cols-1 md:grid-cols-5 p-4 md:py-24 md:px-8 gap-2 md:gap-16 lg:gap-24 items-end">
      {/* <div className="col-span-3 px-8 py-16 md:py-0">
        <div className="relative flex items-center justify-center">
          <div className="absolute grid justify-center">
            <span className="flex text-9xl md:text-[180px] lg:text-[240px] font-bold justify-center">4</span>
            <img
              className="h-3 md:h-4 lg:h-6"
              src={Spectrum}
              alt="spectrum"
            />
          </div>
          <CrowdChart/>
        </div>
      </div> */}
      <div className="col-span-5 relative grid grid-cols-1 p-4 gap-2 content-start">
        <Notice />

        <div className="grid gap-2 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-md text-gray-500 font-medium">{ todayDate }</h2>
          <TrendChart />
          <div className="flex gap-1 items-center">
            <img
              className="inline h-4"
              src={LiveIcon}
              alt="Live"
            />
            <span className="text-sm text-gray-800 font medium">Busier than usual</span>
          </div>
        </div>
        <div className="flex">
          <button className="bg-primary hover:bg-gray-600 text-white text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
            <Link to="https://west2-univ.jp/sp/index.php?t=650120">Today's menu →</Link>
          </button>
        </div>
      </div>
      
      
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
