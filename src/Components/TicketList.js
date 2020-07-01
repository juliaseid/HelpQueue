import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";


function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket) => // Loop through the list passed down from TicketControl.
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          // onTicketSelection={this.handleChangingSelectedTicket}
          whenTicketClicked={props.onTicketSelection}
          id={ticket.id}
          key={ticket.id} />
      )}
    </React.Fragment>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;