import '../App.css';

function App(props) {
  return (
    <div className="App">
      <p class="ridge2">
        <h2>Data Diri Peserta Class React JS</h2>
        <hr></hr>
        <ul>
            <li align="left"> Nama Lengkap : {props.name}</li> 
            <li align="left"> Batch : {props.batch}</li> 
            <li align="left"> Email : {props.email}</li> 
        </ul>
        </p>
    </div>
  
  );
}

export default App;
