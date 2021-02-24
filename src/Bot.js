let myInit = {
    method: "GET",
    headers: {
        "Content-Type": "appliation/json",
    },
    mode: "cors",
    cache: "default",
};

let myReq = new Request("http://localhost:8000/intents", myInit);

function myFunction() {
    fetch(myReq)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            // document.getElementById("demo").innerHTML;
            console.log(data);
            var h = document.createElement("BUTTON");
            var t = document.createTextNode(data[1].tag);
            h.appendChild(t);
            document.body.appendChild(h);
            // ------------------------ To create link
            var a = document.createElement("a");
            // Create the text node for anchor element.
            var link = document.createTextNode(data[1].tag);
            // Append the text node to anchor element.
            a.appendChild(link);
            // Set the href property.
            a.href = data[1].link;
            // Append the anchor element to the body.
            document.body.appendChild(a);
        });
}

export default myFunction()