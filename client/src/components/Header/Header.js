import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore, headerRequest } from '../../actions/actionCreator';
import Logo from '../../components/Logo/Logo';
import NavMenu from '../../components/NavMenu/NavMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isReading: false};
  }
 

  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }
  
  closeAnnouncement = () => {
    this.setState(
      {isReading: true}
    );
  }

  logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
  };

  startContests = () => {
      this.props.history.push('/start-contest');
  };

  renderLoginButtons = () => {
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={this.props.data.avatar === 'anon.png' ? 
                CONSTANTS.ANONYM_IMAGE_PATH : 
                `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                <li>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/account" style={{ textDecoration: 'none' }}>
                  <span>My Account</span>
                  </Link>
                </li>
                <li>
                  <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}>
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}>
                    <span>Affiliate Dashboard</span>
                  </Link>
                </li>
                <li><span onClick={this.logOut}>Logout</span></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" className={styles.linkBtn}>
            <span className={styles.btn}>Login</span>
          </Link>
          <Link to="/registration" className={styles.linkBtn}>
            <span className={styles.btn}>Sign Up</span>
          </Link>
        </>
      );
    };


    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={this.state.isReading ? styles.announcementHeader_closing : styles.announcementHeader}>
            <div className={styles.info}>
              <span className={styles.info_text}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
              <a href="http://www.google.com" target="_blank" rel="noreferrer">Read Announcement</a>              
            </div>
            <i class="fas fa-times" onClick = {this.closeAnnouncement}></i>
          </div>
          <div className={styles.loginSignUpHeaders}>
            <div className={styles.telContainer}>
              <a href='tel:+8773553585'>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
                <span>{CONSTANTS.CONTACT_US.PHONE}</span>   
              </a>
            </div>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
            <Logo className={styles.logo}/>
              <div className={styles.menuNav}>
              <NavMenu />
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <div className={styles.startContestBtn} onClick={this.startContests}>Starts Contests</div>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
