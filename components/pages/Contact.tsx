"use client";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { CheckIcon, Mail, Send } from "lucide-react";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import photo from "../../public/assets/image.png";
import SectionHeader from "../section-header";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        "Email service is not configured. Please check env variables.",
        {
          position: "top-center",
        },
      );
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      toast.success("Email sent successfully! 🎉", { position: "top-center" });
      setIsSent(true);
      setEmail("");
      setName("");
      setMessage("");
    } catch (error: unknown) {
      if (error instanceof EmailJSResponseStatus && error.status === 412) {
        console.error("EmailJS precondition failed", {
          status: error.status,
          text: error.text,
          serviceId,
          templateId,
        });
        toast.error(
          "EmailJS rejected the request (412). Check Public Key, Service/Template IDs, and Allowed Origins in EmailJS dashboard.",
          { position: "top-center" },
        );
      } else {
        console.error("FAILED...", error);
        toast.error("Failed to send email. Try again later.", {
          position: "top-center",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-10 sm:py-14 md:py-20 font-sans flex flex-col justify-center">
      <SectionHeader title="Contact" className="mb-10 sm:mb-20" />

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ── Left: Simple Info ── */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Let&apos;s talk<span className="text-[#3dcf91]">.</span>
            </h2>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-sm">
              Have a question or want to work together? Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:pmsiva.1906@gmail.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-[#3dcf91] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#3dcf91]" />
                pmsiva.1906@gmail.com
              </a>
              <a
                href="tel:+919345473169"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-[#3dcf91] transition-colors"
              >
                <FaPhoneAlt className="h-3.5 w-3.5 text-[#3dcf91]" />
                +91 93454 73169
              </a>
              <a
                href="https://wa.me/919345473169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-[#25D366] transition-colors"
              >
                <IoLogoWhatsapp className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/in/sivabalan1906/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/[0.04] text-white/40 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Sivabalan-19"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/[0.04] text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col rounded-3xl bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/[0.06] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/20 font-mono">
                contact.tsx
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 mb-5">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 pt-6 pb-3 text-sm text-white outline-none transition-all focus:border-[#3dcf91]/40 focus:bg-white/[0.04] hover:border-white/15 font-sans"
                />
                <label className="pointer-events-none absolute left-5 top-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3dcf91]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/25 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#3dcf91]/60">
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 pt-6 pb-3 text-sm text-white outline-none transition-all focus:border-[#3dcf91]/40 focus:bg-white/[0.04] hover:border-white/15 font-sans"
                />
                <label className="pointer-events-none absolute left-5 top-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3dcf91]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/25 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#3dcf91]/60">
                  Email
                </label>
              </div>
            </div>

            <div className="relative flex-1 flex flex-col mb-5">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
                placeholder=" "
                className="peer w-full flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 pt-6 pb-3 text-sm text-white outline-none transition-all focus:border-[#3dcf91]/40 focus:bg-white/[0.04] hover:border-white/15 resize-none font-sans"
              />
              <label className="pointer-events-none absolute left-5 top-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3dcf91]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/25 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#3dcf91]/60">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSent || isLoading}
              className={`group w-full rounded-2xl py-4 text-sm font-bold tracking-wide transition-all ${
                isSent
                  ? "bg-[#3dcf91]/15 text-[#3dcf91] cursor-default border border-[#3dcf91]/20"
                  : isLoading
                    ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/5"
                    : "bg-[#3dcf91] text-black hover:shadow-[0_8px_40px_rgba(61,207,145,0.25)] hover:scale-[1.01] active:scale-[0.99] border border-transparent"
              }`}
            >
              {isLoading ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : isSent ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  Message Sent
                </span>
              ) : (
                <span className="inline-flex items-center justify-center gap-2">
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default Contact;
