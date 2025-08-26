import React from "react";

function CategoryList() {
    const categories = [
        "Character Name",
        "Band Name",
        "Baby Name",
        "Rapper Name",
        "Fantasy Name",
        "Business Name",
        "Team Name",
        "Gaming Name",
    ];

    return (
        <section className="categories">
            <h2>Popular Categories</h2>
            <div className="grid">
                {categories.map((cat, i) => (
                    <div key={i} className="card">
                        {cat}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategoryList