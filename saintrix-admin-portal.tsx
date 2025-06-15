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
import {
  BarChart3,
  Bell,
  Bot,
  CheckCircle,
  ChevronDown,
  DollarSign,
  Download,
  Eye,
  FileText,
  Filter,
  Gift,
  Home,
  MessageSquare,
  MoreHorizontal,
  PauseCircle,
  PlayCircle,
  Search,
  Settings,
  Shield,
  Users,
  XCircle,
  AlertTriangle,
  Clock,
  Mail,
  FileSpreadsheet,
  FileImage,
} from "lucide-react"

export default function SaintrixAdminPortal() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [autopilotEnabled, setAutopilotEnabled] = useState(true)
  const [isExporting, setIsExporting] = useState(false)

  const sidebarItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "clients", name: "Clients", icon: Users },
    { id: "disputes", name: "Disputes", icon: FileText },
    { id: "ai-logs", name: "AI Logs", icon: Bot },
    { id: "approvals", name: "Approvals", icon: CheckCircle },
    { id: "referrals", name: "Referrals", icon: Gift },
    { id: "feedback", name: "Feedback", icon: MessageSquare },
    { id: "insights", name: "Insights", icon: BarChart3 },
    { id: "settings", name: "Settings", icon: Settings },
  ]

  const kpiData = [
    { title: "Monthly Revenue", value: "$127,450", change: "+12.5%", icon: DollarSign, color: "text-green-400" },
    { title: "Total Clients", value: "2,847", change: "+8.2%", icon: Users, color: "text-blue-400" },
    { title: "Disputes This Month", value: "1,234", change: "+15.3%", icon: FileText, color: "text-purple-400" },
    { title: "Flagged Clients", value: "23", change: "-5.1%", icon: AlertTriangle, color: "text-orange-400" },
  ]

  const clientsData = [
    {
      name: "John Smith",
      email: "john.smith@email.com",
      status: "Active",
      creditScore: 650,
      tier: "$185",
      autopilot: true,
      insurance: true,
      lastLogin: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      status: "Pending",
      creditScore: 580,
      tier: "$85",
      autopilot: false,
      insurance: false,
      lastLogin: "1 day ago",
    },
    {
      name: "Mike Davis",
      email: "mike.davis@email.com",
      status: "Active",
      creditScore: 720,
      tier: "$250+",
      autopilot: true,
      insurance: true,
      lastLogin: "30 minutes ago",
    },
    {
      name: "Emily Wilson",
      email: "emily.w@email.com",
      status: "Canceled",
      creditScore: 590,
      tier: "$85",
      autopilot: false,
      insurance: false,
      lastLogin: "5 days ago",
    },
  ]

  const disputesData = [
    {
      client: "John Smith",
      account: "Capital One",
      type: "Negative",
      status: "Sent",
      round: "1st",
      violation: "FCRA 611(a)(1)",
      evidence: "dispute_001.pdf",
      aiSource: "OpenAI GPT-4",
    },
    {
      client: "Sarah Johnson",
      account: "Chase Bank",
      type: "Inquiry",
      status: "Removed",
      round: "2nd",
      violation: "FCRA 604(a)(3)",
      evidence: "dispute_002.pdf",
      aiSource: "Gemini Pro",
    },
    {
      client: "Mike Davis",
      account: "Wells Fargo",
      type: "Business",
      status: "Waiting",
      round: "1st",
      violation: "FCRA 623(a)(5)",
      evidence: "dispute_003.pdf",
      aiSource: "OpenAI GPT-4",
    },
  ]

  const aiLogsData = [
    {
      timestamp: "2024-01-15 14:30:22",
      task: "LetterGen",
      input: "Generate dispute letter for negative account",
      output: "Letter generated successfully",
      model: "GPT-4",
      status: "Success",
    },
    {
      timestamp: "2024-01-15 14:25:15",
      task: "OCR",
      input: "Process credit report PDF",
      output: "Text extracted, 3 negative items found",
      model: "Gemini Pro",
      status: "Success",
    },
    {
      timestamp: "2024-01-15 14:20:08",
      task: "Sentiment",
      input: "Analyze client feedback",
      output: "Sentiment: Frustrated (0.8 confidence)",
      model: "GPT-4",
      status: "Success",
    },
  ]

  const pendingApprovalsData = [
    {
      name: "Robert Wilson",
      code: "LEGACY2024",
      docs: ["ID_scan.pdf", "proof_income.pdf"],
      creditReport: "credit_report_wilson.pdf",
      status: "Pending Admin Review",
    },
    {
      name: "Lisa Martinez",
      code: "BYPASS2024",
      docs: ["drivers_license.pdf", "bank_statement.pdf"],
      creditReport: "credit_report_martinez.pdf",
      status: "Pending Admin Review",
    },
  ]

  const referralsData = [
    {
      referrer: "Alice Cooper",
      email: "alice@email.com",
      completed: 5,
      rewardStatus: "Given",
      planImpact: "$925",
    },
    {
      referrer: "Bob Martinez",
      email: "bob@email.com",
      completed: 2,
      rewardStatus: "Pending",
      planImpact: "$370",
    },
    {
      referrer: "Carol Davis",
      email: "carol@email.com",
      completed: 8,
      rewardStatus: "Given",
      planImpact: "$1,480",
    },
  ]

  const feedbackData = [
    {
      date: "2024-01-15",
      user: "John Smith",
      message: "The dispute process could be faster",
      category: "UX",
      status: "Unread",
    },
    {
      date: "2024-01-14",
      user: "Sarah Johnson",
      message: "Love the autopilot feature!",
      category: "Feature",
      status: "Read",
    },
    {
      date: "2024-01-13",
      user: "Mike Davis",
      message: "Bug in the credit report upload",
      category: "Bug",
      status: "Resolved",
    },
  ]

  const chartData = [40, 80, 60, 90, 45, 70, 85, 55, 75, 65, 50, 95]
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

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
    // Simulate PDF generation - in a real app, you'd use a library like jsPDF or html2pdf
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
        // For PDF, we'll create a formatted text version
        // In a real app, you'd use proper PDF generation
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

  const exportKPIReport = async (type: "csv" | "pdf") => {
    const kpiReportData = [
      {
        metric: "Monthly Revenue",
        value: "$127,450",
        change: "+12.5%",
        date: new Date().toISOString().split("T")[0],
      },
      {
        metric: "Total Clients",
        value: "2,847",
        change: "+8.2%",
        date: new Date().toISOString().split("T")[0],
      },
      {
        metric: "Disputes This Month",
        value: "1,234",
        change: "+15.3%",
        date: new Date().toISOString().split("T")[0],
      },
      {
        metric: "Flagged Clients",
        value: "23",
        change: "-5.1%",
        date: new Date().toISOString().split("T")[0],
      },
    ]
    await exportData(type, "kpi_report", kpiReportData, ["Metric", "Value", "Change", "Date"])
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

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Export Dashboard Report */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
        <ExportButton
          onExportCSV={() => exportKPIReport("csv")}
          onExportPDF={() => exportKPIReport("pdf")}
          label="Export Dashboard"
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">{kpi.title}</p>
                  <p className="text-2xl font-bold text-white">{kpi.value}</p>
                  <p className={`text-xs font-medium ${kpi.color}`}>{kpi.change}</p>
                </div>
                <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Autopilot Status */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-white">
            <span>🤖 Autopilot System Status</span>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-400">Master Control</span>
              <Switch checked={autopilotEnabled} onCheckedChange={setAutopilotEnabled} />
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-xl border border-green-700/30">
              <h3 className="font-semibold text-green-400 mb-2">Revenue Growth</h3>
              <div className="h-16 flex items-end justify-center">
                <div className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t h-12"></div>
              </div>
              <div className="text-xs text-green-300 mt-2">+12.5% Monthly</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl border border-blue-700/30">
              <h3 className="font-semibold text-blue-400 mb-2">Dispute Volume</h3>
              <div className="h-16 flex items-end justify-center">
                <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t h-10"></div>
              </div>
              <div className="text-xs text-blue-300 mt-2">1,234 This Month</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-xl border border-purple-700/30">
              <h3 className="font-semibold text-purple-400 mb-2">Referral Growth</h3>
              <div className="h-16 flex items-end justify-center">
                <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t h-14"></div>
              </div>
              <div className="text-xs text-purple-300 mt-2">Steady Growth</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-900/20 to-orange-800/20 rounded-xl border border-orange-700/30">
              <h3 className="font-semibold text-orange-400 mb-2">Churn Risk</h3>
              <div className="h-16 flex items-end justify-center">
                <div className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t h-8"></div>
              </div>
              <div className="text-xs text-orange-300 mt-2">Low Risk</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white font-semibold">Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end justify-between gap-1 px-2">
              {chartData.map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full rounded-t-sm bg-gradient-to-t from-green-600 to-green-400"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-slate-400 font-medium">{months[index]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white font-semibold">AI Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Letters Generated Today</span>
                <span className="text-white font-semibold">89</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">OCR Processes</span>
                <span className="text-white font-semibold">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Sentiment Analysis</span>
                <span className="text-white font-semibold">34</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Success Rate</span>
                <span className="text-green-400 font-semibold">98.7%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderClients = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Client Management</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <ExportButton
            onExportCSV={() =>
              exportData(
                "csv",
                "clients",
                clientsData.map((client) => ({
                  name: client.name,
                  email: client.email,
                  status: client.status,
                  creditscore: client.creditScore,
                  tier: client.tier,
                  autopilot: client.autopilot ? "Yes" : "No",
                  insurance: client.insurance ? "Yes" : "No",
                  lastlogin: client.lastLogin,
                })),
                ["Name", "Email", "Status", "Credit Score", "Tier", "Autopilot", "Insurance", "Last Login"],
              )
            }
            onExportPDF={() =>
              exportData(
                "pdf",
                "clients",
                clientsData.map((client) => ({
                  name: client.name,
                  email: client.email,
                  status: client.status,
                  creditscore: client.creditScore,
                  tier: client.tier,
                  autopilot: client.autopilot ? "Yes" : "No",
                  insurance: client.insurance ? "Yes" : "No",
                  lastlogin: client.lastLogin,
                })),
                ["Name", "Email", "Status", "Credit Score", "Tier", "Autopilot", "Insurance", "Last Login"],
              )
            }
          />
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Name</TableHead>
                <TableHead className="text-slate-300">Email</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Credit Score</TableHead>
                <TableHead className="text-slate-300">Tier</TableHead>
                <TableHead className="text-slate-300">Autopilot</TableHead>
                <TableHead className="text-slate-300">Insurance</TableHead>
                <TableHead className="text-slate-300">Last Login</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientsData.map((client, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{client.name}</TableCell>
                  <TableCell className="text-slate-300">{client.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        client.status === "Active"
                          ? "default"
                          : client.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        client.status === "Active"
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : client.status === "Pending"
                            ? "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                            : "bg-red-600/20 text-red-400 border-red-600/30"
                      }
                    >
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white font-medium">{client.creditScore}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-purple-600/30 text-purple-400">
                      {client.tier}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Switch checked={client.autopilot} size="sm" />
                  </TableCell>
                  <TableCell>
                    <Switch checked={client.insurance} size="sm" />
                  </TableCell>
                  <TableCell className="text-slate-300">{client.lastLogin}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-slate-800 border-slate-700">
                        <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                          <Shield className="h-4 w-4 mr-2" />
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:bg-slate-700">
                          <XCircle className="h-4 w-4 mr-2" />
                          Suspend User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderDisputes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dispute Center</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter by Bureau
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Clock className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <ExportButton
            onExportCSV={() =>
              exportData(
                "csv",
                "disputes",
                disputesData.map((dispute) => ({
                  client: dispute.client,
                  account: dispute.account,
                  type: dispute.type,
                  status: dispute.status,
                  round: dispute.round,
                  violation: dispute.violation,
                  evidence: dispute.evidence,
                  aisource: dispute.aiSource,
                })),
                ["Client", "Account", "Type", "Status", "Round", "Violation", "Evidence", "AI Source"],
              )
            }
            onExportPDF={() =>
              exportData(
                "pdf",
                "disputes",
                disputesData.map((dispute) => ({
                  client: dispute.client,
                  account: dispute.account,
                  type: dispute.type,
                  status: dispute.status,
                  round: dispute.round,
                  violation: dispute.violation,
                  evidence: dispute.evidence,
                  aisource: dispute.aiSource,
                })),
                ["Client", "Account", "Type", "Status", "Round", "Violation", "Evidence", "AI Source"],
              )
            }
          />
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Client Name</TableHead>
                <TableHead className="text-slate-300">Account Name</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Round</TableHead>
                <TableHead className="text-slate-300">Violation Cited</TableHead>
                <TableHead className="text-slate-300">Evidence</TableHead>
                <TableHead className="text-slate-300">AI Source</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputesData.map((dispute, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{dispute.client}</TableCell>
                  <TableCell className="text-slate-300">{dispute.account}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      {dispute.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={dispute.status === "Removed" ? "default" : "secondary"}
                      className={
                        dispute.status === "Removed"
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : dispute.status === "Sent"
                            ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                            : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                      }
                    >
                      {dispute.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{dispute.round}</TableCell>
                  <TableCell className="text-slate-300">{dispute.violation}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700 p-0">
                      <FileText className="h-4 w-4 mr-1" />
                      {dispute.evidence}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-purple-600/30 text-purple-400">
                      {dispute.aiSource}
                    </Badge>
                  </TableCell>
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

  const renderAILogs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">AI Activity Logs</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="border-green-600/30 text-green-400">
            Compliance Ready
          </Badge>
          <ExportButton
            onExportCSV={() =>
              exportData(
                "csv",
                "ai_logs",
                aiLogsData.map((log) => ({
                  timestamp: log.timestamp,
                  task: log.task,
                  input: log.input,
                  output: log.output,
                  model: log.model,
                  status: log.status,
                })),
                ["Timestamp", "Task", "Input", "Output", "Model", "Status"],
              )
            }
            onExportPDF={() =>
              exportData(
                "pdf",
                "ai_logs",
                aiLogsData.map((log) => ({
                  timestamp: log.timestamp,
                  task: log.task,
                  input: log.input,
                  output: log.output,
                  model: log.model,
                  status: log.status,
                })),
                ["Timestamp", "Task", "Input", "Output", "Model", "Status"],
              )
            }
          />
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Timestamp</TableHead>
                <TableHead className="text-slate-300">Task</TableHead>
                <TableHead className="text-slate-300">Input Summary</TableHead>
                <TableHead className="text-slate-300">Output</TableHead>
                <TableHead className="text-slate-300">Model Used</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aiLogsData.map((log, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-mono text-sm text-slate-300">{log.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      {log.task}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate text-slate-300">{log.input}</TableCell>
                  <TableCell className="max-w-xs truncate text-slate-300">{log.output}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                      {log.model}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-600/20 text-green-400 border-green-600/30">
                      {log.status}
                    </Badge>
                  </TableCell>
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

  const renderApprovals = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Legacy Client Approvals</h2>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
            <CheckCircle className="h-4 w-4 mr-2" />
            Bulk Approve
          </Button>
          <ExportButton
            onExportCSV={() =>
              exportData(
                "csv",
                "approvals",
                pendingApprovalsData.map((approval) => ({
                  name: approval.name,
                  code: approval.code,
                  docs: approval.docs.join("; "),
                  creditreport: approval.creditReport,
                  status: approval.status,
                })),
                ["Name", "Code", "Documents", "Credit Report", "Status"],
              )
            }
            onExportPDF={() =>
              exportData(
                "pdf",
                "approvals",
                pendingApprovalsData.map((approval) => ({
                  name: approval.name,
                  code: approval.code,
                  docs: approval.docs.join("; "),
                  creditreport: approval.creditReport,
                  status: approval.status,
                })),
                ["Name", "Code", "Documents", "Credit Report", "Status"],
              )
            }
          />
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Name</TableHead>
                <TableHead className="text-slate-300">Access Code</TableHead>
                <TableHead className="text-slate-300">Uploaded Documents</TableHead>
                <TableHead className="text-slate-300">Credit Report</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingApprovalsData.map((approval, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{approval.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      {approval.code}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      {approval.docs.map((doc, i) => (
                        <Button
                          key={i}
                          variant="ghost"
                          size="sm"
                          className="justify-start p-0 h-auto text-slate-300 hover:text-white"
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          {doc}
                        </Button>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                      <FileText className="h-4 w-4 mr-1" />
                      {approval.creditReport}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                      {approval.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-green-600/20 text-green-400 border border-green-600/30 hover:bg-green-600/30"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-600/30 text-red-400 hover:bg-red-600/20"
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderReferrals = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Referrals Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="border-purple-600/30 text-purple-400">
            3 Active Referrals = 1 Free Month
          </Badge>
          <ExportButton
            onExportCSV={() =>
              exportData(
                "csv",
                "referrals",
                referralsData.map((referral) => ({
                  referrer: referral.referrer,
                  email: referral.email,
                  completed: referral.completed,
                  rewardstatus: referral.rewardStatus,
                  planimpact: referral.planImpact,
                })),
                ["Referrer", "Email", "Completed", "Reward Status", "Plan Impact"],
              )
            }
            onExportPDF={() =>
              exportData(
                "pdf",
                "referrals",
                referralsData.map((referral) => ({
                  referrer: referral.referrer,
                  email: referral.email,
                  completed: referral.completed,
                  rewardstatus: referral.rewardStatus,
                  planimpact: referral.planImpact,
                })),
                ["Referrer", "Email", "Completed", "Reward Status", "Plan Impact"],
              )
            }
          />
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Referrer</TableHead>
                <TableHead className="text-slate-300">Email</TableHead>
                <TableHead className="text-slate-300">Referrals Completed</TableHead>
                <TableHead className="text-slate-300">Reward Status</TableHead>
                <TableHead className="text-slate-300">Plan Impact</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referralsData.map((referral, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="font-medium text-white">{referral.referrer}</TableCell>
                  <TableCell className="text-slate-300">{referral.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      {referral.completed}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={referral.rewardStatus === "Given" ? "default" : "secondary"}
                      className={
                        referral.rewardStatus === "Given"
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                      }
                    >
                      {referral.rewardStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-green-400">{referral.planImpact}</TableCell>
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

  const renderFeedback = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Feedback Inbox</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter by Category
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Mail className="h-4 w-4 mr-2" />
            Reply via Email
          </Button>
          <ExportButton
            onExportCSV={() =>
              exportData(
                "csv",
                "feedback",
                feedbackData.map((feedback) => ({
                  date: feedback.date,
                  user: feedback.user,
                  message: feedback.message,
                  category: feedback.category,
                  status: feedback.status,
                })),
                ["Date", "User", "Message", "Category", "Status"],
              )
            }
            onExportPDF={() =>
              exportData(
                "pdf",
                "feedback",
                feedbackData.map((feedback) => ({
                  date: feedback.date,
                  user: feedback.user,
                  message: feedback.message,
                  category: feedback.category,
                  status: feedback.status,
                })),
                ["Date", "User", "Message", "Category", "Status"],
              )
            }
          />
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Date</TableHead>
                <TableHead className="text-slate-300">User</TableHead>
                <TableHead className="text-slate-300">Message</TableHead>
                <TableHead className="text-slate-300">Category</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbackData.map((feedback, index) => (
                <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                  <TableCell className="text-slate-300">{feedback.date}</TableCell>
                  <TableCell className="font-medium text-white">{feedback.user}</TableCell>
                  <TableCell className="max-w-xs truncate text-slate-300">{feedback.message}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        feedback.category === "Bug"
                          ? "border-red-600/30 text-red-400"
                          : feedback.category === "Feature"
                            ? "border-green-600/30 text-green-400"
                            : "border-blue-600/30 text-blue-400"
                      }
                    >
                      {feedback.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={feedback.status === "Read" ? "default" : "secondary"}
                      className={
                        feedback.status === "Read"
                          ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                          : feedback.status === "Resolved"
                            ? "bg-green-600/20 text-green-400 border-green-600/30"
                            : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                      }
                    >
                      {feedback.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-700">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderInsights = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Insights Bot</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="border-blue-600/30 text-blue-400">
            Auto-generated every 24 hours
          </Badge>
          <ExportButton
            onExportCSV={() => {
              const insightsData = [
                { metric: "New Disputes Filed", value: "156", change: "+12%" },
                { metric: "New Users Signed Up", value: "23", change: "+5%" },
                { metric: "AI Letters Generated", value: "89", change: "+18%" },
                { metric: "Referrals Completed", value: "7", change: "+2" },
                { metric: "Clients at Risk", value: "4", change: "Attention Required" },
                { metric: "Stripe Revenue", value: "$4,250", change: "+8%" },
              ]
              exportData("csv", "insights", insightsData, ["Metric", "Value", "Change"])
            }}
            onExportPDF={() => {
              const insightsData = [
                { metric: "New Disputes Filed", value: "156", change: "+12%" },
                { metric: "New Users Signed Up", value: "23", change: "+5%" },
                { metric: "AI Letters Generated", value: "89", change: "+18%" },
                { metric: "Referrals Completed", value: "7", change: "+2" },
                { metric: "Clients at Risk", value: "4", change: "Attention Required" },
                { metric: "Stripe Revenue", value: "$4,250", change: "+8%" },
              ]
              exportData("pdf", "insights", insightsData, ["Metric", "Value", "Change"])
            }}
            label="Export Insights"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm text-slate-300">New Disputes Filed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">156</p>
            <p className="text-xs text-green-400">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm text-slate-300">New Users Signed Up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">23</p>
            <p className="text-xs text-green-400">+5% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm text-slate-300">AI Letters Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">89</p>
            <p className="text-xs text-green-400">+18% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm text-slate-300">Referrals Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">7</p>
            <p className="text-xs text-green-400">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm text-slate-300">Clients at Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">4</p>
            <p className="text-xs text-red-400">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm text-slate-300">Stripe Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">$4,250</p>
            <p className="text-xs text-green-400">+8% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Notification Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Daily Reports</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Weekly Summary</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Slack Notifications</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Email Notifications</span>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">System Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Autopilot Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-300">Master Autopilot Switch</span>
              <Switch checked={autopilotEnabled} onCheckedChange={setAutopilotEnabled} />
            </div>
            <Button
              variant="destructive"
              className="w-full bg-red-600/20 border border-red-600/30 text-red-400 hover:bg-red-600/30"
            >
              <PauseCircle className="h-4 w-4 mr-2" />
              Emergency Pause All Activity
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Admin Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <Users className="h-4 w-4 mr-2" />
              Add/Remove Admin Accounts
            </Button>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <Shield className="h-4 w-4 mr-2" />
              Configure 2FA Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">API Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300">OpenRouter API Key</label>
              <Input
                type="password"
                placeholder="sk-..."
                className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">OCR Engine Selection</label>
              <select className="w-full mt-1 p-2 border rounded bg-slate-700/50 border-slate-600 text-white">
                <option>Tesseract OCR</option>
                <option>Google Vision API</option>
                <option>AWS Textract</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Letter Templates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <FileText className="h-4 w-4 mr-2" />
              Configure Default Templates
            </Button>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Template Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Development Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <Settings className="h-4 w-4 mr-2" />
              Webhook Configuration
            </Button>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              Test Mode Toggle
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Compliance & Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">Supabase RLS</span>
                <Badge variant="default" className="bg-green-600/20 text-green-400 border-green-600/30">
                  Enforced
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Admin Activity Logging</span>
                <Badge variant="default" className="bg-green-600/20 text-green-400 border-green-600/30">
                  Active
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">AI Logs Retention</span>
                <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                  6 Months
                </Badge>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Compliance Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "clients":
        return renderClients()
      case "disputes":
        return renderDisputes()
      case "ai-logs":
        return renderAILogs()
      case "approvals":
        return renderApprovals()
      case "referrals":
        return renderReferrals()
      case "feedback":
        return renderFeedback()
      case "insights":
        return renderInsights()
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
        <p className="text-sm opacity-70 font-medium">SAINTRIX Credit Repair SaaS</p>
        <h1 className="text-5xl font-bold mt-2 tracking-tight">Admin Portal</h1>
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
                    Admin Portal
                  </Badge>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search client name/email..."
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
                          AD
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Admin</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                    <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                      <Shield className="h-4 w-4 mr-2" />
                      Security
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400 hover:bg-slate-700">
                      <XCircle className="h-4 w-4 mr-2" />
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
              <span className="text-white font-semibold text-lg">Control Center</span>
            </div>

            <nav className="flex-1 space-y-1">
              {sidebarItems.map((item) => (
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

            <div className="flex items-center gap-2 mt-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
              <span className="text-xs text-slate-400 ml-2">System Online</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto mt-16">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
