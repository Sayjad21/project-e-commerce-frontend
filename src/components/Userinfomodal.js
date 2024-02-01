// import React from 'react'

// export default function Userinfomodal(props) {
//     // user[0]= firstName;
//     // user[1]= lastName;
//     // user[2]= contactNumber;
//     // user[3]= dob;
//     // user[4]= nid;
//     // user[5]= city;
//     // user[6]= state;
//     // user[7]= zipCode;
//     // user[8]= country;
//     const {firstName,lastName,contactNumber,dob,nid,city,state,zipCode,country,creditCardNumber,creditCardType,email,password} = props.user;
//   return (
//     <div class="modal fade" id="userinfo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <h3>{firstName}<span>{lastName}</span></h3>
//         </div>
//     </div>
// </div>
//   )
// }


import React from 'react';

export default function Userinfomodal(props) {
  // Destructure user object
  const [
    firstName,
    lastName,
    contactNumber,
    dob,
    nid,
    city,
    state,
    zipCode,
    country
  ] = props.user;

  return (
    <div className="modal fade" id="userinfo" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">User Information</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Contact Number:</strong> {contactNumber}</p>
            <p><strong>Date of Birth:</strong> {dob}</p>
            <p><strong>NID:</strong> {nid}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>State:</strong> {state}</p>
            <p><strong>Zip Code:</strong> {zipCode}</p>
            <p><strong>Country:</strong> {country}</p>
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

