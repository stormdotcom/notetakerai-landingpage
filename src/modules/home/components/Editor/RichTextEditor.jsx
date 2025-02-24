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
const content = `
<h2>Hi there,</h2>
<p>This is a <em>basic</em> example of <strong>Tiptap</strong>.</p>
<ul>
  <li>• Bullet List Item</li>
  <li>• Another Item</li>
</ul>
<p>Try editing this text. You can also <code>write code</code>!</p>
<blockquote>Wow, this is great! — Someone</blockquote>
`;

// 📝 Main Editor Component
const RichTextEditor = () => {
  return (
    <EditorWrapper>
      <EditorProvider
        slotBefore={<Toolbar />}
        extensions={extensions}
        content={content}
      >
        <EditorContent />
      </EditorProvider>
    </EditorWrapper>
  );
};

export default RichTextEditor;
