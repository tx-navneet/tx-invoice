import React, { useState } from "react";

function SubtotalTable() {
  const [items, setItems] = useState([
    {
      itemName: "Redesigning of agencyclick.com",
      quantity: 1,
      price: 150.0,
      discount: 2,
      discountType: "1", // 1 for %, 2 for ₹
    },
  ]);
  const handleAddItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        quantity: 0,  
        price: 0.0,   
        discount: 0,
        discountType: "1",
      },
    ]);
  };

  // Handle input changes for each item
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    // Ensure that numbers are parsed properly and invalid inputs are treated as 0
    newItems[index][field] =
      field === "price" || field === "quantity" || field === "discount"
        ? parseFloat(value) || 0
        : value;
    setItems(newItems);
  };

  // Handle removing an item
  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      value={item.itemName}
                      onChange={(e) => handleItemChange(index, "itemName", e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={item.price.toFixed(2)}
                      onChange={(e) => handleItemChange(index, "price", e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1"
                      value={item.discount}
                      onChange={(e) => handleItemChange(index, "discount", e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <select
                      className="w-full border rounded px-2 py-1"
                      value={item.discountType}
                      onChange={(e) => handleItemChange(index, "discountType", e.target.value)}
                    >
                      <option value="1">%</option>
                      <option value="2">₹</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 flex items-center">
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1 bg-gray-100"
                      value={
                        item.discountType === "1"
                          ? (
                              (item.price - (item.price * item.discount) / 100) *
                              item.quantity
                            ).toFixed(2)
                          : ((item.price - item.discount) * item.quantity).toFixed(2)
                      }
                      readOnly
                    />
                    <button
                      type="button"
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(index)}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add new item button */}
      <button
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        onClick={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
      >
        + Add new item
      </button>
    </div>
  );
}

export default SubtotalTable;
