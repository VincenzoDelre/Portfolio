import { useEffect, useRef, useState } from 'react';

    

const useScroll = () => {
    
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0)
  useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
  
        prevScrollY.current = currentScrollY;
        setCurrentScrollY(currentScrollY);
        //console.log(goingUp, currentScrollY,`${window.innerHeight}`,);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);
  
    return {
      currentScrollY,
      goingUp
  }


}
 
export default useScroll;