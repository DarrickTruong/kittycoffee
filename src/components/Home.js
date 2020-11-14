import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = (props) => {

    const kittiesAxios = () => {
        return Axios.get("https://aws.random.cat/meow");
    }

    const [kitty, setKitty] = useState(
        {
            one: "https://purr.objects-us-east-1.dream.io/i/GU8Gc.jpg",
            two: "https://purr.objects-us-east-1.dream.io/i/catiiidi.jpg",
            three: "https://purr.objects-us-east-1.dream.io/i/TcEeO.jpg",
            four: "https://purr.objects-us-east-1.dream.io/i/cute_kitty_by_moonbarkcd16.jpg"
        });
    ;


    const images = async () => {
        let object = {}
        for (let key in kitty) {
            await kittiesAxios()
                .then(response => {
                    
                    object[key] = response.data.file;
                    // console.log(object[key]);
                })
        }
        return object;
    }

    const getRandomKitties = async () => {
        let object = await images();
        console.log("waiting", object);
        setKitty(object);
    }

    const transformKitty = (e) => {
        e.target.classList.add("zoom");
    }

    const answer = (e) => {
        console.log(e.target.id);
        if (e.target.id === "triv_1") {
            e.target.innerHTML = "Answer: Cats have 230 bones, a whopping 24 more bones than humans."
        } else if (e.target.id === "triv_2") {
            e.target.innerHTML = "Cats duh! They can have as many as 100 different vocalizations while dogs only have 10."
        } else {
            e.target.innerHTML = "...playful! Similarly, a straight vibrating tail indicates that your cat is happy to see you. Lucky you!"
        }
        
    }

    const question = (e) => {
        if (e.target.id === "triv_1") {
            e.target.innerHTML = "How many more bones do cats have compared to humans?"
        } else if (e.target.id === "triv_2") {
            e.target.innerHTML = "Which animal has a more extensive vocabulary, cats or dogs?"
        } else {
            e.target.innerHTML = "Cats with a question mark-shaped tail are feeling...?"
        }
    }

    // useEffect(() => {
    //     console.log("effect", kitty);
    // }, [kitty])

    return (

        <div className="container-fluid fade-in">
            <main className="container">
            <h1 className="text-center">Welcome to The Kitty Coffee Shop</h1>
            <p className="text-center font-weight-bold font-italic">The online coffee store for coffee and cat lovers. </p>
            <div className="p-5 d-flex justify-content-around">
                <div className="col-sm-6 border rounded bg-light d-flex flex-column align-items-center justify-content-center">
                    <p className="w-50"><span id="meow">Meow,</span> here to shop for coffee goods? Awesome, but first, a quick smile at cute and silly kitties!</p>
                    <div>
                        <button className="btn btn-warning align-self-center" onClick={getRandomKitties}>More Kitties</button>
                        <a href={"/shop"}><button className="btn btn-info ml-4">Ready to shop</button></a>
                    </div>
                </div>

                <img id="randomKitty" className="rounded col-sm-6 fade-in" src={kitty["one"]} alt="kitty" />
            </div>
            </main>
            <h2 className="mt-5 pt-5 text-center"> Kitty Trivia</h2>
            <p className="text-center font-weight-bold font-italic">Test your cat knowledge!</p>
            <section id="trivia" className="mt-5 d-flex justify-content-around">
                
                <div className="col-sm-3 d-flex flex-column align-items-center">
                    <img onMouseOver={(e) => transformKitty(e)} src={kitty["two"]} alt="kitty"></img>
                    <p id="triv_1" onMouseOver={answer} onMouseLeave={question} className="mt-3 fade-in">How many more bones do cats have compared to humans?</p>
                </div>
                <div className="col-sm-3 d-flex flex-column align-items-center">
                    <img onMouseOver={transformKitty}src={kitty["three"]} alt="kitty"></img>
                    <p id="triv_2" onMouseOver={answer} onMouseLeave={question} className="mt-3">Which animal has a bigger vocabulary, cats or dogs?</p>
                </div>
                <div className="col-sm-3 d-flex flex-column align-items-center">
                    <img onMouseOver={transformKitty}src={kitty["four"]} alt="kitty"></img>
                    <p id="triv_3" onMouseOver={answer} onMouseLeave={question} className="mt-3">Cats with a question mark-shaped tail are feeling...?</p>
                </div>
            </section>
        </div>

    );
};

export default Home;