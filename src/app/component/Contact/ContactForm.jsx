
"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactForm = () => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),

    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email address is required"),

    phone: Yup.string()
      .matches(
        /^[0-9+\-\s()]{7,20}$/,
        "Please enter a valid phone number"
      )
      .required("Phone number is required"),

    subject: Yup.string()
      .trim()
      .required("Subject is required"),

    message: Yup.string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // Form Submit
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Contact Form Data:", values);

      alert("Thank you for contacting us! We will get back to you soon.");

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  // Reusable Input Field
  const InputField = ({
    label,
    name,
    placeholder,
    type = "text",
  }) => (
    <Field name={name}>
      {({ field, meta }) => (
        <div>
          <label className="block text-xs font-medium text-footer mb-2">
            {label} <span className="text-red-500">*</span>
          </label>

          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`w-full px-4 py-2 rounded-lg border bg-[#fafbf7] text-footer text-sm outline-none transition-all ${
              meta.touched && meta.error
                ? "border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
            }`}
          />

          {meta.touched && meta.error && (
            <p className="text-red-500 text-xs mt-1.5">
              {meta.error}
            </p>
          )}
        </div>
      )}
    </Field>
  );

  return (
    <div className="p-8 sm:p-10 lg:p-12">

      {/* Form Heading */}
      <div className="mb-8">
        <span className="text-primary text-xs font-semibold uppercase tracking-[3px]">
          Send Us a Message
        </span>

        <h3 className="text-footer text-2xl sm:text-2xl font-medium mt-3">
          Get in Touch With Us
        </h3>

        <p className="text-gray-500 text-sm mt-1 leading-6">
          Fill out the form below and our team will get back to you.
        </p>
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <InputField
                label="Full Name"
                name="name"
                placeholder="Enter your full name"
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
              />

            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+977 98....."
              />

              <InputField
                label="Subject"
                name="subject"
                placeholder="Enter subject"
              />

            </div>

            {/* Message */}
            <Field name="message">
              {({ field, meta }) => (
                <div>
                  <label className="block text-xs font-medium text-footer mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    {...field}
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className={`w-full px-4 py-3.5 rounded-lg border bg-[#fafbf7] text-footer text-sm outline-none transition-all resize-none ${
                      meta.touched && meta.error
                        ? "border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    }`}
                  />

                  {meta.touched && meta.error && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {meta.error}
                    </p>
                  )}
                </div>
              )}
            </Field>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-3 cursor-pointer px-8 py-4 bg-primary text-white rounded-lg font-bold text-sm hover:bg-footer transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}

             
            </button>

            <p className="text-gray-400 text-xs">
              * Required fields.
            </p>

          </Form>
        )}
      </Formik>

    </div>
  );
};

export default ContactForm;
