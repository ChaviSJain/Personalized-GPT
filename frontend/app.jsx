import ChatWindow from './components/ChatWindow'
import AvatarDisplay from './components/AvatarDisplay'
import VoiceButton from './components/VoiceButton'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <AvatarDisplay />
      <ChatWindow />
      <VoiceButton />
    </div>
  )
}
