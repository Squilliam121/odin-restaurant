const content = document.querySelector("#content")

function page3Load(){
    content.innerHTML = `<h1>About</h1>
        <h2>Maycomb Palisade</h2>
        <div id="altbg">
            <p>Maycomb Palisade is the first 3-star michelin restaurant in Central Alabama. Here, we don't just cook meals for fuel, we create artwork that connects not just emotionally, but physically.</p>
        </div>
        <img id="kitchen" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcommercialkitchens.co.uk%2Fwp-content%2Fuploads%2F2020%2F08%2Fempty_kitchen_wide_1.jpg&f=1&nofb=1&ipt=28d408780680d01551fc0054bbc075ea0a4840a5c452df33f003391aacce08fd&ipo=images">`
}

export {page3Load}