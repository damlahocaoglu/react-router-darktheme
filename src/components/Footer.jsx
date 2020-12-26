import React from "react";

function Footer(props) {
  const {
    themeHandler,
    themeObj: { theme, bgColor, textColor, btnColor }
  } = props;
  return (
    <div className={`mt-5 ${bgColor} ${textColor}`}>
      <hr />
      <footer className="text-muted text-center mt-5 mb-5">
        <div className="container">
          <button className={`btn ${btnColor}`} onClick={themeHandler}>
            Change Theme
          </button>
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>GitHub </p>
          <a href="https://github.com/damlahocaoglu">@damlahocaoglu</a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
