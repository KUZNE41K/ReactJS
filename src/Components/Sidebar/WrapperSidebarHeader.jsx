import LogoContainer from "./LogoContainer.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

const WrapperSidebarHeader = ()=>{
    return (
        <div className="wrapperSidebarHeader">

            {/* Sidebar всегда виден */}
            <LogoContainer
                classNameNav="navContainer"
                className="logoContainer"
                src="Logo.svg"
                alt="logo"
            />

            <div className="main">

                {/* Header всегда виден */}
                <Header
                    classNameHeader="header"
                    className="headerContainer"
                />

                {/* Здесь будут страницы */}
                <main className="content">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}
export default WrapperSidebarHeader;