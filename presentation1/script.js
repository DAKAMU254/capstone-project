// // // Initialize posts array  
// // let posts = JSON.parse(localStorage.getItem('posts')) || [];  

// // // DOM Elements  
// // const newPostBtn = document.getElementById('newPostBtn');  
// // const postForm = document.getElementById('postForm');  
// // const postTitle = document.getElementById('postTitle');  
// // const postContent = document.getElementById('postContent');  
// // const submitPostBtn = document.getElementById('submitPostBtn');  
// // const cancelPostBtn = document.getElementById('cancelPostBtn');  
// // const postsContainer = document.getElementById('posts');  

// // // Functions  
// // function displayPosts() {  
// //     postsContainer.innerHTML = '';  
// //     posts.forEach((post, index) => {  
// //         const postDiv = document.createElement('div');  
// //         postDiv.classList.add('post');  

// //         postDiv.innerHTML = `  
// //             <h3>${post.title}</h3>  
// //             <p>${post.content}</p>  
// //             <button class="edit-btn" onclick="editPost(${index})">Edit</button>  
// //             <button class="delete-btn" onclick="deletePost(${index})">Delete</button>  
// //         `;  
// //         postsContainer.appendChild(postDiv);  
// //     });  
// // }  

// // function addPost() {  
// //     const title = postTitle.value;  
// //     const content = postContent.value;  

// //     if (title && content) {  
// //         posts.push({ title, content });  
// //         localStorage.setItem('posts', JSON.stringify(posts));  
// //         postTitle.value = '';  
// //         postContent.value = '';  
// //         postForm.classList.add('hidden');  
// //         displayPosts();  
// //     }  
// // }  

// // function editPost(index) {  
// //     postTitle.value = posts[index].title;  
// //     postContent.value = posts[index].content;  
// //     postForm.classList.remove('hidden');  

// //     submitPostBtn.onclick = function() {  
// //         posts[index] = { title: postTitle.value, content: postContent.value };  
// //         localStorage.setItem('posts', JSON.stringify(posts));  
// //         postTitle.value = '';  
// //         postContent.value = '';  
// //         postForm.classList.add('hidden');  
// //         displayPosts();  
// //     }  
// // }  

// // function deletePost(index) {  
// //     posts.splice(index, 1);  
// //     localStorage.setItem('posts', JSON.stringify(posts));  
// //     displayPosts();  
// // }  

// // // Event Listeners  
// // newPostBtn.onclick = function() {  
// //     postForm.classList.remove('hidden');  
// // };  

// // cancelPostBtn.onclick = function() {  
// //     postTitle.value = '';  
// //     postContent.value = '';  
// //     postForm.classList.add('hidden');  
// // };  

// // // Submit post event  
// // submitPostBtn.onclick = addPost;  

// // // Display posts on load  
// // displayPosts();
// // Initialize posts from local storage or set an empty array  
// let posts = JSON.parse(localStorage.getItem('posts')) || [];  

// // DOM Elements  
// const newPostBtn = document.getElementById('newPostBtn');  
// const postForm = document.getElementById('postForm');  
// const postTitle = document.getElementById('postTitle');  
// const postContent = document.getElementById('postContent');  
// const submitPostBtn = document.getElementById('submitPostBtn');  
// const cancelPostBtn = document.getElementById('cancelPostBtn');  
// const postsContainer = document.getElementById('posts');  

// // Display all posts  
// function displayPosts() {  
//     postsContainer.innerHTML = posts.map((post, index) => `  
//         <div class="post">  
//             <h3>${post.title}</h3>  
//             <p>${post.content}</p>  
//             <button class="edit-btn" onclick="editPost(${index})">Edit</button>  
//             <button class="delete-btn" onclick="deletePost(${index})">Delete</button>  
//         </div>  
//     `).join('');  
// }  

// // Add or update a post  
// function savePost(isEditing = false, index = null) {  
//     const title = postTitle.value.trim();  
//     const content = postContent.value.trim();  
    
//     if (title && content) {  
//         if (isEditing && index !== null) {  
//             posts[index] = { title, content }; // Update existing post  
//         } else {  
//             posts.push({ title, content }); // Add new post  
//         }  
//         localStorage.setItem('posts', JSON.stringify(posts));  
//         clearForm();  
//         displayPosts();  
//     }  
// }  

// // Clear the post form  
// function clearForm() {  
//     postTitle.value = '';  
//     postContent.value = '';  
//     postForm.classList.add('hidden');  
// }  

// // Edit a post  
// function editPost(index) {  
//     postTitle.value = posts[index].title;  
//     postContent.value = posts[index].content;  
//     postForm.classList.remove('hidden');  
//     submitPostBtn.onclick = () => savePost(true, index); // Set to edit mode  
// }  

// // Delete a post  
// function deletePost(index) {  
//     posts.splice(index, 1);  
//     localStorage.setItem('posts', JSON.stringify(posts));  
//     displayPosts();  
// }  

// // Event Listeners  
// newPostBtn.onclick = () => {  
//     postForm.classList.remove('hidden');  
//     clearForm();  
// };  
// cancelPostBtn.onclick = clearForm;  
// submitPostBtn.onclick = () => savePost(); // Set to add mode  

// // Initial display of posts  
// displayPosts();