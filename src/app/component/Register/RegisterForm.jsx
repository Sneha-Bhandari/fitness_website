"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  User,
  MapPin,
  Phone,
  GraduationCap,
  FileText,
  Upload,
  Send,
} from "lucide-react";

const documentTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

const imageTypes = ["image/jpeg", "image/png", "image/jpg"];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

// File validation helper
const isValidFile = (file, allowedTypes) => {
  if (!file) return true;

  return (
    allowedTypes.includes(file.type) &&
    file.size <= MAX_FILE_SIZE
  );
};

// Yup Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  middleName: Yup.string().trim(),

  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),

  dateOfBirth: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),

  gender: Yup.string().required("Please select your gender"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(
      /^(\+977[- ]?)?(9[6-8]\d{8}|0\d{1,2}[- ]?\d{6,7})$/,
      "Enter a valid Nepal phone number"
    )
    .required("Phone number is required"),

  temporaryAddress: Yup.string()
    .trim()
    .required("Temporary address is required"),

  permanentAddress: Yup.string()
    .trim()
    .required("Permanent address is required"),

  guardianName: Yup.string()
    .trim()
    .required("Guardian name is required"),

  guardianPhone: Yup.string()
    .matches(
      /^(\+977[- ]?)?(9[6-8]\d{8}|0\d{1,2}[- ]?\d{6,7})$/,
      "Enter a valid Nepal phone number"
    )
    .required("Guardian phone number is required"),

  education: Yup.string().required("Please select your education level"),

  trainingProgram: Yup.string().required(
    "Please select a training program"
  ),

  applicantPhoto: Yup.mixed()
    .required("Your photograph is required")
    .test(
      "fileType",
      "Only JPG and PNG images are allowed",
      (value) => !value || imageTypes.includes(value.type)
    )
    .test(
      "fileSize",
      "Photo must be smaller than 5 MB",
      (value) => !value || value.size <= MAX_FILE_SIZE
    ),

  citizenshipFront: Yup.mixed()
    .required("Citizenship front side is required")
    .test(
      "fileType",
      "Only JPG, PNG and PDF files are allowed",
      (value) => isValidFile(value, documentTypes)
    )
    .test(
      "fileSize",
      "File must be smaller than 5 MB",
      (value) => !value || value.size <= MAX_FILE_SIZE
    ),

  citizenshipBack: Yup.mixed()
    .required("Citizenship back side is required")
    .test(
      "fileType",
      "Only JPG, PNG and PDF files are allowed",
      (value) => isValidFile(value, documentTypes)
    )
    .test(
      "fileSize",
      "File must be smaller than 5 MB",
      (value) => !value || value.size <= MAX_FILE_SIZE
    ),

  educationCertificate: Yup.mixed()
    .nullable()
    .test(
      "fileType",
      "Only JPG, PNG and PDF files are allowed",
      (value) => isValidFile(value, documentTypes)
    )
    .test(
      "fileSize",
      "File must be smaller than 5 MB",
      (value) => !value || value.size <= MAX_FILE_SIZE
    ),

  agreeTerms: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

// Reusable input component
const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => (
  <div>
    <label className="block text-xs font-semibold text-footer mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>

    <Field name={name}>
      {({ field, meta }) => (
        <>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`w-full px-4 py-2 rounded-xl border text-xs bg-white outline-none transition-all
              ${
                meta.touched && meta.error
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
              }`}
          />

          {meta.touched && meta.error && (
            <p className="text-red-500 text-xs mt-1">
              {meta.error}
            </p>
          )}
        </>
      )}
    </Field>
  </div>
);

// Reusable select component
const FormSelect = ({
  label,
  name,
  options,
  required = false,
}) => (
  <div>
    <label className="block text-xs font-semibold text-footer mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>

    <Field name={name}>
      {({ field, meta }) => (
        <>
          <select
            {...field}
            className={`w-full px-4 py-2 rounded-xl border text-xs bg-white text-footer outline-none transition-all
              ${
                meta.touched && meta.error
                  ? "border-red-400"
                  : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
              }`}
          >
            <option value="">Select {label}</option>

            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {meta.touched && meta.error && (
            <p className="text-red-500 text-xs mt-1">
              {meta.error}
            </p>
          )}
        </>
      )}
    </Field>
  </div>
);

// Reusable textarea component
const FormTextarea = ({
  label,
  name,
  placeholder,
  required = false,
}) => (
  <div>
    <label className="block text-xs font-semibold text-footer mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>

    <Field name={name}>
      {({ field, meta }) => (
        <>
          <textarea
            {...field}
            rows={3}
            placeholder={placeholder}
            className={`w-full px-4 py-2 rounded-xl border text-xs outline-none resize-none transition-all
              ${
                meta.touched && meta.error
                  ? "border-red-400"
                  : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
              }`}
          />

          {meta.touched && meta.error && (
            <p className="text-red-500 text-xs mt-1">
              {meta.error}
            </p>
          )}
        </>
      )}
    </Field>
  </div>
);

// Reusable section heading
const SectionHeading = ({ icon: Icon, title, description }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
      <Icon size={20} />
    </span>

    <div>
      <h3 className="text-md font-semibold text-footer">
        {title}
      </h3>

      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  </div>
);

// Reusable file upload component
const FileUpload = ({
  label,
  name,
  required = false,
  accept = ".jpg,.jpeg,.png,.pdf",
  setFieldValue,
  setFieldTouched,
  values,
  errors,
  touched,
}) => {
  const hasError = touched[name] && errors[name];

  return (
    <div>
      <label className="block text-xs font-semibold text-footer mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <label
        className={`flex flex-col items-center justify-center gap-2 p-5 border-2 border-dashed rounded-xl bg-[#f7f8f2] hover:bg-primary/5 cursor-pointer transition-all
          ${
            hasError
              ? "border-red-400"
              : "border-accent/50 hover:border-primary"
          }`}
      >
        <span className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center">
          <Upload size={20} />
        </span>

        <span className="text-xs font-semibold text-footer text-center break-all">
          {values[name]?.name || "Click to upload a file"}
        </span>

        <span className="text-[11px] text-gray-500">
          JPG, PNG or PDF (Maximum 5 MB)
        </span>

        <input
          key={values[name]?.name || "empty"}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(event) => {
            const file = event.currentTarget.files?.[0] || null;

            setFieldValue(name, file);
            setFieldTouched(name, true, false);
          }}
        />
      </label>

      {hasError && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]}
        </p>
      )}
    </div>
  );
};

export default function RegisterForm() {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    temporaryAddress: "",
    permanentAddress: "",
    guardianName: "",
    guardianPhone: "",
    education: "",
    trainingProgram: "",
    applicantPhoto: null,
    citizenshipFront: null,
    citizenshipBack: null,
    educationCertificate: null,
    agreeTerms: false,
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(
            key,
            typeof value === "boolean" ? String(value) : value
          );
        }
      });

      // Frontend only: connect your backend API here later.
      console.log("Registration Data:", values);
      console.log("FormData:", [...formData.entries()]);

      alert(
        "Form validation successful! Backend API is not connected yet."
      );
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-10 md:py-14 bg-[#f7f8f2]">
      <div className="w-11/12 mx-auto">

        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-bold uppercase tracking-[3px] text-xs sm:text-sm">
            Join Our Training Center
          </span>

          <h2 className="text-3xl md:text-3xl font-extrabold text-footer mt-3">
            Candidate <span className="text-primary">Registration</span>
          </h2>

          <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-7">
            Complete the registration form below to begin your physical
            fitness training journey with Gorkha Physical Fitness Training Center.
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Fields marked with{" "}
            <span className="text-red-500">*</span> are required.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <Form className="bg-white w-full lg:w-10/12 mx-auto rounded-xl shadow-lg border border-accent/20 p-5 sm:p-7 md:p-9 space-y-9">

              {/* Personal Information */}
              <div>
                <SectionHeading
                  icon={User}
                  title="Personal Information"
                  description="Enter your basic personal details."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    required
                  />

                  <FormInput
                    label="Middle Name"
                    name="middleName"
                    placeholder="Enter middle name"
                  />

                  <FormInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    required
                  />

                  <FormInput
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    required
                  />

                  <FormSelect
                    label="Gender"
                    name="gender"
                    required
                    options={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                      { label: "Other", value: "other" },
                    ]}
                  />
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Address Information */}
              <div>
                <SectionHeading
                  icon={MapPin}
                  title="Address Information"
                  description="Provide your current and permanent address."
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <FormTextarea
                    label="Temporary Address"
                    name="temporaryAddress"
                    placeholder="Enter your temporary address"
                    required
                  />

                  <FormTextarea
                    label="Permanent Address"
                    name="permanentAddress"
                    placeholder="Enter your permanent address"
                    required
                  />
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Contact Information */}
              <div>
                <SectionHeading
                  icon={Phone}
                  title="Contact & Emergency Information"
                  description="Provide your contact and guardian details."
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />

                  <FormInput
                    label="Phone Number"
                    name="phone"
                    placeholder="98XXXXXXXX"
                    required
                  />

                  <FormInput
                    label="Guardian / Emergency Contact Name"
                    name="guardianName"
                    placeholder="Enter guardian name"
                    required
                  />

                  <FormInput
                    label="Guardian / Emergency Phone"
                    name="guardianPhone"
                    placeholder="98XXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Education and Training */}
              <div>
                <SectionHeading
                  icon={GraduationCap}
                  title="Education & Training"
                  description="Tell us about your education and training preference."
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormSelect
                    label="Education Level"
                    name="education"
                    required
                    options={[
                      { label: "Below SEE", value: "below_see" },
                      { label: "SEE / SLC", value: "see" },
                      { label: "+2 / Intermediate", value: "plus_two" },
                      { label: "Bachelor's Degree", value: "bachelor" },
                      { label: "Master's Degree", value: "master" },
                      { label: "Other", value: "other" },
                    ]}
                  />

                  <FormSelect
                    label="Training Program"
                    name="trainingProgram"
                    required
                    options={[
                      {
                        label: "British Army Preparation",
                        value: "british_army",
                      },
                      {
                        label: "Indian Army Preparation",
                        value: "indian_army",
                      },
                      {
                        label: "Nepal Army Preparation",
                        value: "nepal_army",
                      },
                      {
                        label: "Other Physical Fitness Training",
                        value: "other",
                      },
                    ]}
                  />
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Documents */}
              <div>
                <SectionHeading
                  icon={FileText}
                  title="Required Documents"
                  description="Upload clear copies of your photograph and documents."
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FileUpload
                    label="Applicant Photograph"
                    name="applicantPhoto"
                    required
                    accept=".jpg,.jpeg,.png"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />

                  <FileUpload
                    label="Citizenship (Front Side)"
                    name="citizenshipFront"
                    required
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />

                  <FileUpload
                    label="Citizenship (Back Side)"
                    name="citizenshipBack"
                    required
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />

                  <FileUpload
                    label="Educational Certificate"
                    name="educationCertificate"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </div>

                <p className="text-[11px] text-gray-500 mt-4 leading-5">
                  Accepted formats: JPG, PNG and PDF. Maximum file size:
                  5 MB per file. Educational certificate is optional.
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className="border-t border-gray-100 pt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                  />

                  <span className="text-xs text-gray-600 leading-6">
                    I confirm that the information and documents provided
                    in this registration form are accurate and genuine.
                    <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>

                {touched.agreeTerms && errors.agreeTerms && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.agreeTerms}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-52 flex items-center justify-center gap-3 bg-footer text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/10"
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                  <Send size={16} />
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
