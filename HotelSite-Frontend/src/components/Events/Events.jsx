import "./events.css";
import Event2 from "/assets/event2.webp";
import Event3 from "/assets/event3.webp";
import Event1 from "/assets/event1.webp";

export default function Events() {
  return (
    <section id="Events" className="events">
      <div className="events__eventsDetails">
        <h1 className="events__title">Events</h1>
        <div className="events__sectionDesc">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </div>
      </div>
      <div className="events__eventsContainer">
        <div className="events__eventsContainer-event">
          <div className="events__eventsContainer-image">
            <img loading="lazy" src={Event1} alt="event-image" />
          </div>
          <div className="events__eventsContainer-date">April 9, 2024</div>
          <div className="events__eventsContainer-desc">
            <div className="events__eventsContainer-desc-Heading">
              Some heading for the event article
            </div>
            <div className="events__eventsContainer-desc-desc">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </div>
          </div>
        </div>
        <div className="events__eventsContainer-event">
          <div className="events__eventsContainer-image">
            <img loading="lazy" src={Event2} alt="event-image" />
          </div>
          <div className="events__eventsContainer-date">April 9, 2024</div>
          <div className="events__eventsContainer-desc">
            <div className="events__eventsContainer-desc-Heading">
              Some heading for the event article
            </div>
            <div className="events__eventsContainer-desc-desc">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </div>
          </div>
        </div>
        <div className="events__eventsContainer-event">
          <div className="events__eventsContainer-image">
            <img loading="lazy" src={Event3} alt="event-image" />
          </div>
          <div className="events__eventsContainer-date">April 9, 2024</div>
          <div className="events__eventsContainer-desc">
            <div className="events__eventsContainer-desc-Heading">
              Some heading for the event article
            </div>
            <div className="events__eventsContainer-desc-desc">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
