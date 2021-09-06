// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))


const base_url = 'https://jsonplaceholder.typicode.com'

const container = document.querySelector('.cards')
const getbase = document.querySelector('.getphoto')

const getcomments = document.querySelector('.getcomments')
// const comments = document.querySelector('.comments')

const getposts = document.querySelector('.getposts')
// const posts = document.querySelector('.posts')

const getusers = document.querySelector('.getusers')


const getalbums = document.querySelector('.getalbums')



function fetchData(route, cb){
    fetch(`${base_url}/${route}`)
    .then(res => res.json())
    .then(r =>{
        cb(r)
    })
}

getbase.addEventListener('click', e =>{
    e.preventDefault();

    fetchData('photos', res =>{
        console.log(res);

        const card = res.map(item =>{
            return `
                <div class="card">
                    <div class="photocontent">
                        <div class="image" >
                            <img src = ${item.url} >
                        </div>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getusers.addEventListener('click', e =>{
    e.preventDefault()

    fetchData('users', res =>{
        console.log(res);

        const card = res.slice(0, 10).map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h4>${item.name}</h4>
                        <p><b>Username:</b>${item.username}</p>
                        <p><b>Email:</b>${item.email}</p>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getcomments.addEventListener('click', e =>{
    e.preventDefault()

    fetchData('comments', res =>{
        console.log(res);

        const card = res.slice(0, 15).map(item =>{
            return `
            <div class="card">
                <div class="card_content">
                    <h4>Name:${item.name}</h4>
                    <p><b>Email:</b>${item.email}</p>
                    <p><b>Comment:</b>${item.body}</p>
                </div>
            </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getposts.addEventListener('click', e =>{
    e.preventDefault()

    fetchData('posts', res =>{
        console.log(res);

        const card = res.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h4>${item.title}</h4>
                        <p><b>Comment:</b>${item.body}</p>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})

getalbums.addEventListener('click', e =>{
    e.preventDefault()

    fetchData('albums', res =>{
        console.log(res);

        const card = res.map(item =>{
            return `
                <div class="card">
                    <div class="card_content">
                        <h4>${item.title}</h4>
                        <p><b>Completed:</b>${item.completed}</p>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = card
    })
})







