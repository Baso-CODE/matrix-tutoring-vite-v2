import "./ReusableButton.css";

const ReusableButton = ({
  text,
  bgColor = "rgba(255, 255, 255, 0.16)",
  borderColor = "rgba(255, 255, 255, 0.34)",
  textColor = "#ffffff",
  onClick,
  icon,
  ariaLabel,
}) => {
  const buttonStyle = {
    "--button-bg-color": bgColor,
    "--button-border-color": borderColor,
    "--button-text-color": textColor,
  };

  return (
    <button
      type="button"
      className="reusable-button"
      style={buttonStyle}
      onClick={onClick}
      aria-label={ariaLabel || text}>
      <span className="reusable-button-text">{text}</span>

      {icon && (
        <span className="reusable-button-icon-container" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ReusableButton;
