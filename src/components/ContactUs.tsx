"use client";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import ContentSection from "./ContentSection";
import { cn } from "@/utils/cn";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("contact form submit", form);
    // TODO: Email JS integration
  };
  return (
    <ContentSection
      id="contact"
      title="contact us"
      subtitle=""
      bgColor="white"
      accentColor="unides-pink"
    >
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Contact Info Section */}
        <div className="flex flex-col">
          <h3 className="font-jaro text-3xl sm:text-4xl text-unides-pink mb-4">get in touch</h3>
          <p className="mb-6 text-sm sm:text-base">
            {`Bring your vision, and let's craft a portfolio together. Your idea is the spark - we'll
              help turn it into reality.`}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-unides-pink text-lg sm:text-xl font-semibold">email</h3>
              <p className="text-sm sm:text-base">unides.agency@gmail.com</p>
            </div>
            <div>
              <h3 className="text-unides-pink text-lg sm:text-xl font-semibold">phone</h3>
              <p className="text-sm sm:text-base">+49 (151) 5614 6198</p>
            </div>
            <div>
              <h3 className="text-unides-pink text-lg sm:text-xl font-semibold">address</h3>
              <p className="text-sm sm:text-base">
                Soldiner Straße 72 <br />
                13359 Berlin
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col">
          <h3 className="font-jaro text-3xl sm:text-4xl text-unides-pink mb-4">send a message</h3>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={update}
              placeholder="name"
              required
              className={cn(
                "bg-white border-2 border-unides-pink rounded-lg",
                "placeholder:font-jaro p-2 text-xl focus:outline-none"
              )}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={update}
              placeholder="email"
              required
              className={cn(
                "bg-white border-2 border-unides-pink rounded-lg",
                "placeholder:font-jaro p-2 text-xl focus:outline-none"
              )}
            />
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={update}
              placeholder="message"
              rows={6}
              className={cn(
                "bg-white border-2 border-unides-pink rounded-lg",
                "placeholder:font-jaro p-2 text-lg focus:outline-none resize-none"
              )}
            />
            <button
              type="submit"
              className={cn(
                "font-jaro bg-unides-pink text-2xl px-6 py-3",
                "rounded-lg hover:brightness-110 transition duration-200 ease-in-out cursor-pointer"
              )}
            >
              send
            </button>
          </form>
        </div>

        {/* Calendly Widget */}
        <div className="flex flex-col rounded-lg overflow-hidden border-2 border-unides-pink shadow-lg min-h-100">
          <h3 className="font-jaro text-3xl text-unides-green mb-2 p-4">schedule a meeting</h3>
          <InlineWidget
            // TODO: Put link from Calendly here
            url=""
            styles={{
              height: "400px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </ContentSection>
  );
}
