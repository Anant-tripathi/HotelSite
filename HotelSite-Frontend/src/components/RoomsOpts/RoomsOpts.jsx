import PropTypes from "prop-types";
import "./roomsopts.css";
import room1 from "../../../public/assets/room1.jpg";
import room2 from "../../../public/assets/room2.jpg";
import room3 from "../../../public/assets/room3.jpg";

function Room({ roomURL }) {
  return (
    <div className="roomopts__room__container">
      <div className="roomopts__room__container-image">
        <img src={roomURL} alt="room-image" />
      </div>
      <div className="roomopts__room__container-imageDesc">
        <div className="roomopts__room__container-imageDesc-title">
          Lorem Title
        </div>
        <div className="roomopts__room__container-imageDesc-rate">
          10 Lorem/night
        </div>
      </div>
    </div>
  );
}
Room.propTypes = {
  roomURL: PropTypes.string.isRequired,
};

export default function RoomsOpts() {
  const imageURLs = [room1, room2, room3];
  return (
    <section id="RoomOpts" className="roomopts">
      <div className="roomopts__title">Rooms Available</div>
      <div className="roomopts__description">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate.
      </div>
      <div className="roomopts__rooms">
        {imageURLs.map((roomURL, key) => {
          return <Room key={key} roomURL={roomURL} />;
        })}
      </div>
    </section>
  );
}
