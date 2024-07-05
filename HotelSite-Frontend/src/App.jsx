import { lazy, Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";

const Modal = lazy(() => import("./components/Modal/Modal.jsx"));

const Welcome = lazy(() => import("./components/Welcome/Welcome.jsx"));
const RoomOpts = lazy(() => import("./components/RoomsOpts/RoomsOpts.jsx"));
const Photos = lazy(() => import("./components/Photos/Photos.jsx"));
const RestMenu = lazy(() => import("./components/RestMenu/RestMenu.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials.jsx"));
const Events = lazy(() => import("./components/Events/Events.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));

function App() {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
	  setShowModal(true);
	};
  
	const handleCloseModal = () => {
	  setShowModal(false);
	};
	return (
		<>
			<Header />
			<Hero />
			<Suspense fallback={<div>Loading...</div>}>
				<Welcome  onOpenModal={handleOpenModal}  />
				<Modal show={showModal} onClose={handleCloseModal}/>
				<RoomOpts />
				<Photos />
				<RestMenu />
				<Testimonials />
				<Events />
				<Footer />
			</Suspense>
		</>
	);
}

export default App;
