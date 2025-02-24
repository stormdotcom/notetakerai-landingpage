import { useCurrentEditor } from "@tiptap/react";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Minus,
  PaintBucket,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";

const Toolbar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
      {/* 🔹 Basic Formatting */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        icon={<Bold size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        icon={<Italic size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={<Strikethrough size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        isActive={editor.isActive("code")}
        icon={<Code size={18} />}
      />

      {/* 🔹 Headings */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
        icon={<Heading1 size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
        icon={<Heading2 size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
        icon={<Heading3 size={18} />}
      />

      {/* 🔹 Lists */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        icon={<List size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        icon={<ListOrdered size={18} />}
      />

      {/* 🔹 Other Features */}
      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        icon={<Minus size={18} />}
      />

      {/* 🔹 Undo / Redo */}
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        icon={<Undo size={18} />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        icon={<Redo size={18} />}
      />

      {/* 🎨 Text Color (Green) */}
      <ToolbarButton
        onClick={() => editor.chain().focus().setColor("#16a34a").run()}
        isActive={editor.isActive("textStyle", { color: "#16a34a" })}
        icon={<PaintBucket size={18} className="text-green-500" />}
      />
    </div>
  );
};

// ✅ Toolbar Button Component
// eslint-disable-next-line react/prop-types
const ToolbarButton = ({ onClick, disabled, isActive, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-md transition ${
        isActive ? "bg-green-500 text-white" : "bg-white text-gray-700"
      } hover:bg-green-200 disabled:opacity-50`}
    >
      {icon}
    </button>
  );
};

export default Toolbar;
