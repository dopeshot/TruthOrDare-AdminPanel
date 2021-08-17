import Link from 'next/link'

const Sidebar = () => {
    return <>
        <div className="sidebar p-3 bg-dark">
            <Link href="/">
                <a className="d-flex justify-content-center mb-3 text-white text-decoration-none fw-bolder">Truth or Dare<br></br>Admin Panel</a>
            </Link>
            <ul className="nav nav-pills flex-column mb-auto mt-4 ps-3">
                <li className="fs-6 fls-1 fw-bold text-uppercase text-lightgrey">
                    Übersicht
                </li>
                <li className="nav-item d-flex align-items-baseline">
                    <i aria-hidden className="fas fa-home fs-5 pe-2"></i>
                    <Link href="/">
                        <a className="nav-link active" aria-current="page">Dashboard</a>
                    </Link>
                </li>
                <li className="fs-6 fls-1 fw-bold text-uppercase text-lightgrey mt-3">
                    Elemente
                </li>
                <li className="d-flex align-items-baseline">
                    <i aria-hidden className="fas fa-th pe-2"></i>
                    <Link href="/categories">
                        <a className="nav-link">Categories</a>
                    </Link>
                </li>
                <li className="d-flex align-items-baseline">
                    <i aria-hidden className="fas fa-square pe-2"></i>
                    <Link href="/sets">
                        <a className="nav-link">Sets</a>
                    </Link>
                </li>
                <li className="d-flex align-items-baseline">
                    <i aria-hidden className="fas fa-list-ul pe-2"></i>
                    <Link href="/tasks">
                        <a className="nav-link">Tasks</a>
                    </Link>
                </li>
                <li className="d-flex align-items-baseline">
                    <i aria-hidden className="fas fa-user pe-2"></i>
                    <Link href="/user">
                        <a className="nav-link">User</a>
                    </Link>
                </li>
                <li className="fs-6 fls-1 fw-bold text-uppercase text-lightgrey mt-3">
                    Reports
                </li>
                <li className="d-flex align-items-baseline">
                    <i aria-hidden className="fas fa-bullhorn pe-2"></i>
                    <Link href="/reports">
                        <a className="nav-link">Reports</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="b-example-divider"></div>
    </>
}

export default Sidebar