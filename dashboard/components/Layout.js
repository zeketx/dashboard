import SideBar from '../components/Sidebar'

const Layout = ( { children }) => {
    return ( 
        <div className="content">
            { children }
        </div>
     );
}
 
export default Layout;