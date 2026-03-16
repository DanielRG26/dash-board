"use client"

import { useState } from "react"
import {
  Home, ShoppingCart, Package, BarChart3, Megaphone,
  MessageSquare, ChevronDown, LogOut, Search, ChevronLeft,
  ChevronRight, Calendar, Download, Check, ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: ShoppingCart, label: "Orders", hasSubmenu: true },
  { icon: Package, label: "Products", hasSubmenu: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Megaphone, label: "Marketing", hasSubmenu: true },
  { icon: MessageSquare, label: "Messages", badge: 25 },
]

const sessionData = [
  { day: "21", sessions: 2 }, { day: "22", sessions: 4 },
  { day: "23", sessions: 3 }, { day: "24", sessions: 6 },
  { day: "25", sessions: 5 }, { day: "26", sessions: 8 },
  { day: "27", sessions: 6 }, { day: "28", sessions: 10 },
  { day: "29", sessions: 8 }, { day: "30", sessions: 12 },
  { day: "31", sessions: 15 },
]

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "100vh", background: "#F4F6F9" }}>

      {/* Sidebar */}
      <aside style={{ background: "#fff", boxShadow: "2px 0 8px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", padding: "24px 16px" }}>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center rotate-12">
            <span className="text-white font-bold text-base -rotate-12">R</span>
          </div>
          <span className="text-xl font-bold text-gray-900">flex</span>
        </div>

        <nav style={{ flex: 1 }}>
          <p className="text-[11px] font-medium text-gray-400 mb-3 px-2 tracking-wide uppercase">Menu</p>
          <ul className="space-y-0.5">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.label
              return (
                <li key={item.label}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all",
                      isActive ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-500/30" : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" strokeWidth={isActive ? 2 : 1.5} />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.hasSubmenu && <ChevronDown className={cn("w-3.5 h-3.5", !isActive && "text-gray-400")} />}
                    {item.badge && (
                      <span className={cn("text-[11px] px-1.5 py-0.5 rounded-full font-semibold", isActive ? "bg-white/20 text-white" : "bg-[#4F46E5] text-white")}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <p className="text-[11px] font-medium text-gray-400 mb-3 mt-7 px-2 tracking-wide uppercase">Integrations</p>
          <ul className="space-y-0.5">
            {[
              { label: "Jira", icon: <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none"><path d="M4.98 13.75L12 17.5L19.02 13.75" stroke="#2684FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.98 10L12 13.75L19.02 10" stroke="#2684FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2.5L4.98 6.25L12 10L19.02 6.25L12 2.5Z" fill="#2684FF"/></svg> },
              { label: "Slack", icon: <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none"><rect x="2" y="9" width="6" height="6" rx="1.5" fill="#E01E5A"/><rect x="9" y="2" width="6" height="6" rx="1.5" fill="#36C5F0"/><rect x="16" y="9" width="6" height="6" rx="1.5" fill="#2EB67D"/><rect x="9" y="16" width="6" height="6" rx="1.5" fill="#ECB22E"/></svg> },
              { label: "Intercom", icon: <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#1F8CEB"/><path d="M7 8h10M7 12h7M7 16h5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
            ].map(({ label, icon }) => (
              <li key={label}>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium text-gray-600 hover:bg-gray-50 transition-all">
                  {icon}<span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium text-gray-600 hover:bg-gray-50 transition-all">
          <LogOut className="w-[18px] h-[18px]" strokeWidth={1.5} /><span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px", minWidth: 0 }}>

        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-[320px] h-10 pl-11 pr-4 rounded-full border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 shadow-sm">
              <svg className="w-4.5 h-4.5 w-[18px] h-[18px] text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-[#4F46E5] rounded-full border-2 border-white"></span>
            </button>
            <div className="bg-white rounded-xl px-3 py-1.5 border border-gray-100 shadow-sm">
              <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Your Balance</p>
              <p className="text-sm font-bold text-[#4F46E5] leading-none">$5,456</p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-9 h-9 border-2 border-white shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="User" />
                <AvatarFallback className="bg-orange-100 text-orange-600 text-sm">LA</AvatarFallback>
              </Avatar>
              <p className="text-sm font-semibold text-gray-900">Hi, Lay</p>
            </div>
          </div>
        </header>

        {/* Dashboard Title Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-[#4F46E5]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <h1 className="text-[20px] font-bold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full gap-2 h-9 px-4 border-gray-200 bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 shadow-sm">
              <Calendar className="w-4 h-4" />This Month<ChevronDown className="w-3 h-3" />
            </Button>
            <Button className="rounded-full gap-2 h-9 px-5 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium shadow-md shadow-emerald-500/25">
              <Download className="w-4 h-4" />Download Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {[
            { label: "Total Sales", value: "263k", change: 15.6, icon: "cart" },
            { label: "Total Visitors", value: "35k", change: -6.2, icon: "users" },
            { label: "Total Orders", value: "165k", change: 3.5, icon: "bag" },
          ].map((stat, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  {stat.icon === "cart" && <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>}
                  {stat.icon === "users" && <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>}
                  {stat.icon === "bag" && <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>}
                </div>
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[24px] font-bold text-gray-900">{stat.value}</span>
                    <span className={cn("text-[12px] font-semibold", stat.change > 0 ? "text-[#10B981]" : "text-[#EF4444]")}>
                      {stat.change > 0 ? "↑" : "↓"} {Math.abs(stat.change)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "20px" }}>

          {/* Sessions Chart Card */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[15px] font-semibold text-gray-900">Online Store Sessions</h3>
              <Button variant="outline" size="sm" className="rounded-full text-[12px] h-8 px-4 border-gray-200 text-gray-500 font-medium hover:bg-gray-50">
                View Report
              </Button>
            </div>

            <div className="flex items-center gap-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Visitors</p>
                  <p className="text-[26px] font-bold text-gray-900 leading-none">68</p>
                </div>
              </div>
              <span className="text-[#10B981] text-[12px] font-semibold">↑ 15.6%</span>
              <div className="ml-auto flex items-center gap-3">
                <p className="text-[22px] font-bold text-gray-900">26</p>
                <span className="text-[#EF4444] text-[12px] font-semibold">↓ 1.6%</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[13px] font-semibold text-gray-700">Sessions Over Time</h4>
              <Button variant="outline" size="sm" className="rounded-full text-[12px] h-8 px-3 border-gray-200 text-gray-500 font-medium hover:bg-gray-50 gap-1.5">
                <Calendar className="w-3.5 h-3.5" />February<ChevronDown className="w-3 h-3" />
              </Button>
            </div>

            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sessionData}>
                  <defs>
                    <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.08} />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="0" stroke="#f3f4f6" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} dy={8} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} domain={[0, 15]} ticks={[0, 5, 10, 15]} dx={-8} />
                  <Area type="monotone" dataKey="sessions" stroke="#4F46E5" strokeWidth={2} fill="url(#sg)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
              <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <ChevronLeft className="w-3.5 h-3.5 text-gray-400" />
              </button>
              <div className="flex items-center gap-1">
                <span className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-[12px] font-semibold shadow-md shadow-indigo-500/30">21</span>
                {[22, 23, 24, 25].map(d => (
                  <span key={d} className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] text-gray-400 hover:bg-gray-100 cursor-pointer">{d}</span>
                ))}
              </div>
              <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Promo Card */}
            <div style={{ background: "#4F46E5", borderRadius: "16px", padding: "24px", color: "#fff", position: "relative", overflow: "hidden", minHeight: "150px" }}>
              <div style={{ position: "absolute", right: "12px", bottom: 0, top: 0, display: "flex", alignItems: "center" }}>
                <svg width="110" height="130" viewBox="0 0 110 130" fill="none">
                  <path d="M15 80 L38 80 L38 74 L55 86 L38 98 L38 92 L15 92 Z" fill="rgba(255,255,255,0.55)" />
                  <path d="M25 55 L52 55 L52 49 L69 61 L52 73 L52 67 L25 67 Z" fill="rgba(255,255,255,0.35)" />
                  <circle cx="82" cy="32" r="9" fill="#D4A574" />
                  <line x1="82" y1="41" x2="82" y2="72" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="52" x2="68" y2="63" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="52" x2="96" y2="63" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="72" x2="72" y2="100" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="72" x2="92" y2="100" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                  <ellipse cx="96" cy="74" rx="11" ry="7" fill="rgba(255,255,255,0.2)" />
                </svg>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "4px" }}>Need More Stats?</h3>
                <p style={{ fontSize: "12px", opacity: 0.85, marginBottom: "16px" }}>Upgrade to pro for added benefits.</p>
                <Button className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full gap-2 h-9 px-5 text-[13px] font-semibold shadow-lg">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  Go Pro Now
                </Button>
              </div>
            </div>

            {/* Conversion Card */}
            <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", flex: 1 }}>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-1">Conversion</h3>
              <div style={{ position: "relative", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 220 130" style={{ width: "100%", height: "100%" }}>
                  <path d="M 18 115 A 92 92 0 0 1 202 115" fill="none" stroke="#E0E4F0" strokeWidth="26" strokeLinecap="butt" />
                  <path d="M 18 115 A 92 92 0 0 1 174 42" fill="none" stroke="#4F46E5" strokeWidth="26" strokeLinecap="butt" />
                  <line x1="174" y1="42" x2="184" y2="29" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap" }}>
                  <p style={{ fontSize: "28px", fontWeight: 700, color: "#111827", lineHeight: 1 }}>58,19%</p>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "#10B981", marginTop: "4px" }}>↑ 3.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[12px] text-gray-400">Income</span>
                  <span className="text-[13px] font-bold text-gray-900">$542,317</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[12px] text-gray-400">Expences</span>
                  <span className="text-[13px] font-bold text-gray-900">$497,456</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
