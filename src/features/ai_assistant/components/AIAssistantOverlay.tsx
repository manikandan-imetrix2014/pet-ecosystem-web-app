import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, MessageSquare } from 'lucide-react';
import { useAiAssistantViewModel } from '../hooks/useAiAssistantViewModel';
import AIChatPanel from './AIChatPanel';
import CustomButton from '@/core/components/CustomButton';

const AIAssistantOverlay = () => {
  const { 
    isOpen, 
    toggleOpen, 
    messages, 
    inputValue, 
    setInputValue, 
    sendMessage 
  } = useAiAssistantViewModel();
  
  const location = useLocation();

  // Hide on login and registration pages
  const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/register');
  if (isAuthPage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      {/* Floating Chat Panel */}
      {isOpen && (
        <div className="pointer-events-auto">
          <AIChatPanel
            messages={messages}
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSendMessage={sendMessage}
            onClose={toggleOpen}
          />
        </div>
      )}

      {/* Floating Action Button */}
      <CustomButton
        size="lg"
        className="h-14 w-14 rounded-full shadow-2xl pointer-events-auto active:scale-90 transition-transform duration-200"
        onClick={toggleOpen}
      >
        {isOpen ? <MessageSquare className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
      </CustomButton>
    </div>
  );
};

export default AIAssistantOverlay;
