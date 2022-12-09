import TechnoItem from '../components/TechnoItem.js';

export default function TechnoList(props){
    const {technos, handleDeleteTechno} = props;
    return (
        <div className="techno-list">
            <h1>All Technos</h1>
                <div>
                    {
                    technos.map(techno => (
                        <TechnoItem techno={techno} key={techno.technoId} handleDeleteTechno={handleDeleteTechno}/>
                        ))
                    }

                </div>
        </div>
        )
}