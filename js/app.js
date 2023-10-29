(function(){
    const getAddParent = document.querySelectorAll(".add-main-parent");
    const getTree = document.querySelector(".tree");
    let randomId = 0;
    let parentName = '';
    let counter = 0;

    getAddParent.forEach(function(parentButton){
        parentButton.addEventListener("click",()=>{
            parentName = prompt('Write name of parent')
            randomId = generateRandomId();
            createParent()
        })
    })

    function createParent(){
       
        var parentCode = `
        <div id="${randomId}" class="parent-section" >
        <div class="node-content">
            <div class="inner-content">
                <button class="hide-childrenButton"> - </button>
                <input type="checkbox">
                <div class="title-parent">${parentName}</div>
            </div>
                <button class="add-children"> + </button>
        </div>  
        </div>`;

        getTree.insertAdjacentHTML('beforeend', parentCode);
        triggerChildrenEvent()
    }

    
    
    function createChildren(parentId){
        const parent = document.getElementById(parentId)
        console.log(parentId)
        console.log(parent)
        childrenName = prompt('Write your children name')
        counterChildren()
            
        var childrenCode = `
            <div id="${randomId}${counter}" 
            class="children-section">
            <div class="node-content">
                <div class="inner-content">
                    <button class="hide-childrenButton"> - </button>
                    <span>|</span>
                    <input type="checkbox">
                    <div class="title-parent">${childrenName}</div>
                </div>
                    <button class="add-children"> + </button>
                </div>
            </div>`;

            parent.insertAdjacentHTML('beforeend', childrenCode);
            triggerChildrenEvent()
    }

    function triggerChildrenEvent(){
        const getAllChildrenButton = document.querySelectorAll(".add-children")

        getAllChildrenButton.forEach((children)=>{
            children.addEventListener("click",()=>{
                console.log(children.parentElement.parentNode.id)
                parentId = parseInt(children.parentElement.parentNode.id)
                createChildren(parentId)
            })
        })

    }

    function counterChildren(){
        counter++
    }

    function generateRandomId(){  
       return Math.floor(Math.random() * 100)
    }
})()