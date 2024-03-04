import axios from 'axios';

function Contact() {

    let baseUrl = "https://wash-house.azurewebsites.net";

    function butonclick(e) {
        e.preventDefault();
        axios.post(`${baseUrl}`)
    }




    return (
        <div>
            <button className="the-buttons" onClick={butonclick}>
                click to api
            </button>
        </div>
    )
}

export default Contact