"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Download,
  Eye,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Mail,
  PauseCircle,
  PlayCircle,
  Search,
  Settings,
  TrendingUp,
  Upload,
  User,
  FileSpreadsheet,
  FileImage,
  Target,
} from "lucide-react"

export default function SaintrixClientPortal() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [autopilotEnabled, setAutopilotEnabled] = useState(true)
  const [isExporting, setIsExporting] = useState(false)
  const [creditScore, setCreditScore] = useState(650)
  const [scoreChange, setScoreChange] = useState(+12)

  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "disputes", name: "Disputes", icon: FileText },
    { id: "timeline", name: "Timeline", icon: Calendar },
    { id: "upload", name: "Upload", icon: Upload },
    { id: "report", name: "Credit Report", icon: BarChart3 },
    { id: "letters", name: "Letters", icon: Mail },
    { id: "settings", name: "Settings", icon: Settings },
  ]

  const disputesData = [
    {
      creditor: "Capital One",
      accountType: "Credit Card",
      bureau: "Experian",
      violationType: "FCRA 611(a)(1)",
      status: "Removed",
      round: "2nd",
      dateSubmitted: "2024-01-10",
      responseDate: "2024-01-25",
    },
    {
      creditor: "Chase Bank",
      accountType: "Collection",
      bureau: "TransUnion",
      violationType: "FCRA 609(a)(1)",
      status: "Pending",
      round: "1st",
      dateSubmitted: "2024-01-15",
      responseDate: "Pending",
    },
    {
      creditor: "Wells Fargo",
      accountType: "Inquiry",
      bureau: "Equifax",
      violationType: "FCRA 604(a)(3)",
      status: "Verified",
      round: "1st",
      dateSubmitted: "2024-01-08",
      responseDate: "2024-01-22",
    },
  ]

  const timelineData = [
    {
      day: "Day 1",
      title: "Account Setup & Document Upload",
      description: "Upload credit reports and activate monitoring",
      status: "completed",
      date: "2024-01-01",
    },
    {
      day: "Day 7",
      title: "First Dispute Round Generated",
      description: "AI analyzed your reports and generated 5 dispute letters",
      status: "completed",
      date: "2024-01-07",
    },
    {
      day: "Day 14",
      title: "Review Bureau Responses",
      description: "Checking responses from credit bureaus",
      status: "in-progress",
      date: "2024-01-14",
    },
    {
      day: "Day 30",
      title: "Second Round Disputes",
      description: "Generate follow-up letters for unresolved items",
      status: "pending",
      date: "2024-01-30",
    },
  ]

  const lettersData = [
    {
      id: "LTR-001",
      creditor: "Capital One",
      bureau: "Experian",
      type: "Initial Dispute",
      status: "Sent",
      dateSent: "2024-01-10",
      legalCitation: "FCRA §611(a)(1)",
    },
    {
      id: "LTR-002",
      creditor: "Chase Bank",
      bureau: "TransUnion",
      type: "Follow-up",
      status: "Draft",
      dateSent: "Pending",
      legalCitation: "FCRA §609(a)(1)",
    },
  ]

  const accountsData = [
    {
      creditor: "Capital One Visa",
      accountType: "Credit Card",
      balance: "$2,450",
      limit: "$5,000",
      status: "Open",
      paymentHistory: "100%",
      lastPayment: "On Time",
    },
    {
      creditor: "Wells Fargo Auto",
      accountType: "Auto Loan",
      balance: "$18,500",
      limit: "$25,000",
      status: "Open",
      paymentHistory: "98%",
      lastPayment: "On Time",
    },
    {
      creditor: "Medical Collection",
      accountType: "Collection",
      balance: "$350",
      limit: "N/A",
      status: "Disputed",
      paymentHistory: "N/A",
      lastPayment: "Disputed",
    },
  ]

  // Export Functions
  const convertToCSV = (data: any[], headers: string[]) => {
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header.toLowerCase().replace(/\s+/g, "")]
            return typeof value === "string" && value.includes(",") ? `"${value}"` : value
          })
          .join(","),
      ),
    ].join("\n")
    return csvContent
  }

  const downloadCSV = (csvContent: string, filename: string) => {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", filename)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const generatePDF = async (content: string, filename: string) => {
    const blob = new Blob([content], { type: "application/pdf" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", filename)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportData = async (type: "csv" | "pdf", dataType: string, data: any[], headers: string[]) => {
    setIsExporting(true)
    const timestamp = new Date().toISOString().split("T")[0]
    const filename = `saintrix_${dataType}_${timestamp}.${type}`

    try {
      if (type === "csv") {
        const csvContent = convertToCSV(data, headers)
        downloadCSV(csvContent, filename)
      } else {
        const pdfContent = [
          `SAINTRIX ${dataType.toUpperCase()} REPORT`,
          `Generated: ${new Date().toLocaleString()}`,
          "",
          headers.join("\t"),
          ...data.map((row) => headers.map((header) => row[header.toLowerCase().replace(/\s+/g, "")] || "").join("\t")),
        ].join("\n")
        await generatePDF(pdfContent, filename)
      }
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const ExportButton = ({
    onExportCSV,
    onExportPDF,
    label = "Export",
  }: {
    onExportCSV: () => void
    onExportPDF: () => void
    label?: string
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"
          disabled={isExporting}
        >
          <Download className="h-4 w-4 mr-2" />
          {isExporting ? "Exporting..." : label}
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-800 border-slate-700">
        <DropdownMenuItem onClick={onExportCSV} className="text-slate-300 hover:bg-slate-700">
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onExportPDF} className="text-slate-300 hover:bg-slate-700">
          <FileImage className="h-4 w-4 mr-2" />
          Export as PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const CreditScoreGauge = ({ score, maxScore = 850 }: { score: number; maxScore?: number }) => {
    const percentage = (score / maxScore) * 100
    const circumference = 2 * Math.PI * 90
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    const getScoreColor = (score: number) => {
      if (score >= 750) return "#10b981" // green
      if (score >= 700) return "#3b82f6" // blue
      if (score >= 650) return "#f59e0b" // yellow
      if (score >= 600) return "#f97316" // orange
      return "#ef4444" // red
    }

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="rgb(51 65 85)"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke={getScoreColor(score)}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white">{score}</span>
          <span className="text-sm text-slate-400">Credit Score</span>
          <div className="flex items-center mt-2">
            {scoreChange > 0 ? (
              <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
            ) : (
              <TrendingUp className="h-4 w-4 text-red-400 mr-1 rotate-180" />
            )}
            <span className={`text-sm font-medium ${scoreChange > 0 ? "text-green-400" : "text-red-400"}`}>
              {scoreChange > 0 ? "+" : ""}
              {scoreChange} pts
            </span>
          </div>
        </div>
      </div>
    )
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Hello, Alex 👋</h2>
        <p className="text-slate-300 text-lg">Here is your credit rating:</p>

        <CreditScoreGauge score={creditScore} />

        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
          Update My Credit Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-white">28</div>
            <div className="text-sm text-slate-400">Total Accounts</div>
            <div className="text-xs text-green-400 mt-1">+2 this month</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-white">7yrs</div>
            <div className="text-sm text-slate-400">Credit Age</div>
            <div className="text-xs text-blue-400 mt-1">Excellent</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-white">2%</div>
            <div className="text-sm text-slate-400">Credit Usage</div>
            <div className="text-xs text-green-400 mt-1">Excellent</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-slate-400">On-time Payments</div>
            <div className="text-xs text-green-400 mt-1">Perfect</div>
          </CardContent>
        </Card>
      </div>

      {/* Autopilot Status */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-white">
            <span>🤖 Autopilot Status</span>
            <div className="flex items-center space-x-3">
              {autopilotEnabled ? (
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">ACTIVE</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <PauseCircle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">PAUSED</span>
                </div>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Last Action:</span>
              <span className="text-white">2nd round letter sent to Equifax</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Next Scheduled:</span>
              <span className="text-white">Review responses in 7 days</span>
            </div>
            <Progress value={65} className="h-2" />
            <div className="text-xs text-slate-400 text-center">Progress: 65% complete</div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <div className="text-white font-medium">Capital One account removed</div>
                <div className="text-xs text-slate-400">2 days ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-yellow-400" />
              <div>
                <div className="text-white font-medium">Dispute letter sent to TransUnion</div>
                <div className="text-xs text-slate-400">5 days ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-blue-400" />
              <div>
                <div className="text-white font-medium">Credit report uploaded</div>
                <div className="text-xs text-slate-400">1 week ago</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderDisputes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dispute Tracker</h2>
        <ExportButton
          onExportCSV={() =>
            exportData(
              "csv",
              "disputes",
              disputesData.map((dispute) => ({
                creditor: dispute.creditor,
                accounttype: dispute.accountType,
                bureau: dispute.bureau,
                violationtype: dispute.violationType,
                status: dispute.status,
                round: dispute.round,
                datesubmitted: dispute.dateSubmitted,
                responsedate: dispute.responseDate,
              })),
              [
                "Creditor",
                "Account Type",
                "Bureau",
                "Violation Type",
                "Status",
                "Round",
                "Date Submitted",
                "Response Date",
              ],
            )
          }
          onExportPDF={() =>
            exportData(
              "pdf",
              "disputes",
              disputesData.map((dispute) => ({
                creditor: dispute.creditor,
                accounttype: dispute.accountType,
                bureau: dispute.bureau,
                violationtype: dispute.violationType,
                status: dispute.status,
                round: dispute.round,
                datesubmitted: dispute.dateSubmitted,
                responsedate: dispute.responseDate,
              })),
              [
                "Creditor",
                "Account Type",
                "Bureau",
                "Violation Type",
                "Status",
                "Round",
                "Date Submitted",
                "Response Date",
              ],
            )
          }
        />
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Creditor</TableHead>
                <TableHead className="text-slate-300">Account Type</TableHead>
                <TableHead className="text-slate-300">Bureau</TableHead>
                <TableHead className="text-slate-300">Violation</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Round</TableHead>
                <TableHead className="text-slate-300">Submitted</TableHead>
                <TableHead className="text-slate-300">Response</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputesData.map((dispute, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{dispute.creditor}</TableCell>
                  <TableCell className="text-slate-300">{dispute.accountType}</TableCell>
                  <TableCell className="text-slate-300">{dispute.bureau}</TableCell>
                  <TableCell className="text-slate-300">{dispute.violationType}</TableCell>
                  <TableCell>
                    <Badge
                      variant={dispute.status === "Removed" ? "default" : "secondary"}
                      className={
                        dispute.status === "Removed"
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : dispute.status === "Pending"
                            ? "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                            : "bg-red-600/20 text-red-400 border-red-600/30"
                      }
                    >
                      {dispute.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{dispute.round}</TableCell>
                  <TableCell className="text-slate-300">{dispute.dateSubmitted}</TableCell>
                  <TableCell className="text-slate-300">{dispute.responseDate}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderTimeline = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Credit Repair Timeline</h2>
        <ExportButton
          onExportCSV={() =>
            exportData(
              "csv",
              "timeline",
              timelineData.map((item) => ({
                day: item.day,
                title: item.title,
                description: item.description,
                status: item.status,
                date: item.date,
              })),
              ["Day", "Title", "Description", "Status", "Date"],
            )
          }
          onExportPDF={() =>
            exportData(
              "pdf",
              "timeline",
              timelineData.map((item) => ({
                day: item.day,
                title: item.title,
                description: item.description,
                status: item.status,
                date: item.date,
              })),
              ["Day", "Title", "Description", "Status", "Date"],
            )
          }
        />
      </div>

      <div className="space-y-6">
        {timelineData.map((item, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {item.status === "completed" ? (
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  ) : item.status === "in-progress" ? (
                    <Clock className="h-8 w-8 text-yellow-400" />
                  ) : (
                    <Target className="h-8 w-8 text-slate-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.day}</h3>
                    <span className="text-sm text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="text-white font-medium mt-1">{item.title}</h4>
                  <p className="text-slate-300 mt-2">{item.description}</p>
                  <Badge
                    variant="outline"
                    className={
                      item.status === "completed"
                        ? "border-green-600/30 text-green-400 mt-3"
                        : item.status === "in-progress"
                          ? "border-yellow-600/30 text-yellow-400 mt-3"
                          : "border-slate-600/30 text-slate-400 mt-3"
                    }
                  >
                    {item.status.replace("-", " ").toUpperCase()}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderUpload = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Upload Documents</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Credit Report Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-slate-500 transition-colors">
              <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">Drop your credit report here</h3>
              <p className="text-slate-400 text-sm mb-4">or click to browse files</p>
              <Button variant="outline" className="bg-slate-700/50 border-slate-600 text-slate-300">
                Choose File
              </Button>
              <p className="text-xs text-slate-500 mt-4">Supports PDF, JPG, PNG up to 10MB</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Identity Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border border-slate-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Driver's License</span>
                  </div>
                  <Badge variant="outline" className="border-green-600/30 text-green-400">
                    Uploaded
                  </Badge>
                </div>
              </div>
              <div className="border border-slate-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Proof of Address</span>
                  </div>
                  <Button variant="outline" size="sm" className="bg-slate-700/50 border-slate-600 text-slate-300">
                    Upload
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Recent Uploads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-green-400" />
                <div>
                  <div className="text-white font-medium">Experian_Credit_Report.pdf</div>
                  <div className="text-xs text-slate-400">Uploaded 2 days ago • 2.4 MB</div>
                </div>
              </div>
              <Badge variant="outline" className="border-green-600/30 text-green-400">
                Processed
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-white font-medium">TransUnion_Report.pdf</div>
                  <div className="text-xs text-slate-400">Uploaded 1 week ago • 1.8 MB</div>
                </div>
              </div>
              <Badge variant="outline" className="border-yellow-600/30 text-yellow-400">
                Processing
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderReport = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Credit Report Analysis</h2>
        <ExportButton
          onExportCSV={() =>
            exportData(
              "csv",
              "credit_report",
              accountsData.map((account) => ({
                creditor: account.creditor,
                accounttype: account.accountType,
                balance: account.balance,
                limit: account.limit,
                status: account.status,
                paymenthistory: account.paymentHistory,
                lastpayment: account.lastPayment,
              })),
              ["Creditor", "Account Type", "Balance", "Limit", "Status", "Payment History", "Last Payment"],
            )
          }
          onExportPDF={() =>
            exportData(
              "pdf",
              "credit_report",
              accountsData.map((account) => ({
                creditor: account.creditor,
                accounttype: account.accountType,
                balance: account.balance,
                limit: account.limit,
                status: account.status,
                paymenthistory: account.paymentHistory,
                lastpayment: account.lastPayment,
              })),
              ["Creditor", "Account Type", "Balance", "Limit", "Status", "Payment History", "Last Payment"],
            )
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Account Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-300">Open Accounts</span>
                <span className="text-white font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Closed Accounts</span>
                <span className="text-white font-semibold">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Delinquent</span>
                <span className="text-red-400 font-semibold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Collections</span>
                <span className="text-orange-400 font-semibold">2</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Credit Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2%</div>
              <div className="text-sm text-slate-400 mb-4">of available credit</div>
              <Progress value={2} className="h-2" />
              <div className="text-xs text-green-400 mt-2">Excellent utilization</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-slate-400 mb-4">on-time payments</div>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className={`h-3 rounded-sm ${i < 23 ? "bg-green-400" : "bg-red-400"}`}></div>
                ))}
              </div>
              <div className="text-xs text-slate-400 mt-2">Last 24 months</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Account Details</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Creditor</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Balance</TableHead>
                <TableHead className="text-slate-300">Limit</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Payment History</TableHead>
                <TableHead className="text-slate-300">Last Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accountsData.map((account, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{account.creditor}</TableCell>
                  <TableCell className="text-slate-300">{account.accountType}</TableCell>
                  <TableCell className="text-slate-300">{account.balance}</TableCell>
                  <TableCell className="text-slate-300">{account.limit}</TableCell>
                  <TableCell>
                    <Badge
                      variant={account.status === "Open" ? "default" : "secondary"}
                      className={
                        account.status === "Open"
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : account.status === "Disputed"
                            ? "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                            : "bg-slate-600/20 text-slate-400 border-slate-600/30"
                      }
                    >
                      {account.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{account.paymentHistory}</TableCell>
                  <TableCell className="text-slate-300">{account.lastPayment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderLetters = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dispute Letters</h2>
        <ExportButton
          onExportCSV={() =>
            exportData(
              "csv",
              "letters",
              lettersData.map((letter) => ({
                id: letter.id,
                creditor: letter.creditor,
                bureau: letter.bureau,
                type: letter.type,
                status: letter.status,
                datesent: letter.dateSent,
                legalcitation: letter.legalCitation,
              })),
              ["ID", "Creditor", "Bureau", "Type", "Status", "Date Sent", "Legal Citation"],
            )
          }
          onExportPDF={() =>
            exportData(
              "pdf",
              "letters",
              lettersData.map((letter) => ({
                id: letter.id,
                creditor: letter.creditor,
                bureau: letter.bureau,
                type: letter.type,
                status: letter.status,
                datesent: letter.dateSent,
                legalcitation: letter.legalCitation,
              })),
              ["ID", "Creditor", "Bureau", "Type", "Status", "Date Sent", "Legal Citation"],
            )
          }
        />
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Letter ID</TableHead>
                <TableHead className="text-slate-300">Creditor</TableHead>
                <TableHead className="text-slate-300">Bureau</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Date Sent</TableHead>
                <TableHead className="text-slate-300">Legal Citation</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lettersData.map((letter, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{letter.id}</TableCell>
                  <TableCell className="text-slate-300">{letter.creditor}</TableCell>
                  <TableCell className="text-slate-300">{letter.bureau}</TableCell>
                  <TableCell className="text-slate-300">{letter.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={letter.status === "Sent" ? "default" : "secondary"}
                      className={
                        letter.status === "Sent"
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                      }
                    >
                      {letter.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{letter.dateSent}</TableCell>
                  <TableCell className="text-slate-300">{letter.legalCitation}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Request Manual Review</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Describe any specific concerns or requests for your dispute letters..."
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Request Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Account Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300">Full Name</label>
              <Input defaultValue="Alex Johnson" className="mt-1 bg-slate-700/50 border-slate-600 text-white" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">Email</label>
              <Input
                defaultValue="alex.johnson@email.com"
                className="mt-1 bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">Phone</label>
              <Input defaultValue="(555) 123-4567" className="mt-1 bg-slate-700/50 border-slate-600 text-white" />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Update Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Two-Factor Authentication</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Email Notifications</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">SMS Alerts</span>
              <Switch defaultChecked />
            </div>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              Change Password
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Subscription</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Current Plan</span>
              <Badge variant="outline" className="border-purple-600/30 text-purple-400">
                Premium
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Monthly Cost</span>
              <span className="text-white font-semibold">$185</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Next Billing</span>
              <span className="text-white">Feb 15, 2024</span>
            </div>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              Manage Subscription
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Referral Program</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Referrals Made</span>
              <span className="text-white font-semibold">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Rewards Earned</span>
              <span className="text-green-400 font-semibold">$150</span>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">Your Referral Link</label>
              <div className="flex mt-1">
                <Input
                  readOnly
                  defaultValue="https://saintrix.com/ref/alex123"
                  className="bg-slate-700/50 border-slate-600 text-white rounded-r-none"
                />
                <Button variant="outline" className="bg-slate-700/50 border-slate-600 text-slate-300 rounded-l-none">
                  Copy
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "disputes":
        return renderDisputes()
      case "timeline":
        return renderTimeline()
      case "upload":
        return renderUpload()
      case "report":
        return renderReport()
      case "letters":
        return renderLetters()
      case "settings":
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="absolute top-8 left-8 text-white z-10">
        <p className="text-sm opacity-70 font-medium">SAINTRIX Credit Repair</p>
        <h1 className="text-5xl font-bold mt-2 tracking-tight">Client Portal</h1>
      </div>

      {/* Main Dashboard Container */}
      <div className="absolute top-32 left-8 right-8 bottom-8 z-10">
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl h-full flex overflow-hidden border border-slate-700/50 shadow-2xl">
          {/* Top Bar */}
          <div className="absolute top-0 left-64 right-0 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4 z-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-xl font-bold text-white">SAINTRIX</span>
                  <Badge variant="outline" className="text-xs border-purple-600/30 text-purple-400">
                    Client Portal
                  </Badge>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 w-64 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <Button variant="ghost" size="sm" className="relative text-slate-300 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 text-slate-300 hover:text-white">
                      <Avatar className="h-8 w-8 border border-slate-600">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                          AJ
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Alex Johnson</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                    <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400 hover:bg-slate-700">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-64 bg-slate-800/80 backdrop-blur-sm p-6 flex flex-col border-r border-slate-700/50">
            <div className="flex items-center gap-3 mb-8 mt-16">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-semibold text-lg">My Dashboard</span>
            </div>

            <nav className="flex-1 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 relative group ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 p-4 bg-slate-700/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-400">Account Active</span>
              </div>
              <div className="text-xs text-slate-400">Premium Plan • $185/month</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto mt-16">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
