'use client'

import Wrapper from "@/wrappers/Wrappers";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Footer from "@/Components/Footer/Footer";

const Compact = ({ children }) => {

  return (
    <Wrapper >
    <Sidebar />
      <main >
      {children}
      </main>
    {/* <Footer /> */}
    </Wrapper >
  )
  
}

export default Compact