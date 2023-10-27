(function(){
    const getAddParent = document.querySelector(".add-parent");
    const getTree = document.querySelector(".tree");

    var htmlCode = `
    <div class="node-content">
        <div class="inner-content">
            <button class="hide-children"> - </button>
            <input type="checkbox">
            <div class="title-parent">Rodolfoo</div>
        </div>
        <button class="add-children"> + </button>
    </div>
    <div class="children-section">
        <div class="node-content">
            <div class="inner-content">
                <button class="hide-children"> - </button>
                <span>|</span>
                <input type="checkbox">
                <div class="title-parent">Rodolfoo</div>
            </div>
            <button class="add-children"> + </button>
        </div>
    </div>
`;
    getAddParent.addEventListener("click",()=>{
        getTree.insertAdjacentHTML('beforeend', htmlCode);
    })

})()