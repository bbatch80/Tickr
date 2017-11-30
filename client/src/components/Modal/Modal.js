import React from "react";
import Login from "../Login";



class Modal extends React.Component {

render(){

 return <div>
 
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Login
</button>


<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="exampleModalLabel">Please Login</h2>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Login/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
}

}

export default Modal;
