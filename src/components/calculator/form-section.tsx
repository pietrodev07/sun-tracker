"use client";

import { FormEvent } from "react";
import { FormData } from "@/lib/types";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Button } from "@/components/atoms/button";

type FormSectionProps = {
  formData: FormData;
  actions: {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (value: string, name: keyof FormData) => void;
  };
};

export const FormSection = ({ formData, actions }: FormSectionProps) => {
  return (
    <form onSubmit={actions.handleSubmit} className="space-y-8">
      <Label className="gap-2 w-full flex-col items-start">
        Latitude (-90 to 90)
        <Input
          max={90}
          min={-90}
          step={0.00001}
          type="number"
          value={formData.latitude}
          onChange={(e) => actions.handleChange(e.target.value, "latitude")}
        />
      </Label>

      <Label className="gap-2 w-full flex-col items-start">
        Longitude (-180 to 180)
        <Input
          max={180}
          min={-180}
          step={0.00001}
          type="number"
          value={formData.longitude}
          onChange={(e) => actions.handleChange(e.target.value, "longitude")}
        />
      </Label>

      <Label className="gap-2 w-full flex-col items-start">
        Day of the year (1-365)
        <Input
          min={1}
          max={365}
          type="number"
          value={formData.day}
          onChange={(e) => actions.handleChange(e.target.value, "day")}
        />
      </Label>

      <Label className="gap-2 w-full flex-col items-start">
        Hour of the day (0-23)
        <Input
          min={0}
          max={23}
          type="number"
          value={formData.hour}
          onChange={(e) => actions.handleChange(e.target.value, "hour")}
        />
      </Label>

      <Label className="gap-2 w-full flex-col items-start">
        Minutes of the hour (0-59)
        <Input
          min={0}
          max={59}
          type="number"
          value={formData.minutes}
          onChange={(e) => actions.handleChange(e.target.value, "minutes")}
        />
      </Label>

      <Button type="submit" className="w-full">
        Calculate Sun Position
      </Button>
    </form>
  );
};
