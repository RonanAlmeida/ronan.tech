import React from "react";
import {
  Popup,
  Rating,
  Card,
  Header,
  Icon,
  Image,
  Divider,
  Container,
  Segment,
  Grid,
  Button,
} from "semantic-ui-react";
import IconOutline from "../Components/IconOutline";
import GooeyReact from "../OuterComponents/GooeyReact";
import ModalPopup from "../Components/ModalPopup";
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
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    h2Custom: {
      fontSize: "1.5rem",
      marginLeft: "1rem",
      marginRight: "1rem",
      marginTop: "5.3em",
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
        subheader="Passionate about combing impactful software and algorithmic thinking to deliver effective user solutions"
        textAlign="center"
      />

      <IconOutline
        name="file alternate"
        content="Resume"
        href="https://drive.google.com/file/d/1Wjk8jy3bsXGBi9BfjVe4Up_F1gmYFcGf/view"
      />
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
      <Header
        as="h1"
        style={style.h2Custom}
        content="Projects"
        textAlign="center"
      />

      <Grid container columns={2} stackable>
        <Grid.Column>
        <Segment>LAREGE SCALE REACT APP </Segment>

        </Grid.Column>
        <Grid.Column>
        <Segment>TRM Dashboard</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>React mini apps</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Image Processing</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Student Database manager</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Console Chess</Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default MainPage;
