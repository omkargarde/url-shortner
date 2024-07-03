const Accordion = () => {
  return (
    <div className="my-24 md:px-11">
      <div className="collapse collapse-arrow my-4 bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How does the Trimmer URL shortener works?
        </div>
        <div className="collapse-content">
          <p>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow my-4 bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do I need an account to use the app?
        </div>
        <div className="collapse-content">
          <p>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow my-4 bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What analytics are available for my shortened URLs?
        </div>
        <div className="collapse-content">
          <p>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
