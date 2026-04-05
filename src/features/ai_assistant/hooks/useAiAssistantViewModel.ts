import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/core/routing/RouteConstants';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const useAiAssistantViewModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your PetEco AI Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Mock AI Response Logic for context-aware actions
    setTimeout(() => {
      let botResponse = "I'm here to help!";
      const lowerText = text.toLowerCase();

      if (lowerText.includes('vet') || lowerText.includes('doctor')) {
        botResponse = "I can help you book a vet appointment. Navigating to Vet Doctor section...";
        navigate(ROUTES.VET_DOCTOR);
      } else if (lowerText.includes('food') || lowerText.includes('shop')) {
        botResponse = "Opening the Pet Shop for you!";
        navigate(ROUTES.PET_SHOP);
      } else if (lowerText.includes('emergency')) {
        botResponse = "EMERGENCY DETECTED. Alerting services...";
        navigate(ROUTES.EMERGENCY);
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  }, [navigate]);

  return {
    isOpen,
    toggleOpen,
    messages,
    sendMessage,
    inputValue,
    setInputValue,
    data: undefined, // Compatibility with generated types
    isLoading: false,
    error: null
  };
};
