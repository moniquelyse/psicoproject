function CTAButton({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`
        font-albert py-2 px-4 text-xl
        bg-accent text-primary-bg
        rounded-full font-bold
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default CTAButton