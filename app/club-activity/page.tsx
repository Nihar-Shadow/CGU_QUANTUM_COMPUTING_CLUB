"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"

export default function ClubActivityPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeTab, setActiveTab] = useState<"Gallery" | "Event">("Gallery")
  const [fade, setFade] = useState(true)

  const upcomingEvents = [
    {
      id: 1,
      title: "Quantum Algorithms Deep Dive",
      date: "2024-02-20",
      time: "2:00 PM - 5:00 PM",
      location: "Physics Lab, Block A",
      capacity: 30,
      registered: 18,
      description:
        "Comprehensive workshop covering Shor's algorithm, Grover's search, and quantum machine learning algorithms.",
      type: "Workshop",
      difficulty: "Intermediate",
      prerequisites: "Basic quantum mechanics knowledge",
      instructor: "Dr. Sarah Chen",
      registrationLink: "https://forms.google.com/quantum-algorithms-workshop",
    },
    {
      id: 2,
      title: "IBM Qiskit Certification Prep",
      date: "2024-02-25",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab, Block B",
      capacity: 25,
      registered: 22,
      description: "Intensive preparation session for IBM Qiskit Developer Certification with hands-on practice.",
      type: "Certification",
      difficulty: "Advanced",
      prerequisites: "Python programming, Qiskit basics",
      instructor: "Alex Kumar",
      registrationLink: "https://forms.google.com/qiskit-certification-prep",
    },
    {
      id: 3,
      title: "Quantum Career Panel Discussion",
      date: "2024-03-05",
      time: "4:00 PM - 6:00 PM",
      location: "Main Auditorium",
      capacity: 100,
      registered: 67,
      description: "Industry experts from IBM, Google, and Microsoft discuss career paths in quantum computing.",
      type: "Panel",
      difficulty: "Beginner",
      prerequisites: "None",
      instructor: "Industry Experts",
      registrationLink: "https://forms.google.com/quantum-career-panel",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Quantum Cryptography Workshop",
      date: "2024-01-15",
      attendees: 28,
      rating: 4.8,
      highlights: ["RSA vs Quantum encryption", "Quantum key distribution", "Post-quantum cryptography"],
    },
    {
      id: 5,
      title: "Quantum Hardware Seminar",
      date: "2024-01-08",
      attendees: 35,
      rating: 4.9,
      highlights: ["Superconducting qubits", "Ion trap systems", "Photonic quantum computers"],
    },
    {
      id: 6,
      title: "Student Research Showcase",
      date: "2023-12-20",
      attendees: 45,
      rating: 4.7,
      highlights: ["10 student presentations", "Research poster session", "Networking with faculty"],
    },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/image1.jpg",
      title: "Quantum Lab Setup",
      category: "Infrastructure",
      date: "2024-01-10",
      description: "State-of-the-art quantum lab equipped with the latest quantum computers and tools.",
    },
    {
      id: 2,
      src: "/images/gallery/image2.jpg",
      title: "Quantum Workshop",
      category: "Workshops",
      date: "2024-02-15",
      description: "Participants engaging in a hands-on quantum computing workshop.",
    },
    {
      id: 3,
      src: "/images/gallery/image3.jpg",
      title: "Quantum Circuit Competition",
      category: "Competitions",
      date: "2024-03-01",
      description: "Students competing in building the most efficient quantum circuit.",
    },
    {
      id: 4,
      src: "/images/gallery/image4.jpg",
      title: "Research Presentation",
      category: "Research",
      date: "2023-12-15",
      description: "A student presenting their research on quantum entanglement.",
    },
    {
      id: 5,
      src: "/images/gallery/image5.jpg",
      title: "Community Outreach",
      category: "Outreach",
      date: "2023-11-20",
      description: "Club members conducting a workshop at a local school.",
    },
    {
      id: 6,
      src: "/images/gallery/image6.jpg",
      title: "Team Building Activity",
      category: "Team",
      date: "2023-10-10",
      description: "Members participating in a team-building exercise.",
    },
  ]

  const categories = [
    "All",
    "Workshops",
    "Events",
    "Competitions",
    "Team",
    "Research",
    "Projects",
    "Achievements",
    "Infrastructure",
    "Outreach",
  ]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors = {
      Workshops: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Events: "bg-green-500/20 text-green-300 border-green-500/30",
      Competitions: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      Team: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Research: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      Projects: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      Achievements: "bg-red-500/20 text-red-300 border-red-500/30",
      Infrastructure: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      Outreach: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "Certification":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "Panel":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-300"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300"
      case "Advanced":
        return "bg-red-500/20 text-red-300"
      default:
        return "bg-gray-500/20 text-gray-300"
    }
  }

  // Tab switch with fade animation
  const handleTabSwitch = (tab: "Gallery" | "Event") => {
    setFade(false)
    setTimeout(() => {
      setActiveTab(tab)
      setFade(true)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Club Activities
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our workshops, events, and interactive games to deepen your understanding of quantum computing.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10 gap-4">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 border ${
              activeTab === "Gallery"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-500 shadow"
                : "bg-slate-900 text-gray-400 border-slate-700 hover:bg-slate-800"
            }`}
            onClick={() => handleTabSwitch("Gallery")}
          >
            Gallery
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 border ${
              activeTab === "Event"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-500 shadow"
                : "bg-slate-900 text-gray-400 border-slate-700 hover:bg-slate-800"
            }`}
            onClick={() => handleTabSwitch("Event")}
          >
            Event
          </button>
        </div>

        {/* Tab Content with fade transition */}
        <div
          className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
          key={activeTab}
        >
          {activeTab === "Gallery" ? (
            <section>
              <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
              {/* Category Filter */}
              <div className="mb-8 flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-full border ${
                      selectedCategory === cat
                        ? "bg-slate-800 border-white"
                        : "bg-slate-900 border-slate-700"
                    } transition`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredImages.map((img) => (
                  <div
                    key={img.id}
                    className="bg-slate-900 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{img.title}</h3>
                      <span
                        className={`inline-block mt-2 px-2 py-1 rounded border text-xs ${getCategoryColor(
                          img.category
                        )}`}
                      >
                        {img.category}
                      </span>
                      <p className="mt-2 text-sm text-slate-400">{img.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Lightbox Modal */}
              {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                  <div className="bg-slate-900 rounded-lg p-8 max-w-lg w-full relative">
                    <button
                      className="absolute top-2 right-2 text-white text-2xl"
                      onClick={() => setSelectedImage(null)}
                    >
                      ×
                    </button>
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full h-64 object-cover rounded"
                    />
                    <h3 className="mt-4 text-xl font-bold">{selectedImage.title}</h3>
                    <span
                      className={`inline-block mt-2 px-2 py-1 rounded border text-xs ${getCategoryColor(
                        selectedImage.category
                      )}`}
                    >
                      {selectedImage.category}
                    </span>
                    <p className="mt-2 text-sm text-slate-400">{selectedImage.date}</p>
                    <p className="mt-4">{selectedImage.description}</p>
                  </div>
                </div>
              )}
            </section>
          ) : (
            <section>
              <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                        <Badge className={getDifficultyColor(event.difficulty)}>{event.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                          {new Date(event.date).toLocaleDateString()} • {event.time}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="h-4 w-4 mr-2 text-green-400" />
                          {event.registered}/{event.capacity} registered
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-2 text-orange-400" />
                          Instructor: {event.instructor}
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-gray-500 mb-3">Prerequisites: {event.prerequisites}</p>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        >
                          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Register Now
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-white mb-8 mt-16 text-center">Recent Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="bg-slate-800/50 border-purple-500/20">
                    <CardContent className="p-6">
                      <CardTitle className="text-white text-lg mb-3">{event.title}</CardTitle>
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Date:</span>
                          <span className="text-white">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Attendees:</span>
                          <span className="text-white">{event.attendees}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">★</span>
                            <span className="text-white">{event.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights:</h4>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  )
}
