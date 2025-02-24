import LoadingOverlay from "@/components/custom/LoadingOverlay";
import { useAudio } from "@/context/AudioContext";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorWrapper from "./EditorWrapper";
import "./styles.scss"; // Ensure styles are imported correctly
import Toolbar from "./Toolbar";

// ✨ Extensions
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
];

// 📄 Default Content

// 📝 Main Editor Component
const RichTextEditor = () => {
  const { content = "", loading = false } = useAudio();
  return (
    <EditorWrapper>
      <EditorProvider
        slotBefore={<Toolbar />}
        extensions={extensions}
        content={content}
      >
        <LoadingOverlay active={loading} message="Fetching your content">
          {" "}
          <EditorContent />
        </LoadingOverlay>
      </EditorProvider>
    </EditorWrapper>
  );
};

export default RichTextEditor;
