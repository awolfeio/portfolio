import "../scss/packages/splitting.css";
import "../scss/packages/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';

export default function splitText() {

    Splitting({
        /* target: String selector, Element, Array of Elements, or NodeList */
        target: "[data-splitting], h1, h2",
        /* by: String of the plugin name */
        by: "chars",
        /* key: Optional String to prefix the CSS variables */
        key: null
    });


    if ($(".splitting-rows")[0]) {
        Splitting({
            target: ".splitting-rows",
            by: "lines",
        });
        document.querySelectorAll('.splitting.lines .word').forEach(word => {
            word.addEventListener("animationend", function () {
                $(this).contents().unwrap();
            });
        })
    }

}

