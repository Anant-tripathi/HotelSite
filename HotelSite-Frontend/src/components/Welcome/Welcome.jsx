import "./welcome.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

// const welcome1 = lazy(() => import("../../../public/assets/welcome1.jpeg"));
// const welcome2 = lazy(() => import("/assets/welcome2.avif"));

import welcome1 from "../../../public/assets/welcome1.webp";
import welcome2 from "../../../public/assets/welcome2.webp";

export default function Welcome({onOpenModal}) {
	const [checkIn, setCheckIn] = useState(null);
	const [checkOut, setCheckOut] = useState(null);
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);

	const handleChangeCheckIn = (date) => setCheckIn(date);
	const handleChangeCheckOut = (date) => setCheckOut(date);
	const handleAdultChange = (event) => setAdults(parseInt(event.target.value));
	const handleChildChange = (event) =>
		setChildren(parseInt(event.target.value));

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(
		// 	`Check-in: ${checkIn.toDateString()} Check-out: ${checkOut.toDateString()} Adults: ${adults} Children: ${children}`
		// );
		onOpenModal();
	};
	return (
		<section className="welcome">
			<div className="welcome__form" id="welcome-form">
				<form onSubmit={handleSubmit}>
					<div className="form-input">
						<label htmlFor="checkIn">Check-In</label>
						<br />
						<DatePicker
							id="checkIn"
							selected={checkIn}
							onChange={handleChangeCheckIn}
							dateFormat="yyyy-MM-dd"
							minDate={new Date()}
							className="date-picker"
						/>
					</div>
					<div className="form-input">
						<label htmlFor="checkOut">Check-Out</label>
						<br />
						<DatePicker
							id="checkOut"
							selected={checkOut}
							onChange={handleChangeCheckOut}
							dateFormat="yyyy-MM-dd"
							minDate={checkIn || new Date()} // Disable check-out before check-in
							className="date-picker"
						/>
					</div>
					<div className="form-input" id="form-input-sp">
						<div>
							<label htmlFor="adults">Adults</label>
							<br />
							<select id="adults" value={adults} onChange={handleAdultChange}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
						<div>
							<label htmlFor="children">Children</label>
							<br />
							<select
								id="children"
								value={children}
								onChange={handleChildChange}
							>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
					</div>
					<button type="submit" id="check-availability">
						Check Availability
					</button>
				</form>
			</div>
			<div className="welcome__content">
				<h1 className="welcome__title">Welcome to Hotel Lorem</h1>
				<p className="welcome__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
					convallis libero et nisl gravida, eget lacinia ipsum viverra. Sed
					auctor, erat id tincidunt scelerisque, nunc libero tincidunt dui, a
					ultrices nunc ante sed nisl. Nulla facilisi. Nullam id purus
					tincidunt, tincidunt massa sit amet, ultricies nunc. Nulla facilisi.
					Nullam id purus tincidunt, tincidunt massa sit amet, ultricies nunc.
				</p>
				<button className="welcome__button">Learn More</button>
			</div>
			<div className="welcome__images">
				<img
					src={welcome1}
					alt="Hotel Room"
					id="welcome__image1"
					loading="lazy"
				/>
				<img
					src={welcome2}
					alt="Hotel Room"
					id="welcome__image2"
					loading="lazy"
				/>
			</div>
		</section>
	);
}
