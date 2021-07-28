import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore, headerRequest } from '../../actions/actionCreator';
import Logo from '../../components/Logo/Logo';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
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
                  <Link
                    to="http:/www.google.com"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link>
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
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <a href="http://www.google.com" target="_blank" rel="noreferrer">Read Announcement</a>
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
              <div className={styles.nav}>
                <ul>
                  <li>
                    <span>Name Ideas</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">Beauty</a></li>
                      <li><a href="http://www.google.com">Consulting</a></li>
                      <li><a href="http://www.google.com">E-Commerce</a></li>
                      <li><a href="http://www.google.com">Fashion &#38; Clothing</a></li>
                      <li><a href="http://www.google.com">Finance</a></li>
                      <li><a href="http://www.google.com">Real Estate</a></li>
                      <li><a href="http://www.google.com">Tech</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">More Categories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Contests</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="/how-it-works">How It works</a></li>
                      <li><a href="http://www.google.com">Pricing</a></li>
                      <li><a href="http://www.google.com">Agence Service</a></li>
                      <li><a href="http://www.google.com">Active Contests</a></li>
                      <li><a href="http://www.google.com">Winners</a></li>
                      <li><a href="http://www.google.com">LeaderBoard</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">Become a Creative</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Our Work</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">Names</a></li>
                      <li><a href="http://www.google.com">Taglines</a></li>
                      <li><a href="http://www.google.com">Logos</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">Testimonials</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Names For Sale</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <li><a href="http://www.google.com">Popular Names</a></li>
                      <li><a href="http://www.google.com">Short Names</a></li>
                      <li><a href="http://www.google.com">Intriguing Names</a></li>
                      <li><a href="http://www.google.com">Names By Category</a></li>
                      <li><a href="http://www.google.com">Visual Name Search</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">Sell Your Domains</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Blog</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">Ultimate Naming Guide</a></li>
                      <li><a href="http://www.google.com">Poetic Devices In Business Naming</a></li>
                      <li><a href="http://www.google.com">Crowded Bar Theory</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">All Articles</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
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
