import Navbar from './Sidebar'
import Footer from './Footer'
import { NextComponentType } from 'next'

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
    <main>
      <Navbar />
        {children}
    </main>
    </>
  )
}

export default Layout