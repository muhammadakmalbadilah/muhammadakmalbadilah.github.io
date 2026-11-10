import Reveal from "./Reveal"

export default function About() {
    return(
        <section id="about" className="border-t border-line">
            <div className="mx-auto max-w-3xl px-6 py-24">
            <Reveal>
                <h2 className="font-display text-3xl font-bold">About Me</h2>
                <div className="mt-6 space-y-4 text-lg leading-related text-muted">
                    <p>
                        I am a vocational high school graduate with a major in Software Engineering who has completed an internship as a Web Developer. I enjoy building websites because I'm fascinated by the process of turning ideas and requirements into usable applications from designing the user interface to developing the functionality. Currently, I am seeking a job opportunity as a Junior Web Developer or Full-Stack Developer to further develop my skills and gain professional experience.
                    </p>
                    <p>
                        I'm used to learning on my own, finding solutions when I encounter obstacles, and trying to understand how the technology I use works rather than just following tutorials. One experience I'm particularly proud of is my involvement in the development of the Stocks & Crypto Trading Recorder app and my role in developing the Broker Summary feature during my internship.
                    </p>
                </div>
            </Reveal>
            </div>
        </section>
    )
}