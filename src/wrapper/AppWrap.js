import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {idName !== 'contact' ? <SocialMedia /> : ''}
        <div clasName='app__wrapper app__flex'>
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
