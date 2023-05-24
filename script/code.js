let about = document.querySelector('section#about .row:last-child')
let aboutContent = [
    "This is a detailed description about who I am.",

    "Here you will get to know me better and what is my schooling history, education and my progress of becomming a Web Developer",

    "Hi my name is Mujahid Fisher. I was born on the 22 September 2004. My current residency is in Woodstock. If you need to contact me my personal cell-number is 069 966 6173. I speak fluent English and a fare amount of Afrikaans. I enjoy gaming and sports. I also like arts and crafts in my spare time. And during my schooling career, I was an Athlete and in a rugby club."
]

// loop through the content
aboutContent.forEach( (content, i)=>{
    about.innerHTML += `
    <p class='lead'>${content}</p>
    `
} )

// Education
let education = [
    {
        id: 1,
        year: 2022,
        description: 'Grade 12 matric Completion',
        place: 'Trafalgar High School',
        type: 'NSC Certificate',
        certificate: 'Batchelors'
    },
    {
        id: 2,
        year: 2023,
        description: 'Current place of Education.',
        place: 'LifeChoices Academy',
        type: 'certificate',
        certificate: 'N/A'
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
