import React from "react";
import user from '../../images/account.png'
const Main = () => {
  return (
    <section className="main-section">
        
      <h2 className="customer-name">Hillier Karlsan</h2>
      <div className="main-container">
        <div className="grid-item grid-col-span-2 left-column">
            <div className="flex">
                <img className="customer-avtar" src={user} alt="avtar" />
                <div>CustomerName</div>
                <div className="is-member">Member</div>
            </div>

            <div className="flex">
                <div>Ban from program</div>
                <div>View in Shopify</div>
            </div>
       </div>

       <div className="grid-item grid-col-span-2">
            <h3>Manual Points</h3>
            <p>Manually allot or deduct points</p>
            <input type="number" />
            <input type="checkbox" name="notify-customer" />
            <div>Update points</div>
       </div>

       <div className="grid-item grid-col-span-2">
            <h2>Activity</h2>
            <div>
                <div>Action</div>
                <div>Points</div>
                <div>Date</div>
            </div>
       </div>

        <div className="right-column">
            <div className="grid-item vip-tier-card">
                <h3>VIP Tier</h3>
            </div>

            <div className="grid-item details-card">
                <h3>Details</h3>
                <p>exapmle@gmails.com</p>
            </div>

            <div className="grid-item points-card">
                <h3>Points</h3>
                <p>0 points</p>
            </div>

            <div className="grid-item automated-gift-card">
                <h3>Automated Gift Card allocated</h3>
                <p>0 rupees</p>
            </div>  
                
            <div className="grid-item referrals-card">
                <h3>Referrals</h3>
                <div>
                    <p>Refferal link</p>
                    <p>SUPERLINK001</p>
                </div>
                <div>
                    <p>Completed</p>
                    <p>0</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Main;
