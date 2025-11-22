let countries = [
    {
        country: "japan",
        pic: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8fDA%3D",
        bio: "Loves exploring traditional Japanese temples, cherry blossoms, and peaceful cultural spots.",
    },
    {
        country: "brazil",
        pic: "https://images.unsplash.com/photo-1551620832-e2af54f6f0b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhemlsfGVufDB8fDB8fHww",
        bio: "Lives near vibrant beaches and enjoys Brazil’s tropical lifestyle and natural beauty.",
    },
    {
        country: "italy",
        pic: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHx8MHx8fDA%3D",
        bio: "Admirer of Italy’s historic streets, architecture, and timeless European charm.",
    },
    {
        country: "canada",
        pic: "https://images.unsplash.com/photo-1511489731872-324afc650052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbmFkYXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "Adventure seeker who enjoys snowy landscapes, forests, and serene Canadian scenery.",
    },
    {
        country: "egypt",
        pic: "https://images.unsplash.com/photo-1559738933-d69ac3ff674b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVneXB0fGVufDB8fDB8fHww",
        bio: "Deeply connected with Egypt’s ancient history, desert landscapes, and iconic monuments.",
    },
    {
        country: "australia",
        pic: "https://images.unsplash.com/photo-1512036849132-48508f294900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "Nature lover fascinated by Australia’s unique wildlife, open landscapes, and coastal views.",
    },
    {
        country: "france",
        pic: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhbmNlfGVufDB8fDB8fHww",
        bio: "Inspired by French cityscapes, elegant streets, and classic European atmosphere.",
    }
];

function showCountries(arr){
    arr.forEach(function(user){
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = user.pic;
        image.classList.add("bg-img");

        const blurred = document.createElement("div");
        blurred.style.backgroundImage = `url(${user.pic})`;
        blurred.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.country;

        const para = document.createElement("p");
        para.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(image);
        card.appendChild(blurred);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);
    });
}

showCountries(countries);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function(){
   let newCountries = countries.filter((user)=>{
    return user.country.startsWith(inp.value);
   });
   document.querySelector(".cards").innerHTML = "";
   showCountries(newCountries);
});