import { Link } from "react-router-dom"

type FooterItem = {
  label: string
  link: string
}

type FooterColumnProps = {
  title: string
  items: FooterItem[]
}

export const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="pt-[75px]">
      <h3 className="font-bold text-[20px] leading-[16px] tracking-[8%]">
        {title}
      </h3>
      <ul className="space-y-[21px] pt-[57px]">
        {items.map(({ label, link }) => (
          <li key={label}>
            <Link
              to={link}
              className="font-normal text-[20px] leading-[16px] tracking-[8%] hover:text-gray-300 cursor-pointer transition-colors whitespace-nowrap hover:text-yellow-400 transition-colors duration-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
