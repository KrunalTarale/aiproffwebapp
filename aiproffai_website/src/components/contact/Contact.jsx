// import React , {useState , useEffect} from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Foot/Foot";
import { useEffect, useState } from "react";

const Contact = () => {

  useEffect(() => {
    getCountries();
    gettopics();
}, [])


  const [countries, setCountries] = useState([]);
  const [states , setStates] = useState([]);
  const [cities , setCities] = useState([]);
  const [topics , setTopics] = useState([]);

  const [fname , setfname] = useState('');
  const [lname , setlname] = useState('');
  const [country , setcountry] = useState('');
  const [contact , setcontact] = useState('');
  const [state , setstate] = useState('');
  const [city , setcity] = useState('');
  const [help , sethelp] = useState('');
  const [massage , setmassage] = useState('');
  
  const [error , setError] = useState(false);


  const resetForm = () => {
    setfname('');
    setlname('');
    setcountry('');
    setcontact('');
    setstate('');
    setcity('');
    sethelp('');
    setmassage('');
  };

  const handleSubmit = async () => {

    if(!fname || !lname || !country || !contact || !state || !city || !help || !massage){
      setError(true);
      // alert("please fill all the fields")
  }
  else{
    const res = await fetch('http://localhost:3000/add_inquiry', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          fname : fname,
          lname : lname,
          country : country,
          contact : contact,
          state : state,
          city : city,
          help : help,
          massage : massage
      })
    })
    const data = await res.json();
    if(data){
        alert("Thank you for connecting with us...")
        resetForm();
        setError(false);
    }
  }
}


  const getCountries = async () => {
    console.log("countries");
    let res = await fetch('http://localhost:3000/get_countries');
    console.log(res);
    let data = await res.json();
    setCountries(data);
    console.log(countries);
}

const addCountry = (country) => {
  return <option value={country.id}>{country.name}</option>
}

const getStates = async (e) => {
  let selectedOption = e.target.options[e.target.selectedIndex];
    let selected_country = selectedOption.innerHTML;
    setcountry(selected_country);
  const countryId = e.target.value
  let res = await fetch('http://localhost:3000/get_states/'+countryId);
  let data = await res.json();
  setStates(data);
}

const addStates = (state) => {
  return <option value={state.id}>{state.name}</option>
}

const getCities = async (e) => {
  let selectedOption = e.target.options[e.target.selectedIndex];
  let selected_state = selectedOption.innerHTML;
  setstate(selected_state);
  const stateId = e.target.value
  let res = await fetch('http://localhost:3000/get_cities/'+stateId);
  let data = await res.json();
  setCities(data);
}

const addCities = (city) => {
  return <option value= {city.name} />
}


const gettopics = async () => {
  let res = await fetch('http://localhost:3000/get_topics');
  let data = await res.json();
  setTopics(data);
}

const getAlltopics = (topic) => {
  return <option value={topic.name}>{topic.name}</option>
}

  return (
    <>
      <Navbar />
      <div className="contact_form">

        <div className="Form_page">
          <htmlForm className="w-full max-w-lg">
            {/* First section */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  value={fname}
                  placeholder="John" onChange={(event) => setfname(event.target.value)}
                />
                 {error && !fname && <span className='warning_massage'>Please Enter Name</span> }
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  value={lname}
                  onChange={(event) => setlname(event.target.value)}
                  required
                />
                 {error && !lname && <span className='warning_massage'>Please Enter Name</span> }
              </div>
            </div>

            {/* second section */}

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Country Calling Code
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"  onChange={getStates}
                  >
                    <option selected value={""}>Select Country</option>
                    {countries.map(addCountry)}
                  </select>
                  {error && !country && <span className='warning_massage'>Please Select Country</span> }
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Contact No.
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Phone no."
                  onChange={(event) => setcontact(event.target.value)}
                  value={contact}
                />
                {error && !contact && <span className='warning_massage'>Please Add Contact No</span> }
              </div>
            </div>

            {/* Third section  */}

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state" onChange={getCities}
                  >
                    <option value={""} selected>Select State</option>
                    {states.map(addStates)}
                  </select>
                  {error && !state && <span className='warning_massage'>Please Select State</span> }
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque" list="browsers"
                  value={city}
                  onChange={(event) => setcity(event.target.value)}
                />

                    <datalist id="browsers">
                        {cities.map(addCities)}
                    </datalist>
                    {error && !city && <span className='warning_massage'>Please Add Country</span> }
              </div>
            </div>

            <div className="w-full mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                How can we help you today ?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(event) => sethelp(event.target.value)}
                  value={help}
                >
                  <option selected value={""}>Topic</option>
                  {topics.map(getAlltopics)}
                </select>
                {error && !help && <span className='warning_massage'>Please Select Topic</span> }
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="textarea"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="textarea"
                name="textarea"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Type your message here..."
                value={massage}
                onChange={(event) => setmassage(event.target.value)}
              ></textarea>
              {error && ! massage && <span className='warning_massage'>Please Add the Massage</span> }
            </div>

            <div className="text-right">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </htmlForm>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;
