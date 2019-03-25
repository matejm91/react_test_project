import React from 'react';

import './aboutUs.css';

class AboutPage extends React.Component {
  render() {
    //console.log('about us Page');
    return (
      <body className="aboutPage">
        <bodyr className="row">
          <bodyr1 className="col-xs-1"></bodyr1>
          <bodyr2 className="col-xs-4 aboutDiv">
            <p>
              <h3>O Župi <a href="http://zupabotinec.com/sv-stjepan-prvomucenik/">Sv. Stjepan Prvomučenik</a></h3>

              <em>Župnik</em> je od 2009. godine <em>velečasni <b>Ivica Berdik.</b></em><br></br>
              U samim počecima službe sadašnjeg župnika u crkvi su prevladavali stariji župljani,
                no neumoran za rad na Gospodnjoj njivi,
                župnik je raznoraznim akcijama i aktivnostima uspio okupiti mnoge mlade,
                ne samo iz župe nego i iz cijeloga Zagreba koji svakodnevno dolaze na svetu misu,
                želeći upoznati i susresti jedinoga i pravoga Boga.<br></br>
              Samo ministranata u dobi od 10 do 30 godina, svakoga dana je 15-ak: više ih ne stane uz oltar.<br></br>
              Iako mala i na prvi pogled neprimjetna, botinečka je crkva mjesto proslave Božjega Imena.
                Danas naša župa nudi mnoge aktivnosti za djecu, mlade i odrasle o kojima više možete pročitati u Župnim akivnostima.
            </p>
            <hr></hr>
            <p>
              <h3><a href="povijest-zupe">Povijest Župe</a></h3>

              Naselje Botinec nastalo je nakon velike poplave koja je pogodila Zagreb u listopadu 1964.
                Na to su područje preseljeni građani čije su kuće stradale u poplavi te su upravo oni bili prvi župljani naše župe.
              Župa sv. Stjepana Prvomučenika osnovana je na blagdan Gospe od sv. Krunice 7. listopada 1969.<br></br>
              Prvi je župnik bio Leopold Tepeš. Iste godine, u župu dolaze časne sestre Družbe Kraljice svijeta koje u župi djeluju i danas.<br></br>
              Krajem te iste godine župna je crkva zazidana od strane komunističke vlasti
              i tek na spomendan sv. Barbare 4. prosinca 1971. odzidana je izrazitim zalaganjem novog tadašnjeg župnika,
              velečasnog Josipa Frkina.<br></br>
              Župa danas broji oko 5 tisuća župljana, od kojih najveći dio živi u Botincu, a manji u Starom Botincu i Dupcima.
              </p>
          </bodyr2>
          
          <bodyr3 className="col-xs-4 aboutDiv">
            <h3><a href="http://zupabotinec.com/ivica-berdik/">Vlč. Ivica Berdik</a></h3>

            <p>
              More ljudi je razgovaralo sa mnom o mome pozivu, što bračnih parova, što pojedinaca,
                čak i kardinal Kuharić u jednom razgovoru te profesorica Damjanov koja nije bila vjernica nego je vjerovala u tadašnji režim,
                svojim mi je savjetom pomogla da se odlučim za duhovni poziv i donesem jednu od,
                ako ne i najvažniju odluku u životu.
            </p>
            <hr></hr>
            <h3>
              <u><em>Raspored Bogoslužja:</em></u>
            </h3>
            <p>
              <b>RASPORED SVETIH MISA:</b> <br></br>
              ponedjeljak – subota: 18:30 (iznimka je svaka prva subota u mjesecu kada nema večernje Svete mise, ali ima zornica u 06:00) <br></br>
              nedjelja: 08:00, 09:30, 11:00, 18:30 <br></br>
              Ljetni raspored za nedjelju: 08:00, 10:00, 18:30 <br></br>
              Molitva svete krunice: svaki dan prije večernje svete mise u 17:50. <br></br>
            </p>
            <p>
              <b>SVETA ISPOVIJED:</b>
              <br></br>
              Većinom svaki dan prije večernje Svete mise.
              <br></br>
              Svaki prvi petak u mjesecu imate mogućnost nastaviti ili započeti pobožnost devet prvih petaka, te je tada Sveta ispovijed: 17:00-18:30.
              <br></br>
            </p>
            <p>
              <b>KLANJANJE PRED PRESVETIM:</b> <br></br>
              ponedjeljak – petak: 08:00 – 17:30 na koru crkve <br></br>
              četvrtak: iza večernje svete mise do 20:00 <br></br>
              subota: 21:00 – 23:00, animirano klanjanje u crkvi <br></br>
            </p>
            <hr></hr>
            <a href="http://ds-kraljice-svijeta.hr/"><b><em>Družba sestara Kraljice svijeta</em></b></a>
          </bodyr3>
        </bodyr>
      </body>
    )
  }
}

export default AboutPage;