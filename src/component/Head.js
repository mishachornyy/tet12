import './Head.css';
import decor from"../assests/decor 1.png"
import bizon from"../assests/animals-bizon-trava-progulka-pole-152271 (1) 1.jpg"
import icon from "../assests/bizon 1.png"


function Head() {
  return (


    <div className="bizon">

      <img src={bizon} alt="bizon "/>
        <div className="bizon-h1">WELCOME TO THE SWO TAX OFFICE ON-LINE</div>
        <div className="bizon-p">
          Through this webpage, new and currently licensed vendors may request and submit their application to the SWO
          Tax Office for processing.
        </div>

        <img src={decor} alt="decor "/>
        <div className="head">
          <div className="head-first">
            <p> The SWO Tax Office is able to receive your application on-line and will process through your application
              in accordance with the Sisseton Wahpeton Oyate Tribal Code and regulations.</p>

              <p> A tribal business license is required for all businesses doing business with the Sisseton Wahpeton
                Oyate in Indian County within the Lake Traverse Reservation.</p>

                <p> Without such license, no payment shall be made by the Tribe for goods or services.</p>

                  <p> Submission of the annual business license fee may be sent to the SWO Tax Office by check or money
                    order sent through the U.S. Mail to the following address: SWO Tax Office, P.O. Box 776, Agency
                    Village, S.D. 57262.</p>

                    <p> If you wish, you may bring your check or cash payment to the SWO Tax Office to pay for your
                      annual business license fee.</p>


                      <p>No license will be issued until the check clears the bank.</p>

                        <h1>
                          PLEASE PUT YOUR APPLICATION NUMBER ON YOUR CHECK OR MONEY ORDER.</h1>
            <div className="bizon-png">
              <img src={icon} alt="bizon "/>
              <img src={icon} alt="bizon "/>
              <img src={icon} alt="bizon "/>
              <img src={icon} alt="bizon "/>
              <img src={icon} alt="bizon "/>
            </div>
            <h2>BENEFITS TO BEING A LICENSED SWO VENDOR:</h2>
            <p>Being a SWO licensed vendor entitles you to do business with all SWO programs, businesses and
              organizations.</p>

              <p>Once approved, your business contact information is on a master vendor listing which is accessed by all
                program managers.</p>


                <p>Your tribal business license is good for twelve months from the date of issue.</p>


                  <p>To read the current SWO Business License Ordinance, Chapter 53, please contact the Tax Officce at
                    (605)698-3541</p>

          </div>
          </div>
          </div>





  );

}

export default Head;
