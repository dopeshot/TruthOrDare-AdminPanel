import Navbar from './Navbar'
import { NextComponentType } from 'next'
import Sidebar from './Sidebar'

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>
        <Navbar />
        <div className="mt-3 ms-3">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout