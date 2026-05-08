"use client";

import { useState } from "react";

type ChatStatus = "idle" | "sending" | "sent" | "error";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<ChatStatus>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          page: window.location.href,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data?.error || "Could not send your message.");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setError("Could not send your message. Please try again.");
    }
  };

  return (
    <div className="live-chat">
      {isOpen && (
        <div className="live-chat-panel" role="dialog" aria-label="Live chat">
          <div className="live-chat-header">
            <div>
              <p className="live-chat-eyebrow">Cross Shine support</p>
              <h6>Live Chat</h6>
            </div>
            <button
              type="button"
              className="live-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close live chat"
            >
              ×
            </button>
          </div>

          <div className="live-chat-body">
            <div className="live-chat-message">
              Hi, send us a message here. We’ll reply to you by email as soon
              as possible.
            </div>

            {status === "sent" ? (
              <div className="live-chat-success">
                Thanks. Your message was sent, and we’ll reply by email soon.
                <button
                  type="button"
                  className="live-chat-secondary"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="live-chat-form" onSubmit={onSubmit}>
                <input
                  className="live-chat-hidden"
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="email@domain.com"
                    required
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="How can we help?"
                    rows={4}
                    required
                  />
                </label>

                {status === "error" && (
                  <p className="live-chat-error">{error}</p>
                )}

                <button
                  type="submit"
                  className="live-chat-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        className="live-chat-button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close live chat" : "Open live chat"}
      >
        <span className="live-chat-dot" />
        {isOpen ? "Close" : "Live Chat"}
      </button>

      <style jsx>{`
        .live-chat {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 1000;
          font-family: var(--urbanist), sans-serif;
        }

        .live-chat-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 54px;
          border: 0;
          border-radius: 999px;
          padding: 0 22px;
          background: #43ff32;
          color: #101010;
          font-weight: 800;
          box-shadow: 0 18px 44px rgba(16, 16, 16, 0.28);
        }

        .live-chat-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #101010;
          box-shadow: 0 0 0 6px rgba(16, 16, 16, 0.12);
        }

        .live-chat-panel {
          width: min(360px, calc(100vw - 32px));
          overflow: hidden;
          margin-bottom: 14px;
          border: 1px solid rgba(16, 16, 16, 0.1);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 24px 70px rgba(16, 16, 16, 0.3);
        }

        .live-chat-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 18px 20px;
          background: #101010;
          color: #ffffff;
        }

        .live-chat-header h6,
        .live-chat-eyebrow {
          margin: 0;
        }

        .live-chat-eyebrow {
          color: #43ff32;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .live-chat-close {
          width: 32px;
          height: 32px;
          border: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 24px;
          line-height: 1;
        }

        .live-chat-body {
          padding: 18px;
        }

        .live-chat-message {
          margin-bottom: 14px;
          border-radius: 10px;
          padding: 12px 14px;
          background: #f1f4f2;
          color: #3b3b3b;
          font-size: 14px;
          line-height: 1.45;
        }

        .live-chat-form {
          display: grid;
          gap: 12px;
        }

        .live-chat-form label {
          display: grid;
          gap: 6px;
          color: #101010;
          font-size: 13px;
          font-weight: 800;
        }

        .live-chat-form input,
        .live-chat-form textarea {
          width: 100%;
          border: 1px solid #d9dee2;
          border-radius: 8px;
          padding: 11px 12px;
          color: #101010;
          font: inherit;
          outline: none;
        }

        .live-chat-form input:focus,
        .live-chat-form textarea:focus {
          border-color: #43ff32;
          box-shadow: 0 0 0 3px rgba(67, 255, 50, 0.2);
        }

        .live-chat-hidden {
          position: absolute;
          left: -9999px;
        }

        .live-chat-submit,
        .live-chat-secondary {
          min-height: 46px;
          border: 0;
          border-radius: 8px;
          background: #43ff32;
          color: #101010;
          font-weight: 800;
        }

        .live-chat-submit:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .live-chat-error {
          margin: 0;
          color: #c62828;
          font-size: 13px;
          font-weight: 700;
        }

        .live-chat-success {
          display: grid;
          gap: 14px;
          color: #101010;
          font-weight: 700;
          line-height: 1.45;
        }

        @media (max-width: 575px) {
          .live-chat {
            right: 16px;
            bottom: 16px;
          }

          .live-chat-button {
            min-height: 50px;
            padding: 0 18px;
          }
        }
      `}</style>
    </div>
  );
}
