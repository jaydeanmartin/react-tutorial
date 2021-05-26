import Notes from './Notes';
import useFetch from './useFetch';

const Home = () => {
    const { data: notes, isPending, error } = useFetch('http://localhost:8000/notes');

    return ( 
        <div className="home">
            { error && <div> { error }</div>}
            { isPending && <div>Loading...</div> }
            { notes && <Notes notes={notes} title="All Datasets" />}
         </div>
     );
}
 
export default Home;