export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const styles = {
    primary: "text-white",
    secondary: "bg-white text-black border",
  };

  return (
    <button
      className={`
        cursor-pointer
        bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold transition-all duration-300
        hover:bg-yellow-400 hover:scale-105 hover:shadow-xl
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}