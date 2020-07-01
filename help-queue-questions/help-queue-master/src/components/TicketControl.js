import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question from "./Question.js";
import PropTypes from "prop-types";
import QuestionControl from './QuestionControl';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
    };
    this.listViewClick = this.listViewClick.bind(this); 
  }

  listViewClick() {
    let listVisible;
    switch(this.state.listVisible) {
      case(true):
        listVisible = false;
        break;
      case(false):
        listVisible = true;
        break;
      default:
        listVisible = this.state.listVisible;
        break;
    }
    
    this.setState({ listVisible });
  }

  setVisibility = () => {
    if (this.state.listVisible) {
      return {
        component: (
          <TicketList/>
        ),
      };
    } else {
      return{
      component: (
        <QuestionControl />
        ),
      }
    }
  }


render(){
    let currentlyVisibleState = this.setVisibility();
    let buttonText = null;
    if (!this.state.listVisible) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.listViewClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}
  
export default TicketControl;





















// render(){
//     let currentlyVisibleState = null;
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewTicketForm />
//     } else {
//       currentlyVisibleState = <TicketList />
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//       </React.Fragment>
//     );
//   }

  