import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    deviceScreenType,
    getDeviceScreenType,
} from '../../../utils/functions';

type FormData = {
    firstName: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message: string;
};

export const CustomForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formData = new FormData();
            formData.append('form-name', 'contact');
            formData.append('firstName', data.firstName);
            formData.append('lastName', data.lastName || '');
            formData.append('email', data.email || '');
            formData.append('phone', data.phone || '');
            formData.append('message', data.message);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const [screenType, setScreenType] = useState(getDeviceScreenType());

    useEffect(() => {
        function handleResize() {
            setScreenType(getDeviceScreenType());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = screenType === deviceScreenType.mobile;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            {/* Hidden fields for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-navy">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        {...register('firstName')}
                        placeholder="John"
                        required={true}
                        className="font-sans block w-full rounded-xl border-2 border-gray-200 py-3 px-5 text-base text-navy placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-navy">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        {...register('lastName')}
                        placeholder="Doe"
                        required={true}
                        className="font-sans block w-full rounded-xl border-2 border-gray-200 py-3 px-5 text-base text-navy placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-navy">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        {...register('email', {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                        className="font-sans block w-full rounded-xl border-2 border-gray-200 py-3 px-5 text-base text-navy placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(860) 123-4567"
                        {...register('phone', {
                            required: true,
                            pattern: {
                                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                message: 'Please Enter a Valid phone number',
                            },
                        })}
                        className="font-sans block w-full rounded-xl border-2 border-gray-200 py-3 px-5 text-base text-navy placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-navy">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    {...register('message')}
                    placeholder="Tell us about your housing needs..."
                    required={true}
                    rows={6}
                    className="font-sans block w-full rounded-xl border-2 border-gray-200 py-3 px-5 text-base text-navy placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 resize-none"
                />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm">Please try again or contact us directly.</p>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-navy text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-navy/90 hover:shadow-lg active:scale-[0.98] transition-all duration-200 uppercase tracking-wide ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};
