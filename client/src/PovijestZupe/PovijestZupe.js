import React from 'react';

import './PovijestZupe.css';

class PovijestZupe extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="col-xs-4 povijestDiv">
            <div>
              <b>Povijest Župe</b>
            </div>
            <div>
              Naselje Botinec nastalo je nakon velike poplave koja je pogodila Zagreb u listopadu 1964.
                Na to su područje preseljeni građani čije su kuće stradale u poplavi te su upravo oni bili prvi župljani naše župe.
                Župa sv. Stjepana Prvomučenika osnovana je na blagdan Gospe od sv. Krunice 7. listopada 1969.
                Prvi je župnik bio Leopold Tepeš. Iste godine, u župu dolaze časne sestre Družbe Kraljice svijeta koje u župi djeluju i danas.
                Krajem te iste godine župna je crkva zazidana od strane komunističke vlasti
                i tek na spomendan sv. Barbare 4. prosinca 1971. odzidana je izrazitim zalaganjem novog tadašnjeg župnika,
                velečasnog Josipa Frkina.
                Župa danas broji oko 5 tisuća župljana, od kojih najveći dio živi u Botincu, a manji u Starom Botincu i Dupcima.
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default PovijestZupe;