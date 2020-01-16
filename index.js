const panelData = [
    {
        title: "First Panel",
        content: "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne.",
        subcontent: "this is subcontent"
    },
    {
        title: "Second Panel",
        content: "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
        subcontent: "this is subcontent"
    },
    {
        title: "Third Panel",
        content: "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital.",
        subcontent: "this is subcontent"
    },
    {
        title: "Fourth Panel",
        content: "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die.",
        subcontent: "this is subcontent"
    }
    ]
 
 
 function createBox(title,content,subContent){
     //create element
    const centerBox = document.createElement('div');
    const boxTitle = document.createElement('h2');
    const innerBox = document.createElement('div');
    const contentInfo = document.createElement('p');
    const subContentInfo = document.createElement('p');

     //set up structure
     centerBox.append(boxTitle);
     centerBox.append(innerBox);
     innerBox.append(contentInfo);
     innerBox.append(subContentInfo);


     //add classes
     centerBox.classList.add('center-box');
     boxTitle.classList.add('box-title');
     innerBox.classList.add('inner-box');
     subContentInfo.classList.add('sub-content');

     //set text content
    boxTitle.textContent = title;
    contentInfo.textContent = content;
    subContentInfo.textContent = subContent;

    
boxTitle.addEventListener('click', () => {
    boxTitle.style.color = 'pink';    

})

subContentInfo.addEventListener('click', () => {
    subContentInfo.style.fontSize = '7rem';    

})

     //

     return centerBox;
 }

 const container = document.querySelector('.container');
 panelData.forEach(data => {
     container.append(createBox(data.title, data.content, data.subContent));
 })


