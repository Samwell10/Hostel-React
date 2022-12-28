import './Dashboard.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import bowen from '../../assets/Image/bowen-logo-1-awesome-copy.png';
import mark from '../../assets/Image/Mark.jpg';
import john from '../../assets/Image/John.jpg';
import luke from '../../assets/Image/Luke.jpg';
import matthew from '../../assets/Image/Matthew.jpg';
import nh from '../../assets/Image/New-Hostel.jpg';
import nhe from '../../assets/Image/New-Hostel-Extension.jpg';
import the from '../../assets/Image/The-288.jpg';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
const Dashboard = () => {
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    return ( 
        <div className="dashboard">
            <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
            <div className="dashboard-body">
                <div className="sidebar-bars" onClick={toggleSidebar}>
                    <FaBars/>
                </div>
                <div className="dashboard-body-inner">
                    <section className="school-logo">
                    <img src={bowen}></img> 
                    </section>
                    <section className="dashboard-intro">
                        <p className="intro-1">Welcome your hostel dashboard</p>
                        <p className="intro-2">Please select the <span>Hostel</span> corresponding to your <span>Level</span></p>
                    </section>
                    <section className="dashboard-hostel">
                        <div className="hostel">
                            <section className="hostel-image">
                                <img src={mark}></img>
                            </section>
                            <section className="hostel-name">
                                <p>Mark Hostel(100LEVEL)</p>
                            </section>
                        </div>
                        <div className="hostel">
                            <section className="hostel-image">
                                <img src={john}></img>
                            </section>
                            <section className="hostel-name">
                                <p>John Hostel(200LEVEL)</p>
                            </section>
                        </div>
                        <div className="hostel">
                            <section className="hostel-image">
                                <img src={luke}></img>
                            </section>
                            <section className="hostel-name">
                                <p>Luke Hostel(300LEVEL)</p>
                            </section>
                        </div>
                        <div className="hostel">
                            <section className="hostel-image">
                                <img src={matthew}></img>
                            </section>
                            <section className="hostel-name">
                                <p>Matthew Hostel(400LEVEL)</p>
                            </section>
                        </div>
                        <div className="hostel">
                            <section className="hostel-image">
                                <img src={nh}></img>
                            </section>
                            <section className="hostel-name">
                                <p>New Hostel(FINAL YEAR)</p>
                            </section>
                        </div>
                        <div className="hostel">
                            <section className="hostel-image">
                                <img src={nhe}></img>
                            </section>
                            <section className="hostel-name">
                                <p>New Hostel Ext(FINAL YEAR)</p>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;