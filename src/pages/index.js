import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import AddIcon from '@material-ui/icons/Add';
import withRoot from '../withRoot';
import AppBar from '../Components/AppBar.js'

const styles = theme => ({
  fab: {
    margin: 0,
    top: 'auto',
    left: 'auto',
    bottom: theme.spacing.unit*2,
    right: theme.spacing.unit*2,
    position: 'fixed',
  },
  top:{
    textAlign: 'center',
    paddingTop: theme.spacing.unit*0,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
          <div className={classes.top}>
          <AppBar/>
          <List>
          {[0, 1, 2, 3, 4, 5, 6].map(value => (
            <ListItem key={value} dense button>
              <Avatar alt="Remy Sharp" src="http://multisim-insigneo.org/wp-content/uploads/2015/02/blank-profile-picture-300x300.png" />
              <ListItemText primary={`Split Activity ${value + 1}`} />
            </ListItem>
          ))}
        </List>
          </div>
          <div className={classes.fab}>
            <Dialog open={open} onClose={this.handleClose}>
              <DialogTitle>Super Secret Password</DialogTitle>
              <DialogContent>
                <DialogContentText>1-2-3-4-5</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={this.handleClose}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClick}>
              <AddIcon/>
            </Button>
          </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
