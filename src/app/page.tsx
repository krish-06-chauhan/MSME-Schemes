"use client";

import { useState, useEffect } from 'react';
import type { Message } from '@/types';
import { MessageList } from '@/components/chat/MessageList';
import { MessageInput } from '@/components/chat/MessageInput';
import { AppHeader } from '@/components/layout/AppHeader';
import { generateConversationTitle } from '@/ai/flows/generate-conversation-title';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid is installed or use Math.random for demo

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationTitle, setConversationTitle] = useState('New Conversation');
  const { toast } = useToast();

  // Simulate initial greeting message from AI
  useEffect(() => {
    setMessages([
      {
        id: uuidv4(),
        content: "Hello! I'm Chai, your friendly assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
  }, []);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    // Add a thinking bubble for AI
    const thinkingMessageId = uuidv4();
    const thinkingMessage: Message = {
      id: thinkingMessageId,
      content: "AI is thinking...",
      sender: 'ai',
      timestamp: new Date(),
      isThinking: true,
    };
    setMessages((prevMessages) => [...prevMessages, thinkingMessage]);

    // Simulate AI response
    try {
      // In a real app, this would be an API call to your LLM
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      const aiResponseContent = `This is a simulated AI response to: "${content}". I can help with various topics. For example, try asking about *markdown support* or **bold text**.
      
You can also try lists:
- Item 1
- Item 2

Or even \`inline code\`.
      `;
      
      const aiResponseMessage: Message = {
        id: uuidv4(), // Use new ID for actual response
        content: aiResponseContent,
        sender: 'ai',
        timestamp: new Date(),
      };

      // Replace thinking bubble with actual response
      setMessages((prevMessages) => 
        prevMessages.filter(msg => msg.id !== thinkingMessageId).concat(aiResponseMessage)
      );

      // Generate conversation title
      if (messages.length > 1 && messages.length < 6) { // Generate title after a few messages
        updateConversationTitle();
      }
    } catch (error) {
      console.error('Error generating AI response:', error);
      toast({
        title: 'Error',
        description: 'Failed to get AI response.',
        variant: 'destructive',
      });
       // Remove thinking bubble on error
      setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== thinkingMessageId));
    } finally {
      setIsLoading(false);
    }
  };

  const updateConversationTitle = async () => {
    const conversationContent = messages
      .map((msg) => `${msg.sender}: ${msg.content}`)
      .join('\n');

    try {
      const result = await generateConversationTitle({ conversationContent });
      if (result.shouldUpdateTitle && result.title) {
        setConversationTitle(result.title);
        toast({
          title: 'Conversation Title Updated',
          description: `New title: "${result.title}"`,
        });
      }
    } catch (error) {
      console.error('Failed to generate conversation title:', error);
      // Optionally notify user about title generation failure
    }
  };

  return (
    <div className="flex flex-col h-full flex-grow"> {/* Changed from fixed height to flex-grow */}
      <AppHeader conversationTitle={conversationTitle} />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
