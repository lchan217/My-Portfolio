import React from 'react';
import { Card } from 'semantic-ui-react'

const Experience = () => {
  return (
    <div className="experience">
      <Card.Group itemsPerRow={3}>

        <div class="card">
          <div class="image">
            <img src="https://i.imgur.com/AVeu2yG.png"></img>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img src="https://i.imgur.com/0xJGBER.jpg"></img>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img src="https://i.imgur.com/PFlNouF.jpg"></img>
          </div>
        </div>
      </Card.Group>
      <br/><br/>
      <a href="https://drive.google.com/file/d/1tes-1ZCT_3bhnw_lInMTYtW7_GSunVtK/view?usp=sharing" target="_blank"><i class="download icon"></i>VIEW FULL RESUME</a>
    <h2><u>Languages and Frameworks</u></h2>
      <div class="ui grid">
        <div class="five wide column">Ruby on Rails</div>
        <div class="five wide column">Sinatra</div>
        <div class="five wide column">JavaScript</div>
        <div class="five wide column">jQuery</div>
        <div class="five wide column">ActiveRecord</div>
        <div class="five wide column">PostgreSQL</div>
        <div class="five wide column">SQLite</div>
        <div class="five wide column">CSS</div>
        <div class="five wide column">HTML</div>
        <div class="five wide column">Semantic UI</div>
        <div class="five wide column">Bootstrap</div>
      </div>
    <h2><u>My Experience</u></h2>

    <div><b>Mars, Incorporated</b></div>
    <i>Senior Accounting Specialist - Fixed Assets and General Accounting, February 2014 - November 2017</i>
    <ul>
      <li>Led team of three when making and implementing accrual process decisions</li>
      <li>Collaborated with five finance plant managers to meet crucial month-end close deadlines</li>
          <li> Analyzed the general ledger and identified variances to plant managers ahead of schedule </li>
          <li>Utilizing pivot tables, vlookups and conditional formatting in Excel, generated and distributed cost and labor reports</li>
      <ul><li>Co-published and presented to over 90 engineers an annual course explaining the lifecycle of a Fixed Asset</li></ul>
      <ul><li>Tracked CIP balance of $108 million and initiated the capitalization/project closure process as needed</li></ul>
      <li>Took ownership of asset subledger by timely preparing capitalizations, retirements, and cost adjustments as necessary using SAP</li>
    </ul>

    <div><b>Mondelez International (Formerly Kraft Foods)</b></div>
    <i>Senior Financial Associate, June 2012- February 2014</i>
      <ul>
        <li>Promoted to Senior Financial Associate in August 2013 from Financial Associate </li>
        <li>Managed and provided accounting support for the general ledger during the month-end close for 7 plants</li>
        <li>Created quarterly forecasts and managed the Field Operations Incentive Plan for 17 plants using a detailed Excel spreadsheet</li>
        <li>Performed extensive review of 170 account reconciliations, provided feedback to reconciliation preparer, and presented findings to the Balance Sheet Review team</li>
        <li>Maintained the invoice/purchase order system and reconciled approximately seventy accounts every month</li>
      </ul>

    <div><b>Graduate of University of Dayton 2012</b></div>
      <ul>
          <li>Bachelor of Science in Accounting </li>
          <li>Bachelor of Music in Performance </li>
      </ul>
    </div>
  );
};

export default Experience;
