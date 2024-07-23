export default function Navbar(){
    return (
    <nav className="nav">
        <a href = "/" className = "site-title">
        Little Flower ECD Center
        </a>
        <ul>
            <li className="active">
            <a href="/home">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/services">Services</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
        
        </ul>
    </nav>
    )
}