import React, { useContext, useEffect, useState } from 'react';
import '../../../../assets/css/style.css';
import feather from 'feather-icons';
import AddMoreBoardModal from '../Models/AddMoreModel';
import { Responsivecontext } from '../../../../context/HeaderContext';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const { closeSidebar } = useContext(Responsivecontext);  // Access the state from context

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <nav className={`taskboardapp-sidebar ${closeSidebar ? 'sidebar-closed' : ''}`}> {/* Conditionally apply class */}
        <div data-simplebar className="nicescroll-bar">
          <div className="menu-content-wrap">
            <button
              className="btn btn-primary btn-rounded btn-block mb-4"
              onClick={handleOpenModal}
            >
              Add New Board
            </button>
            <div className="menu-group">
              <ul className="nav nav-light navbar-nav flex-column">
                <li className="nav-item active">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="nav-icon-wrap">
                      <span className="feather-icon">
                        <i data-feather="layout"></i>
                      </span>
                    </span>
                    <span className="nav-link-text">All Boards</span>
                  </a>
                </li>
                {/* Other menu items */}
              </ul>
            </div>
          </div>
        </div>
        {/* Modal for adding a new board */}
        <AddMoreBoardModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </nav>
    </>
  );
};

export default Sidebar;
