
import React from "react";
import Select from "../Select";
import SelectTags from "../Select";
import { useForm } from "@inertiajs/inertia-react";

const CreatePost = ({tags}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        imagePath: '',
        title: '',
        description: '',
    });

    // const onHandleChange = (event) => {
    //     setData(event.target.files[0], event.target.value, event.target.decription, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    // };

    const submit = (e) => {
        e.preventDefault();

        // post(route('register'));
        console.log(data);
    };

    console.log(data);
    return (
        <div className="w-[80%] flex flex-row gap-5 items-center mx-auto">
            <form class="w-1/2 max-w-sm mx-auto" onSubmit={submit}>
                <div class="mb-5">
                    <label
                        for="imagePath"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Image
                    </label>
                    <input
                        type="file"
                        id="imagePath"
                        name='imagePath'
                        accept="image/*"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Upload Image"
                        value={data.imagePath}
                        onChange={(e) => setData('imagePath', e.target.files[0])}
                        required
                    />
                </div>
                <div class="mb-5">
                    <label
                        for="title"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={(e) => setData('title', e.target.value)}
                    />
                </div>
                <div class="mb-5">
                    <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                        onChange={(e) => setData('description', e.target.value)}
                    ></textarea>
                </div>
                {/* <div>
                    <SelectTags onHandleChange={onHandleChange}  tags={tags} />
                </div> */}

                <div class="mb-5">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" processing={processing}>
                        Save
                    </button>
                </div>
            </form>
            <div className="w-1/2 h-[400px] bg-gray-500">.</div>
        </div>
    );
};

export default CreatePost;
