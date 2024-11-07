'use client'

import { motion } from 'framer-motion'
import { 
  Trophy, 
  Medal, 
  GamepadIcon, 
  Star, 
  Award, 
  Target, 
  Sparkles,
  Crown,
  Users
} from 'lucide-react'
import { leaderboardData as participants } from '../data/leaderboardData'

const LeaderboardRow = ({ rank, name, badges, games, isTop3 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 ${
      isTop3 ? 'bg-gradient-to-r from-blue-600/30 to-red-500/30' : 'bg-white/5'
    } backdrop-blur-sm rounded-lg mb-2 hover:bg-white/10 transition-all duration-300`}
  >
    <div className="flex items-center gap-2 sm:gap-3">
      {rank <= 3 ? (
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
          {rank === 1 ? <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" /> :
           rank === 2 ? <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" /> :
                       <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />}
        </div>
      ) : (
        <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs sm:text-sm">
          {rank}
        </span>
      )}
      <span className="font-medium truncate text-sm sm:text-base">{name}</span>
    </div>
    <div className="text-center flex items-center justify-center gap-1 sm:gap-2">
      <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
      <span className="text-sm sm:text-base">{badges}</span>
    </div>
    <div className="text-center flex items-center justify-center gap-1 sm:gap-2">
      <GamepadIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
      <span className="text-sm sm:text-base">{games}</span>
    </div>
    <div className="text-right flex items-center justify-end gap-1 sm:gap-2">
      {badges > 10 ? (
        <>
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          <span className="text-yellow-400 text-xs sm:text-sm">Expert</span>
        </>
      ) : badges > 5 ? (
        <>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
          <span className="text-blue-400 text-xs sm:text-sm">Advanced</span>
        </>
      ) : badges > 0 ? (
        <>
          <Target className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
          <span className="text-green-400 text-xs sm:text-sm">Beginner</span>
        </>
      ) : (
        <>
          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          <span className="text-gray-400 text-xs sm:text-sm">New</span>
        </>
      )}
    </div>
  </motion.div>
)

export default function Leaderboard() {
  const leaderboardData = [...participants].sort((a, b) => (b.badges + b.games) - (a.badges + a.games))

  return (
    <div className="w-full max-w-6xl mx-auto p-8 rounded-xl bg-gradient-to-br from-blue-600/10 to-red-500/10 backdrop-blur-sm border border-white/10">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Users className="w-6 h-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
          GenAI Leaderboard
        </h2>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">{leaderboardData.length}</div>
          <div className="text-sm text-gray-400">Total Participants</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">
            {leaderboardData.filter(p => p.badges > 0).length}
          </div>
          <div className="text-sm text-gray-400">Active Learners</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {leaderboardData.filter(p => p.badges > 10).length}
          </div>
          <div className="text-sm text-gray-400">Experts</div>
        </div>
      </div>
      
      {/* Header */}
      <div className="grid grid-cols-4 gap-4 p-4 text-sm text-gray-400 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4" />
          <span>Participant</span>
        </div>
        <div className="text-center flex items-center justify-center gap-2">
          <Trophy className="w-4 h-4" />
          <span>Skill Badges</span>
        </div>
        <div className="text-center flex items-center justify-center gap-2">
          <GamepadIcon className="w-4 h-4" />
          <span>Arcade Games</span>
        </div>
        <div className="text-right flex items-center justify-end gap-2">
          <Star className="w-4 h-4" />
          <span>Status</span>
        </div>
      </div>

      {/* Leaderboard Rows */}
      <div className="space-y-2 max-h-[600px] overflow-y-auto custom-scrollbar mb-6">
        {leaderboardData.map((participant, index) => (
          <LeaderboardRow
            key={index}
            rank={index + 1}
            name={participant.name}
            badges={participant.badges}
            games={participant.games}
            isTop3={index < 3}
          />
        ))}
      </div>

      {/* Footer with Update Info */}
      <div className="mt-8 pt-4 border-t border-white/10 text-center">
        <div className="text-sm text-gray-400">
          Last updated: November 7, 2023 at 20:00 IST
        </div>
      </div>
    </div>
  )
} 