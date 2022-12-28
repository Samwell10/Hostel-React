import './Sidebar.css';
import {FaTicketAlt, FaPencilAlt, FaBars, FaTimes} from 'react-icons/fa'
const Sidebar = ({Sidebar, closeSidebar}) => {
    return ( 
        <div className={Sidebar?"sidebar sidebar--open": "sidebar"}>
            <div className="sidebar-cross" onClick={closeSidebar}>
                <FaTimes />
            </div>
            <div className="sidebar-inner">
                <section className="profile-pic">
                    <img src="https://source.unsplash.com/random/?people"></img>
                </section>
                <section className="profile-details">
                    <p className="profile-name">Olasubomi Precious Samad</p>
                    <p className="profile-matric">BU19CIT1111</p>
                    <p className="profile-number">08011332233</p>
                </section>
                <section className="exeat-link">
                    <FaTicketAlt/>
                    <p>Exeat</p>
                </section>
                <section className="exeat-link edit-link">
                    <FaPencilAlt/>
                    <p>Edit</p>
                </section>
            </div>
        </div>
     );
}
 
export default Sidebar;