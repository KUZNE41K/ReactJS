const username = 'John Doe'
const status = 'Admin'
const App = () => {
    return (
        <div className="wrapper">
            <nav className="navContainer">
                <div className="logoContainer">
                    <img src="/Logo.png" alt="Logo" className="logo"/>
                </div>
                <ul className="menu">
                    <li><a href="/index">Products</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li><a href="#">Inbox</a></li>
                    <li><a href="#">Order Lists</a></li>
                    <li><a href="#">Product Stock</a></li>
                    <li className="menu-section">Pages</li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">To-do</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Invoice</a></li>
                    <li><a href="#">UI Elements</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Table</a></li>
                    <li className="menu-section"></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>

            <div className="mainContent">
                <header className="header">
                    <div className="headerContainer">
                        <div className="searchContainer">
                            <button>
                                <img className="searchIcon"
                                     src="/search.png"
                                     alt=""/>
                            </button>
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div className="profileContainer">
                            <img className="profileIcon"
                                 src="/man-438081_960_720.png"
                                 alt=""/>
                            <div className="profileInfo">
                                <span className="profileName">{username}</span>
                                <span className="profileStatus">{status}</span>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="content">
                </main>
            </div>
        </div>
    )
}
export default App


