"use client";

import emailjs from "@emailjs/browser";
import { Input, Textarea } from "@heroui/input";
import { CheckIcon, ChevronRightIcon, Mail } from "lucide-react";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import photo from "../../public/assets/image.png";
import { GitHubIcon, LinkedInIcon } from "../icons";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSent) return;

    if (!email || !message) {
      toast.error("Email and message are required");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_dlgsppw",
        "template_7o9zlq5",
        formRef.current!,
        "ZdnViU2mPuLEqMXzX"
      );
      setIsSent(true);
      toast.success("Email sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send email.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="px-4  lg:flex justify-start  gap-8  lg:p-[5rem] font-mono ">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="border w-full lg:w-6/12 bg-[#0b0b0b] lg:flex flex-col rounded-[4rem] p-[2rem] justify-start "
      >
        <h2 className="text-4xl whitespace-pre-line font-thin">Let's talk</h2>
        <h6 className="lg:text-[1rem] text-sm whitespace-pre-line font-light pt-3 text-gray-400">
          I'm excited to apply my skills to your projects. Contact me to learn
          more about how I can contribute.
        </h6>

        <p className="pt-8 pb-2">
          <span className="text-[#3dcf91]">const</span> email =
        </p>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          radius="lg"
          fullWidth
          classNames={{
            input: ["!text-white", "!placeholder-white/60", "bg-transparent"],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-[#2a2a2aa0]",
              "text-white",
              "shadow-xl",
              "!cursor-text",

              // 🔒 Lock background color across all states
              "hover:bg-[#2a2a2aa0]",
              "focus:bg-[#2a2a2aa0]",
              "group-data-[hover=true]:bg-[#2a2a2aa0]",
              "group-data-[focus=true]:bg-[#2a2a2aa0]",
              "dark:hover:bg-[#2a2a2aa0]",
              "dark:focus:bg-[#2a2a2aa0]",
              "dark:group-data-[hover=true]:bg-[#2a2a2aa0]",
              "dark:group-data-[focus=true]:bg-[#2a2a2aa0]",
            ],
          }}
        />

        <p className="pt-6 pb-2">
          <span className="text-[#3dcf91]">const</span> message =
        </p>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minRows={6}
          maxRows={10}
          fullWidth
          classNames={{
            input: ["!text-white", "!placeholder-white/60", "bg-transparent"],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-[#2a2a2aa0]",
              "text-white",
              "shadow-xl",
              "!cursor-text",

              // 🔒 Lock background color for all states
              "hover:bg-[#2a2a2aa0]",
              "focus:bg-[#2a2a2aa0]",
              "group-data-[hover=true]:bg-[#2a2a2aa0]",
              "group-data-[focus=true]:bg-[#2a2a2aa0]",
              "dark:hover:bg-[#2a2a2aa0]",
              "dark:focus:bg-[#2a2a2aa0]",
              "dark:group-data-[hover=true]:bg-[#2a2a2aa0]",
              "dark:group-data-[focus=true]:bg-[#2a2a2aa0]",
            ],
          }}
        />

        <div className="w-full flex justify-end mt-6">
          <button
            type="submit"
            disabled={isSent}
            className={`w-35 text-black rounded-[4rem] bg-white inline-flex items-center justify-center px-4 py-2 transition-all ${
              isSent ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            {isSent ? (
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

      <div className="mt-5  lg:mt-0">
        <div className="border flex flex-col bg-[#0b0b0b] rounded-[4rem] p-[2rem] ">
          <p className=" lg:text-[1.8rem] text-lg font-thin ">
            You can also hit me up in any of this places 👋🏻
          </p>
          <div className="flex gap-5 pt-6 lg:pt-12">
            <a
              href="mailto:pmsiva.1906@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#3dcf91] hover:bg-[#3e9cb6] font-bold text-white text-[15px] rounded-full px-5 py-[12px] lg:min-w-[95px] justify-center transition-colors duration-300"
            >
              <Mail size={22} className="text-white" />
            </a>
            <a
              href="tel:+91 9345473169"
              className="inline-flex items-center bg-[#3dcf91] hover:bg-[#3e9cb6] font-bold text-white text-[15px] rounded-full px-5 py-[12px] lg:min-w-[95px] justify-center transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt size={20} className="text-white" />
            </a>
            <a
              href="https://wa.me/919345473169"
              className="inline-flex items-center bg-[#3dcf91] hover:bg-[#3e9cb6] font-bold text-white text-[15px] rounded-full px-5 py-[12px] lg:min-w-[95px] justify-center transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp size={22} className="text-white" />
            </a>
          </div>
        </div>

        <div className="flex gap-[2rem] w-full">
          <div className="border w-full lg:w-fit  mt-[2rem] flex flex-col bg-[#0b0b0b] rounded-[4rem] p-[2rem] ">
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
                className="lg:w-[12rem] lg:h-[7rem] h-20 w-20 duration-300 bg-[rgb(1,4,9)]  transition-all hover:opacity-70 outline rounded-[30px] p-4 flex items-center justify-center"
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
      {/* Toastify Container */}
      {/* <ToastContainer position="top-center" autoClose={4000} /> */}
    </div>
  );
}

export default Contact;
