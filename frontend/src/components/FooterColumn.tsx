type FooterColumnProps = {
  title: string
  items: string[]
}

export const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="pt-[75px]">
      <h3 className="font-bold text-[20px] leading-[16px] tracking-[8%]">
        {title}
      </h3>
      <ul className="space-y-[21px] pt-[57px]">
        {items.map(item => (
          <li
            key={item}
            className="font-normal text-[20px] leading-[16px] tracking-[8%] hover:text-gray-300 cursor-pointer transition-colors whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
