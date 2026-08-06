export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const styles = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-white text-black border",
  };

  return (
    <button
      className={`
        px-6 py-3 rounded-lg font-semibold
        transition duration-300
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}