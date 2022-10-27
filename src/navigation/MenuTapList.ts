import Home from '../screens/home/Home';
import Friend from '../screens/friend/Friend';
import Notification from '../screens/notification/Notification';
import Messenger from '../screens/messenger/Messenger';
import Video from '../screens/video/Video';
import Market from '../screens/market/Market';
import Icons from '../theme/Icons';

const MenuTapList = [
  {
    name: 'Home',
    component: Home,
    title: 'Trang chủ',
    iconActive: Icons.icHouseFill,
    iconUnActive: Icons.icHouse,
  },
  {
    name: 'Friend',
    component: Friend,
    title: 'Friend',
    iconActive: Icons.icContactFill,
    iconUnActive: Icons.icContact,
  },
  {
    name: 'Notification',
    component: Notification,
    title: 'Notification',
    iconActive: Icons.icNotificationOn,
    iconUnActive: Icons.icNotification,
  },
  {
    name: 'Messenger',
    component: Messenger,
    title: 'Messenger',
    iconActive: Icons.icMailboxFill,
    iconUnActive: Icons.icMailbox,
  },
  {
    name: 'Video',
    component: Video,
    title: 'Video',
    iconActive: Icons.icTabApplicationFill,
    iconUnActive: Icons.icTabApplication,
  },
  {
    name: 'Market',
    component: Market,
    title: 'Market',
    iconActive: Icons.icCentreFill,
    iconUnActive: Icons.icCentre,
  },
];
export {MenuTapList};

//heart
//play-box
//shopping-search
//thumb-up
//thumb-down
