export const Greeting = ({ tools }: { tools: string[] }) => {
  const toolsAsSentence = new Intl.ListFormat().format(tools);
  return (
    <h1 className="font-sans text-3xl text-center" data-testid="greeting">
      Hello Next.js with {toolsAsSentence} 👋
    </h1>
  );
};
