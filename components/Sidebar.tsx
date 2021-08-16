import Link from 'next/link'

export default function Sidebar() {
    return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '200px'}}>
        <Link href="/">
            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">Truth or Dare</a>
        </Link>
        <ul className="nav nav-pills flex-column mb-auto">
            <li>
                <Link href="#">
                    <a className="nav-link text-white">Dashboard</a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a className="nav-link text-white">Orders</a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a className="nav-link text-white">Products</a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a className="nav-link text-white">Customers</a>
                </Link>
            </li>
        </ul>
        <hr></hr>
        <div className="dropdown">
            <Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <a id="dropdownUser1" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"></a>
            </Link>
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                <strong>mdo</strong>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li>
                    <hr className="dropdown-divider"></hr>
                </li>
                <li>
                <Link href="#">
                    <a className="dropdown-item">Sign out</a>
                </Link></li>
            </ul>
        </div>
    </div>
    <div className="b-example-divider"></div>
    </>
}