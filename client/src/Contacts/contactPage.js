import React from 'react';

import './contacts.css';

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="col-xs-6 contactDiv">
            <div>
              <b>Adresa:</b> Ulica Pere Kvržice 15, Novi Zagreb, Botinec
            </div>
            <div>
              Radno vrijeme župnog ureda: 08:00-09:00 i 16:30-18:00.
            </div>
            <div>
              Za termine izvan gore navedenog vremena moguć je dogovor.
            </div>
            <div>
              Telefon: 01 6545 877.
            </div>
            <div>
              E-mail: rktzupabotinec@gmail.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;