import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PushToggle from '../components/PushToggle';


class Header extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
       chats: PropTypes.object.isRequired,
       isLoading: PropTypes.bool.isRequired,
   };

   static defaultProps = {
       chatId: 1,
   };

   render() {
       if (this.props.isLoading) {
           return <div>GeekChat</div>
       }

       const { chats, chatId } = this.props;

       return (
           <div className="header">
               <PushToggle/>
                <Link to='/profile/' style={ {
                    marginRight: '10px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                } }>
                    <Avatar color='white' style={ { marginRight: '10px' } } />
                    <span>Гик</span>
                </Link>
            </div>
       )
   }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

