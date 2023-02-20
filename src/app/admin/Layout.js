import React ,{Component , useState} from 'react';
import {useLocation, Route,Switch} from 'react-router-dom';
import Sidebar from './shared/Sidebar';
import AdminNavbar from './shared/AdminNavbar';
import Footer from './shared/Footer';
import FixedPlugin from './shared/FixedPlugin';
import '../../admin-assets/css/light-bootstrap-dashboard-react.css';
import "../../admin-assets/css/animate.min.css";
import "../../admin-assets/css/demo.css";

import routes from "./routes.js";

import sidebarImage from "../../admin-assets/img/sidebar-3.jpg";

function Layout(){
    const [image, setImage] = React.useState(sidebarImage);
    const [color, setColor] = React.useState("black");
    const [hasImage, setHasImage] = React.useState(true);
    const location = useLocation();
    const mainPanel = React.useRef(null);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            var element = document.getElementById("bodyClick");
            element.parentNode.removeChild(element);
        }
    }, [location]);
    return (
        <>
            <div className="wrapper">
                <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
                <div className="main-panel" ref={mainPanel}>
                    <AdminNavbar />
                    <div className="content">
                        <Switch>{getRoutes(routes)}</Switch>
                    </div>
                    <Footer />
                </div>
            </div>
            <FixedPlugin
                hasImage={hasImage}
                setHasImage={() => setHasImage(!hasImage)}
                color={color}
                setColor={(color) => setColor(color)}
                image={image}
                setImage={(image) => setImage(image)}
            />
        </>
    )
}
export default Layout;