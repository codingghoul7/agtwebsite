import React,{useState} from 'react'

export default function RightPannel() {
    
        const [location, setLocation] = useState('');
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Do something with the location value, such as fetch data from an API
          console.log(location);
        }
      
        const handleInputChange = (event) => {
          setLocation(event.target.value);
        }

  return (
    <h1>
    </h1>
//     <form onSubmit={handleSubmit} className="d-flex">
//     <input
//       className="form-control me-2"
//       type="search"
//       placeholder="Enter location"
//       aria-label="Search"
//       value={location}
//       onChange={handleInputChange}
//     />
//     <button className="btn btn-outline-success" type="submit">
//       Search
//     </button>
//   </form>
  )
    }

