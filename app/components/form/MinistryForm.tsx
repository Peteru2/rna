"use client";
    import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTabs from "./layout/FormTabs";
import FormSection from "./layout/FormSection";
import DynamicFieldRenderer from "./DynamicRenderer";


import {
  ministrySchema,
  MinistryFormData,
} from "./schemas/ministry.schema";

import { ministryFields } from "./config/ministryFields";


const tabs = [
  "Ministrations",
  "Testimonies",
  "Contact",
];

export default function MinistryForm() {
  const [activeTab, setActiveTab] =
    useState("Ministrations");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MinistryFormData>({
    resolver: zodResolver(ministrySchema),
  });

  const onSubmit = async (
    data: MinistryFormData
  ) => {
    console.log(data);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* TABS */}
        <FormTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormSection>
          {ministryFields.map((field) => (
    <DynamicFieldRenderer
      key={field.name}
      field={field}
      register={register}
      error={errors[field.name]}
    />
  ))}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                h-[56px]
                px-10
                rounded-full
                bg-black/80
                text-white
                font-medium
                transition-all
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Form"}
            </button>
          </FormSection>
        </form>
      </div>
    </section>
  );
}