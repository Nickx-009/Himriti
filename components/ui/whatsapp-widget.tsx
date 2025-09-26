"use client";

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './button';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppWidget({ 
  phoneNumber = "919015417203", 
  defaultMessage = "Hello! I'm interested in learning more about Himriti Public School." 
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    "I'd like to schedule a campus visit",
    "Can you send me the admission brochure?",
    "What are your fee structures?",
    "I have questions about your academic programs",
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-300 ${isOpen ? 'mb-4' : ''}`}>
          {isOpen && (
            <div className="bg-white rounded-lg shadow-2xl p-4 w-80 border border-gray-200 mb-4 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="/Himriti.png" 
                      alt="Himriti Public School" 
                      className="w-full h-full object-contain bg-[#faf7f2]"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d3748] text-sm">Himriti Public School</h3>
                    <p className="text-xs text-[#4a5568]">Typically replies instantly</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-[#4a5568] mb-3">
                  Hi there! 👋 How can we help you today?
                </p>
                
                {/* Quick Message Buttons */}
                <div className="space-y-2 mb-4">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(msg)}
                      className="w-full text-left p-2 text-xs bg-[#faf7f2] hover:bg-[#1f514c]/5 rounded-lg transition-colors text-[#4a5568] hover:text-[#1f514c]"
                    >
                      {msg}
                    </button>
                  ))}
                </div>

                {/* Custom Message Input */}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm resize-none focus:border-[#1f514c] focus:outline-none"
                  rows={3}
                />
              </div>

              <Button 
                onClick={handleSendMessage}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send on WhatsApp
              </Button>
            </div>
          )}
        </div>

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
            isOpen ? 'rotate-45' : 'hover:scale-110'
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </>
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        )}
      </div>
    </>
  );
}