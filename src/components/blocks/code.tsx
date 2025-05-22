import { BundledLanguage, codeToHtml } from "shiki";

type CodeBlockProps = { children: string; lang: BundledLanguage };

export const CodeBlock = async ({ children, lang }: CodeBlockProps) => {
  const out = await codeToHtml(children, { lang, theme: "vesper" });
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
};
