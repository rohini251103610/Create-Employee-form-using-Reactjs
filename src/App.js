import React, {useState,useEffect} from 'react';
import './App.css';

const App = () => {
  const [value,setValue]=useState({firstName: '',middleName: '',lastName: '',birthDate: '',email: '',phoneNumber: '',gender: '',startTime: '',endTime: '',jobPosition: '',teams: '',designation: '',billHours: '',Bill: false,});
  const [required,setRequired]=useState({});

  useEffect(() => {
    Form();
  },[value]);

  const handleInput=(e)=>{
    const {name,value,type,checked}=e.target;
    setValue((prevState)=>({
      ...prevState,
      [name]:type==='checkbox'?checked: value,
    }));
  };

  const Form=()=>{
    const valid={};

    if(!value.firstName.trim()){
      valid.firstName='First Name is required';
    }
    if(!value.lastName.trim()){
      valid.lastName='Last Name is required';
    }
    if(!value.email.trim()){
      valid.email='Email is required';
    }
    if(!value.phoneNumber.trim()){
      valid.phoneNumber='Phone Number is required';
    }
    if(!value.birthDate.trim()){
      valid.birthDate='Birth Date is required';
    }
    if(!value.gender){
      valid.gender='Gender is required';
    }
    if(!value.startTime){
      valid.startTime='Start Time is required';
    }
    if(!value.endTime){
      valid.endTime='End Time is required';
    }
    if(!value.jobPosition.trim()){
      valid.jobPosition='Job Position is required';
    }
    if(!value.teams){
      valid.teams='Team is required';
    }
    if(!value.designation.trim()){
      valid.designation='Designation is required';
    }
    if(!value.billHours.trim()||parseFloat(value.billHours) <= 0) {
      valid.billHours='Billable Hours is required and must be a positive number';
    }

    setRequired(valid);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    Form();
    if(Object.keys(required).length === 0){
      console.log('Submitted Successfully', value);
    } 
    else{
      console.log('Please fill the required fields');
    }
  };

  return(
    <div className='form1'>
      <form onSubmit={handleSubmit}>
        <h1>Employee Form</h1>
        <div className='name'>
          <div className='label-inp'>
            <label className='lab'>First Name</label>
            <input type="text" name="firstName" placeholder='Enter your first name' value={value.firstName} onChange={handleInput} />
            {required.firstName && <p className='invalid'>{required.firstName}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>Middle Name</label>
            <input type="text" name="middleName" placeholder='Enter your middle name' value={value.middleName} onChange={handleInput} />
          </div>
          <div className='label-inp'>
            <label className='lab'>Last Name</label>
            <input type="text" name="lastName" placeholder='Enter your last name' value={value.lastName} onChange={handleInput} />
            {required.lastName && <p className='invalid'>{required.lastName}</p>}
          </div>
        </div>
        <div className='email'>
          <div className='label-inp'>
            <label className='lab'>Birth Date</label>
            <input type="date" name="birthDate" placeholder='Enter your DOB' value={value.birthDate} onChange={handleInput} />
            {required.birthDate && <p className='invalid'>{required.birthDate}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>Email</label>
            <input type="email" name="email" placeholder='Enter your email' value={value.email} onChange={handleInput} />
            {required.email && <p className='invalid'>{required.email}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>Phone Number</label>
            <input type="tel" name="phoneNumber" placeholder='Enter your phone number' value={value.phoneNumber} onChange={handleInput} />
            {required.phoneNumber && <p className='invalid'>{required.phoneNumber}</p>}
          </div>
        </div>
        <div className='Gender'>
          <div className='label-inp'>
            <label className='lab'>Gender</label>
            <select name='gender' id='gender' value={value.gender} onChange={handleInput}>
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
            {required.gender && <p className='invalid'>{required.gender}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>Start Time</label>
            <input type="time" name="startTime" placeholder='Enter your start time' value={value.startTime} onChange={handleInput} />
            {required.startTime && <p className='invalid'>{required.startTime}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>End Time</label>
            <input type="time" name="endTime" placeholder='Enter your end time' value={value.endTime} onChange={handleInput} />
            {required.endTime && <p className='invalid'>{required.endTime}</p>}
          </div>
        </div>
        <div className='position'>
          <div className='label-inp'>
            <label className='lab'>Job Position</label>
            <input type="text" name="jobPosition" placeholder='Enter your job position' value={value.jobPosition} onChange={handleInput} />
            {required.jobPosition && <p className='invalid'>{required.jobPosition}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>Select Teams</label>
            <select name="teams" id="teams" value={value.teams} onChange={handleInput}>
              <option value="">Select Team</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
              <option value="team3">Team 3</option>
            </select>
            {required.teams && <p className='invalid'>{required.teams}</p>}
          </div>
          <div className='label-inp'>
            <label className='lab'>Select Designation</label>
            <select name="designation" value={value.designation} onChange={handleInput}>
              <option value="">Select Designation</option>
              <option value="Software Engineer">Software developer</option>
              <option value="Data Scientist">Data Analyst</option>
              <option value="Product Manager">Team Manager</option>
            </select>
            {required.designation && <p className='invalid'>{required.designation}</p>}
          </div>
        </div>
        <div className='BillableHours'>
          <div className='label-inp'>
            <label className='lab'>Billable Hours</label>
            <input type="number" name="billHours" placeholder='Enter your billable hours' value={value.billHours} onChange={handleInput} />
            {required.billHours && <p className='invalid'>{required.billHours}</p>}
          </div>
          <div className='labcheck'>
            <label htmlFor='Bill' className='labelcheck'>isBillable</label>
            <input type="checkbox" name="Bill" id="Bill" className='inp-check' checked={value.Bill} onChange={handleInput} />
          </div>
        </div>
        <div className='button'>
          <input type="submit" className="btn" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default App;
