import React from "react";

function Contact() {
  return (
    <div class="mapouter">
      <h1>LOCATION</h1>
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=uic&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
