//your JS code here. If required.
const picture=[
	{
		src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" text=" Explore the world"
	}

	{
		src="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" text="Wild Forest";
	}
  {
	src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" text="City on Winter";
  }

   {
	 src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"text=" Mountain Cloud";
   }

  {
	src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" text="Sunny Beach";
   }

];

const container=document.querySelector(".container");

const newdiv=document.createElement("div");
newdiv.foreach(panel)
newdiv.classList.add(panel);
newdiv.innerhtml=`<p class="img-text">${item.text}</p>`;
newdiv.id=`panel-${index+1}`;
newdiv.style.backgroundImage:`url ${itom.img}`;
container.appendChild(newdiv);

//do the pannel Active

const allpanael=documnet.querySelector(".panel");
allpanael.classList.add(active);
allpanaelforEach(panel=>{
	allpanael.addEventListner("click"()=>{
		removeActiveClasses();
		panel.classList.add("active");
		
		
	});
});
function removeActiveClasses(){
	allpanaelforEach(panel=>panel.classList.remove("active"));
}





