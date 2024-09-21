// ----- import du SASS -----
import "./background.scss";

// ----- Composant 'Background' -----
export function Background() {
  return (
    <>
      <div className="background">
        <div className="light-container">
          <div className="left-light"></div>
          <div className="right-light"></div>
        </div>
      </div>
      <div className="sticky-bg"></div>
    </>
  );
}
