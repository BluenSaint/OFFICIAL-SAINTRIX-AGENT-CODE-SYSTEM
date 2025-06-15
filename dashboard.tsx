"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  Bell,
  Home,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  TrendingUp,
  Users,
  Wallet,
  ChevronDown,
} from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  const sidebarItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Wallet", icon: Wallet },
    { name: "Analytics", icon: BarChart3 },
    { name: "Messages", icon: MessageSquare, hasNotification: true },
    { name: "Transactions", icon: TrendingUp },
    { name: "Customers", icon: Users },
    { name: "Settings", icon: Settings },
    { name: "Notifications", icon: Bell, hasNotification: true },
    { name: "Sign out", icon: LogOut },
  ]

  const transactions = [
    { type: "Supermarket", amount: "-$ 23.50", date: "Jan 12, 17:32", icon: "🛒" },
    { type: "Mortgage", amount: "-$ 750.00", date: "Jan 11, 14:22", icon: "🏠" },
    { type: "Gas", amount: "-$ 45.80", date: "Jan 10, 09:15", icon: "⛽" },
    { type: "Restaurant", amount: "-$ 125.30", date: "Jan 09, 19:45", icon: "🍽️" },
    { type: "Salary", amount: "+$ 2,500", date: "Jan 08, 08:00", icon: "💰" },
  ]

  const investments = [
    { name: "Stocks", amount: "$ 520.00" },
    { name: "Cryptocurrency", amount: "$ 220.00" },
    { name: "Contributions", amount: "$ 135.00" },
    { name: "Stocks and bonds", amount: "$ 540.00" },
    { name: "Assets", amount: "$ 897.00" },
  ]

  const spendingCategories = [
    { name: "food", percentage: 57, color: "#8b5cf6" },
    { name: "house", percentage: 76, color: "#06b6d4" },
    { name: "car", percentage: 21, color: "#10b981" },
    { name: "party", percentage: 34, color: "#f59e0b" },
    { name: "holiday", percentage: 10, color: "#ef4444" },
  ]

  const chartData = [40, 80, 60, 90, 45, 70, 85, 55, 75, 65, 50, 95]
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="absolute top-8 left-8 text-white z-10">
        <p className="text-sm opacity-70 font-medium">UI/UX designer Kristi Kamlykova</p>
        <h1 className="text-5xl font-bold mt-2 tracking-tight">Dashboard finance</h1>
      </div>

      {/* Main Dashboard Container */}
      <div className="absolute top-32 left-8 right-8 bottom-8 z-10">
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl h-full flex overflow-hidden border border-slate-700/50 shadow-2xl">
          {/* Sidebar */}
          <div className="w-64 bg-slate-800/80 backdrop-blur-sm p-6 flex flex-col border-r border-slate-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-semibold text-lg">Develop</span>
            </div>

            <nav className="flex-1 space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 relative group ${
                    item.active || activeTab === item.name
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.hasNotification && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full ml-auto animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 mt-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Hello, Kristi welcome back</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="search..."
                    className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 w-64 h-10 rounded-xl"
                  />
                </div>
                <Avatar className="w-8 h-8 border-2 border-slate-600">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold">
                    KK
                  </AvatarFallback>
                </Avatar>
                <span className="text-white text-sm font-medium">Kristi Kamlykova</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Financial Overview */}
              <div className="col-span-8 space-y-6">
                {/* Balance Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <p className="text-slate-400 text-sm font-medium">Total balance</p>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <span>last month</span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-3">$857,850</p>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        <span className="text-xs text-green-400 font-medium">+2.5%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <p className="text-slate-400 text-sm font-medium">Total expenses</p>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <span>last month</span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-3">$198,110</p>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                        <span className="text-xs text-red-400 font-medium">-1.2%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <p className="text-slate-400 text-sm font-medium">Active cards</p>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <span>view all</span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded border-2 border-slate-700 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">VISA</span>
                          </div>
                          <div className="w-10 h-6 bg-gradient-to-r from-red-600 to-red-800 rounded border-2 border-slate-700 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">MC</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">$ 1452.23</p>
                        <p className="text-xs text-slate-400">**** 7834 8473 4578</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Chart Section */}
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-semibold">Desspection</CardTitle>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Income</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span>Outcome</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>last week</span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-end justify-between gap-1 px-2">
                      {chartData.map((height, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 flex-1">
                          <div
                            className={`w-full rounded-t-sm ${
                              index % 2 === 0
                                ? "bg-gradient-to-t from-purple-600 to-purple-400"
                                : "bg-gradient-to-t from-pink-600 to-pink-400"
                            }`}
                            style={{ height: `${height}%` }}
                          ></div>
                          <span className="text-xs text-slate-400 font-medium">{months[index]}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Spending Parameters */}
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-semibold">Spending parameters</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <span>last month</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-5 gap-4">
                      {spendingCategories.map((category) => (
                        <div key={category.name} className="text-center">
                          <div className="relative w-16 h-16 mx-auto mb-3">
                            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="rgb(51 65 85)"
                                strokeWidth="2"
                              />
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke={category.color}
                                strokeWidth="2"
                                strokeDasharray={`${category.percentage}, 100`}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{category.percentage}%</span>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm font-medium">{category.name}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Income and Expenses Chart */}
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-semibold">Income and expenses</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Apr 2022</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <span>last week</span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 relative">
                      <svg className="w-full h-full" viewBox="0 0 400 100">
                        <defs>
                          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                          <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#f472b6" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,50 Q50,30 100,40 T200,35 T300,45 T400,40"
                          fill="none"
                          stroke="url(#purpleGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0,60 Q50,70 100,65 T200,70 T300,60 T400,65"
                          fill="none"
                          stroke="url(#pinkGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        $3.5k
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-4 font-medium">
                      <span>Monday</span>
                      <span>Tuesday</span>
                      <span>Wednesday</span>
                      <span>Thursday</span>
                      <span>Friday</span>
                      <span>Saturday</span>
                      <span>Sunday</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Sidebar */}
              <div className="col-span-4 space-y-6">
                {/* Categories */}
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-semibold">Categories</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <span>last month</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <svg className="w-32 h-32" viewBox="0 0 42 42">
                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#374151" strokeWidth="3" />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#8b5cf6"
                          strokeWidth="3"
                          strokeDasharray="40 60"
                          strokeDashoffset="25"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="25 75"
                          strokeDashoffset="15"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#f59e0b"
                          strokeWidth="3"
                          strokeDasharray="20 80"
                          strokeDashoffset="5"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="15.915"
                          fill="transparent"
                          stroke="#ef4444"
                          strokeWidth="3"
                          strokeDasharray="15 85"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-white font-bold text-xl">100%</p>
                          <p className="text-slate-400 text-xs">of 100%</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-300 font-medium">food 54%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-slate-300 font-medium">car 17%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-slate-300 font-medium">shopping 23%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-slate-300 font-medium">holiday 6%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Transactions */}
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-semibold">Transactions</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <span>last day</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center border border-slate-600/50">
                              <span className="text-lg">{transaction.icon}</span>
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">{transaction.type}</p>
                              <p className="text-slate-400 text-xs">{transaction.date}</p>
                            </div>
                          </div>
                          <p
                            className={`text-sm font-semibold ${
                              transaction.amount.startsWith("+") ? "text-green-400" : "text-white"
                            }`}
                          >
                            {transaction.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Investments */}
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-semibold">Investments</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <span>last day</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {investments.map((investment, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <p className="text-white text-sm font-medium">{investment.name}</p>
                          </div>
                          <p className="text-white text-sm font-semibold">{investment.amount}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
