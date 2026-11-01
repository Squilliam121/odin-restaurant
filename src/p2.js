const content = document.querySelector("#content")

function page2Load(){
    content.innerHTML=`<h1>Menu</h1>
        <div id="menucontent">
            <h2>Burgers</h2>
            <div class="gridbox">
                <div class="griditem">
                    <div class="colourstrip burger"></div>
                    <img class="menuimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F067%2F446%2F972%2Flarge_2x%2Fa-delicious-double-cheeseburger-featuring-melted-cheese-fresh-lettuce-tomato-and-golden-fries-with-a-side-of-ketchup-free-photo.jpeg&f=1&nofb=1&ipt=1fa7c7865961c823ef4d914ff581189390e728d98bba26c4baf08f28cd87f36b&ipo=images">
                    <h3>Cheeseburger</h3>
                    <h4>$8.90</h4>
                </div>

                <div class="griditem">
                    <div class="colourstrip burger"></div>
                    <img class="menuimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2FBq1rCo4o-KkIWueSQBfA8dlY9BU%3D%2F750x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__06__20130611-burger-week-grilled-burger-variations-13-d5217d9167b54ef5be8f3e4a57442813.jpg&f=1&nofb=1&ipt=83adba8a47c48df0d9d7e4a73d90fb0bd8e7ffa796135d3c059029e91f10eb4c&ipo=images">
                    <h3>Hail Mary</h3>
                    <h4>$13.50</h4>
                </div>

                <div class="griditem">
                    <div class="colourstrip burger"></div>
                    <img class="menuimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2FzZLQZ3IvBpcq-NfahgHLZYwvbwg%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F20231117-SEA-NashvilleHotChicken-VictorProtasio-01-83231777673a434fa85b8f0ef524b4c9.jpg&f=1&nofb=1&ipt=e434f77afe4c95b447b7b5898e67f5964c4d86eac0ee3d44a0f599e4b22f84c4&ipo=images">
                    <h3>Cockadoodle</h3>
                    <h4>$11.50</h4>
                </div>

                <div class="griditem">
                    <div class="colourstrip burger"></div>
                    <img class="menuimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finsanelygoodrecipes.com%2Fwp-content%2Fuploads%2F2024%2F08%2FMushroom-Swiss-Burger-Featured-800x530.jpg&f=1&nofb=1&ipt=fc69ad66482baa529c6eaea7023ee2a188bac0cd725806e5d455f351aca6e4aa&ipo=images">
                    <h3>Ranchhouse</h3>
                    <h4>$9.90</h4>
                </div>
            </div>

        </div>`
}

export {page2Load}