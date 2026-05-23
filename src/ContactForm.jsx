import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  function validate(data) {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Name is required.';
    if (!data.email.trim()) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errs.email = 'Enter a valid email.';
    if (!data.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: formRef.current.user_name.value,
      email: formRef.current.user_email.value,
      phone: formRef.current.user_phone.value,
      message: formRef.current.message.value,
    };
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Full Name *</label>
        <input
          name="user_name"
          type="text"
          placeholder="John Doe"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition"
        />
        {errors.name && <p className="mt-1 text-sm text-orange-400">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Email Address *</label>
        <input
          name="user_email"
          type="email"
          placeholder="john@example.com"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition"
        />
        {errors.email && <p className="mt-1 text-sm text-orange-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Phone Number</label>
        <input
          name="user_phone"
          type="tel"
          placeholder="07XXXXXXXX"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Message *</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your installation needs..."
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition resize-none"
        />
        {errors.message && <p className="mt-1 text-sm text-orange-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition text-lg"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="bg-green-500/20 border border-green-500/40 rounded-xl px-4 py-3 text-green-300 text-sm font-medium text-center">
          Message sent! We'll get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-500/20 border border-red-500/40 rounded-xl px-4 py-3 text-red-300 text-sm font-medium text-center">
          Something went wrong. Please try calling us directly.
        </div>
      )}
    </form>
  );
}
