import React, { useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CustomButton from '@/core/components/CustomButton';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface AIChatPanelProps {
  messages: Message[];
  inputValue: string;
  onInputChange: (val: string) => void;
  onSendMessage: (text: string) => void;
  onClose: () => void;
}

const AIChatPanel = ({ 
  messages, 
  inputValue, 
  onInputChange, 
  onSendMessage, 
  onClose 
}: AIChatPanelProps) => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(inputValue);
  };

  return (
    <div className="flex flex-col h-[500px] w-80 md:w-96 glass-card rounded-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
      {/* Header */}
      <div className="p-4 bg-primary-600 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-bold">{t('ai.assistant_title')}</span>
        </div>
        <CustomButton variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={onClose}>
          <X className="h-5 w-5" />
        </CustomButton>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.sender === 'user' ? 'bg-secondary-100 text-secondary-600' : 'bg-primary-100 text-primary-600'
              }`}>
                {msg.sender === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${
                msg.sender === 'user' 
                  ? 'bg-secondary-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white dark:bg-slate-900 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={t('ai.input_placeholder')}
          className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <CustomButton type="submit" size="icon" className="rounded-full">
          <Send className="h-4 w-4" />
        </CustomButton>
      </form>
    </div>
  );
};

export default AIChatPanel;
