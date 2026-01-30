const StayDetailsForm = () => {
  return (
    <div className="card">
      <h3>Your Stay Details</h3>

      <div className="form-grid">
        <div>
          <label>Check-in</label>
          <input type="date" />
        </div>

        <div>
          <label>Check-out</label>
          <input type="date" />
        </div>

        <div>
          <label>Adults</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div>
          <label>Children</label>
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StayDetailsForm;
