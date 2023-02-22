import "./ThunderObservatory.css";

const ThunderObservatory = ({name, addThunder}) => {

  return(
    <button onClick={addThunder} className="thunder-observatory">
      Notificar rayo en {name}
    </button>
  );
}

export default ThunderObservatory;

