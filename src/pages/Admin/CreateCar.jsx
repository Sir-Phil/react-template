import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageIllustration from '../../partials/PageIllustration';
import FormField from '../../partials/FormField';
import axios from 'axios';

const Endpoint = 'http://localhost:2023/'

const CreateCar = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState();
    const[ name, setName] = useState('');
    const[ price, setPrice] = useState('');
    const[ category, setCategory] = useState('')
    const[ description, setDescription] = useState('')
    const[ image1, setImage1] = useState('')
    const[ image2, setImage2] = useState('')
    const[ image3, setImage3] = useState('')
    


    // const [form, setForm] = useState({
    //     name: '',
    //     price: '',
    //     category: '',
    //     description: '',
    //     image: '',
    // });

    // const postcar = (fieldName, e) => {
    //     setForm({...form, [fieldName]: e.target.value})
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const car = {name, price, category, description, image:[image1, image2, image3]}

        const result = await (await axios.post(`${Endpoint}api/cars`, {car})).data
        console.log(result);

    }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        {/* page content */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2">
                  Contact W.J Motors, We responds to all your messages.
                </h2>
              </div>
              <div className="max-w-sm mx-auto">
                {isLoading && 'Load'}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField 
                labelName="Car Type"
                placeholder="Car name or type"
                inputType="text"
                value={name}
                handleChange={(e) => {setName(e.target.value)}}
                />
                </div>

                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField 
                labelName="Amount"
                placeholder="Type car price"
                inputType="text"
                value={price}
                handleChange={(e) => {setPrice(e.target.value)}}
                />
                </div>

                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField 
                labelName="Category"
                placeholder="car type"
                inputType="text"
                value={category}
                handleChange={(e) => {setCategory(e.target.value)}}
                />
                </div>
                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField
                labelName="Description"
                placeholder="Car details"
                inputType="text"
                value={description}
                handleChange={(e) => {setDescription(e.target.value)}}
                 />
                </div>

                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField
                labelName="Images 1"
                placeholder="First image  url"
                inputType="url"
                value={image1}
                handleChange={(e) => {setImage1(e.target.value)}}
                 />
                </div>
                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField
                labelName="Images 2"
                placeholder="Second image  url"
                inputType="url"
                value={image2}
                handleChange={(e) => {setImage2(e.target.value)}}
                 />
                </div>
                <div className="flex flex-wrap -mx-3 mb-4 ">
                <FormField
                labelName="Images 3"
                placeholder="Third image  url"
                inputType="url"
                value={image3}
                handleChange={(e) => {setImage3(e.target.value)}}
                 />
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                     Submit
                    </button>
                  </div>
                </div>
              </form>
              </div>
           
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreateCar
