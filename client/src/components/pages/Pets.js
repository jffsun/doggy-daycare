import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import fakePets from '../../pets.json'
import { GET_ME } from "../../utils/queries";
import { useQuery } from '@apollo/client';


export default function Pets() {
  const [modalOpen, setModalOpen] = useState(false);

  //import Pet Data
  const { loading, data } = useQuery(GET_ME);
  
  console.log(data);
  const pets = data?.me.pets || [];


  return (
    <>
    
    <div className="container">
      <h1>Pets</h1>
      <br />
      <button type="button" className="btn btn-danger"><Link to='/pets/form'>Add Pet</Link></button>
      <br />
      <div>
        {fakePets.map((fakepet) => 
        <Card name={fakepet.name} age={fakepet.age} gender={fakepet.gender} image={fakepet.image} medication={fakepet.medication} />
        )}
        {pets.map((pet) => 
        <Card name={pet.name} age={pet.age} gender={pet.gender} image={pet.image} medication={pet.medication} />
        )}
      </div>
    </div>

    </>
  );
}

