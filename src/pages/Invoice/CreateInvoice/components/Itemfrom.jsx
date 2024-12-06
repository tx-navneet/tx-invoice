import React, { useState } from 'react';

const InvoiceTable = () => {
  // Initializing state for the items
  const [items, setItems] = useState([
    {
      id: Date.now(),
      name: 'Redesigning of agencyclick.com',
      quantity: 1,
      price: 150.0,
      discount: 2,
      discountType: 1, // 1 for %, 2 for ₹
      total: 0,
    },
  ]);

  // Handle input change for each item
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setItems(
      items.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  // Function to handle the total amount calculation
  const calculateAmount = (item) => {
    let amount = item.price * item.quantity;
    if (item.discountType === '1') {
      // Percentage discount
      amount -= (amount * item.discount) / 100;
    } else if (item.discountType === '2') {
      // Fixed discount (₹)
      amount -= item.discount;
    }
    return amount.toFixed(2);
  };

  // Handle adding a new row
  const addNewRow = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: '',
        quantity: 1,
        price: 150.0,
        discount: 0,
        discountType: 1,
        total: 0,
      },
    ]);
  };

  // Handle deleting a row
  //   const deleteRow = (id) => {
  //     setItems(items.filter(item => item.id !== id));
  //   };

  return (
    <div className="table-wrap mt-5">
      <div className="invoice-table-wrap">
        <table className="table table-bordered invoice-table">
          <thead className="thead-primary">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th colSpan="2">Discount</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td className="w-70 rounded-top-start border-end-0 border-bottom-0">
                    <input
                      type="text"
                      className="form-control"
                      value={item.name}
                      name="name"
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </td>
                  <td className="border-end-0 border-bottom-0">
                    <input
                      type="number"
                      className="form-control qty"
                      value={item.quantity}
                      name="quantity"
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </td>
                  <td className="w-15 border-end-0 border-bottom-0">
                    <input
                      type="number"
                      className="form-control price"
                      value={item.price}
                      name="price"
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </td>
                  <td className="border-end-0 border-bottom-0">
                    <input
                      type="number"
                      className="form-control discount w-60p"
                      value={item.discount}
                      name="discount"
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </td>
                  <td className="border-end-0 border-bottom-0">
                    <select
                      className="form-select disc-type w-70p"
                      value={item.discountType}
                      name="discountType"
                      onChange={(e) => handleChange(e, item.id)}
                    >
                      <option value="1">%</option>
                      <option value="2">₹</option>
                    </select>
                  </td>
                  <td className="w-20 rounded-end bg-primary-light-5 close-over position-relative">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 p-0 total"
                      value={`₹${calculateAmount(item)}`}
                      readOnly
                    />
                    {/* <button
                      type="button"
                      className="close-row btn-close"
                      //   onClick={() => deleteRow(item.id)}
                    >
                      <span aria-hidden="true">×</span>
                    </button> */}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <a
          className="d-inline-flex align-items-center add-new-row"
          href="#"
          onClick={addNewRow}
        >
          <i className="ri-add-box-line me-1"></i> Add new item
        </a>
      </div>
    </div>
  );
};

export default InvoiceTable;
