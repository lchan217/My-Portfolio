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
    <h2>My Experience</h2>
    <h1>Download full resume</h1>
    <div><b>Mars, Incorporated</b></div>
    <i>Senior Accounting Specialist - Fixed Assets and General Accounting, February 2014 - November 2017</i>
    <ul>
      + Led team of three when making and implementing accrual process decisions <br></br>
      + Collaborated with five finance plant managers to meet crucial month-end close deadlines <br></br>
      + Co-published and presented to over 90 engineers an annual course explaining the lifecycle of a Fixed Asset <br></br>
      + Tracked CIP balance of $108 million and initiated the capitalization/project closure process as needed <br></br>
      + Took ownership of asset subledger by timely preparing capitalizations, retirements, and cost adjustments as necessary using SAP <br></br>

    </ul>

    <div><b>Mondelez International (Formerly Kraft Foods)</b></div>
    <i>Senior Financial Associate, June 2012- February 2014</i>
      <ul>
        + Promoted to Senior Financial Associate in August 2013  from Financial Associate <br></br>
        + Managed and provided accounting support for the general ledger during the month-end close for 7 plants <br></br>
        + Created quarterly forecasts and managed the Field Operations Incentive Plan for 17 plants using a detailed Excel spreadsheet <br></br>
        + Performed extensive review of 170 account reconciliations, provided feedback to reconciliation preparer, and presented findings to the Balance Sheet Review team <br></br>
        + Maintained the invoice/purchase order system and reconciled approximately seventy accounts for various plant locations every month<br></br>
      </ul>

    <div><b>Graduate of University of Dayton 2012</b></div>
      <ul>
        <li>Bachelor of Science in Accounting</li>
        <li>Bachelor of Music in Performance</li>
      </ul>
    </div>
  );
};

export default Experience;
