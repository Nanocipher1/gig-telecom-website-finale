import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const PACKAGES = ['6 Mbps – KSh 1,500', '10 Mbps – KSh 2,500', '20 Mbps – KSh 4,000'];
const TIME_SLOTS = ['8:00 AM – 10:00 AM', '10:00 AM – 12:00 PM', '12:00 PM – 2:00 PM', '2:00 PM – 4:00 PM', '4:00 PM – 6:00 PM'];

function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

export default function BookInstallation() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  function validate(d) {
    const e = {};
    if (!d.name.trim()) e.name = 'Full name is required.';
    if (!d.phone.trim()) e.phone = 'Phone number is required.';
    if (!d.location.trim()) e.location = 'Location / area is required.';
    if (!d.date) e.date = 'Please choose a date.';
    if (!d.time) e.time = 'Please choose a time slot.';
    if (!d.package) e.package = 'Please select a package.';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const f = formRef.current;
    const data = {
      name: f.book_name.value,
      phone: f.book_phone.value,
      location: f.book_location.value,
      date: f.book_date.value,
      time: f.book_time.value,
      package: f.book_package.value,
      notes: f.book_notes.value,
    };
    const errs = validate(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, f, { publicKey: PUBLIC_KEY });
      setStatus('success');
      f.reset();
    } catch {
      setStatus('error');
    }
  }

  const field = 'w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition text-sm';

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-1">Full Name *</label>
          <input name="book_name" type="text" placeholder="John Doe" className={field} />
          {errors.name && <p className="mt-1 text-xs text-orange-400">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-1">Phone Number *</label>
          <input name="book_phone" type="tel" placeholder="07XXXXXXXX" className={field} />
          {errors.phone && <p className="mt-1 text-xs text-orange-400">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Location / Area *</label>
        <input name="book_location" type="text" placeholder="e.g. Voi Town, near the post office" className={field} />
        {errors.location && <p className="mt-1 text-xs text-orange-400">{errors.location}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-1">Preferred Date *</label>
          <input name="book_date" type="date" min={getTodayString()} className={field + ' cursor-pointer'} />
          {errors.date && <p className="mt-1 text-xs text-orange-400">{errors.date}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-1">Preferred Time *</label>
          <select name="book_time" className={field + ' cursor-pointer'} defaultValue="">
            <option value="" disabled>Select a time slot</option>
            {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.time && <p className="mt-1 text-xs text-orange-400">{errors.time}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Package *</label>
        <div className="grid sm:grid-cols-3 gap-3">
          {PACKAGES.map(pkg => (
            <label key={pkg} className="cursor-pointer">
              <input type="radio" name="book_package" value={pkg} className="peer sr-only" />
              <div className="border border-white/10 bg-slate-800 peer-checked:border-orange-400 peer-checked:bg-orange-500/10 rounded-xl px-3 py-3 text-center text-sm text-slate-400 peer-checked:text-orange-400 font-semibold transition">
                {pkg}
              </div>
            </label>
          ))}
        </div>
        {errors.package && <p className="mt-1 text-xs text-orange-400">{errors.package}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-1">Additional Notes</label>
        <textarea name="book_notes" rows={3} placeholder="Any extra details about your location or requirements…" className={field + ' resize-none'} />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl text-base transition hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/25"
      >
        {status === 'sending' ? 'Booking…' : 'Confirm Booking'}
      </button>

      {status === 'success' && (
        <div className="bg-green-500/15 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm text-center font-semibold">
          Booking received! Our team will call you to confirm your appointment.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-500/15 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm text-center">
          Something went wrong. Please call us on 0112295189 to book directly.
        </div>
      )}
    </form>
  );
}
