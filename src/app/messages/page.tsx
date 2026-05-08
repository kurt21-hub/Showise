"use client";

import React, { useState } from 'react';
import { Search, Send, MoreVertical, Phone, Video, Image as ImageIcon, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const MessagesPage = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, name: 'Mike R.', lastMsg: 'Is the size 10 still available?', time: '2m ago', unread: true, online: true },
    { id: 2, name: 'Sarah K.', lastMsg: 'I can ship it tomorrow morning.', time: '1h ago', unread: false, online: false },
    { id: 3, name: 'David L.', lastMsg: 'Thanks for the trade!', time: '2d ago', unread: false, online: true },
  ];

  const messages = [
    { id: 1, sender: 'Mike R.', text: 'Hey! I saw your listing for the Yeezys.', time: '10:30 AM', isMe: false },
    { id: 2, sender: 'Me', text: 'Hi Mike! Yes, they are still available.', time: '10:32 AM', isMe: true },
    { id: 3, sender: 'Mike R.', text: 'Would you be interested in a trade for my Jordan 1s?', time: '10:33 AM', isMe: false },
    { id: 4, sender: 'Me', text: 'Possibly! What size are they?', time: '10:35 AM', isMe: true },
    { id: 5, sender: 'Mike R.', text: 'They are size 10.5, brand new.', time: '10:36 AM', isMe: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-128px)]">
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 h-full overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search chats..." className="pl-10 rounded-xl bg-gray-50 border-none" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div 
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={cn(
                  "p-4 flex items-center space-x-4 cursor-pointer transition-colors",
                  activeChat === chat.id ? "bg-orange-50" : "hover:bg-gray-50"
                )}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-orange-100 text-orange-600 font-bold">{chat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm truncate">{chat.name}</h3>
                    <span className="text-[10px] text-gray-400">{chat.time}</span>
                  </div>
                  <p className={cn("text-xs truncate", chat.unread ? "text-gray-900 font-bold" : "text-gray-500")}>
                    {chat.lastMsg}
                  </p>
                </div>
                {chat.unread && <div className="w-2 h-2 bg-orange-600 rounded-full" />}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="hidden md:flex flex-1 flex-col bg-gray-50/30">
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-orange-100 text-orange-600 font-bold">M</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-sm">Mike R.</h3>
                <p className="text-[10px] text-green-500 font-medium">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full"><Phone className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full"><Video className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex", msg.isMe ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[70%] p-4 rounded-2xl text-sm shadow-sm",
                  msg.isMe ? "bg-orange-600 text-white rounded-tr-none" : "bg-white text-gray-900 rounded-tl-none"
                )}>
                  <p>{msg.text}</p>
                  <p className={cn("text-[10px] mt-1 text-right", msg.isMe ? "text-orange-100" : "text-gray-400")}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400"><ImageIcon className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400"><Smile className="w-5 h-5" /></Button>
              <Input 
                placeholder="Type a message..." 
                className="flex-1 rounded-full bg-gray-50 border-none h-12 px-6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 w-12 p-0">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;