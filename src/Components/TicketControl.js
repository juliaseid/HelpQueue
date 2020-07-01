import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      masterTicketList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({
      masterTicketList: newMasterTicketList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      // buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />; // new code
      // buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* {addTicketButton} */}
      </React.Fragment>
    );

  }

}

export default TicketControl;