import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const modules = {
    toolbar: [
        [{'header': [1,2,false]}],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ]
    };
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');

    const navigate = useNavigate();

    function createNewPost (ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        data.append('cover', file);
        
        fetch('http://localhost:4000/post', {  
          method: 'POST',
          body: data
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);  // Logs the response from the server

          alert('Post successfully created!');
          navigate('/');
        })
        .catch(error => {
          console.log('Error:', error);
        });
      }
    
    return (
            <form onSubmit={createNewPost}>
                <input 
                    name='title'
                    type='text' 
                    placeholder={'Title'} 
                    value={title} 
                    onChange={ev => setTitle(ev.target.value)}
                    />
                <input 
                    name='summary'
                    type='text'
                    placeholder={'Summary'}
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)}
                    />
                <input 
                    name='file'
                    type='file' 
                    onChange={ev => setFile(ev.target.files[0])}
                    />
                <ReactQuill 
                    value={content} 
                    onChange={newValue => setContent(newValue)}
                    modules={modules}
                    formats={formats}
                    />
                <button style={{marginTop:'5px'}}>Create post</button>
            </form>
    );
};