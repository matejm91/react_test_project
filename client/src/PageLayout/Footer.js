import React from 'react';
import './Footer.css';


export default function Footer(props) {
  return (
    <div className='row footerClass'>
      <div className='col-xs-4'>
        <div className="footer">
          <div>
          <b>Korisne poveznice:</b>
            <br></br>
            <a href="http://w2.vatican.va/content/vatican/it.html"> Sveta stolica</a>
            <br></br>
            <a href="http://www.zg-nadbiskupija.hr/"> Zagrebacka nadbiskupija </a>
            <br></br>
            <a href="http://studentski-pastoral.com/"> Studentski pastoral </a>
            <br></br>
            <a href="https://www.glas-koncila.hr/"> Glas koncila </a>
            <br></br>
            <a href="http://www.laudato.hr/"> Laudato </a>
          </div>
        </div>
      </div>
      <div className='col-xs-4'>
        <div className='footer'>
          <b>Info:</b>
        </div>
        <div>
        <b>Crkva sv. Stjepana Prvomučenika</b>
        <br></br>
         <div>
           Uica Pere Kvržice 15
         10020 Zagreb, Botinec
         </div>
        </div>
        <div>
        <b>Telefon:</b> 01 6545 877
        </div>
        <div>
          <b>E-mail:</b>
          <br></br>
          rktzupabotinec@gmail.com
          <br></br>
          nanovorodeni@gmail.com
        </div>
      </div>
    <div className='col-xs-4'>
    <div className='footer'>
    <b>Pratite nas:</b>
    </div>
    <div>
    <a href="https://hr-hr.facebook.com/pages/category/Community/Nanovo-ro%C4%91eni-1046403725381309/"> Nanovo rođeni facebook</a>
    <br></br>
    <a href="https://www.youtube.com/channel/UCiXXRMlzoA-MKPHVe5V7YdQ"> Nanovo rođeni youtube </a>
    </div>
    </div>
    </div>
    
  );
}
