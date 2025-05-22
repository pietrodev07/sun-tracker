import Link from "next/link";
import { algorithmCode } from "@/lib/sun";
import { Title } from "@/components/blocks/title";
import { CodeBlock } from "@/components/blocks/code";

const AlgorithmPageHeader = () => {
  return (
    <header className="flex justify-between">
      <Title label="Algorithm for calculating the sun position" />
      <Link href="/">Back to homepage</Link>
    </header>
  );
};

const AlgorithmPageCode = () => {
  return <CodeBlock lang="js">{algorithmCode}</CodeBlock>;
};

export default function AlgorithmPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <AlgorithmPageHeader />
      <AlgorithmPageCode />
    </main>
  );
}
