"use client";

import { FormEvent, useState } from "react";
import { FormData, Result } from "@/lib/types";
import { calculateSunPosition } from "@/lib/sun";

const initialState: FormData = {
  day: 50,
  hour: 12,
  minutes: 30,
  latitude: 40.78525,
  longitude: 25.48612,
};

export const useCalculator = () => {
  const [results, setResults] = useState<Result | null>(null);
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (value: string, name: string) => {
    const valueModified = !isNaN(+value) ? +value : value;
    setFormData((prev) => ({ ...prev, [name]: valueModified }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResults(calculateSunPosition(formData));
  };

  return {
    states: { results, formData },
    actions: { handleChange, handleSubmit },
  };
};
