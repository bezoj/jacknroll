
export interface IMenuItems{
  id: string,
  label: string,
  href: string
}

export const menuItems = [
  {id: "band", label: "Band", href: "/band"},
  {id: "members", label: "Člani", href: "/clani"},
  {id: "about-us", label: "O nas", href: "/o-nas"},
  {id: "contact", label: "Kontakt", href: "/kontakt"},
  {id: "setlist", label: "Setlista", href: "/setlista"},
]