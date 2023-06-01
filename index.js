function App(){
  const [mondayTasks, setMondayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const [tuesdayTasks, setTuesdayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const [wednesdayTasks, setWednesdayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const [thursdayTasks, setThursdayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const [fridayTasks, setFridayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const [saturdayTasks, setSaturdayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const [sundayTasks, setSundayTasks] = React.useState([
    {
      text: 'Walk the dog',
      isCompleted: false,
    }      
  ]);

  const addMondayTasks = text => {
    const newTasks = [...mondayTasks, {text, isCompleted:false}];
    setMondayTasks(newTasks);
  }

  const addTuesdayTasks = text => {
    const newTasks = [...tuesdayTasks, {text, isCompleted:false}];
    setTuesdayTasks(newTasks);
  }

  const addWednesdayTasks = text => {
    const newTasks = [...wednesdayTasks, {text, isCompleted:false}];
    setWednesdayTasks(newTasks);
  }

  const addThursdayTasks = text => {
    const newTasks = [...thursdayTasks, {text, isCompleted:false}];
    setThursdayTasks(newTasks);
  }

  const addFridayTasks = text => {
    const newTasks = [...fridayTasks, {text, isCompleted:false}];
    setFridayTasks(newTasks);
  }

  const addSaturdayTasks = text => {
    const newTasks = [...saturdayTasks, {text, isCompleted:false}];
    setSaturdayTasks(newTasks);
  }

  const addSundayTasks = text => {
    const newTasks = [...sundayTasks, {text, isCompleted:false}];
    setSundayTasks(newTasks);
  }

  const removeMondayTasks = index => {
    let currentList = [...mondayTasks];    
    currentList.splice(index, 1);
    setMondayTasks(currentList);
  }

  const removeTuesdayTasks = index => {
    let currentList = [...tuesdayTasks];    
    currentList.splice(index, 1);
    setTuesdayTasks(currentList);
  }

  const removeWednesdayTasks = index => {
    let currentList = [...wednesdayTasks];    
    currentList.splice(index, 1);
    setWednesdayTasks(currentList);
  }

  const removeThursdayTasks = index => {
    let currentList = [...thursdayTasks];    
    currentList.splice(index, 1);
    setThursdayTasks(currentList);
  }

  const removeFridayTasks = index => {
    let currentList = [...fridayTasks];    
    currentList.splice(index, 1);
    setFridayTasks(currentList);
  }

  const removeSaturdayTasks = index => {
    let currentList = [...saturdayTasks];    
    currentList.splice(index, 1);
    setSaturdayTasks(currentList);
  }

  const removeSundayTasks = index => {
    let currentList = [...sundayTasks];    
    currentList.splice(index, 1);
    setSundayTasks(currentList);
  }


  return (
  <div className="container">
    <div className="card1">
      <h2 class="card-header">Monday</h2>
      <img src="./images/hobbit.jpg" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {mondayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeMondayTasks}/>
        ))}
      </div>
      <MondayTaskForm addMondayTasks={addMondayTasks} />
    </div>
    <div className="card2">
      <h2 class="card-header">Tuesday</h2>
      <img src="./images/Cleo.JPG" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {tuesdayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeTuesdayTasks}/>
        ))}
      </div>
      <TuesdayTaskForm addTuesdayTasks={addTuesdayTasks} />
    </div>
    <div className="card3">
      <h2 class="card-header">Wednesday</h2>
      <img src="./images/horse.JPG" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {wednesdayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeWednesdayTasks}/>
        ))}
      </div>
      <WednesdayTaskForm addWednesdayTasks={addWednesdayTasks} />
    </div>
    <div className="card4">
      <h2 class="card-header">Thursday</h2>
      <img src="./images/fall.JPG" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {thursdayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeThursdayTasks}/>
        ))}
      </div>
      <ThursdayTaskForm addThursdayTasks={addThursdayTasks} />
    </div>
    <div className="card5">
      <h2 class="card-header">Friday</h2>
      <img src="./images/Cleo2.jpeg" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {fridayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeFridayTasks}/>
        ))}
       </div>
       <FridayTaskForm addFridayTasks={addFridayTasks} />
    </div>
    <div className="card6">
      <h2 class="card-header">Saturday</h2>
      <img src="./images/australia.JPG" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {saturdayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeSaturdayTasks}/>
        ))}
      </div>
      <SaturdayTaskForm addSaturdayTasks={addSaturdayTasks} />
    </div>
    <div className="card7">
      <h2 class="card-header">Sunday</h2>
      <img src="./images/leavenworth.jpeg" class="card-img-top" alt="..."></img>
      <div className="card-body">
        {sundayTasks.map((chore, i) => (
          <ToDo key={i} index={i} chore={chore} completed={removeSundayTasks}/>
        ))}
      </div>
      <SundayTaskForm addSundayTasks={addSundayTasks} />
      </div>
      
  </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
