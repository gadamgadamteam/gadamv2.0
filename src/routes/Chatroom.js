import React from 'react'
import '../css/message.css'
import Talk from 'talkjs'
import { NavLink } from 'react-router-dom'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.talkjsContainer = React.createRef();
  }

  componentDidMount() {    
    Talk.ready.then(() => {
      var me = new Talk.User({
        id: parseInt(Math.random()*500000).toString(),
        name: "Alice",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "booker"
      });
      
     const talkSession = new Talk.Session({
        appId: "Hku1c4Pt",
        me: me
      });
      
      var other = new Talk.User({
        id: parseInt(Math.random()*500000).toString(),
        name: "Sebastian",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "booker"
      });

      var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      
      var inbox = talkSession.createInbox({selected: conversation});
      inbox.mount(this.talkjsContainer.current);
    });
  }

  render() {
    return (
      <div className='center_body6'>
        <div ref={this.talkjsContainer} className="chatbox-container"></div>
      </div>
    )
  }
}

export default Message
