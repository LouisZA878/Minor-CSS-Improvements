'use client'

import Sidebar from "@/Components/Sidebar/Sidebar";

const Compact = ({ children }) => {

  return (
    <>
    <Sidebar />
      <main >
      {children}
      </main>
    </>
  )
  
}

export default Compact