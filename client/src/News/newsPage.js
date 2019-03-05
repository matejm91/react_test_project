import React from 'react';

import './newsPage.css';

class NewsPage extends React.Component {
  render() {
    //console.log('news Page');
    return (
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-4 newsPageDiv">
          <div>
            O zajednici
          </div>
          <div>
            Katolička karizmatska molitvena zajednica Nanovo rođeni utemeljena je na Badnjak 2012. godine Renato Smirnjak.
              U proljeće 2014. godine službu voditelja zajednice preuzeo je tada 23-godišnji Matija Ricov.
          </div>
          <div>
            Zajednica je, zbog sve većeg broja članova i ograničenosti prostora, podijeljena na mlađe i starije,
              ali nisu rijetki ni zajednički susreti.
              Susreti se održavaju u župnoj crkvi sv. Stjepana prvomučenika.
          </div>
          <div>
            Vrijeme održavanja susreta:
              Petak: 20:00 sati
          </div>
          <div>
            Temu i vrijeme održavanja susreta svaki tjedan možete pogledati na našoj facebook stranici:
            <a href="https://hr-hr.facebook.com/pages/category/Community/Nanovo-ro%C4%91eni-1046403725381309/"> Nanovo rođeni facebook</a>
          </div>
          <div>
            Neka od naših predavanja ili predavanja naših gostiju možete pogledati na našem youtube kanalu:
            <a href="https://www.youtube.com/channel/UCiXXRMlzoA-MKPHVe5V7YdQ"> Nanovo rođeni youtube </a>
            ili
            <a href="http://zupabotinec.com/seminari/"> Nanovo rođeni seminari.</a>
          </div>
          <br></br>
          <div>
            U samim počecima, zajednicu je činilo svega nekoliko starijih gospođa.
            Njihovom dugotrajnom molitvom i postom zajednica je narasla na više desetaka,
            pa čak i stotina članova svih uzrasta:
            od krizmanika, srednjoškolaca, studenata do odraslih ljudi, bračnih parova, djedova i baka.
          </div>
          <div>
            Vođeno Duhom Svetim, vodstvo zajednice usmjereno je na potrebe zajednice i župe,
            trudeći se realizirati ideje koje će doprinijeti još snažnijem primanju blagoslova.
            Mnogi svjedoče kako je samo jedan susret bio dovoljan da susretnu živoga Boga i odluče u potpunosti promijeniti svoj život.
          </div>
          <div>
            Služenjem u molitvenom, slavljeničkom, tehničkom timu i/ili poslužiteljskom timu članovi zajednice imaju priliku angažirati se
            i doprinijeti boljitku zajednice i njezinih (sadašnjih i budućih) članova, ali i cijele župe.
          </div>
          <div>
            Za one koji žele znati više!
             <a href="https://www.youtube.com/channel/UCiXXRMlzoA-MKPHVe5V7YdQ"> Povijest zajednice</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPage;