import { useAudio } from "@/context/AudioContext";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import LoadingOverlay from "@/components/custom/LoadingOverlay";
import EditorActions from "./EditorActions";
import EditorWrapper from "./EditorWrapper";
import Toolbar from "./Toolbar";
import "./styles.scss"; // Ensure styles are imported correctly

// ✨ Extensions
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
];

const RichTextEditor = () => {
  const {
    content: contextContent,
    loading,
    getMarkDownContent,
    saveContent,
    setContent,
  } = useAudio();
  const [editorContent, setEditorContent] = useState(""); // Local state for content
  const navigate = useNavigate();
  const { sessionId } = useParams();

  // Fetch content on mount
  useEffect(() => {
    if (sessionId) {
      getMarkDownContent(sessionId);
    }
  }, [sessionId]);

  // Update local state when context content is ready
  useEffect(() => {
    if (contextContent) {
      setEditorContent(contextContent);
    }
  }, [contextContent]);

  // Function to handle content updates
  const handleEditorUpdate = ({ editor }) => {
    setContent(editor.getHTML());
  };

  const onSave = () => {
    saveContent(sessionId);
  };

  const onBack = () => navigate(`../session/${sessionId}`);

  // If content is still loading, show the loading overlay
  if (loading) {
    return <LoadingOverlay active={true} message="Fetching your content..." />;
  }

  return (
    <EditorWrapper>
      <EditorProvider
        slotBefore={<Toolbar />}
        extensions={extensions}
        content={editorContent}
        onUpdate={handleEditorUpdate} // ✅ Update local state when content changes
      >
        <EditorContent />
      </EditorProvider>
      <EditorActions onSave={onSave} onBack={onBack} />
    </EditorWrapper>
  );
};

export default RichTextEditor;
