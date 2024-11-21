import { useEffect, useState } from "react";

function NoteTaking() {
  const [noteInp, setNoteInp] = useState("");
  const [tags, setTags] = useState(["personal", "work", "school"]);
  const [noteTag, setNoteTag] = useState(() => tags[0]);
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) return notes;
    else return [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className=" bg-slate-200 px-16 py-8 rounded-md font-mono mb-3">
      <h3 className="text-2xl font-bold text-center mb-6">Quick notes</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          type="text"
          className="w-full p-2 border border-gray-300 rounded min-h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="write your note here"
          value={noteInp}
          onChange={(e) => setNoteInp(e.target.value)}
        />
        <div className="flex align-middle">
          <select
            value={noteTag}
            onChange={(e) => setNoteTag(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {tags.map((tag, i) => (
              <option key={i} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="add new tag"
            className="p-2 border ml-2 w-40 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (e.target.value.trim()) {
                  setTags([...tags, e.target.value.trim()]);
                  e.target.value = "";
                }
              }
            }}
          />
        </div>
        <button
          type="submit"
          className="p-2 rounded  bg-blue-500 w-full mt-3 text-white focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            if (noteInp) {
              setNotes([...notes, { type: noteTag, content: noteInp }]);
              setNoteInp("");
            }
          }}
        >
          add note
        </button>
      </form>
      <div className="mt-6">
        {notes.map((note, i) => {
          return (
            <p
              className="p-4 relative border text-wrap border-gray-400 rounded-xl flex justify-between mb-4"
              key={i}
            >
              {note.content}
              <span className="flex">
                <span className="block p-2 bg-violet-400 w-24 text-center rounded">
                  {note.type}
                </span>
                <button
                  className="bg-red-500 text-white p-2 rounded-md ml-2"
                  onClick={() => {
                    const newNotes = [...notes].filter(
                      (n) => n.content !== note.content
                    );
                    setNotes(newNotes);
                  }}
                >
                  x
                </button>
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default NoteTaking;
