"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn, Calendar } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const [selectedGame, setSelectedGame] = useState<any>(null)

  const games = [
    {
      id: 13,
      src: "/placeholder.svg?height=400&width=600",
      title: "Quantum Tic Tac Toe",
      category: "Games",
      date: "2025-08-14",
      description:
        "Experience quantum superposition and entanglement in this mind-bending version of the classic game. Difficulty: Beginner. Concepts: Superposition, Entanglement, Measurement. Play Time: 10-15 minutes.",
      link: "/games/tictactoe",
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 14,
      src: "/placeholder.svg?height=400&width=600",
      title: "Quantum Maze Runner",
      category: "Games",
      date: "2025-08-14",
      description:
        "Navigate through quantum tunnels using probability amplitudes and wave function collapse. Difficulty: Intermediate. Concepts: Wave functions, Tunneling, Probability. Play Time: 15-20 minutes.",
      link: "/games/maze",
      featured: false,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 15,
      src: "/placeholder.svg?height=400&width=600",
      title: "Qubit Simulator",
      category: "Games",
      date: "2025-08-14",
      description:
        "Interactive Bloch sphere manipulation to understand qubit states and quantum gates. Difficulty: Advanced. Concepts: Bloch sphere, Quantum gates, State vectors. Play Time: 20-30 minutes.",
      link: "/games/qubit-simulator",
      featured: false,
      color: "from-green-500 to-teal-500",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Games: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Games Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Games
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore and play quantum-themed games created by our club members!
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="group relative bg-slate-800/50 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedGame(game)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={game.src || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className={getCategoryColor(game.category)}>{game.category}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 line-clamp-2">{game.title}</h3>
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(game.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/10"
              onClick={() => setSelectedGame(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={selectedGame.src || "/placeholder.svg"}
                alt={selectedGame.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedGame.title}</h2>
                    <Badge className={getCategoryColor(selectedGame.category)}>{selectedGame.category}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedGame.date).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedGame.description}</p>
                {selectedGame.link && (
                  <Link href={selectedGame.link} className="inline-block mt-4">
                    <Button variant="default">Play Now</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
