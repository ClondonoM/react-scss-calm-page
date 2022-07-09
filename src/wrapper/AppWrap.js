import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container `}>
        {idName !== 'contact' ? <SocialMedia /> : ''}
        {idName !== 'contact' ? (
          <div clasName='app__wrapper app__flex'>
            <Component />
          </div>
        ) : (
          <>
            <Component />
          </>
        )}
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
