import React from 'react';
import KanbanNavbar from '../components/Navbar/KanbarNavbar';
import KanbanHeader from '../components/Navbar/KanbanHeader';
import Sidebar from '../components/sideBar/Sidebar';
import Header from '../components/Navbar/Header';
import NavigationBar from '../components/Navbar/NavigationBar';

const Dashboard = () => {
  return (
    <>
      <div
        className="hk-wrapper"
        data-layout="horizontal"
        data-layout-style="default"
        data-menu="light"
        data-footer="simple"
      >
        {/* Top Navigation Bar */}
        <KanbanNavbar />

        <KanbanHeader />
        <div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>

        <div className="hk-pg-wrapper pb-0">
          <div className="hk-pg-body py-0">
            <div className="taskboardapp-wrap">
              <Sidebar/>
              <div className="taskboardapp-content">
                <div className="taskboardapp-detail-wrap">
                  <Header />
                  <div className="taskboard-body">
                    <NavigationBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
