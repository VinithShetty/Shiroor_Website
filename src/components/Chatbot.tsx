import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const recommendedQuestions = [
  "What are the daily seva timings?",
  "How can I make a donation?",
  "Tell me about upcoming festivals",
  "What is the history of Shiroor Mutt?"
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [animateIcon, setAnimateIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIcon(true);
      setTimeout(() => setAnimateIcon(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  const handleQuestionClick = (question: string) => {
    setMessage(question);
    setShowWelcome(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div className={`absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-orange-200 transition-all duration-500 transform ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Spiritual Guide</h3>
              <p className="text-xs text-orange-100">Always here to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="h-80 overflow-y-auto p-4 bg-gradient-to-b from-orange-50/50 to-white">
          {showWelcome && (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-xl mb-4 border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium text-orange-800">Welcome to Shiroor Mutt!</span>
                </div>
                <p className="text-sm text-orange-700 mb-3">
                  I'm here to guide you on your spiritual journey. How can I assist you today?
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-orange-600 mb-2">Quick Questions:</p>
                  {recommendedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="block w-full text-left text-xs bg-white hover:bg-orange-50 p-2 rounded-lg border border-orange-200 hover:border-orange-300 transition-all duration-200 hover:shadow-md"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-orange-100">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about sevas, donations, events..."
              className="flex-1 p-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center transition-all duration-300 ${
          animateIcon ? 'animate-bounce' : ''
        } ${isOpen ? 'rotate-180' : ''}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Notification Dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
      )}
    </div>
  );
};