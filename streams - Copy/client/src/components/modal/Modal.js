import React from 'react';
import ReactDOM from 'react-dom';


const Modal = (props) => {
	/* createPortal(arg1,arg2)
	arg1 - jsx
	arg2 - target
	but target will replace all the contents 
	hence we create a sibbling to root and attach */
	return ReactDOM.createPortal(
		<div onClick = {props.onDismiss} className = "ui dimmer modals visible active" >
			<div onClick = {(e)=>{e.stopPropagation();}} className = "ui standard modal visble active">
				{	/* Hello Mr. Sanketh */}
				<div className = "header">{props.title}</div>
				<div className = "content">
					{props.content}
				</div>
				<div className = "actions">{props.actions}</div>
			</div>
		</div>
		,document.querySelector("#modal")
	);
};

export default Modal;