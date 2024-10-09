document.addEventListener('DOMContentLoaded', loadPosts);  

document.getElementById('postForm').addEventListener('submit', function (event) {  
    event.preventDefault(); // Prevent the default form submission  

    const title = document.getElementById('title').value;  
    const content = document.getElementById('content').value;  
    const imageFile = document.getElementById('image').files[0];  
    const videoFile = document.getElementById('video').files[0];  

    const post = {  
        title: title,  
        content: content,  
        image: imageFile ? URL.createObjectURL(imageFile) : null,  
        video: videoFile ? URL.createObjectURL(videoFile) : null,  
    };  

    addPost(post);  
    renderPost(post);  

    // Clear the input fields  
    document.getElementById('postForm').reset();  
});  

function loadPosts() {  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];  
    posts.forEach(post => renderPost(post));  
}  

function addPost(post) {  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];  
    posts.push(post);  
    localStorage.setItem('posts', JSON.stringify(posts));  
}  

function renderPost(post) {  
    const postsDiv = document.getElementById('posts');  

    const postDiv = document.createElement('div');  
    postDiv.className = 'post';  

    postDiv.innerHTML = `  
        <h2>${post.title}</h2>  
        <p>${post.content}</p>  
        ${post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : ''}  
        ${post.video ? `<video controls class="post-video"><source src="${post.video}" type="video/mp4">Your browser does not support the video tag.</video>` : ''}  
        <button class="edit-button" onclick='editPost("${post.title}")'>Edit</button>  
        <button class="delete-button" onclick='deletePost("${post.title}")'>Delete</button>  
    `;  

    postsDiv.appendChild(postDiv);  
}  

function deletePost(title) {  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];  
    const updatedPosts = posts.filter(post => post.title !== title);  
    localStorage.setItem('posts', JSON.stringify(updatedPosts));  
    location.reload(); // Reload the page to reflect changes  
}  

function editPost(title) {  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];  
    const postToEdit = posts.find(post => post.title === title);  

    if (postToEdit) {  
        document.getElementById('title').value = postToEdit.title;  
        document.getElementById('content').value = postToEdit.content;  
        document.getElementById('image').value = ''; // Clear file input  
        document.getElementById('video').value = ''; // Clear file input  
        
        // Remove the post from local storage before editing  
        deletePost(title);  
    }  
}