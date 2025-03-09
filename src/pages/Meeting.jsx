import React, { useState } from "react";

const MeetingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    meetingType: "online",
    date: "",
    time: "",
    subject: "",
    message: "",
    preferredPlatform: "zoom",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert(
      "Meeting request submitted successfully! We will contact you shortly to confirm."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      meetingType: "online",
      date: "",
      time: "",
      subject: "",
      message: "",
      preferredPlatform: "zoom",
    });
  };

  return (
    <div className="w-full min-h-screen bg-black text-white  py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Schedule a Meeting with Nexflow
          </h1>
          <p className="text-gray-300">
            Let's discuss how our digital marketing solutions can help grow your
            business
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Meeting Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              Meeting Details
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Meeting Type*
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="meetingType"
                    value="online"
                    checked={formData.meetingType === "online"}
                    onChange={handleChange}
                    className="mr-2 text-teal-500 focus:ring-teal-500"
                  />
                  <span>Online</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="meetingType"
                    value="onsite"
                    checked={formData.meetingType === "onsite"}
                    onChange={handleChange}
                    className="mr-2 text-teal-500 focus:ring-teal-500"
                  />
                  <span>Onsite</span>
                </label>
              </div>
            </div>

            {formData.meetingType === "online" && (
              <div>
                <label
                  htmlFor="preferredPlatform"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Preferred Platform
                </label>
                <select
                  id="preferredPlatform"
                  name="preferredPlatform"
                  value={formData.preferredPlatform}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="zoom">Zoom</option>
                  <option value="teams">Microsoft Teams</option>
                  <option value="meet">Google Meet</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Preferred Date*
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Preferred Time*
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Meeting Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., SEO Consultation, Website Analysis, Social Media Strategy"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business needs and what you'd like to discuss in the meeting..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              style={{ backgroundColor: "#3fa69b" }}
            >
              Schedule Meeting
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center">
              By submitting this form, you agree to our privacy policy and terms
              of service.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
