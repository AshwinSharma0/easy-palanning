import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import PageHead from '@/components/PageHead';
import Button from '@/components/Button';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { waLink } from '@/data/content';

function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.phone.trim()) { setError('Name and phone are required.'); return; }
    if (!pocketbaseClient) {
      setError('Contact form is not configured yet. Set VITE_POCKETBASE_URL in your deployment environment.');
      return;
    }
    try {
      await pocketbaseClient.collection('enquiries').create({
        name: form.name, phone: form.phone, event_type: 'General Contact', message: form.message, guest_count: 0,
      });
      setSent(true);
    } catch { setError('Something went wrong. Please try WhatsApp.'); }
  };

  const inputCls = 'w-full rounded-xl border border-input bg-background px-4 py-3 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary';
  const details = [
    { icon: Phone, label: 'Call us', value: '+91 98765 43210' },
    { icon: Mail, label: 'Email', value: 'hello@eventease.in' },
    { icon: MapPin, label: 'Visit', value: 'MG Road, Bangalore, India' },
  ];

  return (
    <div className="pb-16">
      <PageHead eyebrow="Contact" title="Get in Touch" subtitle="We'd love to hear about your celebration. Reach out any way you like." />
      <div className="mx-auto max-w-[64rem] px-6 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {details.map((d) => (
            <div key={d.label} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary"><d.icon className="h-5 w-5" /></div>
              <div><p className="text-sm text-muted-foreground">{d.label}</p><p className="font-semibold">{d.value}</p></div>
            </div>
          ))}
          <Button href={waLink()} variant="gold" className="w-full"><MessageCircle className="h-5 w-5" /> Chat on WhatsApp</Button>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
              <p className="mt-4 text-muted-foreground">Thanks for reaching out! We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5">
              <div><label className="block font-medium mb-2">Name *</label><input value={form.name} onChange={set('name')} className={inputCls} /></div>
              <div><label className="block font-medium mb-2">Phone *</label><input value={form.phone} onChange={set('phone')} className={inputCls} inputMode="tel" /></div>
              <div><label className="block font-medium mb-2">Message</label><textarea value={form.message} onChange={set('message')} rows={4} className={inputCls} /></div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button as="button" type="submit">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
