import { useState } from "react";

const StayDetailsForm = ({ onChange }) => {
  const [form, setForm] = useState({
    check_in: "",
    check_out: "",
    adults: 1,
    children: 0
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  const updatedForm = {
    ...form,
    [name]: value
  };

  setForm(updatedForm);

  if (onChange) onChange(updatedForm);
};
  return (
    
  <div className="card">
    <h3>Your Stay Details</h3>

    <div className="form-grid">
      <div>
        <label>Check-in</label>
        <input
          type="date"
          name="check_in"
          value={form.check_in}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Check-out</label>
        <input
          type="date"
          name="check_out"
          value={form.check_out}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Adults</label>
        <select
          name="adults"
          value={form.adults}
          onChange={handleChange}
        >
          {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
        </select>
      </div>

      <div>
        <label>Children</label>
        <select
          name="children"
          value={form.children}
          onChange={handleChange}
        >
          {[0,1,2].map(n => <option key={n}>{n}</option>)}
        </select>
      </div>
    </div>
  </div>
);
};

export default StayDetailsForm;
