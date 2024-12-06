import React, { useState } from 'react';
import '../../assets/css/style.css';
const Sidebar = () => {
  const [isInvoiceOpen, setInvoiceOpen] = useState(false);
  const [isScrumboardOpen, setScrumboardOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isTaskOpen, setTaskOpen] = useState(false);

  const toggleCollapse = (setter) => {
    setter((prevState) => !prevState);
  };

  return (
    <div className="nicescroll-bar" data-simplebar>
      <div className="menu-content-wrap">
        <div className="container-fluid menu-group">
          <ul className="navbar-nav flex-column">
            {/* Dashboard Item */}
            <li className="nav-item active">
              <a className="nav-link" href="index.php">
                <span className="nav-icon-wrap">
                  <span className="svg-icon">{/* Insert SVG here */}</span>
                </span>
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>

            {/* Invoice Menu */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => toggleCollapse(setInvoiceOpen)}
                data-bs-toggle="collapse"
                data-bs-target="#dash_invoice"
              >
                <span className="nav-icon-wrap">
                  <span className="svg-icon">{/* Insert SVG here */}</span>
                </span>
                <span className="nav-link-text">Invoices</span>
              </a>
              {isInvoiceOpen && (
                <ul
                  id="dash_invoice"
                  className="nav flex-column collapse nav-children"
                >
                  <li className="nav-item">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="invoice-list.php">
                          <span className="nav-link-text">Invoice List</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="invoice-templates.php">
                          <span className="nav-link-text">
                            Invoice Templates
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="create-invoice.php">
                          <span className="nav-link-text">Create Invoice</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="invoice-preview.php">
                          <span className="nav-link-text">Invoice Preview</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            {/* Scrumboard Menu */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => toggleCollapse(setScrumboardOpen)}
                data-bs-toggle="collapse"
                data-bs-target="#dash_scrumboard"
              >
                <span className="nav-icon-wrap">
                  <span className="svg-icon">{/* Insert SVG here */}</span>
                </span>
                <span className="nav-link-text">Scrumboard</span>
              </a>
              {isScrumboardOpen && (
                <ul
                  id="dash_scrumboard"
                  className="nav flex-column collapse nav-children"
                >
                  <li className="nav-item">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">All Boards</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Project Kanban</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Pipeline Kanban</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Menu */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => toggleCollapse(setContactOpen)}
                data-bs-toggle="collapse"
                data-bs-target="#dash_contact"
              >
                <span className="nav-icon-wrap">
                  <span className="svg-icon">{/* Insert SVG here */}</span>
                </span>
                <span className="nav-link-text">Contact</span>
              </a>
              {isContactOpen && (
                <ul
                  id="dash_contact"
                  className="nav flex-column collapse nav-children"
                >
                  <li className="nav-item">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Contact List</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Contact Cards</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Edit Contact</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            {/* Task Menu */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => toggleCollapse(setTaskOpen)}
                data-bs-toggle="collapse"
                data-bs-target="#dash_task"
              >
                <span className="nav-icon-wrap">
                  <span className="svg-icon">{/* Insert SVG here */}</span>
                </span>
                <span className="nav-link-text">Todo</span>
              </a>
              {isTaskOpen && (
                <ul
                  id="dash_task"
                  className="nav flex-column collapse nav-children"
                >
                  <li className="nav-item">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Tasklist</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="nav-link-text">Gantt</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            {/* Calendar Menu */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-icon-wrap">
                  <span className="svg-icon">{/* Insert SVG here */}</span>
                </span>
                <span className="nav-link-text">Calendar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
