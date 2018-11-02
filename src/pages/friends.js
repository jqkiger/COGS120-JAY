import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class friends extends React.Component {

  render(){
    const{classes} = this.props;


    return (
      <div>
      Typography variant="h1" gutterBottom>
          Friends Page
      </Typography>
      </div>
      
    );
  };
}

friends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(friends);