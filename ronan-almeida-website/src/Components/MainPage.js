import React from "react";
import { Feed, Card, Header, Icon, Image, Divider } from "semantic-ui-react";
import IconOutline from "./IconOutline";
import GooeyReact from "./GooeyReact";
function MainPage() {
  const style = {
    h1: {
      fontSize: "3em",
    },
    background: {
      backgroundColor: "#FFF2",
    },
    icon: {
      margin: "1rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
  };
  return (
    <div>
      <GooeyReact style={style.h1} />
      <Header
        as="h1"
        content="Ronan Almeida"
        subheader="Welcome to my personal website 👋"
        style={style.h1}
        textAlign="center"
        size="huge"
      />
    <Header sub>Software Engineer</Header>

      <Header
        as="h1"
        style={style.h2}
        size="big"
        subheader="Passionate about combing impactful software and algorithmic thinking to deliver effective user solutions"
        textAlign="center"
      />

      <IconOutline name="file alternate" content="Resume" href="" />
      <IconOutline
        name="linkedin"
        content="LinkedIn"
        href="https://www.linkedin.com/in/ronanalmeida/"
      />
      <IconOutline
        name="github"
        content="Github"
        href="https://github.com/RonanAlmeida"
      />

      <IconOutline
        name="mail"
        content="Email"
        href="mailto: ronan.almeida@queensu.ca"
      />

      <Divider horizontal>
        <Header as="h2">
          <Icon name="angle down" inverted color="black"></Icon>
        </Header>
      </Divider>
    </div>
  );
}

export default MainPage;
