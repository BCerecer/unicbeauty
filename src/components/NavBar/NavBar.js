import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import uniclogo from './uniclogo.png'
import logoBanner from './logoBanner.png'
import facebook from './facebook-box.svg';
import instagram from './instagram.svg';
import phone from './phone.svg';
import gmail from './gmail.svg';
import facebookWhite from './facebookwhite.svg';
import instagramWhite from './instagramwhite.svg';
import phoneWhite from './phonewhite.svg';
import gmailWhite from './gmailwhite.svg';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 40,
  },
  appFrame: {
    height: 40,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  'uniclogo': {
    position: 'absolute',
    bottom: '10px',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  'contact': {
    position: 'absolute',
    bottom: '90px',
    left: '0',
    right: '0',
   },
});


class NavBar extends Component {

  constructor() {
    super();
      this.state = {
        open: false,
      };
      this.handleClickHome = this.handleClickHome.bind(this);
      this.handleClickModels = this.handleClickModels.bind(this);
      this.handleClickWorkshops = this.handleClickWorkshops.bind(this);
    };



  toggleDrawer = (open) => () => {
    this.setState({
      open: open
    });
  };

  handleClickHome() {
    this.props.onClickHome();
  }

  handleClickModels() {
    this.props.onClickModels();
  }

  handleClickWorkshops() {
    this.props.onClickWorkshops();
  }

  render () {
    const { classes } = this.props;
    const { open } = this.state;

    const drawer = (
      <Drawer
        open={open} 
        onClose={this.toggleDrawer(false)}
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.toggleDrawer(false)}>
             <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
          <MenuItem onClick={this.handleClickHome.bind()}>Home</MenuItem>
        <Divider />
          <MenuItem onClick={this.handleClickModels.bind()}>Models</MenuItem>
        <Divider />
          <MenuItem onClick={this.handleClickWorkshops.bind()}>Workshops</MenuItem>
                    

        <Divider />
        <MenuItem  className={classes.contact} >
          <IconButton href="tel:1-619-483-0123" color="inherit"><img src={phone} alt="phone" height="28" width="28"/></IconButton>                  
          <IconButton href="mailto:unicbeautyma@gmail.com" color="inherit"><img src={gmail} alt="gmail" height="28" width="28" /></IconButton>
          <IconButton href="https://www.facebook.com/unicbeautyma" color="inherit"><img src={facebook} alt="facebook" height="28" width="28" /></IconButton>
          <IconButton href="https://www.instagram.com/unicbeauty_ma_/" color="inherit"><img src={instagram} alt="instagram" height="28" width="28" /></IconButton>
        </MenuItem>  
        <Divider />
        <img href="#" src={uniclogo} alt="UnicBeautyLogo" className={classes.uniclogo} height="57" width="57" />

      </Drawer>
    );

    return (
        <div className={classes.root}>
          <AppBar style={{ backgroundColor: '#fba1c1' }}>
            <Container>
              <Toolbar>
                <Hidden mdUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.toggleDrawer(true)} 
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>

                <img src={logoBanner} style={{cursor: 'pointer'}} alt="UnicBeautyLogo" height="35" width="155" />
                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                </Typography>
                  
                <Hidden smDown implementation="css">
                  <Button onClick={this.handleClickHome.bind()} color="inherit">Home</Button>
                  <Button onClick={this.handleClickModels.bind()}color="inherit">Models</Button>
                  <Button onClick={this.handleClickWorkshops.bind()}color="inherit">Workshops</Button>
                  <IconButton href="tel:1-619-483-0123" color="inherit"><img src={phoneWhite} alt="phone" height="28" width="28"/></IconButton>                  
                  <IconButton href="mailto:unicbeautyma@gmail.com" color="inherit"><img src={gmailWhite} alt="gmail" height="28" width="28" /></IconButton>
                  <IconButton href="https://www.facebook.com/unicbeautyma" color="inherit"><img src={facebookWhite} alt="facebook" height="28" width="28" /></IconButton>
                  <IconButton href="https://www.instagram.com/unicbeauty_ma_/" color="inherit"><img src={instagramWhite} alt="instagram" height="28" width="28" /></IconButton>
                </Hidden>
              </Toolbar>
            </Container>
          </AppBar>
          {drawer}
        </div>
    );
  }
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired, 
};
export default withStyles(styles, { withTheme: true })(NavBar);
