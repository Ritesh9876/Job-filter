const  data=[
    {
      id: 1,
      company: "Photosnap",
     logo: "./images/photosnap.svg",
     new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: []
    },
    {
      id: 2,
      company: "Manage",
      logo: "./images/manage.svg",
     new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"]
    },
    {
      id: 3,
      company: "Account",
     logo: "./images/account.svg",
     new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"]
    },
    {
      id: 4,
      company: "MyHome",
     logo: "./images/myhome.svg",
     new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: []
    },
    {
      id: 5,
      company: "Loop Studios",
     logo: "./images/loop-studios.svg",
     new: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["Ruby", "Sass"]
    },
    {
      id: 6,
      company: "FaceIt",
     logo: "./images/faceit.svg",
     new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"]
    },
    {
      id: 7,
      company: "Shortly",
     logo: "./images/shortly.svg",
     new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"]
    },
    {
      id: 8,
      company: "Insure",
     logo: "./images/insure.svg",
     new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"]
    },
    {
      id: 9,
      company: "Eyecam Co.",
     logo: "./images/eyecam-co.svg",
     new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"]
    },
    {
      id: 10,
      company: "The Air Filter Company",
     logo: "./images/the-air-filter-company.svg",
     new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"]
    }
  ]


// create content of comapny
function CompanyContent(obj){
    //total comapnay card
    const Info=document.createElement("div");
    Info.classList.add("company");

    //header
    const header=document.createElement("div");
header.classList.add("head");

// header-title
const CompanyName=document.createElement("p");
CompanyName.classList.add("CompanyName");
CompanyName.innerHTML=obj.company;
header.appendChild(CompanyName);

if(obj.new){
  const New=document.createElement("p");
New.classList.add("new");
New.innerHTML='NEW!';
header.appendChild(New);
}

if(obj.featured){
  const featured=document.createElement("p");
featured.classList.add("featured");
featured.innerHTML='FEATURED';
header.appendChild(featured);
}

Info.appendChild(header);

///Position////
const position=document.createElement("div");
position.classList.add("position");
const para=document.createElement("p");
para.innerHTML=obj.position;
position.appendChild(para);
Info.appendChild(position);

///details///
const details=document.createElement("div");
details.classList.add("details");

const postAt=document.createElement("p");
postAt.classList.add("postAt");
postAt.innerHTML=obj.postedAt;
details.appendChild(postAt);

const contract=document.createElement("p");
contract.classList.add("contract");
contract.innerHTML=obj.contract;
details.appendChild(contract);

const location=document.createElement("p");
location.classList.add("location");
location.innerHTML=obj.location;
details.appendChild(location);

Info.appendChild(details);

return Info;
}

// logo Maker
function logoMaker(obj){
  const logo=document.createElement("div");
  logo.classList.add("logo");
  const img=document.createElement("img");
  img.setAttribute("src",obj.logo);
  img.setAttribute("alt","manage");
  logo.appendChild(img);
  return logo;
}

// Skills requiured
function skills(obj){
  const Allskills=document.createElement("div");
Allskills.classList.add("Allskills");

const langLength=obj["languages"].length ;
const toolLength=obj["tools"].length;

for(let i=0;i<(langLength + toolLength);i++){
  const para=document.createElement("p");
  para.classList.add("skill");
  
  if(i<langLength){
    para.innerHTML=obj["languages"][i]; 
    Allskills.appendChild(para);
  }else{
    para.innerHTML=obj["tools"][i-langLength];
    Allskills.appendChild(para);
  }

}

const role=document.createElement("p");
role.classList.add("skill");
role.innerHTML=obj.role;
Allskills.appendChild(role);

const level=document.createElement("p");
level.classList.add("skill");
level.innerHTML=obj.level;
Allskills.appendChild(level);
return Allskills;
}


// CREATE ONE CARD FUNCTION
function createJob(obj){
    const content=document.querySelector(".content");
    //card-content
const cardContent=document.createElement("div");
cardContent.classList.add("cardContent");

//logo
const CompanyLogo=logoMaker(obj);

//Info
const ComapanyInfo=CompanyContent(obj);

//Skills
const CompanySkills=skills(obj);

// add all to Cardcontent
cardContent.appendChild(CompanyLogo);
cardContent.appendChild(ComapanyInfo);
cardContent.appendChild(CompanySkills);

// add to content 
content.appendChild(cardContent);
}

 ///// Making all comapany cards
 for(let k=0;k<data.length;k++){
  createJob(data[k]);
}

//////////////Module////////////
 var Filtering=(function (){
// global array of lister
let listerArray=[];
// filter adder function  add filters to filterAdded
function filterAdder(AllText,text){
  if(AllText.indexOf(text)===-1){
    const filterDiv=document.createElement("div");
    filterDiv.classList.add("filterDiv");
    const filterTag=document.createElement("p");
  filterTag.classList.add("filterTag");
  filterTag.innerHTML=text;
  filterDiv.appendChild(filterTag)
  const span=document.createElement("span");
  span.innerHTML='<i class="fas fa-times"></i>';
  filterDiv.appendChild(span);
  const filterAdded=document.querySelector(".filterAdded");
  filterAdded.appendChild(filterDiv);
  }
}
// lister
function  lister(AllText){
  let skillOnecom=[];
for(let j=0;j<data.length;j++){
  const langLength=data[j]["languages"].length;
for(let x=0;x<langLength;x++){
  skillOnecom.push(data[j]["languages"][x]);
}
for(let y=0;y<data[j]["tools"].length;y++){
  skillOnecom.push(data[j]["tools"][y]);
}

let checker=0;
for(let a=0;a<AllText.length;a++){
if(skillOnecom.indexOf(AllText[a])===-1){
checker=0;
a=AllText.length;
}else{checker=1;}
}
if(checker===1){
  const allCards=document.querySelectorAll(".cardContent");
  listerArray.push(allCards[j]);
}
skillOnecom=[];
}
}
// Displayer Blocker
function BlockDisplayer(){
  const allCards=document.querySelectorAll(".cardContent");
  for(let i=0;i<allCards.length;i++){
    if(listerArray.indexOf(allCards[i])!==-1){
      allCards[i].style.display="flex"
    }else{
      allCards[i].style.display="none";
    }
  }
listerArray=[];
}

//filter
 function Filter(text){
   const filtersPresent=document.querySelectorAll(".filterAdded .filterTag");
let AllText=[];
for(let i=0;i<filtersPresent.length;i++){
  AllText.push(filtersPresent[i].innerHTML);
}


filterAdder(AllText,text);

if(AllText.indexOf(text)===-1){
  AllText.push(text);
}

lister(AllText);
BlockDisplayer();
filterRemover();

 }
function AfterFilterRemove(){
  const filtersPresent=document.querySelectorAll(".filterAdded .filterTag");
  let AllText=[];
  for(let i=0;i<filtersPresent.length;i++){
    AllText.push(filtersPresent[i].innerHTML);
  }

  lister(AllText);
  BlockDisplayer();
  if(AllText.length===0){
    const allCards=document.querySelectorAll(".cardContent");
    for(let i=0;i<allCards.length;i++){
        allCards[i].style.display="flex";
    }
  }else{ filterRemover(); }
 
  
}
// filter Remover funtion
   function filterRemover(){
     const RemoveThis=document.querySelectorAll(".filterDiv span");
     for(let i=0;i<RemoveThis.length;i++){
       RemoveThis[i].addEventListener("click",function(e){
         const divTag=e.target.parentElement.parentElement;
         divTag.remove();
         AfterFilterRemove();
       });
   }
   const ClearAll=document.querySelector(".clearAll a");
   ClearAll.addEventListener("click",function(e){
    const divTag=document.querySelectorAll(".filterDiv");
    for(let j=0;j<divTag.length;j++){
      divTag[j].remove();
    }
    const allCards=document.querySelectorAll(".cardContent");
for(let k=0;k<allCards.length;k++){
  allCards[k].style.display="flex";
}
   
   });
 }

 return {Filter};
}());



// Caller functon for filters

  const options=document.querySelectorAll(".filter-options .option");
  console.log("narayan");
for(let i=0;i<options.length;i++){
  options[i].addEventListener("click",function(e){
    Filtering.Filter(e.target.innerHTML);
  });
}

// clear all filters 
