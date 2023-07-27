import { component$, useSignal } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

export const Tags = component$(() => {
  const { frontmatter } = useDocumentHead();

  if (frontmatter.tags.length === 0) {
    return <></>;
  }

  return (
    <ul>
      {frontmatter.tags.map((tag: string) => (
        <li key={`tag-${tag}`}>{tag}</li>
      ))}
    </ul>
  );
});
