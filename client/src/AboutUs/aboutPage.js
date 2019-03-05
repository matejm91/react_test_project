import React from 'react';

import './aboutUs.css';

class AboutPage extends React.Component {
  render() {
    /*console.log('about us Page');*/
    return (
      <div>
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="col-xs-4 aboutDiv">
            <div>
              O Župi <a href="http://zupabotinec.com/sv-stjepan-prvomucenik/">Sv. Stjepan Prvomučenik</a>
            </div>
            <div>
              Župnik je od 2009. godine velečasni Ivica Berdik.
            </div>
            <div>
              U samim počecima službe sadašnjeg župnika u crkvi su prevladavali stariji župljani,
                no neumoran za rad na Gospodnjoj njivi,
                župnik je raznoraznim akcijama i aktivnostima uspio okupiti mnoge mlade,
                ne samo iz župe nego i iz cijeloga Zagreba koji svakodnevno dolaze na svetu misu,
                želeći upoznati i susresti jedinoga i pravoga Boga. Samo ministranata,
                u dobi od 10 do 30 godina, svakoga dana je 15-ak: više ih ne stane uz oltar.
            </div>
            <div>
              Iako mala i na prvi pogled neprimjetna, botinečka je crkva mjesto proslave Božjega Imena.
                Danas naša župa nudi mnoge aktivnosti za djecu, mlade i odrasle o kojima više možete pročitati u Župnim akivnostima.
            </div>
            <br></br>
            <div>
              Povijest Župe
            </div>
            Naselje Botinec nastalo je nakon velike poplave koja je pogodila Zagreb u listopadu 1964.
              Na to su područje preseljeni građani čije su kuće stradale u poplavi te su upravo oni bili prvi župljani naše župe.
              Župa sv. Stjepana Prvomučenika osnovana je na blagdan Gospe od sv. Krunice 7. listopada 1969.
              Prvi je župnik bio Leopold Tepeš. Iste godine, u župu dolaze časne sestre Družbe Kraljice svijeta koje u župi djeluju i danas.
              Krajem te iste godine župna je crkva zazidana od strane komunističke vlasti
              i tek na spomendan sv. Barbare 4. prosinca 1971. odzidana je izrazitim zalaganjem novog tadašnjeg župnika,
              velečasnog Josipa Frkina.
              Župa danas broji oko 5 tisuća župljana, od kojih najveći dio živi u Botincu, a manji u Starom Botincu i Dupcima.
            </div>
          <br></br>
          <div className="col-xs-4 aboutDiv">
            <div>
              <a href="http://zupabotinec.com/ivica-berdik/">Vlč. Ivica Berdik</a>
            </div>
            <div>
              More ljudi je razgovaralo sa mnom o mome pozivu, što bračnih parova, što pojedinaca,
                čak i kardinal Kuharić u jednom razgovoru te profesorica Damjanov koja nije bila vjernica nego je vjerovala u tadašnji režim,
                svojim mi je savjetom pomogla da se odlučim za duhovni poziv i donesem jednu od,
                ako ne i najvažniju odluku u životu.
            </div>
            <br></br>
            <div>
              Raspored Bogoslužja:
            </div>
            <br></br>
            <div>
              RASPORED SVETIH MISA:
            </div>
            <div>ponedjeljak – subota: 18:30 (iznimka je svaka prva subota u mjesecu kada nema večernje Svete mise, ali ima zornica u 06:00) </div>
            <div>nedjelja: 08:00, 09:30, 11:00, 18:30</div>
            <div>Ljetni raspored za nedjelju: 08:00, 10:00, 18:30</div>
            <div>Molitva svete krunice: svaki dan prije večernje svete mise u 17:50.</div>
            <div>
              SVETA ISPOVIJED:
              </div>
            <div>
              Većinom svaki dan prije večernje Svete mise.
              </div>
            <div>
              Svaki prvi petak u mjesecu imate mogućnost nastaviti ili započeti pobožnost devet prvih petaka, te je tada Sveta ispovijed: 17:00-18:30.
              </div>
            <div>
              KLANJANJE PRED PRESVETIM:
              </div>
            <div>ponedjeljak – petak: 08:00 – 17:30 na koru crkve</div>
            <div>četvrtak: iza večernje svete mise do 20:00</div>
            <div>subota: 21:00 – 23:00, animirano klanjanje u crkvi</div>
            <br></br>
            <a href="http://ds-kraljice-svijeta.hr/">Družba sestara Kraljice svijeta</a>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;