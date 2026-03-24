/**
 * ContactForm Component
 * 
 * Web3Forms Kontaktformular mit:
 * - Name, E-Mail, Nachricht
 * - Datenschutz-Checkbox
 * - Erfolgs-/Fehlermeldungen
 * - DSGVO-konform (kein externer Tracking-Code)
 * 
 * WICHTIG: Ersetzen Sie ACCESS_KEY mit Ihrem eigenen Key von web3forms.com
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
}

const ContactForm: React.FC = () => {
  // Web3Forms Access Key
  const ACCESS_KEY = 'fd6a33fd-5fe0-4d69-b69d-34237e5e748e';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validierung
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Ihre Nachricht sollte mindestens 10 Zeichen enthalten';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Fehler zurücksetzen bei Eingabe
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Checkbox Change Handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors.privacy) {
      setErrors(prev => ({ ...prev, privacy: undefined }));
    }
  };

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `Neue Kontaktanfrage von ${formData.name}`,
          from_name: 'TYANA Website',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          privacy: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 shadow-xl">
      {/* Erfolgsmeldung */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-green-800">Vielen Dank für Ihre Nachricht!</p>
            <p className="text-green-600 text-sm">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
          </div>
        </motion.div>
      )}

      {/* Fehlermeldung */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-800">Ein Fehler ist aufgetreten</p>
            <p className="text-red-600 text-sm">Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-300`}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            E-Mail <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-300`}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Unternehmen (optional) */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">
            Unternehmen
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-300"
            placeholder="Ihr Unternehmen (optional)"
          />
        </div>

        {/* Nachricht */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
            Nachricht <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-300 resize-none`}
            placeholder="Beschreiben Sie kurz Ihr Projekt..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Datenschutz Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleCheckboxChange}
              className={`mt-1 w-5 h-5 border ${errors.privacy ? 'border-red-500' : 'border-gray-300'} rounded text-primary focus:ring-primary cursor-pointer`}
            />
            <span className={`text-sm ${errors.privacy ? 'text-red-500' : 'text-gray-600'}`}>
              Ich habe die{' '}
              <a href="/datenschutz/" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{' '}
              gelesen und akzeptiere sie. <span className="text-primary">*</span>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Nachricht senden
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          * Pflichtfelder
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
