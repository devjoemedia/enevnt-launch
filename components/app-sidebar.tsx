"use client"

import * as React from "react"
import {
  AudioWaveform,
  CircleDollarSign,
  Command,
  GalleryVerticalEnd,
  GlobeIcon,
  Home,
  PieChart,
  SquareTerminal,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "eLaunch",
    email: "admin@elaunch.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "eLaunch",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "reaactsummit@2025",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "youthBlaze@2026.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Design",
      url: "/",
      icon: Home,
      isActive: true
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: CircleDollarSign,
      isActive: false
    },
    {
      title: "Forms",
      url: "/forms",
      icon: SquareTerminal,
      isActive: false
    },
    {
      title: "Engagements",
      url: "/engagements",
      icon: PieChart,
      isActive: false,
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: Users,
      isActive: false
    },
    {
      title: "Domain Management",
      url: "/domain-management",
      icon: GlobeIcon,
      isActive: false
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
