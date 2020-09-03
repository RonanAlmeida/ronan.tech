import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Popup,
  Divider,
} from "semantic-ui-react";
import Goo from "gooey-react";
import IconOutline from "./IconOutline";

function MainPage() {
  const style = {
    h1: {
      marginTop: "8em",
    },
    background: {
      backgroundColor: "#FFF2",
    },
    icon: {
      margin: "3rem",
    },
    // h2: {
    //   margin: "4em 0em 2em",
    // },
    // h3: {
    //   marginTop: "2em",
    //   padding: "2em 0em",
    // },
    // last: {
    //   marginBottom: "300px",
    // },
  };
  return (
    <div style={style.background}>
      <Header
        as="h1"
        content="Ronan Almeida"
        subheader="Hey, Welcome to my personal website 👋"
        style={style.h1}
        textAlign="center"
        size="huge"
      />

      <Header
        as="h2"
        subheader="Passionate about combing impactful software and algorithmic thinking to deliver effective user solutions"
        textAlign="center"

      />



      <IconOutline name='file alternate' content='Resume'/>
      <IconOutline name='linkedin' content='LinkedIn'/>
      <IconOutline name='github' content='Github'/>

    <IconOutline name='mail' content='Email'/>

      <Divider horizontal>
        <Icon name="angle double down" size="massive"></Icon>
      </Divider>
      <Header as="h4" content=" 🚧 Site Under Construction 🚧" 
              textAlign="center"
              />
    </div>
  );
}

export default MainPage;
