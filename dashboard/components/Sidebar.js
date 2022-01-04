import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

const SideBar = () => {
    return ( 
        <div className={styles.sidebar}>
            <div>
                <h3> Sidebar </h3>
            </div>
            <Link href="/"><a> Home </a></Link>
            <Link href="/dashboard"><a> Dashboard </a></Link>
            <Link href="/login"><a> Login </a></Link>
        </div>
     );
}
 
export default SideBar;