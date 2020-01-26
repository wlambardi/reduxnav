import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import {registerScreens} from './screens';
import Icon from 'react-native-vector-icons/EvilIcons';

const store = configureStore();

registerScreens(Provider, store);

export const start = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        background: {
          color: '#710389'
        }
      },
      statusBarStyle: 'light'
    })
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'HomeScreen',
                options: {
                  topBar: {
                    title: {
                      text: 'MediaMonks',
                      fontSize: 16,
                      color: '#fff',
                      fontFamily: 'Helvetica',
                      fontWeight: 'bold', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
                      alignment: 'center'
                    },
                    subtitle: {
                      text: 'Challenge',
                      fontSize: 14,
                      color: '#fff',
                      fontFamily: 'Helvetica',
                      fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
                      alignment: 'center'
                    }
                  }
                }
              },
            },
          ],
        },
      },
    });
  });
};

export const pushScreen = props => {
  const {componentId} = props;
  Navigation.push(componentId, {
    component: {
      name: 'PushedScreen',
      options: {
        topBar: {
          title: {
            text: 'MediaMonks',
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'bold', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          subtitle: {
            text: 'PushedScreen',
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: '#fff',
          },
        }
      }
    },
  });
};


export const PostsScreen = props => {
  const {componentId} = props;
  Navigation.push(componentId, {
    component: {
      name: 'Posts',
      options: {
        topBar: {
          title: {
            text: 'MediaMonks',
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'bold', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          subtitle: {
            text: 'Posts',
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: '#fff',
          },
        }
      }
    },
  });
};

export const openPostDetail = (props, data) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'PostDetail',
            passProps: {
              id: data.id,
              title: data.title,
              body: data.body,
            },
            options: {
              topBar: {
                title: {
                  text: (data.title.length>20 ? `${data.title.substr(0,20)} ...` : data.title),
                  fontSize: 16,
                  color: '#fff',
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
                  alignment: 'center'
                },
                leftButtons: [
                  {
                    text: 'Close',
                    id: 'leftButton',
                    color: '#fff',
                    //icon: require('../../assets/close.png'),
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};

export const AlbumScreen = props => {
  const {componentId} = props;
  Navigation.push(componentId, {
    component: {
      name: 'Albums',
      options: {
        topBar: {
          title: {
            text: 'MediaMonks',
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'bold', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          subtitle: {
            text: 'Albums',
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: '#fff',
          },
        }
      }
    },
  });
};


export const PhotosScreen = (props, id, title) => {
  const {componentId} = props;
  console.log('PhotosScreen nav id',id);
  console.log('PhotosScreen nav title',title);
  Navigation.push(componentId, {
    component: {
      name: 'Photos',
      passProps: {
        item: id,
        title: title,
      },
      options: {
        topBar: {
          title: {
            text: 'MediaMonks',
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'bold', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          subtitle: {
            text: (title.length>20 ? `${title.substr(0,20)} ...` : title),
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Helvetica',
            fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
            alignment: 'center'
          },
          backButton: {
            title: 'Back',
            color: '#fff',
          },
        }
      }
    },
  });
};

export const openModal = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'ModalScreen',
            passProps: {
              text: 'This is the modal screen',
            },
            options: {
              topBar: {
                title: {
                  text: 'Title text',
                  fontSize: 16,
                  color: '#fff',
                  fontFamily: 'Helvetica',
                  fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
                  alignment: 'center'
                },
                leftButtons: [
                  {
                    color: '#00bfff',
                    text: 'button',
                    id: 'leftButton',
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};
