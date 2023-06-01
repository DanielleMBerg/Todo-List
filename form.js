function MondayTaskForm({addMondayTasks}) {
    const [value ,setValue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addMondayTasks(value);
        setValue('');
      }
    
    return (
    <form onSubmit={handleSubmit}>
        <input 
         type='text'
         className='input'
         value={value}
         placeholder='Add new task...'
         onChange={e => setValue(e.target.value)}/>
    </form>
    )
};

function TuesdayTaskForm({addTuesdayTasks}) {
  const [value ,setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTuesdayTasks(value);
      setValue('');
    }
  
  return (
  <form onSubmit={handleSubmit}>
      <input 
       type='text'
       className='input'
       value={value}
       placeholder='Add new task...'
       onChange={e => setValue(e.target.value)}/>
  </form>
  )
};

function WednesdayTaskForm({addWednesdayTasks}) {
  const [value ,setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addWednesdayTasks(value);
      setValue('');
    }
  
  return (
  <form onSubmit={handleSubmit}>
      <input 
       type='text'
       className='input'
       value={value}
       placeholder='Add new task...'
       onChange={e => setValue(e.target.value)}/>
  </form>
  )
};

function ThursdayTaskForm({addThursdayTasks}) {
  const [value ,setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addThursdayTasks(value);
      setValue('');
    }
  
  return (
  <form onSubmit={handleSubmit}>
      <input 
       type='text'
       className='input'
       value={value}
       placeholder='Add new task...'
       onChange={e => setValue(e.target.value)}/>
  </form>
  )
};

function FridayTaskForm({addFridayTasks}) {
  const [value ,setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addFridayTasks(value);
      setValue('');
    }
  
  return (
  <form onSubmit={handleSubmit}>
      <input 
       type='text'
       className='input'
       value={value}
       placeholder='Add new task...'
       onChange={e => setValue(e.target.value)}/>
  </form>
  )
};

function SaturdayTaskForm({addSaturdayTasks}) {
  const [value ,setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addSaturdayTasks(value);
      setValue('');
    }
  
  return (
  <form onSubmit={handleSubmit}>
      <input 
       type='text'
       className='input'
       value={value}
       placeholder='Add new task...'
       onChange={e => setValue(e.target.value)}/>
  </form>
  )
};

function SundayTaskForm({addSundayTasks}) {
  const [value ,setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addSundayTasks(value);
      setValue('');
    }
  
  return (
  <form onSubmit={handleSubmit}>
      <input 
       type='text'
       className='input'
       value={value}
       placeholder='Add new task...'
       onChange={e => setValue(e.target.value)}/>
  </form>
  )
};