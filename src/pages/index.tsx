import React from 'react';
import ripple from 'ripple-effects';

const Index = () => {
  const rippleSettings = {
    empty: {
      a: {
        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.45) 0%, #FFFFFF 100%)",
        opacity: 0.32,
        width: "297px",
        height: "297px",
        triggerExcept: ".pill-not-found",
      },
      b: {
        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.45) 0%, #FFFFFF 100%)",
        opacity: 0.59,
        width: "149px",
        height: "149px",
        triggerExcept: ".pill-not-found",
      }
    },
    found: {
      a: {
        background: "radial-gradient(50% 50% at 50% 50%, #6DB628 0%, #6BB528 100%)",
        opacity: 0.32,
        width: "297px",
        height: "297px",
        triggerExcept: ".ghost-game-area, .pill-found",
      },
      b: {
        background: "radial-gradient(50% 50% at 50% 50%, #6DB628 0%, #6BB528 100%)",
        opacity: 0.28,
        width: "149px",
        height: "149px",
        triggerExcept: ".ghost-game-area, .pill-found",
      }
    }
  }

  const foundText = 'FOUND!';

  const areaClick = (e: any) => {
    const item = e.target;
    const classList = [...item.classList];

    if (typeof window !== 'undefined' && classList.find((className) => className === 'pill-not-found')) {
      const dataIndex = item.getAttribute('data-index');
      window.navigator.vibrate(200);
      
      (document as any).querySelector(`[data-index="${dataIndex}"]`).classList.add('pill-found');
      (document as any).querySelector(`[data-index="${dataIndex}"]`).classList.remove('pill-not-found');
      (document as any).querySelector(`[data-find="${dataIndex}"]`).classList.add('toFind-found');
    }
  }

  React.useEffect(() => {
    ripple(".game-area", rippleSettings.found.a);
    ripple(".game-area", rippleSettings.found.b);

    ripple(".game-area", rippleSettings.empty.a);
    ripple(".game-area", rippleSettings.empty.b);
  }, []);

  return (
    <div className="App">
      <div className="to-find">
        <span className={`toFind toFind-1`} data-find="a">1</span>
        <span className={`toFind toFind-2`} data-find="b">2</span>
        <span className={`toFind toFind-3`} data-find="c">3</span>
        <span className={`toFind toFind-4`} data-find="d">4</span>
      </div>
      <div className="game-area" onClick={(e) => areaClick(e)}>
        <div className="ghost-game-area"></div>
        <span className={`pill pill-1 pill-not-found`} data-index='a' data-found-text={foundText}></span>
        <span className={`pill pill-2 pill-not-found`} data-index='b' data-found-text={foundText}></span>
        <span className={`pill pill-3 pill-not-found`} data-index='c' data-found-text={foundText}></span>
        <span className={`pill pill-4 pill-not-found`} data-index='d' data-found-text={foundText}></span>
      </div>
    </div>
  );
};

export default Index;