
import './App.css';

const Note = ({entry, editNote, deleteNote, onChangeColor}) => {

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        onChangeColor(entry._id, newColor);
    };

    return (
        <div style={{...NoteStyle.note, backgroundColor: entry.color || 'grey'}}>
            <p style={NoteStyle.text}>{entry.title}</p>
                <input type="color" onChange={handleColorChange} value={entry.color || 'grey'} />
                <button
                    onClick={() => editNote(entry)}
                    >
                    Edit note
                </button>
                {<button
                    onClick={() => deleteNote(entry)}
                    >
                    Delete note
                </button>}
        </div>
    )

}

export default Note;

const NoteStyle = {
    note: {
      padding: '20px',
      margin: '20px',
      width: '200px',
      borderStyle: 'dotted',
      borderRadius: '30px',
      borderWidth: 'thin',
      overflowWrap: "break-word"
    },
    text: {
      margin: "0px"
    }, 
  }