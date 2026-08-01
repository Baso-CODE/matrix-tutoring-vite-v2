import "./ReusableButton.css";

const ReusableButton = ({
  text,
  bgColor,
  borderColor,
  textColor,
  onClick,
  icon,
  ariaLabel,
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    "--button-border-color": borderColor,
  };

  return (
    <button
      className="reusable-button"
      style={buttonStyle}
      onClick={onClick}
      aria-label={ariaLabel || text}
      type="button">
      {text}
      {icon && (
        <span className="reusable-button-icon-container" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ReusableButton;
