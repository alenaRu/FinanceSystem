import * as React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import withStyles from 'material-ui/styles/withStyles';
// import IconButton from 'material-ui/IconButton';
// import Menu from 'mdi-material-ui/Menu';
// import common from 'material-ui/colors/common';

const styles = theme => ({
  root : {
    height: 200,
    // background: `url(${'src/assets/img/react_logo.svg'})`
  }
});

const Header = (props) => {
  return (
    <AppBar position="static" className={props.classes.root}>
      <Toolbar>
        {/*<IconButton color="contrast" aria-label="Menu">*/}
        {/*<Menu/>*/}
        {/*</IconButton>*/}
        <Typography type="display3">
          Student Accounting
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
