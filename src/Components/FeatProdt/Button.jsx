function Button({ children, type = "", onClick, disabled }) {
    if (type === "primary")
      return (
        <button
          className="more-btn primary"
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    return (
      <button
        className="more-btn"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  
  export default Button;