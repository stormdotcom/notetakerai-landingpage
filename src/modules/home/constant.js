export const summaries = [
  { id: 1, title: "Section 1", description: "In a historic moment..." },
  { id: 2, title: "Section 2", description: "SpaceX, the private..." },
  { id: 3, title: "Section 3", description: "This mission marks..." },
  { id: 4, title: "Section 4", description: "Elon Musk, SpaceX's CEO..." },
  { id: 5, title: "Section 5", description: "As the Starship embarks..." },
  { id: 6, title: "Section 6", description: "This mission marks..." },
  { id: 7, title: "Section 7", description: "Stay tuned for updates..." },
];



export const STORAGE_KEYS = {
  LOCAL_STORAGE: "access_token",
  USER: "user"
}


export const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

export const SESSIONS_MAP = {
  instant: "Live Audio Recording",
  file: "Uploaded Audio File",
  video: "Recorded Video Session"
};


export const CONTENT_TEST = `
<h2>Hi there,</h2>
<p>This is a <em>basic</em> example of <strong>Tiptap</strong>.</p>
<ul>
  <li>• Bullet List Item</li>
  <li>• Another Item</li>
</ul>
<p>Try editing this text. You can also <code>write code</code>!</p>
<blockquote>Wow, this is great! — Someone</blockquote>
`;