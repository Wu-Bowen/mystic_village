import richard from './../../../assets/images/contact/richard.png';
import joe from './../../../assets/images/contact/joe.png';
import marianne from './../../../assets/images/contact/marianne.png';
import { CustomForm } from './customform';

export const Contact = (): JSX.Element => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-navy/5 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                            Our team is here to help you find your perfect home
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-16 text-center">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="overflow-hidden rounded-xl mb-6 shadow-md">
                                <img
                                    src={richard}
                                    alt="Richard Wu"
                                    className="w-full h-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                Richard Wu
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="tel:860-857-0369"
                                    className="flex items-center justify-center text-gray-600 hover:text-gold transition-colors duration-200"
                                >
                                    <span className="mr-2">📞</span>
                                    <span>(860) 857-0369</span>
                                </a>
                                <a
                                    href="mailto:MalerbaKaer@gmail.com"
                                    className="flex items-center justify-center text-gray-600 hover:text-gold transition-colors duration-200 break-all"
                                >
                                    <span className="mr-2">✉️</span>
                                    <span>MalerbaKaer@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="overflow-hidden rounded-xl mb-6 shadow-md">
                                <img
                                    src={marianne}
                                    alt="Marianne Malerba"
                                    className="w-full h-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                Marianne Malerba
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="tel:860-608-9661"
                                    className="flex items-center justify-center text-gray-600 hover:text-gold transition-colors duration-200"
                                >
                                    <span className="mr-2">📞</span>
                                    <span>(860) 608-9661</span>
                                </a>
                                <a
                                    href="mailto:MalerbaKaer@gmail.com"
                                    className="flex items-center justify-center text-gray-600 hover:text-gold transition-colors duration-200 break-all"
                                >
                                    <span className="mr-2">✉️</span>
                                    <span>MalerbaKaer@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="overflow-hidden rounded-xl mb-6 shadow-md">
                                <img
                                    src={joe}
                                    alt="Joseph Malerba"
                                    className="w-full h-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                Joseph Malerba
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="tel:860-912-7315"
                                    className="flex items-center justify-center text-gray-600 hover:text-gold transition-colors duration-200"
                                >
                                    <span className="mr-2">📞</span>
                                    <span>(860) 912-7315</span>
                                </a>
                                <a
                                    href="mailto:MalerbaKaer@gmail.com"
                                    className="flex items-center justify-center text-gray-600 hover:text-gold transition-colors duration-200 break-all"
                                >
                                    <span className="mr-2">✉️</span>
                                    <span>MalerbaKaer@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 text-center">
                            Have Questions?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 text-center">
                            Send us a message and we'll get back to you as soon as possible
                        </p>
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                            <CustomForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
