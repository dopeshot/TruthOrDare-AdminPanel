import { NextComponentType } from "next"
import Link from "next/link"
import useUser from "../hooks/useUser"
import { User } from "../types/user"

const NavbarProfile = () => {
    const user: User = useUser()

    return (
        <div id="navbar-profile" className="dropdown ms-auto me-5">
            <div className="d-flex align-items-center position-relative">
                <div className="border border-2 border-primary rounded-circle p-1 me-3">
                    <div id="img" style={{ backgroundImage: `url('http://picsum.photos/480/320')` }}></div>
                </div>
                <div>
                    <h6 className="text-light mb-0 pe-4">{user && user.username}</h6>
                    <small>Admin</small>
                </div>
                <a className="dropdown-toggle stretched-link" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i aria-hidden className="fas fa-chevron-down text-light fs-5 ms-4"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link href="/">
                            <a className="dropdown-item">
                                <i aria-hidden className="fas fa-user-circle fs-5 pe-3"></i>
                                My Account
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <a className="dropdown-item">
                                <i aria-hidden className="fas fa-sign-out-alt fs-5 pe-3"></i>
                                Logout
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarProfile