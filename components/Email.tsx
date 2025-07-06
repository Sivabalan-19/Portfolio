"use client";

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { validate } from "react-email-validator";

export const Email = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [email, setEmail] = useState<string>("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    const messageField = form.current?.message?.value;

    if (!validate(email)) {
      toast.error("Please enter a valid email address", {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }

    if (!messageField || messageField.trim() === "") {
      toast.error("Please enter your message", {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }

    if (form.current) {
      emailjs.sendForm("service_dlgsppw", "template_7o9zlq5", form.current, {
        publicKey: "ZdnViU2mPuLEqMXzX",
      });

      form.current.reset();
      setEmail("");
      toast.success("Message sent!", {
        position: "bottom-center",
        duration: 10000,
      });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-7 w-[0rem] bg-[#111] text-white rounded-[24px] p-6 border border-white/20 font-mono"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Let's talk</h2>
        <p className="text-sm text-gray-400">
          I'm excited to apply my skills to your projects. Contact me to learn
          more about how I can contribute.
        </p>
      </div>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="email">
          <span className="text-pink-500">const</span> email =
        </label>
        <input
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#1a1a1a] text-white rounded px-3 py-2 outline-none border border-white/10"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="message">
          <span className="text-pink-500">const</span> message =
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="bg-[#1a1a1a] text-white rounded px-3 py-2 resize-none outline-none border border-white/10"
        />
      </fieldset>

      <button
        type="submit"
        className="self-start px-5 py-2 bg-white text-black rounded-full font-mono flex items-center gap-2 hover:opacity-80"
      >
        send message
        <span className="inline-block rotate-180">↪</span>
      </button>
    </form>
  );
};
