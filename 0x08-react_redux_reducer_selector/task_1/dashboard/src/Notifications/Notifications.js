import React, { Component } from "react";
import closeBtn from "../assets/close-btn.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenuAnimation: false,
      showNotificationList: false,
    }

    this.markAsRead = this.markAsRead.bind(this);
    this.handleMenuHover = this.handleMenuHover.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // return nextProps.length > this.props.listNotifications.length;
    return nextProps.displayDrawer !== this.props.displayDrawer ||
    nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleMenuHover() {
    this.setState({ showMenuAnimation: true});
  }

  handleNotificationClick() {
    this.setState({ showMenuAnimation: false});
  }

  render() {
    const { showMenuAnimation } = this.state;
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer} = this.props;
    return (
      <React.Fragment>
        <div 
        className={css(styles.menuItem, showMenuAnimation && styles.menuItemHover)}
        onMouseEnter={this.handleMenuHover}
        onMouseLeave={() => this.setState({showMenuAnimation: false})}
        onClick={handleHideDrawer}
        >
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              // onClick={(e) => {
              //   console.log("Close button has been clicked");
              // }}
              onClick={handleHideDrawer}
            >
              <img src={closeBtn} alt="X" width="10px" />
            </button>
            {this.props.listNotifications.length != 0 ? (
              <p>Here is the list of notifications</p> 
              ): null}
            <ul  className={css(styles.ul)}>
              {this.props.listNotifications.length == 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
                ): null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const bounceAnimation = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityAnimation = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },

};

const styles = StyleSheet.create({
  Notifications: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff8f8',
    zIndex: 1000,
    fontSize: '20px',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  "notification-header": {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    textAlign: 'right',
  },
  '[data-notification-type="default"]': {
    color: 'blue',
  },
  "[data-urgent]": {
    color: 'red',
  },
  
  '[data-notification-type="urgent"]': {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#fff8f8',
    },
  },

  menuItemHover: {
    animationName: [bounceAnimation, opacityAnimation],
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3',
  },

});

export default Notifications;
