"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Upload,
  Brain,
  FileText,
  Star,
  Shield,
  TrendingUp,
  Eye,
  Lock,
  Users,
  Clock,
  Target,
  Play,
  ChevronRight,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  MessageCircle,
  Video,
} from "lucide-react"

export default function SaintrixLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState("")
  const [showLegacyCode, setShowLegacyCode] = useState(false)

  const testimonials = [
    {
      name: "Sarah M.",
      score: "+104 points",
      time: "60 days",
      text: "I couldn't believe how fast SAINTRIX worked. The AI found errors I never knew existed!",
      avatar: "SM",
    },
    {
      name: "Marcus J.",
      score: "+87 points",
      time: "45 days",
      text: "Finally, a credit repair service that actually works. The automation is incredible.",
      avatar: "MJ",
    },
    {
      name: "Lisa K.",
      score: "+120 points",
      time: "3 months",
      text: "From 580 to 700! SAINTRIX helped me qualify for my dream home mortgage.",
      avatar: "LK",
    },
  ]

  const features = [
    { icon: Brain, title: "AI Dispute Letter Generator", description: "Custom letters written by AI" },
    { icon: Eye, title: "OCR Document Scanning", description: "Automatic report analysis" },
    { icon: TrendingUp, title: "Credit Report Analyzer", description: "Find hidden violations" },
    { icon: Clock, title: "Autopilot Letter Scheduling", description: "Set it and forget it" },
    { icon: Target, title: "Credit Score Tracker", description: "Monitor your progress" },
    { icon: Shield, title: "Emergency Pause Button", description: "Full control anytime" },
    { icon: Users, title: "1-on-1 Review Mode", description: "Human oversight available" },
    { icon: Lock, title: "100% Secure, Encrypted", description: "Bank-level security" },
  ]

  const steps = [
    {
      number: "01",
      title: "Upload Your Credit Report",
      description: "Just drop in your PDF or log in to Credit Karma — we'll handle the rest.",
      icon: Upload,
    },
    {
      number: "02",
      title: "SAINTRIX AI Finds Errors & Violations",
      description: "Our system scans your report for outdated items, FCRA violations, and credit bureau mistakes.",
      icon: Brain,
    },
    {
      number: "03",
      title: "Custom Disputes Filed Automatically",
      description: "We write and schedule unique, legally backed letters on your behalf — mailed like clockwork.",
      icon: FileText,
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$85",
      period: "/month",
      description: "Personal Credit Repair (Manual Uploads Only)",
      features: ["Manual credit report upload", "Basic dispute letters", "Email support", "Monthly progress reports"],
      popular: false,
    },
    {
      name: "Standard",
      price: "$185",
      period: "/month",
      description: "AI Disputes + Autopilot",
      features: [
        "AI-powered dispute generation",
        "Autopilot scheduling",
        "OCR document scanning",
        "Priority support",
        "Real-time score tracking",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$250+",
      period: "/month",
      description: "Business + Personal Credit Repair + Priority Review",
      features: [
        "Everything in Standard",
        "Business credit repair",
        "1-on-1 expert review",
        "Custom dispute strategies",
        "Phone support",
      ],
      popular: false,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-3xl font-bold text-white">SAINTRIX</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your Credit:{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI-Powered Restoration
            </span>{" "}
            for Lasting Financial Health
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            SAINTRIX scans your credit report, finds legal violations, and files custom disputes automatically. You just
            upload, relax, and watch your score rise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Get Started – Fix My Credit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Play className="mr-2 h-5 w-5" />
              View Demo Letter
            </Button>
          </div>

          {/* Testimonial Slider */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-slate-700">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-300 text-lg mb-4">"{testimonials[currentTestimonial].text}"</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{testimonials[currentTestimonial].avatar}</span>
              </div>
              <div>
                <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                <div className="text-orange-400 font-bold">
                  {testimonials[currentTestimonial].score} in {testimonials[currentTestimonial].time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + Partners */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-lg mb-8">Trusted by 500+ people who fixed their credit the right way</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-slate-400 font-semibold">Supabase</div>
              <div className="text-slate-400 font-semibold">Vercel</div>
              <div className="text-slate-400 font-semibold">Stripe</div>
              <div className="text-slate-400 font-semibold">OpenAI</div>
              <div className="text-slate-400 font-semibold">Experian</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three simple steps to transform your credit score with the power of AI and legal expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-orange-400 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-8 w-8 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">What Your Dashboard Looks Like</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get a real-time view of your credit repair progress with our intuitive client portal
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600">
              <div className="bg-slate-900 rounded-2xl p-6">
                {/* Mock Dashboard */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg"></div>
                    <span className="text-white font-bold text-lg">SAINTRIX Dashboard</span>
                  </div>
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Score: 720 (+45)</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-white mb-2">5</div>
                      <div className="text-slate-400">Disputes Filed</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                      <div className="text-slate-400">Items Removed</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">2</div>
                      <div className="text-slate-400">In Progress</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-slate-300">Capital One collection removed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-yellow-400" />
                      <span className="text-slate-300">Dispute letter sent to Experian</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="h-5 w-5 text-blue-400" />
                      <span className="text-slate-300">AI generated new dispute strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Select the perfect plan for your credit repair journey. All plans include our AI-powered dispute system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-orange-500 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-400">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowLegacyCode(!showLegacyCode)}
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Have a Legacy Access Code?
            </button>
            {showLegacyCode && (
              <div className="mt-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your legacy access code"
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to repair your credit, powered by cutting-edge AI and legal expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">How is this legal?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We operate within the bounds of consumer protection law, ensuring every dispute is legally sound
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">FCRA Compliant</h3>
                <p className="text-slate-400 text-sm">
                  We cite real consumer protection laws (FCRA §§ 609, 611, 1681s)
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Data-Driven</h3>
                <p className="text-slate-400 text-sm">All disputes are based on actual credit report data</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Full Control</h3>
                <p className="text-slate-400 text-sm">You review every letter before it's sent</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Transparent</h3>
                <p className="text-slate-400 text-sm">No guarantees — just legal accuracy and full transparency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Not ready yet?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get our free guide:{" "}
            <span className="text-orange-400 font-semibold">5 Credit Report Mistakes You Can Legally Remove Today</span>
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 border-slate-600 text-white flex-1"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-2 font-semibold rounded-xl"
            >
              Send My Free Guide
            </Button>
          </form>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to take control of your credit?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of people who've already transformed their financial future with SAINTRIX
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Credit Repair Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold text-white">SAINTRIX</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                AI-powered credit repair that's legally compliant, transparent, and effective. Take control of your
                financial future today.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" />
                <MessageCircle className="h-6 w-6 text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" />
                <Video className="h-6 w-6 text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span className="text-slate-400 text-sm">ceo@bluecrestfinancialconsultantllc.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                  <span className="text-slate-400 text-sm">
                    1870 The Exchange Suite 200 #1318
                    <br />
                    Atlanta, GA 30339
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2024 SAINTRIX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
