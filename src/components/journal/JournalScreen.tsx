// import { NothingSelected } from "./NothingSelected";
import { NoteScreen } from "../notes/NoteScreen";
import { SideBar } from "./SideBar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <SideBar />

      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};
