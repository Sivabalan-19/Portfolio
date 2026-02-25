"use client";

import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from "@emailjs/browser";
import { CheckIcon, ChevronRightIcon, Mail } from "lucide-react";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import photo from "../../public/assets/image.png";
import { GitHubIcon, LinkedInIcon } from "../icons";
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
      toast.error("Email service is not configured. Please check env variables.", {
        position: "top-center",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        },
      );

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
          {
            position: "top-center",
          }
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setMessage(e.target.value);
  };

  return (
    <div className="px-4 md:p-[5rem] font-sans">
  
      <div className="flex flex-col lg:flex-row justify-start gap-8">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="border w-full lg:w-6/12 bg-[#0b0b0b] lg:flex flex-col rounded-[2.5rem] lg:rounded-[4rem] p-[2rem] justify-start"
        >
        <h2 className="text-4xl whitespace-pre-line font-display font-semibold">
          Let's talk
        </h2>
        <h6 className="lg:text-[1rem] text-sm whitespace-pre-line font-light pt-3 text-gray-400 font-sans">
          I'm excited to apply my skills to your projects. Contact me to learn
          more about how I can contribute.
        </h6>

        {/* Split layout for email and name */}
        <div className="flex gap-4 pt-8">
          <div className="w-1/2">
            <p className="pb-2 font-mono">
              <span className="text-[#3dcf91]">const</span> email =
            </p>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-3 text-white placeholder-white/60 bg-[#2a2a2aa0] border border-gray-600 rounded-lg shadow-xl transition-all duration-200 hover:bg-[#2a2a2aa0] focus:bg-[#2a2a2aa0] focus:outline-none focus:ring-2 focus:ring-[#3dcf91] font-sans"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-1/2">
            <p className="pb-2 font-mono">
              <span className="text-[#3dcf91]">const</span> name =
            </p>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full px-4 py-3 text-white placeholder-white/60 bg-[#2a2a2aa0] border border-gray-600 rounded-lg shadow-xl transition-all duration-200 hover:bg-[#2a2a2aa0] focus:bg-[#2a2a2aa0] focus:outline-none focus:ring-2 focus:ring-[#3dcf91] font-sans"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <p className="pt-6 pb-2 font-mono">
          <span className="text-[#3dcf91]">const</span> message =
        </p>
        <textarea
          name="message"
          value={message}
          onChange={handleMessageChange}
          rows={6}
          required
          className="w-full px-4 py-3 text-white placeholder-white/60 bg-[#2a2a2aa0] border border-gray-600 rounded-lg shadow-xl resize-y min-h-[150px] max-h-[300px] transition-all duration-200 hover:bg-[#2a2a2aa0] focus:bg-[#2a2a2aa0] focus:outline-none focus:ring-2 focus:ring-[#3dcf91] font-sans"
          placeholder="Enter your message"
        />

        <div className="w-full flex justify-end mt-6">
          <button
            type="submit"
            disabled={isSent || isLoading}
            className={`w-35 text-black rounded-[4rem] bg-white inline-flex items-center justify-center px-4 py-2 transition-all ${
              isSent || isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            {isLoading ? (
              <span className="inline-flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
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
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : isSent ? (
              <span className="inline-flex items-center">
                <CheckIcon className="mr-2 size-4" />
                Email Sent
              </span>
            ) : (
              <span className="group inline-flex items-center">
                Send Email
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            )}
          </button>
        </div>
        </form>

        <div className="mt-5 lg:mt-0 h-full">
          <div className="border h-1/2 flex flex-col bg-[#0b0b0b] rounded-[2.5rem] lg:rounded-[4rem] p-[2rem]">
            <p className="lg:text-[1.8rem] text-lg font-display font-medium">
              You can also hit me up in any of this places 👋🏻
            </p>
            <div className="flex gap-5 pt-6 lg:pt-12">
            <a
              href="mailto:pmsiva.1906@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#3dcf91] hover:bg-[#3e9cb6] font-bold text-white text-[15px] rounded-full px-5 py-[12px] lg:min-w-[95px] justify-center transition-colors duration-300 font-sans"
            >
              <Mail size={22} className="text-white" />
            </a>
            <a
              href="tel:+91 9345473169"
              className="inline-flex items-center bg-[#3dcf91] hover:bg-[#3e9cb6] font-bold text-white text-[15px] rounded-full px-5 py-[12px] lg:min-w-[95px] justify-center transition-colors duration-300 font-sans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt size={20} className="text-white" />
            </a>
            <a
              href="https://wa.me/919345473169"
              className="inline-flex items-center bg-[#3dcf91] hover:bg-[#3e9cb6] font-bold text-white text-[15px] rounded-full px-5 py-[12px] lg:min-w-[95px] justify-center transition-colors duration-300 font-sans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp size={22} className="text-white" />
            </a>
            </div>
          </div>

          <div className="flex h-1/2 gap-[2rem] w-full">
            <div className="border w-full lg:w-fit mt-[2rem] flex flex-col bg-[#0b0b0b] rounded-[2.5rem] lg:rounded-[4rem] p-[2rem]">
              <p className="text-[24px]">Find me at:</p>
              <div className="flex gap-8 py-4">
              <a
                href="https://www.linkedin.com/in/sivabalan1906/"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:w-[12rem] lg:h-[7rem] h-20 w-20 duration-300 bg-[rgb(10,102,194)] transition-all hover:opacity-70 outline rounded-[30px] p-4 flex items-center justify-center"
              >
                <LinkedInIcon className="text-white text-[2rem] lg:w-16 lg:h-16" />
              </a>
                <a
                  href="https://github.com/Sivabalan-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:w-[12rem] lg:h-[7rem] h-20 w-20 duration-300 bg-[rgb(1,4,9)] transition-all hover:opacity-70 outline rounded-[30px] p-4 flex items-center justify-center"
                >
                  <GitHubIcon className="text-white text-[2rem] lg:w-16 lg:h-16" />
                </a>
              </div>
            </div>

            <div className="border w-full hidden md:block lg:hidden xl:block mt-[2rem] bg-[#0b0b0b] rounded-[4rem] p-[2rem] relative overflow-hidden">
              <Image
                src={photo}
                alt="not visible"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default Contact;
