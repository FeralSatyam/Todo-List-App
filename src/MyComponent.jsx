
import React, {useState} from 'react'
function MyComponent(){
    const [cars, setCars] = useState([]);
    const [carYear, setcarYear] = useState((new Date().getFullYear()));
    const [carMake, setcarMake] = useState("");
    const [carModel, setcarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, 
                        make: carMake,
                        model: carModel
        };
        setCars(c => [...cars, newCar]);
        setcarYear((new Date().getFullYear()));
        setcarMake("");
        setcarModel("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(e){
        setcarYear(e.target.value);
    }
    function handleMakeChange(e){
        setcarMake(e.target.value)
    }
    function handleModelChange(e){
        setcarModel(e.target.value)
    }


    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} /> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make'/> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/> <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );


}
export default MyComponent