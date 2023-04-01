import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
        />

        <textarea
          placeholder="what happened today ?"
          className="notes__textarea"
        ></textarea>

      </div>
    </div>
  );
};
