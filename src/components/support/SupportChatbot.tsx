import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { supportOptions } from './supportOptions';
import { SupportOption as SupportOptionComponent } from './SupportOption';
import { Message, MessageType, SupportOption } from './types';
import { findMatchingOption } from './chatUtils';

interface SupportChatbotProps {
  isFloating?: boolean;
}

export const SupportChatbot: React.FC<SupportChatbotProps> = ({ isFloating = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: MessageType.Agent,
      content: "Hi! I'm here to help. What can I assist you with today?",
      options: supportOptions
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState<SupportOption | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: SupportOption) => {
    setSelectedOption(option);
    addMessage(MessageType.User, option.title);
    processOption(option);
  };

  const addMessage = (type: MessageType, content: string, options?: SupportOption[]) => {
    setMessages(prev => [...prev, { type, content, options }]);
  };

  const processOption = (option: SupportOption) => {
    if (option.subOptions) {
      setTimeout(() => {
        addMessage(
          MessageType.Agent,
          `Let me help you with ${option.title.toLowerCase()}. What specific issue are you having?`,
          option.subOptions
        );
      }, 500);
    } else if (option.response) {
      setTimeout(() => {
        addMessage(
          MessageType.Agent,
          option.response.content.join('\n\n'),
          undefined,
        );
        // Reset selection after response
        setSelectedOption(null);
        // Show main options again after a delay
        setTimeout(() => {
          addMessage(
            MessageType.Agent,
            "Is there anything else I can help you with?",
            supportOptions
          );
        }, 1000);
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addMessage(MessageType.User, inputText);
    const matchingOption = findMatchingOption(inputText, supportOptions);
    
    if (matchingOption) {
      setSelectedOption(matchingOption);
      processOption(matchingOption);
    } else {
      setTimeout(() => {
        addMessage(
          MessageType.Agent,
          "I'm not quite sure what you're asking. Could you please select one of these options or try rephrasing your question?",
          supportOptions
        );
      }, 500);
    }

    setInputText('');
  };

  return (
    <div className={`flex flex-col ${isFloating ? 'h-[500px]' : 'h-[600px] max-w-4xl mx-auto'}`}>
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar"
      >
        <div className="space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${message.type === MessageType.User ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.type === MessageType.User
                    ? 'bg-red-500 text-white'
                    : 'bg-neutral-800 text-neutral-100'
                } rounded-lg p-4`}
              >
                {message.type === MessageType.Agent && (
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold">Support Agent</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{message.content}</div>
                {message.options && (
                  <div className={`grid gap-4 ${isFloating ? 'grid-cols-1' : 'md:grid-cols-2'} mt-4`}>
                    {message.options.map((option) => (
                      <SupportOptionComponent
                        key={option.id}
                        icon={option.icon}
                        title={option.title}
                        description={option.description}
                        onClick={() => handleOptionClick(option)}
                        isSelected={selectedOption?.id === option.id}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-neutral-800">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-white hover:brightness-90 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
