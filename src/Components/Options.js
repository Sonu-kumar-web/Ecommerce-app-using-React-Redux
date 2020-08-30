import React from "react";

// Options component with a button and event handler
class Options extends React.Component {
   constructor(props) {
      super(props);
      this.handler = this.handler.bind(this);
   }

   handler(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.props.handler) this.props.handler(e);
   }

   render() {
      const { src, alt } = this.props;
      return (
         <div className="icon" onClick={this.handler}>
            <img src={src} alt={alt} style={this.props.style} />
         </div>
      );
   }
}

export default Options;
