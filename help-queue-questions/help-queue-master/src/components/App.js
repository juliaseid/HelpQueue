import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import QuestionControl from "./QuestionControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <QuestionControl />
      {/* <TicketControl /> */}
    </React.Fragment>
  );
}

export default App;