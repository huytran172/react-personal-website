import React from 'react';
import Paper from 'material-ui/Paper';
import Media from "react-media";
import { SocialIcon } from 'react-social-icons';

const style = {
  root: {
    fontFamily: 'Heveltica, san-serif'
  },
  paper: {
    height: 600,
    margin: '20px auto',
    marginTop: '13%',
    width: '70%',
  },
  title: {
    color: '#E91E63',
    fontWeight: 300,
    fontSize: '3em',
    marginBottom: 100
  },
  paragraph: {
    lineHeight: 1.8,
    width: '70%',
    fontWeight: 300,
    fontSize: '2em'
  },
  paragraphSmall: {
    lineHeight: 1.8,
    width: '100%',
    fontWeight: 300,
    fontSize: '1.5em'
  },
  social: {
    marginTop: 30
  },
  icon: {
    marginRight: 10,
    height: 30,
    width: 30,
  }
};

const MainIntro = () => (
  <div style={style.root}>
    <Paper style={style.paper} zDepth={0}>
      <h1 style={style.title}>Hello, </h1>

      <Media query="(max-width: 599px)">
        {matches =>
          matches ? (
            <p style={style.paragraphSmall}>I'm Huy Tran, a detail oriented software engineer who loves to write beautiful and functional code with testing in mind and whip "monstrous code" into shape.</p>
          ) : (
            <p style={style.paragraph}>I'm Huy Tran, a detail oriented software engineer who loves to write beautiful and functional code with testing in mind and whip "monstrous code" into shape.</p>
          )
        }
      </Media>

      <div style={style.social}>
        <SocialIcon url="https://www.linkedin.com/in/huy-tran-85a7b0a4/" style={style.icon} color="#E91E63"/>
        <SocialIcon url="https://github.com/huytran172" style={style.icon} color="#E91E63"/>
        <SocialIcon url="https://www.facebook.com/huytran172" style={style.icon} color="#E91E63"/>
      </div>
      
    </Paper>
  </div>
);

export default MainIntro;