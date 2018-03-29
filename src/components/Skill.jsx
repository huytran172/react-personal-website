import React from 'react';
import Paper from 'material-ui/Paper';
import Media from "react-media";
import Subheader from 'material-ui/Subheader';  


const style = {
  root: {
    margin: 20
  },
  title: {
    color: '#E91E63',
    fontSize: '1.2em',
    marginBottom: 50

  },
  subtitle: {
    fontWeight: 600
  },
  skill: {
    fontWeight: 300,
    fontSize: '1.1em'
  }
};

const Skill = () => (
  <div className="container" style={style.root}>
    <div className="row">
      <div className="col-sm-2 col-sm-offset-2">
        <div style={style.title}>SKILLS</div>
      </div>
      <div className="col-sm-4">
        <div className="col-xs-6">
          <p style={style.subtitle}>LANGUAGES</p>
          <div style={style.skill}>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>Java</p>
            <p>HTML/CSS</p>
            <p>SQL</p>
          </div>
        </div>
        <div className="col-xs-6">
          <p style={style.subtitle}>FRAMEWORKS</p>
          <div style={style.skill}>
            <p>React</p>
            <p>Angular 5</p>
            <p>Laravel</p>
            <p>Bootstrap</p>
            <p>MaterialUI</p>
          </div>
        </div>
      </div>
      <div class="hidden-lg hidden-md hidden-sm">&nbsp;</div>
      <div className="col-sm-4">
        <div className="col-xs-6">
          <p style={style.subtitle}>TOOLS</p>
          <div style={style.skill}>
            <p>VS CODE</p>
            <p>Vim</p>
            <p>IntelliJ IDEs</p>
            <p>Git/Github</p>
            <p>PostMan</p>
          </div>
        </div>
        <div className="col-xs-6">
          <p style={style.subtitle}>TESTING</p>
          <div style={style.skill}>
            <p>JUnit</p>
            <p>Selenium</p>
            <p>PHPUnit</p>
            <p>Chai/Mocha</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skill;