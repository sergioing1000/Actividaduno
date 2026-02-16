import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleEditorChange = (value) => {
    setCode(value || "");
  };

  return (
    <div
      style={{ height: "500px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <Editor
        height="100%"
        width="720px"
        language="javascript"
        value={code}
        theme="vs-dark"
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
