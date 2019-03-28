import React from 'react';

import './contacts.css';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="col-xs-6 contactDiv">
            <h3>Kontakt župnog ureda:</h3>
            <p>
              <b>Adresa:</b> Ulica Pere Kvržice 15, Novi Zagreb, Botinec <br></br>
              <b>Radno vrijeme župnog ureda:</b> 08:00-09:00 i 16:30-18:00. <br></br>
              <em>Za termine izvan gore navedenog vremena moguć je dogovor.</em> <br></br>
              <b>Telefon:</b> 01 6545 877. <br></br>
              <b>E-mail:</b> <a href="mailto:rktzupabotinec@gmail.com">rktzupabotinec@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;