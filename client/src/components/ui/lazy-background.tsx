
import { useEffect, useRef, useState } from "react";

interface LazyBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

export function LazyBackground({ src, className, children }: LazyBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500`}
      style={
        loaded
          ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {children}
    </div>
  );
}
