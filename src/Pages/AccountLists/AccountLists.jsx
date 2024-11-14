import React from "react";

function AccountLists() {
  return (
    <>
      <div class="list-container">
        <div class="list-header">Account list</div>
        <div class="list-content">
          <ul>
            <li>
              <div class="account-type">
                <span>1111</span>
                <span>jari</span>
              </div>
              <div>active</div>
            </li>
            <li>
              <div class="account-type">
                <span>1111</span>
                <span>gharsolhasane</span>
              </div>
              <div>blocked</div>
            </li>
            <li>
              <div class="account-type">
                <span>1111</span>
                <span>gharsolhasane</span>
              </div>
              <div>blocked</div>
            </li>
            <li>
              <div class="account-type">
                <span>1111</span>
                <span>gharsolhasane</span>
              </div>
              <div>active</div>
            </li>
            <li>
              <div class="account-type">
                <span>1111</span>
                <span>gharsolhasane</span>
              </div>
              <div>active</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AccountLists;
