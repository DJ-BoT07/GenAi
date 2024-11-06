
import CountdownTimer from './components/CountdownTimer'

export const metadata = {
  title: 'GenAI Leaderboard | GDGC DYPCOE',
  description: 'Track your progress and compete with other participants in the GenAI learning journey at GDSC DY Patil College of Engineering.',
  keywords: ['GenAI', 'GDSC', 'DY Patil', 'Leaderboard', 'AI Learning', 'Google Developer Student Clubs'],
  openGraph: {
    title: 'GenAI Leaderboard | GDSC DY Patil',
    description: 'Track your progress and compete with other participants in the GenAI learning journey at GDSC DY Patil College of Engineering.',
    images: ['/gdgc.svg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenAI Leaderboard | GDSC DY Patil',
    description: 'Track your progress and compete with other participants in the GenAI learning journey at GDSC DY Patil College of Engineering.',
    images: ['/gdgc.svg'],
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <CountdownTimer />
  
    </main>
  )
}
