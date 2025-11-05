
import { IoChevronDownSharp } from "react-icons/io5";

const AnimatedArrow = () => {
  return (
    <div>
        {/*  Animated Down Arrow */}
  <div className="flex justify-center mt-8 ">
  <IoChevronDownSharp 
    className="text-[#00A0E3] w-6 h-6 sm:w-8 sm:h-8 animate-bounce-slow"
  />
</div>
    </div>
  )
}

export default AnimatedArrow
