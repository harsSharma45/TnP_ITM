interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = "" }: GradientTextProps) => (
  <span className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
); 