import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class activityCreation extends React.Component {

  render(){
    const{classes} = this.props;


    return (
      <div>
      Typography variant="h1" gutterBottom>
          activityCreation Page
      </Typography>
      </div>
      
    );
  };
}

activityCreation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(activityCreation);