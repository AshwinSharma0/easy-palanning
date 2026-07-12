import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Loader2 } from 'lucide-react';
import PageHead from '@/components/PageHead';
import Button from '@/components/Button';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { eventTypeOptions, waLink } from '@/data/content';

const empty = { name: '', phone: '', event_type: '', event_date: '', guest_count: '', budget: '', message: '' };

function EnquiryPage() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.phone.trim() || !form.event_type) {
      setError('Please fill in your name, phone and event type.');
      return;
    }
    if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) {
      setError('Please enter a valid phone number (10–15 digits).');
      return;
    }
    setStatus('loading');
    try {
      await pocketbaseClient.collection('enquiries').create({
        ...form,
        guest_count: Number(form.guest_count) || 0,
      });
      setStatus('success');
      setForm(empty);
    } catch {
      setStatus('idle');
      setError('Something went wrong. Please try WhatsApp instead.');
    }
  };

  const inputCls = 'w-full rounded-xl border border-input bg-background px-4 py-3 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary';

  if (status === 'success') {
    return (
      <div className="pb-16">
        <PageHead eyebrow="Enquiry" title="Thank You!" />
        <div className="mx-auto max-w-xl px-6 text-center rounded-2xl">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
          <p className="mt-4 text-lg text-muted-foreground">Your enquiry has been received. Our team will reach out within 24 hours to plan your event.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button href={waLink()} variant="gold"><MessageCircle className="h-5 w-5" /> Chat on WhatsApp</Button>
            <Button onClick={() => setStatus('idle')} variant="outline">Submit Another</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <PageHead eyebrow="Enquiry" title="Let's Plan Together" subtitle="Tell us about your event and we'll craft a bespoke plan just for you." />
      <div className="mx-auto max-w-2xl px-6">
        <form onSubmit={submit} className="rounded-2xl bg-card border border-border p-6 sm:p-8 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block font-medium mb-2">Name *</label>
            <input value={form.name} onChange={set('name')} className={inputCls} placeholder="Your full name" />
          </div>
          <div className="sm:col-span-1">
            <label className="block font-medium mb-2">Phone *</label>
            <input value={form.phone} onChange={set('phone')} className={inputCls} placeholder="98765 43210" inputMode="tel" />
          </div>
          <div>
            <label className="block font-medium mb-2">Event Type *</label>
            <select value={form.event_type} onChange={set('event_type')} className={inputCls}>
              <option value="">Select…</option>
              {eventTypeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Event Date</label>
            <input type="date" value={form.event_date} onChange={set('event_date')} className={inputCls} />
          </div>
          <div>
            <label className="block font-medium mb-2">Guest Count</label>
            <input type="number" min="0" value={form.guest_count} onChange={set('guest_count')} className={inputCls} placeholder="e.g. 150" />
          </div>
          <div>
            <label className="block font-medium mb-2">Budget Range</label>
            <select value={form.budget} onChange={set('budget')} className={inputCls}>
              <option value="">Select…</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000 – ₹3,00,000</option>
              <option>₹3,00,000+</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block font-medium mb-2">Message</label>
            <textarea value={form.message} onChange={set('message')} rows={4} className={inputCls} placeholder="Tell us more about your vision…" />
          </div>

          {error && <p className="sm:col-span-2 text-sm text-destructive">{error}</p>}

          <div className="sm:col-span-2 flex flex-wrap gap-3">
            <Button as="button" type="submit" disabled={status === 'loading'} className="flex-1 sm:flex-none">
              {status === 'loading' ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</> : 'Submit Enquiry'}
            </Button>
            <Button href={waLink()} variant="ghost" className="flex-1 sm:flex-none border-[#25D366] text-[#128C43]"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnquiryPage;
