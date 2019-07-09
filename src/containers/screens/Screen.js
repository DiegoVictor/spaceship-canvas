import React from 'react';

class Screen extends React.Component {
  events = {}
  attach(event_name, callback) {
    this.events[event_name] = callback;
    document.addEventListener(
      event_name, this.events[event_name]
    );
  }

  componentWillUnmount() {
    Object.keys(this.events).forEach(event_name => {
      document.removeEventListener(
        event_name, this.events[event_name]
      );
    });
  }
}

export default Screen;