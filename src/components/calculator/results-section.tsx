import Link from "next/link";
import { Result } from "@/lib/types";
import * as C from "@/components/atoms/card";
import { Code, SunMedium } from "lucide-react";
import { Separator } from "../atoms/separator";

type ResultsTabProps = { results: Result | null };

export const ResultSection = ({ results }: ResultsTabProps) => {
  return (
    <section className="flex flex-col gap-8 h-full">
      <C.Card className="bg-muted/90">
        <C.CardHeader>
          <C.CardTitle>Sun Azimuth</C.CardTitle>
        </C.CardHeader>
        <C.CardContent>
          {results ? (
            <span>{results.azimuth.toFixed(4)} degrees</span>
          ) : (
            <span>not calculated yet</span>
          )}
        </C.CardContent>
      </C.Card>

      <C.Card className="bg-muted/90">
        <C.CardHeader>
          <C.CardTitle>Sun Elevation</C.CardTitle>
        </C.CardHeader>
        <C.CardContent>
          {results ? (
            <span>{results.elevation.toFixed(4)} degrees</span>
          ) : (
            <span>not calculated yet</span>
          )}
        </C.CardContent>
      </C.Card>

      <Separator />

      <div className="grid grid-cols-2 gap-8 h-full">
        <C.Card className="h-full bg-muted/90 flex items-center justify-center w-full">
          <div className="flex gap-6 flex-col">
            <SunMedium color="#ecee5d" size={80} />
          </div>
        </C.Card>

        <C.Card className="h-full bg-muted/90 flex items-center justify-center w-full">
          <div className="flex gap-2 flex-col">
            <Code color="#3399ff" size={80} />
            <Link href="/algorithm">see the code</Link>
          </div>
        </C.Card>
      </div>
    </section>
  );
};
