"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles } from "lucide-react";

const quickReplies = [
  "Tell me about your services",
  "I have a project in mind",
  "Request a quote",
];

const cannedReplies = {
  "Tell me about your services":
    "We offer AI & ML, custom software, web & mobile apps, cloud, data engineering, automation, DevOps, and IT consulting. Which area interests you most?",
  "I have a project in mind":
    "Exciting! Tell me a bit about it — your goal, timeline, and budget range — and our team will get back to you within one business day.",
  "Request a quote":
    "Happy to help. Share your email and a short description of what you need, and we'll send a tailored quote. You can also reach us at contact@selinyx.com.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "bot",
      text: "Hi 👋 Welcome to Selinyx. How can I help you today?",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), from: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    const reply =
      cannedReplies[trimmed] ??
      "Thanks for reaching out! A Selinyx specialist will follow up shortly. For anything urgent, email contact@selinyx.com.";

    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: reply }]);
    }, 650);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 flex h-[30rem] w-[calc(100vw-3rem)] max-w-[24rem] flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/95 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/95"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-brand-gradient px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Selinyx Assistant</p>
                  <p className="flex items-center gap-1.5 text-xs text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Online
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-brand-600 text-white"
                        : "rounded-bl-md bg-ink-100 text-ink-800 dark:bg-white/10 dark:text-ink-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {messages.length <= 1 && (
                <div className="space-y-2 pt-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="block w-full rounded-xl border border-brand-200 bg-brand-50/60 px-3.5 py-2.5 text-left text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100 dark:border-brand-400/30 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-ink-200/60 p-3 dark:border-white/10"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        type="button"
        aria-label={open ? "Close assistant" : "Open Selinyx Assistant"}
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-white shadow-soft-lg"
      >
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent-400 text-[10px] font-bold text-white ring-2 ring-white dark:ring-ink-950">
            <Sparkles className="h-3 w-3" />
          </span>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "bot"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
