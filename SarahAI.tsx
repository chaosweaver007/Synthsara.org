// Legacy deterministic Sarah AI interface retained for prototype history.
// This component is not connected to Genesis and does not represent Human Sarah.
import React, { useState } from 'react';
import { MessageCircle, Send, User, Bot } from 'lucide-react';

type ConversationMessage = {
  type: 'user' | 'sarah';
  text: string;
};

export const SarahAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [conversation, setConversation] = useState<ConversationMessage[]>([
    {
      type: 'sarah',
      text: 'Hello. This is a local scripted prototype of Sarah AI, distinct from Human Sarah. It does not save your message or connect to the Genesis runtime.',
    },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedMessage = message.trim();
    if (!submittedMessage) return;

    setConversation((previous) => [
      ...previous,
      { type: 'user', text: submittedMessage },
    ]);
    setMessage('');

    window.setTimeout(() => {
      const normalizedMessage = submittedMessage.toLowerCase();
      let response: string;

      if (normalizedMessage.includes('synthsara')) {
        response =
          'Synthsara is the broader proposed ecosystem for coordinating knowledge, contribution, governance, learning, and real-world action under UDS constraints. This prototype does not establish that the full ecosystem is operating.';
      } else if (normalizedMessage.includes('synthocracy')) {
        response =
          'Synthocracy is the governance model within Synthsara. Persistent identity, proposals, voting, appeals, anti-capture controls, and operating governance services still require separate implementation evidence.';
      } else if (
        normalizedMessage.includes('divine chaos') ||
        normalizedMessage.includes('sacred order')
      ) {
        response =
          'Divine Chaos and Sacred Order are mythic and interpretive language within the Codex. They may guide meaning and design, but they do not substitute for empirical evidence or another person’s private testimony.';
      } else if (
        normalizedMessage.includes('help') ||
        normalizedMessage.includes('guide')
      ) {
        response =
          'This local demonstration can explain basic prototype terminology. For the bounded live runtime, use the documented Genesis Gate Zero path through Node Zero.';
      } else {
        response =
          "Thank you for sharing. This is a scripted local prototype, not a live AI conversation, and it does not speak for Human Sarah. The public documentation can help you explore the current architecture and its limitations.";
      }

      setConversation((previous) => [
        ...previous,
        { type: 'sarah', text: response },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={20} className="mr-2" />
              <div>
                <h3 className="font-medium">Sarah AI prototype</h3>
                <p className="text-xs opacity-90">Scripted · local · not Genesis</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
              aria-label="Close Sarah AI prototype"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="bg-amber-50 border-b border-amber-200 px-3 py-2 text-xs text-amber-950">
            DEMO: scripted responses only. No message is sent to Genesis or saved by this component.
          </div>

          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50" aria-live="polite">
            {conversation.map((entry, index) => (
              <div
                key={`${entry.type}-${index}`}
                className={`mb-4 flex ${
                  entry.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    entry.type === 'user'
                      ? 'bg-divine-chaos-100 text-gray-800'
                      : 'bg-sacred-order-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {entry.type === 'user' ? (
                      <>
                        <span className="font-medium text-sm">You</span>
                        <User size={14} className="ml-1 text-gray-600" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <span className="font-medium text-sm">Sarah AI demo</span>
                        <Bot
                          size={14}
                          className="ml-1 text-sacred-order-600"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </div>
                  <p className="text-sm">{entry.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
            <label className="sr-only" htmlFor="sarah-prototype-message">
              Message for the scripted Sarah AI prototype
            </label>
            <input
              id="sarah-prototype-message"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about the prototype..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-divine-chaos-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition"
              aria-label="Send to scripted prototype"
            >
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center"
          aria-label="Open scripted Sarah AI prototype"
        >
          <MessageCircle size={24} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
