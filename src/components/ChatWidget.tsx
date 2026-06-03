import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type Step = "lead" | "chat";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface LeadData {
  name: string;
  contact: string;
  grade: string;
  subject: string;
}

const GRADE_OPTIONS = [
  "Kindergarten",
  "1st–3rd Grade",
  "4th–5th Grade",
  "6th–8th Grade (Middle School)",
  "9th–12th Grade (High School)",
  "College",
  "Adult Learner",
];

const SUBJECT_OPTIONS = [
  "Math",
  "Reading & Writing",
  "Science",
  "SAT / ACT Prep",
  "Academic Coaching",
  "Technology",
  "Not sure yet",
];

const FALLBACK_MSG =
  "I'm having trouble connecting right now. For immediate help, call or email us directly — " +
  site.contact.phone +
  " or " +
  site.contact.email +
  ".";

function TypingDots() {
  return (
    <span className="inline-flex gap-[3px] items-center py-0.5">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="size-1.5 rounded-full bg-current opacity-60 animate-bounce"
          style={{ animationDelay: `${delay}ms`, animationDuration: "1s" }}
        />
      ))}
    </span>
  );
}

function InputField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-primary">{label}</label>
      {children}
    </div>
  );
}

const inputCls = cn(
  "w-full rounded-lg border border-border bg-background",
  "px-3 py-2 text-sm text-primary placeholder:text-muted-foreground/50",
  "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/60",
  "transition-colors duration-150"
);

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("lead");
  const [lead, setLead] = useState<LeadData>({
    name: "",
    contact: "",
    grade: "",
    subject: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function streamResponse(apiMessages: { role: "user" | "assistant"; content: string }[]) {
    setIsStreaming(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok || !res.body) throw new Error("API error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: FALLBACK_MSG,
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  }

  function handleLeadSubmit(e: FormEvent) {
    e.preventDefault();

    // Fire-and-forget: email lead data to Tiana via /api/lead
    // Non-blocking — chat proceeds whether or not the email succeeds
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    }).catch(() => {});

    setStep("chat");

    // Warm opening greeting from the assistant (generated locally, no API call)
    const greeting =
      `Hi ${lead.name}! I'm here to answer any questions about HUMBLE Learning Co.` +
      (lead.subject !== "Not sure yet"
        ? ` What would you like to know about ${lead.subject} tutoring?`
        : " What would you like to know?");

    setMessages([{ role: "assistant", content: greeting }]);
  }

  async function handleSend() {
    if (!input.trim() || isStreaming) return;

    const userText = input.trim();
    setInput("");

    const userMsg: Message = { role: "user", content: userText };
    const updatedDisplay = [...messages, userMsg];
    setMessages(updatedDisplay);

    // Prepend student context for the model (not shown in UI)
    const context = `Student context — Grade: ${lead.grade}, Subject: ${lead.subject}.`;
    const contextPair: { role: "user" | "assistant"; content: string }[] = [
      { role: "user", content: context },
      { role: "assistant", content: "Understood, I'll keep that in mind." },
    ];

    // Only include displayed messages (skip the hardcoded greeting — model doesn't need it)
    const conversationForApi = updatedDisplay.slice(1);
    await streamResponse([...contextPair, ...conversationForApi]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Floating button (always rendered when closed)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Chat with HUMBLE Learning Co."
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "size-14 rounded-full bg-primary shadow-lg",
          "grid place-items-center",
          "ring-2 ring-accent/25",
          "transition-all duration-200 hover:scale-105 hover:shadow-xl hover:ring-accent/50"
        )}
      >
        <MessageCircle className="size-6 text-accent" />
      </button>
    );
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-[calc(100vw-3rem)] max-w-[380px]",
        "rounded-2xl shadow-2xl overflow-hidden",
        "flex flex-col",
        "bg-card border border-border/50",
        "animate-in slide-in-from-bottom-4 fade-in duration-200"
      )}
      style={{ maxHeight: "min(600px, calc(100vh - 5rem))" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary shrink-0">
        <div>
          <p className="font-serif text-sm font-semibold text-primary-foreground leading-tight">
            HUMBLE Learning Co.
          </p>
          <p className="text-[0.65rem] text-accent leading-tight mt-0.5">
            Ask us anything
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
          className="size-7 grid place-items-center rounded-full text-primary-foreground/60 hover:bg-white/10 hover:text-primary-foreground transition-colors"
        >
          <X className="size-4" />
        </button>
      </div>

      {step === "lead" ? (
        /* Lead capture form */
        <form
          onSubmit={handleLeadSubmit}
          className="flex-1 overflow-y-auto p-4 space-y-3.5"
        >
          <p className="text-[0.8rem] text-muted-foreground leading-relaxed">
            Tell us a bit about your student and we'll point you in the right
            direction.
          </p>

          <InputField label="Your name">
            <input
              type="text"
              placeholder="Jane Smith"
              required
              autoComplete="name"
              value={lead.name}
              onChange={(e) => setLead((l) => ({ ...l, name: e.target.value }))}
              className={inputCls}
            />
          </InputField>

          <InputField label="Email or phone">
            <input
              type="text"
              placeholder="jane@example.com or (818) 555-0100"
              required
              autoComplete="email"
              value={lead.contact}
              onChange={(e) =>
                setLead((l) => ({ ...l, contact: e.target.value }))
              }
              className={inputCls}
            />
          </InputField>

          <InputField label="Student's grade level">
            <select
              required
              value={lead.grade}
              onChange={(e) =>
                setLead((l) => ({ ...l, grade: e.target.value }))
              }
              className={inputCls}
            >
              <option value="">Select grade level</option>
              {GRADE_OPTIONS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </InputField>

          <InputField label="Subject needed">
            <select
              required
              value={lead.subject}
              onChange={(e) =>
                setLead((l) => ({ ...l, subject: e.target.value }))
              }
              className={inputCls}
            >
              <option value="">Select subject</option>
              {SUBJECT_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </InputField>

          <button
            type="submit"
            className={cn(
              "w-full rounded-lg bg-primary text-primary-foreground",
              "py-2.5 text-sm font-medium",
              "transition-all duration-150 hover:bg-primary/90 active:scale-[0.98]"
            )}
          >
            Start Chat
          </button>

          <p className="text-[0.7rem] text-center text-muted-foreground/60 pb-1">
            Or call us directly:{" "}
            <a
              href={`tel:${site.contact.phone.replace(/\D/g, "")}`}
              className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
            >
              {site.contact.phone}
            </a>
          </p>
        </form>
      ) : (
        /* Chat thread */
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[0.82rem] leading-relaxed",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-primary rounded-bl-sm"
                  )}
                >
                  {msg.content ? msg.content : <TypingDots />}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border p-3 flex gap-2 shrink-0">
            <input
              type="text"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isStreaming}
              className={cn(inputCls, "disabled:opacity-50 disabled:cursor-not-allowed")}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isStreaming}
              aria-label="Send message"
              className={cn(
                "size-9 shrink-0 rounded-lg bg-primary grid place-items-center",
                "transition-all duration-150 hover:bg-primary/90 active:scale-95",
                "disabled:opacity-40 disabled:pointer-events-none"
              )}
            >
              <Send className="size-4 text-accent" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
