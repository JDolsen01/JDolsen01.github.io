
//About
document.getElementById("about-link").addEventListener("mouseover", ()=>{
    document.getElementById("about-cover").classList.add('visible');
});
document.getElementById("about-link").addEventListener("mouseout", ()=>{
    document.getElementById("about-cover").classList.remove('visible');
});



//Experience
document.getElementById("experience-link").addEventListener("mouseover", ()=>{
    document.getElementById("experience-cover").classList.add("visible");
});
document.getElementById("experience-link").addEventListener("mouseout", ()=>{
    document.getElementById("experience-cover").classList.remove("visible");
});



//School
document.getElementById("school-link").addEventListener("mouseover", ()=>{
    document.getElementById("school-cover").classList.add("visible");
});
document.getElementById("school-link").addEventListener("mouseout", ()=>{
    document.getElementById("school-cover").classList.remove("visible");
});



//Projects
document.getElementById("projects-link").addEventListener("mouseover", ()=>{
    document.getElementById("projects-cover").classList.add("visible");
});
document.getElementById("projects-link").addEventListener("mouseout", ()=>{
    document.getElementById("projects-cover").classList.remove("visible");
})