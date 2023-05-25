import React from "react";
import grayMatter from "gray-matter";
import { Buffer } from "buffer";

const MarkdownParser = ({ markdown }) => {
  global.Buffer = Buffer;
  const featuredProjects = [];
  const parseMarkdown = (markdownContent) => {
    const { data, content } = grayMatter(markdownContent);
    return { metadata: data, content };
  };

  const parsedData = parseMarkdown(markdown);

  // Access the parsed data
  console.log(parsedData.metadata);
  console.log(parsedData.content);
  featuredProjects.push(parsedData.metadata);

  console.log(featuredProjects);
  return (
    <div>
      <h1>Markdown Parser</h1>
      {/* Render the parsed data as needed */}
    </div>
  );
};

export default MarkdownParser;
