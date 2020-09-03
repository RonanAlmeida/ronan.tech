import React from "react";
import { Header, Icon, Popup } from "semantic-ui-react";

function IconOutline(props) {
  const style = {
    icon: { margin: "3rem"},
  };
  return (
    <Popup
      trigger={
        <Header as="h5" style={style.icon} icon>
          <Icon inverted color="black" name={props.name} size="huge" />
        </Header>
      }
      content={props.content}
      position="bottom center"
    />
  );
}
export default IconOutline;
