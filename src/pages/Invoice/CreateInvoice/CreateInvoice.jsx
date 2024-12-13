import { useState } from 'react';
import '../../../assets/css/style.css';
import { useDropzone } from 'react-dropzone';
import AddClientModal from '../../../component/Model/ClientModel';
import ShipToForm from './ShipForm';
import ItemForm from './components/Itemfrom';
import React from 'react';
import InvoiceSubTable from './components/Subtotel';
import AddNote from './components/AddNote';
import PersonalMemo from './components/Personalmemo';
import '../../../assets/css/Model.css';

const CreateInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNo: '0001',
    invoiceDate: '24/2/2020',
    dueDate: 'Due on Receipt',
    customerNo: '32321',
    fields: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [showAddressModal, setshowAddressModal] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      // Handle the selected files
      console.log(acceptedFiles);
    },
  });

  console.log(getInputProps);
  console.log(getRootProps);

  const handleShowModal = () => {
    console.log('done');
    setShowModal(true);
    setshowAddressModal(true);
  };

  const handleAddress = () => {
    setshowAddressModal(!showAddressModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'label' || name === 'value') {
      const updatedFields = [...invoiceData.fields];
      updatedFields[index] = {
        ...updatedFields[index],
        [name]: value,
      };
      setInvoiceData({ ...invoiceData, fields: updatedFields });
    } else {
      setInvoiceData({ ...invoiceData, [name]: value });
    }
  };

  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}

      <div className=" py-0">
        <div className="invoiceapp-wrap invoiceapp-setting-active">
          <div className="invoiceapp-content">
            <div className="invoiceapp-detail-wrap">
              <header className="invoice-header">
                <div className="d-flex align-items-center">
                  <a className="invoiceapp-title link-dark" href="#">
                    <h1>Create Invoice</h1>
                  </a>
                </div>
                <div className="invoice-options-wrap">
                  {/* <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover invoiceapp-setting-toggle active" href="#">
										<span className="icon">
											<span className="feather-icon"><i data-feather="sliders"></i></span>
										</span>
									</a> */}
                  {/* <a href="invoice-preview.html" className="btn btn-outline-secondary flex-shrink-0 d-md-inline-block d-none">Preview</a> */}
                  <a
                    href="#"
                    className="btn btn-primary ms-2 w-[100px] d-sm-inline-block d-none"
                  >
                    save
                  </a>
                </div>
              </header>
              <div className="">
                <div data-simplebar className="">
                  <div className="container-fluid">
                    <div className="create-invoice-wrap mt-xxl-5 p-md-5">
                      <h1 className="editable text-center">Invoice</h1>

                      <div className="h-[2px] w-full border-1 border-black" />

                      <div className="row ">
                        <div className="col-lg-4 offset-lg-5 offset-md-3 col-md-4 mb-md-0 mb-4">
                          <h2 className="d-flex align-items-center justify-content-md-end mb-0 inline-editable-wrap">
                            <a
                              className="btn btn-sm btn-icon btn-flush-light btn-rounded flush-soft-hover edit-tyn ms-md-5"
                              href="#"
                            >
                              <span className="icon">
                                <span className="feather-icon">
                                  <i data-feather="edit-2"></i>
                                </span>
                              </span>
                            </a>
                          </h2>
                        </div>
                      </div>

                      <div className="row mt-5">
                        <div className="col-xxl-3">
                          <a
                            className="d-inline-block mb-3 w-full  cursor-pointer"
                            role="button"
                            onClick={handleAddress}
                          >
                            - Your business information
                          </a>

                          <div
                            className={`transition-all duration-500 ease-out overflow-hidden`}
                          >
                            <div className="address-wrap p-3">
                              <h6 className="font-semibold">Hencework</h6>
                              <p>4747, Pearl Street</p>
                              <p>Rainy Day Drive,</p>
                              <p>Washington DC 42156</p>
                              <p>jampack_01@hencework.com</p>
                            </div>
                            <a
                              className="d-inline-flex align-items-center mt-2 cursor-pointer"
                              href="#"
                              onClick={handleShowModal}
                            >
                              <i className="ri-pencil-line me-1"></i> Edit Info
                            </a>
                          </div>
                        </div>

                        <div className="col-xxl-4 offset-xxl-5 mt-xxl-0 mt-6">
                          <form>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group d-flex justify-start items-center">
                                <label className="form-label font-semibold">
                                  Invoice No*
                                </label>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value={invoiceData.invoiceNo}
                                  type="text"
                                  onChange={handleInputChange}
                                  name="invoiceNo"
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <label className="form-label font-semibold">
                                  Invoice Date*
                                </label>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  name="invoiceDate"
                                  value={invoiceData.invoiceDate}
                                  type="text"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <label className="form-label font-semibold">
                                  Due Date*
                                </label>
                              </div>
                              <div className="col-lg-6 form-group">
                                <select
                                  className="form-select"
                                  name="dueDate"
                                  value={invoiceData.dueDate}
                                  onChange={handleInputChange}
                                >
                                  <option value="Due on Receipt">
                                    Due on Receipt
                                  </option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <label className="form-label font-semibold">
                                  Customer No
                                </label>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value={invoiceData.customerNo}
                                  type="text"
                                  onChange={handleInputChange}
                                  name="customerNo"
                                />
                              </div>
                            </div>

                            {/* Dynamic Fields Section */}
                            <div className="repeater">
                              <div data-repeater-list="category-group">
                                {invoiceData.fields.map((field, index) => (
                                  <div
                                    className="row gx-3"
                                    data-repeater-item
                                    key={index}
                                  >
                                    <div className="col-lg-6 form-group">
                                      <input
                                        className="form-control"
                                        placeholder="Label"
                                        type="text"
                                        name="label"
                                        value={field.label}
                                        onChange={(e) =>
                                          handleInputChange(e, index)
                                        }
                                      />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                      <input
                                        className="form-control"
                                        placeholder="Value"
                                        type="text"
                                        name="value"
                                        value={field.value}
                                        onChange={(e) =>
                                          handleInputChange(e, index)
                                        }
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="separator separator-light"></div>
                      <div className="row pt-3">
                        <div className="col-xxl-3 mb-xxl-0 mb-4">
                          <h6>Billed To</h6>
                          <form>
                            <div className="form-group">
                              <select className="form-select">
                                <option selected="true">
                                  Supernova consultant
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="App">
                              <a
                                onClick={handleShowModal}
                                className="text-[#007D88] cursor-pointer"
                              >
                                Add New Client
                              </a>

                              <AddClientModal
                                showModal={showModal}
                                handleCloseModal={handleCloseModal}
                              />
                            </div>
                          </form>
                          <div className="Billto-wrap mt-4">
                            <h6>Supernova consultant</h6>
                            <p>Sycamore Street</p>
                            <p>San Antonio Valley,</p>
                            <p>CA 34668</p>
                            <p>thompson_peter@super.co</p>
                          </div>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#addClientModal"
                            className="text-[#007D88] cursor-pointer"
                            onClick={handleShowModal}
                            href="#"
                          >
                            <i className="ri-pencil-line me-1"></i> Edit Info
                          </a>
                        </div>{' '}
                        <ShipToForm />
                      </div>
                      <div className="item-form-container ">
                        <ItemForm />
                      </div>
                      <div className="item-form-container ">
                        <InvoiceSubTable />
                      </div>
                      <div className="item-form-container ">
                        <AddNote />
                      </div>
                      <div className="div border-b-[1px] w-full border-black"></div>
                      <div className="item-form-container pb-10">
                        <PersonalMemo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default CreateInvoice;
