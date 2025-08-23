"use client";
import React, { useState } from "react";
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
      <div className="flex flex-wrap justify-between gap-12 w-4/5 max-w-4xl">
        <article className="">
          <h3 className="font-jaro text-4xl text-unides-pink">get in touch</h3>
          <p className="max-w-md my-4">
            {`Bring your vision, and let's craft a portfolio together. Your idea is the spark - we’ll
            help turn it into reality.`}
            <br />
            {`Send us a message and we'll respond as soon as possible.`}
          </p>

          <h3 className="text-unides-pink">email</h3>
          <p className="max-w-md mb-4">unides.agency@gmail.com</p>

          <h3 className="text-unides-pink">phone</h3>
          <p className="max-w-md mb-4">+49 (151) 5614 6198</p>

          <h3 className="text-unides-pink">address</h3>
          <p className="max-w-md mb-4">
            Soldiner Straße 72 <br />
            13359 <br />
            Berlin
          </p>
        </article>

        <form onSubmit={submit} className="flex flex-col gap-4 flex-1 min-w-[280px] max-w-md">
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
              "placeholder:font-jaro p-2 text-lg focus:outline-none"
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
    </ContentSection>
  );
}
