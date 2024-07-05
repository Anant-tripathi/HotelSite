import "./Modal.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

const Modal = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // Close the modal after submitting
  };

  if (!show) {
    return null;
  }
  const datePickerStyling = {
    border: "1px solid black",
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <button onClick={onClose} className="modal-close">
            &times;
          </button>
          <h2>Finalize Reservation</h2>
          <form onSubmit={handleSubmit}>
            <div className="left-form">
              <div className="form-input">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                 <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-input">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                /><input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
              </div>
              
                
              <div className="form-input">
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="country"
                  name="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="right-form">
              <div className="datePicker-container">
            <DatePicker style={{datePickerStyling}}
              id="arrivalDate"
              selected={formData.arrivalDate}
              onChange={(date) => handleDateChange(date, 'arrivalDate')}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              required
            />
            <DatePicker
              id="departureDate"
              selected={formData.departureDate}
              onChange={(date) => handleDateChange(date, 'departureDate')}
              dateFormat="yyyy-MM-dd"
              minDate={formData.arrivalDate || new Date()}
              required
            />
          </div>
          <div className="form-input">
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              required
            />
            <input
              type="number"
              id="kids"
              name="kids"
              value={formData.kids}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
          <div className="form-input">
            <input
              type="number"
              id="nights"
              name="nights"
              value={formData.nights}
              onChange={handleChange}
              min="1"
              required
            />
            <input
              type="text"
              id="roomPreference"
              name="roomPreference"
              value={formData.roomPreference}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
            placeholder="Any special requests ??"
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </div>
              <button type="submit">Submit Reservation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
