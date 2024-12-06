import React, { useState, useEffect } from "react";

const InvoiceSubTable = () => {
  const [subtotal, setSubtotal] = useState(14700);
  const [itemDiscount, setItemDiscount] = useState(2);
  const [extraDiscount, setExtraDiscount] = useState(0);
  const [extraDiscountType, setExtraDiscountType] = useState("1"); // 1 for %, 2 for ₹
  const [grossTotal, setGrossTotal] = useState(0);

  useEffect(() => {
    // Calculate gross total after item discount and extra discount
    let total = subtotal - itemDiscount;
    if (extraDiscountType === "1") {
      total -= (total * extraDiscount) / 100;
    } else {
      total -= extraDiscount;
    }
    setGrossTotal(total);
  }, [subtotal, itemDiscount, extraDiscount, extraDiscountType]);

  return (
    <div className="row justify-content-end">
      <div className="col-xxl-6 mt-5">
        <div className="table-wrap">
          <div className="table-responsive">
            <table className="table table-bordered subtotal-table">
              <tbody>
                <tr>
                  <td colSpan="3" className="rounded-top-start border-end-0 border-bottom-0">
                    Subtotal
                  </td>
                  <td className="rounded-top-end border-bottom-0 w-30 bg-primary-light-5">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 p-0 gross-total"
                      value={subtotal.toFixed(2)}
                      onChange={(e) => setSubtotal(parseFloat(e.target.value) || 0)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border-end-0 border-bottom-0">
                    Item Discount
                  </td>
                  <td className="border-bottom-0 bg-primary-light-5">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 p-0 gross-discount"
                      value={itemDiscount.toFixed(2)}
                      onChange={(e) => setItemDiscount(parseFloat(e.target.value) || 0)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border-end-0 border-bottom-0">Extra Discount</td>
                  <td className="border-end-0 border-bottom-0 w-25">
                    <input
                      type="text"
                      className="form-control extdiscount"
                      value={extraDiscount.toFixed(2)}
                      onChange={(e) => setExtraDiscount(parseFloat(e.target.value) || 0)}
                    />
                  </td>
                  <td className="border-end-0 border-bottom-0 w-25">
                    <select
                      className="form-select extra-disc-type"
                      value={extraDiscountType}
                      onChange={(e) => setExtraDiscountType(e.target.value)}
                    >
                      <option selected value="1">
                        %
                      </option>
                      <option value="2">₹</option>
                    </select>
                  </td>
                  <td className="border-bottom-0 bg-primary-light-5">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 p-0 extdiscount-read"
                      value={extraDiscountType === "1" ? (extraDiscount * subtotal) / 100 : extraDiscount}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="rounded-bottom-start border-end-0 bg-primary-light-5">
                    <span className="text-dark">Total</span>
                  </td>
                  <td className="rounded-bottom-end bg-primary-light-5">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 p-0 subtotal"
                      value={grossTotal.toFixed(2)}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSubTable; 