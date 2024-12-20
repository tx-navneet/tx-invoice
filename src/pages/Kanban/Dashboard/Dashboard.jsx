import React, { useContext } from 'react';
import KanbanNavbar from '../components/Navbar/KanbarNavbar';
import KanbanHeader from '../components/Navbar/KanbanHeader';
import Sidebar from '../components/sideBar/Sidebar';
import Header from '../components/Navbar/Header';
import NavigationBar from '../components/Navbar/NavigationBar';
import { Responsivecontext } from '../../../context/HeaderContext';
import Taskmenu from '../components/TaskMenu/Taskmenu';
import MainContent from '../pages/MainContent/MainContent';
import SimpleBar from 'simplebar-react';

const Dashboard = () => {
  // Extract context values for sidebar and taskbar state
  const { closeSidebar, closeTaskbar } = useContext(Responsivecontext);

  return (
    <div
      className="hk-wrapper"
      data-layout="horizontal"
      data-layout-style="default"
      data-menu="light"
      data-footer="simple"
    >
      <KanbanNavbar />
      <div className="hk-menu">
        <SimpleBar>
          <KanbanHeader />
        </SimpleBar>
      </div>

      {/* Backdrop for overlay effects */}
      <div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>

      {/* Main Page Wrapper */}
      <div className="hk-pg-wrapper pb-0">
        <div
          className={`taskboardapp-wrap ${
            closeSidebar ? 'taskboardapp-sidebar-toggle' : ''
          } ${closeTaskbar ? 'taskboardapp-info-active' : ''}`}
        >
          {/* Sidebar Component */}
          <Sidebar />

          {/* Content Area */}
          <div className="taskboardapp-content">
            <div className="taskboardapp-detail-wrap ml-6">
              {/* Header Component */}
              <Header />

              {/* Taskboard Body */}
              <div className="taskboard-body">
                <div>
                  <NavigationBar />
                  <MainContent />
                </div>

                {/* Task Menu Component */}
              </div>
              <Taskmenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
