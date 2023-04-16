const API_URL = "https://jsonplaceholder.typicode.com/posts"
const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

let  inputNumber;
let dataComments;
const inputValue = document.getElementById('number')
const button = document.getElementById('button')
const wrapper = document.getElementById('wrapper')

button.addEventListener('click', ()=> {
    
    inputNumber = inputValue.value
    async function fetchPosts() {
        try {
            wrapper.innerHTML = '';
            if (inputNumber>100 || inputNumber<1){
                throw new SyntaxError("Число меньше или больше 100 ");
            }
            const response = await fetch(API_URL)
            const data = await response.json()
            wrapper.innerHTML += `
            <div class="wrp">
                <h2> Пост:</h2>
                <div>
                    <span>Title: ${data[inputNumber-1].title}</span> 
                    <span>Body: ${data[inputNumber-1].body}</span>
                    <button id="comment-btn"> Отримати коментар </button>
                </div>
        
            </div> `;
            document.getElementById('comment-btn').addEventListener('click', async () => {
                
                await fetchComments();
                dataComments.forEach(item => {
                    if (item.postId == inputNumber) {
                        
                        wrapper.innerHTML += `
                        <p class="user-mail"> mail: ${item.email} </p>
                        <p> комент: ${item.body} </p>
                        `;
                    }
                  });

                

            });
        } catch (e) {
            alert( e.message ); 
        }
    }
    fetchPosts()
})

async function fetchComments() {
    const response = await fetch(API_URL_COMMENTS);
    dataComments = await response.json();

}






