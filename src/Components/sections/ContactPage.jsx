import React, { useState, useEffect } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Heart,
  ArrowRight,
  Sparkles,
  Copy,
  ExternalLink,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mjkrvgyk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("saat.contactme@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "saat.contactme@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <div className="relative h-auto overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Main Content */}
      <div className="relative px-4 pb-8 mx-auto max-w-8xl">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Hero Section */}
          <div className="relative px-2 pt-8 pb-6 sm:px-4 lg:px-6 lg:pt-12 lg:pb-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-2 mb-4 text-xs font-medium text-blue-300 border rounded-full sm:px-4 sm:text-sm bg-blue-500/10 border-blue-500/20 lg:mb-6">
                <Sparkles size={14} className="sm:w-4 sm:h-4" />
                <span>Contact Team SAAT</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse lg:mb-6">
                Let's Connect
              </h1>

              <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl lg:max-w-3xl">
                Have questions about our Smart Assignment Assessment Tool?
                <br className="hidden sm:block" />
                <span className="font-medium text-blue-300">
                  We'd love to hear from you and help with your inquiries.
                </span>
              </p>
            </div>

            {/* Direct Contact Email Card */}
            <div className="p-4 mt-6 border shadow-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border-white/10 sm:p-6 lg:mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 sm:w-12 sm:h-12">
                    <Mail className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      Direct Contact
                    </h3>
                    <p className="text-sm text-gray-300 sm:text-base">
                      Send us an email directly or use the form Here
                    </p>
                    <div className="flex flex-col gap-2 mt-2 sm:flex-row sm:items-center sm:gap-3">
                      <a
                        href="mailto:saat.contactme@gmail.com"
                        className="text-sm font-medium text-blue-300 break-all hover:text-blue-200 sm:text-base"
                      >
                        saat.contactme@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 sm:flex-col sm:gap-1">
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 border rounded-lg sm:px-4 sm:py-2 sm:text-sm bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105 disabled:scale-100"
                    title="Copy email address"
                  >
                    {emailCopied ? (
                      <>
                        <CheckCircle size={14} className="text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:saat.contactme@gmail.com"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 border rounded-lg sm:px-4 sm:py-2 sm:text-sm bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30 hover:scale-105"
                    title="Open in email client"
                  >
                    <ExternalLink size={14} />
                    <span>Open</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Thank you message */}
            <div className="p-4 mt-4 border rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10 sm:p-6 lg:mt-6">
              <div className="flex items-start gap-3">
                <Heart
                  size={18}
                  className="text-pink-400 animate-pulse sm:w-5 sm:h-5"
                />
                <div>
                  <p className="text-sm font-medium text-white sm:text-base">
                    Hope this project helped you in some manner. Thank you!
                  </p>
                  <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                    - Team SAAT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-2 py-10">
            <div className="p-4 border shadow-2xl bg-white/5 backdrop-blur-md rounded-2xl border-white/10 sm:p-6 lg:p-6">
              <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:w-12 sm:h-12">
                  <Send className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-gray-300">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex flex-col gap-2 p-3 mb-4 border rounded-xl bg-green-500/10 border-green-500/20 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-3 sm:p-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm font-medium text-green-400 sm:text-base">
                      Message sent successfully!
                    </p>
                    <p className="text-xs text-green-300 sm:text-sm">
                      Thank you for reaching out. We'll respond soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex flex-col gap-2 p-3 mb-2 border rounded-xl bg-red-500/10 border-red-500/20 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-3 sm:p-4 lg:mb-4">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-sm font-medium text-red-400 sm:text-base">
                      Failed to send message
                    </p>
                    <p className="text-xs text-red-300 sm:text-sm">
                      Please try again or contact us directly via email.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-3 sm:space-y-3">
                {/* Name and Email Row */}
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white sm:text-base">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your full name"
                      className={`w-full px-3 py-2.5 text-sm bg-white/5 border ${
                        errors.name
                          ? "border-red-400"
                          : focusedField === "name"
                          ? "border-blue-400"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm sm:px-4 sm:py-3 sm:text-base`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 sm:text-sm">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-white sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your email address"
                      className={`w-full px-3 py-2.5 text-sm bg-white/5 border ${
                        errors.email
                          ? "border-red-400"
                          : focusedField === "email"
                          ? "border-blue-400"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm sm:px-4 sm:py-3 sm:text-base`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 sm:text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-white sm:text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's this about?"
                    className={`w-full px-3 py-2.5 text-sm bg-white/5 border ${
                      errors.subject
                        ? "border-red-400"
                        : focusedField === "subject"
                        ? "border-blue-400"
                        : "border-white/20"
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm sm:px-4 sm:py-3 sm:text-base`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 sm:text-sm">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-white sm:text-base">
                    Message or Query *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your inquiry, feedback, or any questions you have about SAAT..."
                    rows={3}
                    className={`w-full px-3 py-2.5 text-sm bg-white/5 border ${
                      errors.message
                        ? "border-red-400"
                        : focusedField === "message"
                        ? "border-blue-400"
                        : "border-white/20"
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none backdrop-blur-sm sm:px-4 sm:py-3 sm:text-base sm:rows-6`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 sm:text-sm">
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">
                    Minimum 10 characters required ({formData.message.length}
                    /10)
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex items-center justify-center w-full gap-2 px-4 py-3 overflow-hidden text-sm font-semibold text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 hover:shadow-2xl hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 group sm:px-6 sm:py-4 sm:text-base"
                >
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-white/10 group-hover:opacity-100" />
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 rounded-full border-white/30 border-t-white animate-spin sm:w-5 sm:h-5"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
