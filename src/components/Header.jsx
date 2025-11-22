import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HighlightIcon from "@mui/icons-material/Highlight";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

function Header() {
  return (
    <header>
      <h1>
        Slate
        <NoteAltOutlinedIcon fontSize="large" />
      </h1>
    </header>
  );
}

export default Header;
