import React from 'react';
import Paper from 'material-ui/Paper';
import Media from "react-media";
import Subheader from 'material-ui/Subheader';  


const style = {
  root: {
    margin: 20,
    marginBottom: 100
  },
  title: {
    color: '#E91E63',
    fontSize: '1.2em',
    marginBottom: 50

  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.7em',
    fontWeight: 300,
    marginBottom: 30
  }
};

const Background = () => (
  <div className="container" style={style.root}>
    <div className="row">
      <div className="col-sm-2 col-sm-offset-2">
        <div style={style.title}>BACKGROUND</div>
      </div>
      <div className="col-sm-6">
        <p style={style.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio architecto, omnis enim ab dolorum, earum tenetur quo itaque reiciendis in corrupti ducimus ullam voluptates totam modi, temporibus quia sequi veritatis?</p>
        <p style={style.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis saepe officia excepturi earum. Asperiores officia corrupti vitae similique libero eligendi, beatae ullam at, nemo consectetur culpa, accusamus quisquam sunt!</p>
      </div>
    </div>
  </div>
);

export default Background;