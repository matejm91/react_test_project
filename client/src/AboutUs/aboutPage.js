import React from 'react';

import './aboutUs.css';

class AboutPage extends React.Component {
  render() {
    //console.log('about us Page');
    return (
      <div className="aboutPage">
        <div className="row">
          <div className="col-xs-1" />
          <div className="col-xs-4 aboutDiv">
            <p>
              <h3>
                <u>O Župi Sv. Stjepan Prvomučenik</u>
              </h3>
              <em>Župnik</em> je od 2009. godine{' '}
              <em>
                velečasni <b>Ivica Berdik.</b>
              </em>
              <br />U samim počecima službe sadašnjeg župnika u crkvi su
              prevladavali stariji župljani, no neumoran za rad na Gospodnjoj
              njivi, župnik je raznoraznim akcijama i aktivnostima uspio okupiti
              mnoge mlade, ne samo iz župe nego i iz cijeloga Zagreba koji
              svakodnevno dolaze na svetu misu, želeći upoznati i susresti
              jedinoga i pravoga Boga.
              <br />
              Samo ministranata u dobi od 10 do 30 godina, svakoga dana je
              15-ak: više ih ne stane uz oltar.
              <br />
              Iako mala i na prvi pogled neprimjetna, botinečka je crkva mjesto
              proslave Božjega Imena. Danas naša župa nudi mnoge aktivnosti za
              djecu, mlade i odrasle o kojima više možete pročitati u Župnim
              akivnostima.
            </p>
            <hr />
            <p>
              <h3>
                <u>
                  <em>Povijest Župe</em>
                </u>
              </h3>
              Naselje Botinec nastalo je nakon velike poplave koja je pogodila
              Zagreb u listopadu 1964. Na to su područje preseljeni građani čije
              su kuće stradale u poplavi te su upravo oni bili prvi župljani
              naše župe. Župa sv. Stjepana Prvomučenika osnovana je na blagdan
              Gospe od sv. Krunice 7. listopada 1969.
              <br />
              Prvi je župnik bio Leopold Tepeš. Iste godine, u župu dolaze časne
              sestre Družbe Kraljice svijeta koje u župi djeluju i danas.
              <br />
              Krajem te iste godine župna je crkva zazidana od strane
              komunističke vlasti i tek na spomendan sv. Barbare 4. prosinca
              1971. odzidana je izrazitim zalaganjem novog tadašnjeg župnika,
              velečasnog Josipa Frkina.
              <br />
              Župa danas broji oko 5 tisuća župljana, od kojih najveći dio živi
              u Botincu, a manji u Starom Botincu i Dupcima.
            </p>
          </div>

          <div className="col-xs-4 aboutDiv">
            <h3>
              <em>
                <u>Vlč. Ivica Berdik</u>
              </em>
            </h3>

            <p>
              More ljudi je razgovaralo sa mnom o mome pozivu, što bračnih
              parova, što pojedinaca, čak i kardinal Kuharić u jednom razgovoru
              te profesorica Damjanov koja nije bila vjernica nego je vjerovala
              u tadašnji režim, svojim mi je savjetom pomogla da se odlučim za
              duhovni poziv i donesem jednu od, ako ne i najvažniju odluku u
              životu.
            </p>
            <hr />
            <h3>
              <u>
                <em>Raspored Bogoslužja:</em>
              </u>
            </h3>
            <p>
              <b>RASPORED SVETIH MISA:</b> <br />
              ponedjeljak – subota: 18:30 (iznimka je svaka prva subota u
              mjesecu kada nema večernje Svete mise, ali ima zornica u 06:00){' '}
              <br />
              nedjelja: 08:00, 09:30, 11:00, 18:30 <br />
              Ljetni raspored za nedjelju: 08:00, 10:00, 18:30 <br />
              Molitva svete krunice: svaki dan prije večernje svete mise u
              17:50. <br />
            </p>
            <p>
              <b>SVETA ISPOVIJED:</b>
              <br />
              Većinom svaki dan prije večernje Svete mise.
              <br />
              Svaki prvi petak u mjesecu imate mogućnost nastaviti ili započeti
              pobožnost devet prvih petaka, te je tada Sveta ispovijed:
              17:00-18:30.
              <br />
            </p>
            <p>
              <b>KLANJANJE PRED PRESVETIM:</b> <br />
              ponedjeljak – petak: 08:00 – 17:30 na koru crkve <br />
              četvrtak: iza večernje svete mise do 20:00 <br />
              subota: 21:00 – 23:00, animirano klanjanje u crkvi <br />
            </p>
            <hr />
            <abbr title="Družba sestara Kraljice svijeta">
              <a
                href="http://ds-kraljice-svijeta.hr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>
                  <em>DsKs</em>
                </b>
              </a>
            </abbr>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
