import React, { useState, useContext, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Select from 'react-select';
import { useForm } from '@inertiajs/react';
import { SidebarContext } from '@/Context/SidebarContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { toast } from 'react-toastify';
import { DarkModeContext } from '@/Context/DarkModeContext';

export default function CreatePost({ auth, datas, user }) {
  const { opened } = useContext(SidebarContext);
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);

  const ref = useRef();

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const [fileInput, setFileInput] = useState(false);

  const { data, setData, errors, post, reset } = useForm({
    title: '',
    description: '',
    tags: [],
    slug: '',
    status: false,
    imagePath: '', // Add imagePath field with empty value
  });

  const inputImg = document.getElementById('imagePath');
  const inputTitle = document.getElementById('title');
  const inputDescription = document.getElementById('description');
  const inputSelect = document.getElementById('select');


  const myOptionsTags = datas?.map((tagItem) => ({
    value: tagItem.id,
    label: tagItem.name,
  }));

  const handleTagsImage = (e) => {
    setData('imagePath', e.target.files[0])
    if(inputTitle.value == '') {
        setFileInput(false)
    }else{
        setFileInput(true)
    }
  };

  const handleTitleChange = (e) => {
    setData('title', e.target.value)
    if(inputTitle.value == '') {
        setFileInput(false)
    }else{
        setFileInput(true)
    }

  };

  const handleDescriptionChange = (e) => {
    setData('description', e.target.value)
    if(inputDescription.value == '') {
        setFileInput(false)
    }else{
        setFileInput(true)
    }

  };





  const previewPhoto = () => {
    const file = inputImg.files;
    if (file) {
        const fileReader = new FileReader();
        const preview = document.getElementById('file-preview');
        setFileInput(true)
        fileReader.onload = event => {
            preview.setAttribute('src', event.target.result);
        }
        fileReader.readAsDataURL(file[0]);
    }
}

if(inputImg) {
    inputImg.addEventListener('change', previewPhoto);
  }




  const handleTagsChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
    setData('tags', selectedOptions.map(option => option.value));
    if(selectedTags) {
        setFileInput(true)
        console.log(fileInput);
    }
  };

  console.log(selectedTags.length);

  const handleFormSubmit = async  (e) => {
    e.preventDefault();

    if (!data.title) {
        toast.error('Title is required');
        return;
      }
      if (!data.description) {
        toast.error('Description is required');
        return;
      }
      if (!data.imagePath) {
        toast.error('Image is required');
        return;
      }
      if (data.tags.length === 0) {
        toast.error('At least one tag is required');
        return;
      }


    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('slug', '-');
    formData.append('user_id', user.id);
    formData.append('status', false);
    formData.append('imagePath', data.imagePath);

    data.tags.forEach(tag => {
      formData.append('tags[]', tag);
    });

    // Use Inertia's post method and add callbacks for success and error handling
    try {
        const response = await Inertia.post(route('posts.store'), formData);
        toast.success('Blog post submitted successfully!');
        reset(); // Reset all form fields to their initial values
        setSelectedTags([]); // Clear the selected tags
        setFileInput(false); // Reset the file input state
        ref.current.value = ""// Clear the image preview
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to submit the blog post.');
      }
  };


  return (
    <div className={`${darkMode ? "text-lightText" : "text-darkText"} pt-20 flex flex-row justify-center  items-center gap-5`}>
      <div className="w-[50%] flex flex-col justify-center mx-auto my-5">
        <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
        <form
          className="w-full"
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium ">
              Title
            </label>
            <input
              className={`${darkMode ? 'bg-darkText text-lightText' : 'bg-lightBg text-darkText'} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              type="text"
              name="title"
              id="title"
              value={data.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium ">
              Description
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="description"
              id="description"
              value={data.description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium ">
              Image
            </label>
            <input
              type="file"
              className={`${darkMode ? 'bg-darkText text-lightText' : 'bg-lightBg text-darkText'}`}
              ref={ref}
              accept="image/*"
              name="imagePath"
              id="imagePath"
              onChange={handleTagsImage}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tags
            </label>
            <Select
              isMulti
              options={myOptionsTags}
              value={selectedTags}
              id='select'
              onChange={handleTagsChange}
              name="tags"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={`${darkMode ? 'bg-darkText' : 'bg-lightBg'} w-[50%] flex flex-col gap-3  p-4 rounded-xl shadow-lg shadow-purple-700 `}>
      {fileInput   ? (
        <div className='flex flex-col gap-3'>
            <div>
                <h3 className='text-xl font-semibold'>{data.title}</h3>
            </div>
            <div>
                <p className='text-sm'>{data.description.substring(0, 200)+' ...'}</p>
            </div>
            <div className='w-full relative'>
            <div>
                <img className='w-full h-[200px] mx-auto' id='file-preview' src='#' alt="" />
            </div>
            <div className='flex flex-row gap-5 absolute bottom-3 left-3'>
                {selectedTags.map((tag,i) =>
                    <p className='bg-darkText text-lightText p-1 rounded font-semibold ' key={i}>{tag.label}</p>
                )}
            </div>
            </div>

        </div>
            ):(
                <p className='text-center text-lg font-semibold'>Post Preview</p>
            )
        }


      </div>

    </div>
  );
}
