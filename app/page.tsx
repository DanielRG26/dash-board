"use client"

import { useState } from "react"
import {
  Home,
  ShoppingCart,
  Package,
  BarChart3,
  Megaphone,
  MessageSquare,
  ChevronDown,
  LogOut,
  Search,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Download,
  Play,
  Check,
  ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Orders", hasSubmenu: true },
  { icon: Package, label: "Products", hasSubmenu: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Megaphone, label: "Marketing", hasSubmenu: true },
  { icon: MessageSquare, label: "Messages", badge: 25 },
]

const sessionData = [
  { day: "21", sessions: 2 },
  { day: "22", sessions: 4 },
  { day: "23", sessions: 3 },
  { day: "24", sessions: 6 },
  { day: "25", sessions: 5 },
  { day: "26", sessions: 8 },
  { day: "27", sessions: 6 },
  { day: "28", sessions: 10 },
  { day: "29", sessions: 8 },
  { day: "30", sessions: 12 },
  { day: "31", sessions: 15 },
]

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <div className="min-h-screen bg-[#ECEEF3] p-6">
      <div className="flex gap-6 max-w-[1400px] mx-auto">
        {/* Sidebar */}
        <aside className="w-[240px] min-w-[240px] bg-white rounded-3xl p-5 flex flex-col h-[calc(100vh-48px)] shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center rotate-12">
              <span className="text-white font-bold text-base -rotate-12">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">flex</span>
          </div>

          {/* Menu */}
          <nav className="flex-1">
            <p className="text-[11px] font-medium text-gray-400 mb-3 tracking-wide">Menu</p>
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeItem === item.label
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => setActiveItem(item.label)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all",
                        isActive
                          ? "bg-[#4F46E5] text-white shadow-lg shadow-indigo-500/30"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronDown className={cn("w-4 h-4", !isActive && "text-gray-400")} />
                      )}
                      {item.badge && (
                        <span className={cn(
                          "text-[11px] px-2 py-0.5 rounded-full font-medium",
                          isActive ? "bg-white/20 text-white" : "bg-[#4F46E5] text-white"
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Integrations */}
            <p className="text-[11px] font-medium text-gray-400 mb-3 mt-8 tracking-wide">
              Integrations
            </p>
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M4.98 13.75L12 17.5L19.02 13.75" stroke="#2684FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.98 10L12 13.75L19.02 10" stroke="#2684FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2.5L4.98 6.25L12 10L19.02 6.25L12 2.5Z" fill="#2684FF"/>
                  </svg>
                  <span>Jira</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="9" width="6" height="6" rx="1.5" fill="#E01E5A"/>
                    <rect x="9" y="2" width="6" height="6" rx="1.5" fill="#36C5F0"/>
                    <rect x="16" y="9" width="6" height="6" rx="1.5" fill="#2EB67D"/>
                    <rect x="9" y="16" width="6" height="6" rx="1.5" fill="#ECB22E"/>
                  </svg>
                  <span>Slack</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="5" fill="#1F8CEB"/>
                    <path d="M7 8h10M7 12h7M7 16h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Intercom</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Logout */}
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-all mt-auto">
            <LogOut className="w-5 h-5" strokeWidth={1.5} />
            <span>Logout</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <header className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[280px] h-10 pl-11 pr-4 rounded-full border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#4F46E5] rounded-full border-2 border-white"></span>
              </button>
              <div className="bg-white rounded-2xl px-4 py-2 border border-gray-100 shadow-sm">
                <p className="text-[10px] text-gray-400 font-medium">Your Balance</p>
                <p className="text-sm font-bold text-[#4F46E5]">$5,456</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Avatar className="w-10 h-10 border-2 border-white shadow-md">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="User" />
                  <AvatarFallback className="bg-orange-100 text-orange-600">LA</AvatarFallback>
                </Avatar>
                <p className="text-sm font-semibold text-gray-900">Hi, Lay</p>
              </div>
            </div>
          </header>

          {/* Dashboard Title */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4F46E5]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h1 className="text-[22px] font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-full gap-2 h-10 px-4 border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
                <Calendar className="w-4 h-4" />
                This Month
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
              <Button className="rounded-full gap-2 h-10 px-5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium shadow-lg shadow-indigo-500/25">
                <Download className="w-4 h-4" />
                Download Report
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-5 mb-6">
            {[
              { label: "Total Sales", value: "263k", change: 15.6, color: "#4F46E5", icon: "cart" },
              { label: "Total Visitors", value: "35k", change: -6.2, color: "#4F46E5", icon: "users" },
              { label: "Total Orders", value: "165k", change: 3.5, color: "#4F46E5", icon: "bag" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={cn("w-14 h-14 rounded-full flex items-center justify-center relative", stat.color === "#4F46E5" ? "bg-indigo-50" : "bg-indigo-50")}>
                    <div 
                      className="absolute inset-0 rounded-full border-[3px]" 
                      style={{ 
                        borderColor: stat.color,
                        clipPath: "polygon(0 0, 70% 0, 70% 100%, 0 100%)" 
                      }} 
                    />
                    {stat.icon === "cart" && (
                      <svg className="w-6 h-6" style={{ color: stat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    )}
                    {stat.icon === "users" && (
                      <svg className="w-6 h-6" style={{ color: stat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    )}
                    {stat.icon === "bag" && (
                      <svg className="w-6 h-6" style={{ color: stat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-400 mb-0.5">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[26px] font-bold text-gray-900">{stat.value}</span>
                      <span className={cn("text-[13px] font-semibold", stat.change > 0 ? "text-[#4F46E5]" : "text-[#EF4444]")}>
                        {stat.change > 0 ? "↑" : "↓"} {Math.abs(stat.change)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-5 gap-5">
            {/* Sessions Chart */}
            <div className="col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[15px] font-semibold text-gray-900">Online Store Sessions</h3>
                <Button variant="outline" size="sm" className="rounded-full text-[12px] h-8 px-4 border-gray-200 text-gray-500 font-medium hover:bg-gray-50">
                  View Report
                </Button>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-indigo-50 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Visitors</p>
                    <p className="text-[28px] font-bold text-gray-900 leading-none">68</p>
                  </div>
                </div>
                <div className="text-[#4F46E5] text-[13px] font-semibold">↑ 15.6%</div>
                <div className="ml-auto flex items-center gap-4">
                  <p className="text-[24px] font-bold text-gray-900">26</p>
                  <div className="text-[#EF4444] text-[13px] font-semibold">↓ 1.6%</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[13px] font-medium text-gray-700">Sessions Over Time</h4>
                <Button variant="outline" size="sm" className="rounded-full text-[12px] h-8 px-3 border-gray-200 text-gray-500 font-medium hover:bg-gray-50 gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  February
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </div>

              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sessionData}>
                    <defs>
                      <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.1} />
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="0" stroke="#f3f4f6" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} domain={[0, 15]} ticks={[0, 5, 10, 15]} dx={-10} />
                    <Area type="monotone" dataKey="sessions" stroke="#4F46E5" strokeWidth={2} fill="url(#sessionGradient)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-3.5 h-3.5 text-gray-400" />
                </button>
                <div className="flex items-center gap-1.5">
                  <span className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-[13px] font-medium shadow-lg shadow-indigo-500/30">21</span>
                  {[22, 23, 24, 25].map(day => (
                    <span key={day} className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] text-gray-400 hover:bg-gray-50 cursor-pointer">{day}</span>
                  ))}
                </div>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-2 flex flex-col gap-5">
              {/* Promo Card */}
              <div className="bg-[#4F46E5] rounded-2xl p-6 text-white relative overflow-hidden h-[160px]">
                <div className="absolute right-4 bottom-0 top-0 flex items-center">
                  <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
                    <path d="M15 75 L35 75 L35 70 L50 80 L35 90 L35 85 L15 85 Z" fill="rgba(255,255,255,0.6)" />
                    <path d="M25 50 L50 50 L50 45 L65 55 L50 65 L50 60 L25 60 Z" fill="rgba(255,255,255,0.4)" />
                    <circle cx="75" cy="35" r="8" fill="#D4A574" />
                    <line x1="75" y1="43" x2="75" y2="70" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                    <line x1="75" y1="50" x2="62" y2="60" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                    <line x1="75" y1="50" x2="88" y2="60" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                    <line x1="75" y1="70" x2="65" y2="95" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                    <line x1="75" y1="70" x2="85" y2="95" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
                    <ellipse cx="88" cy="70" rx="10" ry="6" fill="rgba(255,255,255,0.25)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-[18px] font-bold mb-1">Need More Stats?</h3>
                  <p className="text-[13px] opacity-90 mb-4">Upgrade to pro for added benefits.</p>
                  <Button className="bg-white text-[#4F46E5] hover:bg-white/95 rounded-full gap-2 h-9 px-5 text-[13px] font-semibold shadow-lg">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Go Pro Now
                  </Button>
                </div>
              </div>

              {/* Conversion Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">Conversion</h3>
                <div className="relative h-44 flex items-center justify-center">
                  <svg viewBox="0 0 200 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#A5B4FC" />
                      </linearGradient>
                    </defs>
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#F3F4F6" strokeWidth="16" strokeLinecap="round" />
                    <path d="M 20 100 A 80 80 0 0 1 165 55" fill="none" stroke="url(#gaugeGradient)" strokeWidth="16" strokeLinecap="round" />
                  </svg>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-[32px] font-bold text-[#4F46E5]">58,19%</p>
                    <div className="flex items-center gap-1 text-[#4F46E5] text-[13px] font-semibold justify-center">↑ 3.5%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#4F46E5]/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#4F46E5]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">Income</p>
                      <p className="text-[14px] font-bold text-gray-900">$542,317</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">Expences</p>
                      <p className="text-[14px] font-bold text-gray-900">$497,456</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

