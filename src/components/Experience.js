import React from 'react';
import { Card } from 'semantic-ui-react'

const Experience = () => {
  return (
    <div className="experience">
      <Card.Group itemsPerRow={3}>

        <div class="card">
          <div class="image">
            <img src="data:image/png;base64,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"></img>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img src="https://static01.nyt.com/images/2012/05/24/business/Kraft1/Kraft1-superJumbo.jpg"></img>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img src="https://3blaws.s3.amazonaws.com/images/mars_hero25.jpg"></img>
          </div>
        </div>
      </Card.Group>
    <h2>My Experience</h2>
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
