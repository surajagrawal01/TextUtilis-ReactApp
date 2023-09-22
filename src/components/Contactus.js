import React, {useState} from "react";

import PropTypes  from "prop-types";

export default function Contactus(props){

        const [myStyle, setMyStyle] = useState({
            color: 'black',
            backgroundColor: 'white'
        })

        const [btntext, setBtnText] =useState("Submit");

        //     let myStyle={      //To define color property, it must be defined as variable and data type must be object (key-value pair)(for styling)
        //         color: 'red',
        // backgroundColor: 'black'
        //     }

            const setStyle = ()=>{
                if(myStyle.color === "black"){
                setMyStyle({
                    color: 'red',
            backgroundColor: 'black'

        })
        setBtnText("Submit Data")
    }
                else{
                    setMyStyle({
                        color: 'black',
            backgroundColor: 'white'
                    })
                    setBtnText("Submit")
                }
            };

    return (
        <>
            <form className="row g-3" style={myStyle}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Email Id</label>
    <input type="email" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">{props.phoneNo}</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="mb-3">
  <label for="myBox" className="form-label">{props.message}</label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" onClick={setStyle} />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >{btntext}</button>
  </div>
</form>
        </>
    )
}

Contactus.propTypes = {
    message : PropTypes.string,
    phoneNo : PropTypes.number
}

Contactus.defaultProps = {
    message: "Message",
    phoneNo : "Phone No"
}