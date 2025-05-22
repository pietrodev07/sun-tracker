"use client";

import * as C from "@/components/atoms/card";
import { FormSection } from "./form-section";
import { Separator } from "../atoms/separator";
import { ResultSection } from "./results-section";
import { useCalculator } from "@/hooks/use-calculator";

export const Calculator = () => {
  const { actions, states } = useCalculator();

  return (
    <section className="flex gap-10 w-full max-w-6xl max-xl:flex-col">
      <C.Card className="shadow-lg bg-muted/40 flex-8/12">
        <C.CardHeader>
          <C.CardTitle>Sun Position Calculator</C.CardTitle>
          <C.CardDescription>Calculate the actual sun position</C.CardDescription>
        </C.CardHeader>
        <Separator />
        <C.CardContent className="h-full">
          <FormSection formData={states.formData} actions={actions} />
        </C.CardContent>
      </C.Card>

      <C.Card className="shadow-lg bg-muted/40 flex-5/12">
        <C.CardHeader>
          <C.CardTitle>Results in degrees</C.CardTitle>
          <C.CardDescription>Show results in degrees</C.CardDescription>
        </C.CardHeader>
        <Separator />
        <C.CardContent className="h-full">
          <ResultSection results={states.results} />
        </C.CardContent>
      </C.Card>
    </section>
  );
};
