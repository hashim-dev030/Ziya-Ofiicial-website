// academic button
const CourseButton = (props: { course: string }) => {
    const course = props.course
  return (
 <div
  className="
    w-[120px] h-[40px]        /* Default (mobile first) */
    md:w-[180px] md:h-[48px]  /* Medium screens */
    lg:w-[238px] lg:h-[56px]  /* Large and above */
    xl:w-[238px] xl:h-[56px]
    bg-[#94C21A] rounded-full flex items-center justify-center text-white
  "
>
  <span className="text-sm md:text-base lg:text-lg font-semibold">
   {course}
  </span>
</div>

  )
}

export default CourseButton
