import {useState} from 'react';
export default function TechnoAdd(props) {
  const [techno, setTechno] = useState({
    technoname: '',
    technocategory: '',
    technodescription: ''
  });

  const {handleAddTechno} = props;

  function handleSubmit(evt){
    evt.preventDefault();
    handleAddTechno(techno);
    setTechno({
      technoname: '',
      technocategory: '',
      technodescription: ''
    })
  }

  function handleChange(evt){
    const {name, value} = evt.target;
    setTechno({...techno, [name]:value});
    //on utilise name car ça prend technoname ou technocategory ou technodescription en function de l'input concerné
  }

  return (
    <div className="techno-add">
      <h1>Add a Techno</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="technoname">Name</label>
          <br />
          <input type="text" name="technoname" id="techno-name" value={techno.technoname} onChange={(evt) => handleChange(evt)} />
          <br />
          <label htmlFor="technocategory">Category</label>
          <br />
          <select name="technocategory" id="techno-category" value={techno.technocategory} onChange={(evt) => handleChange(evt)} >
            <option value="">Select a category</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Full Stack</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description</label>
          <br />
          <textarea
            name="technodescription"
            id="technodescription"
            value={techno.technodescription} 
            onChange={(evt) => handleChange(evt)}
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="btn" />
        </form>
      </div>
    </div>
  );
}
