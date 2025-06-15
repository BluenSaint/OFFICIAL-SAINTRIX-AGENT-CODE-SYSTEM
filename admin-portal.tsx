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
} from "lucide-react"

export default function SaintrixAdminPortal() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [autopilotEnabled, setAutopilotEnabled] = useState(true)

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
    { title: "Monthly Revenue", value: "$127,450", change: "+12.5%", icon: DollarSign, color: "text-green-600" },
    { title: "Total Clients", value: "2,847", change: "+8.2%", icon: Users, color: "text-blue-600" },
    { title: "Disputes This Month", value: "1,234", change: "+15.3%", icon: FileText, color: "text-purple-600" },
    { title: "Flagged Clients", value: "23", change: "-5.1%", icon: AlertTriangle, color: "text-orange-600" },
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
  ]

  const pendingApprovalsData = [
    {
      name: "Robert Wilson",
      code: "LEGACY2024",
      docs: ["ID_scan.pdf", "proof_income.pdf"],
      creditReport: "credit_report_wilson.pdf",
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
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <p className={`text-xs ${kpi.color}`}>{kpi.change}</p>
                </div>
                <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Autopilot Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>System Status</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Autopilot</span>
              <Switch checked={autopilotEnabled} onCheckedChange={setAutopilotEnabled} />
              {autopilotEnabled ? (
                <PlayCircle className="h-5 w-5 text-green-600" />
              ) : (
                <PauseCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Revenue</h3>
              <div className="h-20 bg-green-200 rounded mt-2 flex items-end justify-center">
                <div className="text-xs text-green-700">Monthly Growth</div>
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">Dispute Volume</h3>
              <div className="h-20 bg-blue-200 rounded mt-2 flex items-end justify-center">
                <div className="text-xs text-blue-700">Trending Up</div>
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800">Referral Growth</h3>
              <div className="h-20 bg-purple-200 rounded mt-2 flex items-end justify-center">
                <div className="text-xs text-purple-700">Steady Growth</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderClients = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Client Management</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Credit Score</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Autopilot</TableHead>
                <TableHead>Insurance</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientsData.map((client, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>
                    <Badge variant={client.status === "Active" ? "default" : "secondary"}>{client.status}</Badge>
                  </TableCell>
                  <TableCell>{client.creditScore}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{client.tier}</Badge>
                  </TableCell>
                  <TableCell>
                    <Switch checked={client.autopilot} size="sm" />
                  </TableCell>
                  <TableCell>
                    <Switch checked={client.insurance} size="sm" />
                  </TableCell>
                  <TableCell>{client.lastLogin}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="h-4 w-4 mr-2" />
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
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
        <h2 className="text-2xl font-bold">Dispute Center</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter by Bureau
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Account Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Round</TableHead>
                <TableHead>Violation Cited</TableHead>
                <TableHead>Evidence</TableHead>
                <TableHead>AI Source</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputesData.map((dispute, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{dispute.client}</TableCell>
                  <TableCell>{dispute.account}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{dispute.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={dispute.status === "Removed" ? "default" : "secondary"}>{dispute.status}</Badge>
                  </TableCell>
                  <TableCell>{dispute.round}</TableCell>
                  <TableCell>{dispute.violation}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      {dispute.evidence}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{dispute.aiSource}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
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
        <h2 className="text-2xl font-bold">AI Activity Logs</h2>
        <Badge variant="outline" className="text-green-600">
          Compliance Ready
        </Badge>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Task</TableHead>
                <TableHead>Input Summary</TableHead>
                <TableHead>Output</TableHead>
                <TableHead>Model Used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aiLogsData.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{log.task}</Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{log.input}</TableCell>
                  <TableCell className="max-w-xs truncate">{log.output}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{log.model}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="text-green-600">
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
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
        <h2 className="text-2xl font-bold">Legacy Client Approvals</h2>
        <Button>
          <CheckCircle className="h-4 w-4 mr-2" />
          Bulk Approve
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Access Code</TableHead>
                <TableHead>Uploaded Documents</TableHead>
                <TableHead>Credit Report</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingApprovalsData.map((approval, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{approval.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{approval.code}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      {approval.docs.map((doc, i) => (
                        <Button key={i} variant="ghost" size="sm" className="justify-start p-0 h-auto">
                          <FileText className="h-3 w-3 mr-1" />
                          {doc}
                        </Button>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      {approval.creditReport}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-yellow-600">
                      {approval.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" className="text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600">
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
        <h2 className="text-2xl font-bold">Referrals Dashboard</h2>
        <Badge variant="outline">3 Active Referrals = 1 Free Month</Badge>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Referrer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Referrals Completed</TableHead>
                <TableHead>Reward Status</TableHead>
                <TableHead>Plan Impact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referralsData.map((referral, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{referral.referrer}</TableCell>
                  <TableCell>{referral.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{referral.completed}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={referral.rewardStatus === "Given" ? "default" : "secondary"}>
                      {referral.rewardStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-green-600">{referral.planImpact}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
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
        <h2 className="text-2xl font-bold">Feedback Inbox</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter by Category
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Reply via Email
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbackData.map((feedback, index) => (
                <TableRow key={index}>
                  <TableCell>{feedback.date}</TableCell>
                  <TableCell className="font-medium">{feedback.user}</TableCell>
                  <TableCell className="max-w-xs truncate">{feedback.message}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{feedback.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={feedback.status === "Read" ? "default" : "secondary"}>{feedback.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
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
        <h2 className="text-2xl font-bold">Insights Bot</h2>
        <Badge variant="outline">Auto-generated every 24 hours</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">New Disputes Filed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">156</p>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">New Users Signed Up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs text-muted-foreground">+5% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">AI Letters Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">89</p>
            <p className="text-xs text-muted-foreground">+18% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Referrals Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">7</p>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Clients at Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4</p>
            <p className="text-xs text-red-600">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Stripe Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$4,250</p>
            <p className="text-xs text-green-600">+8% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Daily Reports</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Weekly Summary</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Slack Notifications</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Autopilot Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Master Autopilot Switch</span>
              <Switch checked={autopilotEnabled} onCheckedChange={setAutopilotEnabled} />
            </div>
            <Button variant="destructive" className="w-full">
              <PauseCircle className="h-4 w-4 mr-2" />
              Emergency Pause All Activity
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Admin Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Add/Remove Admin Accounts
            </Button>
            <Button variant="outline" className="w-full">
              <Shield className="h-4 w-4 mr-2" />
              Configure 2FA Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">OpenRouter API Key</label>
              <Input type="password" placeholder="sk-..." className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">OCR Engine Selection</label>
              <select className="w-full mt-1 p-2 border rounded">
                <option>Tesseract OCR</option>
                <option>Google Vision API</option>
                <option>AWS Textract</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Letter Templates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              <FileText className="h-4 w-4 mr-2" />
              Configure Default Templates
            </Button>
            <Button variant="outline" className="w-full">
              <Bot className="h-4 w-4 mr-2" />
              AI Template Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Development Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              <Settings className="h-4 w-4 mr-2" />
              Webhook Configuration
            </Button>
            <Button variant="outline" className="w-full">
              <PlayCircle className="h-4 w-4 mr-2" />
              Test Mode Toggle
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance & Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Supabase RLS</span>
                <Badge variant="default" className="text-green-600">
                  Enforced
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Admin Activity Logging</span>
                <Badge variant="default" className="text-green-600">
                  Active
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>AI Logs Retention</span>
                <Badge variant="outline">6 Months</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full">
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
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SAINTRIX</span>
              <Badge variant="outline" className="text-xs">
                Admin Portal
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search client name/email..." className="pl-10 w-64" />
            </div>

            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Admin</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <XCircle className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
