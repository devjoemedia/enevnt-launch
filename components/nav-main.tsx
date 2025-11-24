"use client"

import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { MouseEventHandler } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"


export function NavMain({
  items,
  toggleSheet,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[],
  toggleSheet?: MouseEventHandler<HTMLLIElement>
}) {

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem onClick={toggleSheet} key={item.title} className=" rounded-lg " >
            <Link href={`${item.url}`}>
              <SidebarMenuButton tooltip={item.title} className="py-3 cursor-pointer hover:bg-slate-100 rounded  h-full" >
                {item.icon && <item.icon size={18} className="text-3xl text-brand" />}
                <span className="text-brand">{item.title} </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
