import SideBar from '../components/Sidebar'

const Layout = ( { children }) => {
    return ( 
        <div className="content">
            <SideBar /> 
            { children }
        </div>
     );
}
 
export default Layout;