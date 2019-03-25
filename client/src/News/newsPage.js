import React from 'react';

import './news.css';

class NewsPage extends React.Component {
  render() {
    //console.log('news Page');
    return (
      <body>
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-4 newsDiv">
          <h1>
            O zajednici
          </h1>
          <p>
            Katolička karizmatska molitvena zajednica <b>Nanovo rođeni</b> utemeljena je na Badnjak 2012. godine Renato Smirnjak.
              U proljeće 2014. godine <u>službu voditelja zajednice preuzeo je tada 23-godišnji <b><em>Matija Ricov</em></b></u>.
          <br></br>
          Zajednica je, zbog sve većeg broja članova i ograničenosti prostora, podijeljena na mlađe i starije,
              ali ubrzo nakon donošenja te odluke opet su se spojili.
              <br></br>
              Susreti se održavaju u župnoj crkvi sv. Stjepana prvomučenika.
              <br></br>
            U samim počecima, zajednicu je činilo svega nekoliko starijih gospođa.
            Njihovom dugotrajnom molitvom i postom zajednica je narasla na više desetaka,
            pa čak i stotina članova svih uzrasta:
            od krizmanika, srednjoškolaca, studenata do odraslih ljudi, bračnih parova, djedova i baka.
            <br></br>
          Vođeno Duhom Svetim, vodstvo zajednice usmjereno je na potrebe zajednice i župe,
            trudeći se realizirati ideje koje će doprinijeti još snažnijem primanju blagoslova.
            Mnogi svjedoče kako je samo jedan susret bio dovoljan da susretnu živoga Boga i odluče u potpunosti promijeniti svoj život.
            <br></br>
            Služenjem u molitvenom, slavljeničkom, tehničkom timu i/ili poslužiteljskom timu članovi zajednice imaju priliku angažirati se
            i doprinijeti boljitku zajednice i njezinih (sadašnjih i budućih) članova, ali i cijele župe.
          </p>
          <p>
            Za one koji žele znati više!
            <abbr title="Povijest zajednice">
             <a href="http://zupabotinec.com/povijest-zajednice/" target="_blank"> Povijest zajednice</a>
             </abbr>
          </p>
          </div>
          <div className="col-xs-1"></div>
          <div className="col-xs-4 newsDiv">
          <br></br><br></br><br></br><br></br>
          <p>
            <em>Vrijeme održavanja susreta:</em>
            <b> Petak: 20:00 sati</b>
          <br></br>
            Temu i vrijeme održavanja susreta svaki tjedan možete pogledati na našoj <br></br><em>facebook stranici:</em>
            <a href="https://hr-hr.facebook.com/pages/category/Community/Nanovo-ro%C4%91eni-1046403725381309/" target="_blank"> Nanovo rođeni facebook</a>
          <br></br>
            Neka od naših predavanja ili predavanja naših gostiju možete pogledati na našem <em>youtube kanalu:</em>
            <a href="https://www.youtube.com/channel/UCiXXRMlzoA-MKPHVe5V7YdQ" target="_blank"> Nanovo rođeni youtube </a>
            ili
            <a href="http://zupabotinec.com/seminari/" target="_blank"> Nanovo rođeni seminari.</a>
          </p>
          </div>
      </div>
      </body>
    )
  }
}

export default NewsPage;