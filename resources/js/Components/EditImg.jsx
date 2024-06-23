import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import { useContext, useEffect, useState } from 'react';

import { Inertia } from '@inertiajs/inertia';
import { DarkModeContext, DarkModeContextProvider } from '@/Context/DarkModeContext';



export default function EditImg({ mustVerifyEmail, status, className = '', user }) {

    const { darkMode } = useContext(DarkModeContext);

    const [imageFile, setImageFile] = useState([]);
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);
    const [imagePath, setImagePath] = useState('');



const initialFormData = {
    imagePath: user && user.imagePath ? user.imagePath : '', // Check if user and user.imagePath exist
};

const { data, setData, patch, errors, processing, recentlySuccessful } = useForm(initialFormData);







useEffect(() => {
    // Check if user and its associated image_user exist before processing



    if (user && Array.isArray(user.image_user)) {
        setImages(user.image_user);
        console.log(images);

    }
}, [user]);


const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file correctly
    setImageFile(file); // Set the file in the state// Set the file in the state
};

const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (imageFile) {
        formData.append('imagePath', imageFile); // Append the new image file to the form data
        console.log(formData.get('imagePath')); // Log the formData immediately after appending
    }


    await Inertia.post(route("profile.update"), formData);
};
// console.log(imageFile);
console.log(user);
const basePath = 'http://localhost:8000/';

    return (
        <DarkModeContextProvider>
        <section className={className}>


            <form onSubmit={submit}>
            <div className="mt-5 mb-5 flex flex-col md:flex-col gap-2 ">
            <img className="h-[100px] w-[100px] " src={'/imageusers/'+user.imagePath}  alt="" />

            {/*  */}
                        <input type="file"
                                    accept="image/*"
                                    name="imagePath"
                                    // defaultValue={user?.image_user?.imagePath}
                                    onChange={handleImageChange} />
                    </div>
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

            </form>


        </section>
        </DarkModeContextProvider>
    );
}
