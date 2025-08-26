import React from "react";

function OtherGenerators() {
    const tools = [
        "Plot Generator",
        "Poem Generator",
        "Song Lyrics Generator",
        "Letter Generator",
        "Dating Profile Generator",
    ];

    return (
        <section className="others">
            <h2>Our Other Generators</h2>
            <div className="grid small">
                {tools.map((tool, i) => (
                    <div key={i} className="small-card">
                        {tool}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OtherGenerators