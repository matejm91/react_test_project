import React from 'react';

import './contacts.css';

class ContactPage extends React.Component {
  render() {
    return (
      <body className="contact">
        <bodyr className="row">
          <bodyr1 className="col-xs-1"></bodyr1>
          <bodyr2 className="col-xs-6 contactDiv">
            <h3>Kontakt župnog ureda:</h3>
            <p>
              <b>Adresa:</b> Ulica Pere Kvržice 15, Novi Zagreb, Botinec <br></br>
              <b>Radno vrijeme župnog ureda:</b> 08:00-09:00 i 16:30-18:00. <br></br>
              <em>Za termine izvan gore navedenog vremena moguć je dogovor.</em> <br></br>
              <b>Telefon:</b> 01 6545 877. <br></br>
              <b>E-mail:</b> rktzupabotinec@gmail.com
            </p>
          </bodyr2>
        </bodyr>
      </body>
    );
  }
}

export default ContactPage;