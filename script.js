/* =====================================================
   DOAA ANALYTICS
   WEBSITE ENGINE
===================================================== */


/* =====================================================
   APPLY COLORS
===================================================== */

function applyColors() {

    const root =
        document.documentElement;

    Object.entries(SITE.colors).forEach(
        ([key, value]) => {

            root.style.setProperty(
                `--${key}`,
                value
            );

        }
    );

}


/* =====================================================
   WORK OVERVIEW
===================================================== */

function renderWork() {

    const container =
        document.getElementById("workOverview");

    if (!container) return;

    container.innerHTML =
        SITE.work.map(
            item => `

            <article class="work-card">

                <div class="work-icon">
                    ${item.icon}
                </div>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

                <a href="${item.link}">
                    Explore →
                </a>

            </article>

        `
        ).join("");

}


/* =====================================================
   DATA ANALYTICS PROJECTS
===================================================== */

function renderAnalyticsProjects() {

    const container =
        document.getElementById("analyticsProjects");

    if (!container) return;

    container.innerHTML =
        SITE.analyticsProjects.map(
            project => `

            <article class="project-card">


                ${
                    project.image
                    ? `
                    <div class="project-image">

                        <img
                            src="${project.image}"
                            alt="${project.title}"
                            loading="lazy">

                    </div>
                    `
                    : ""
                }


                ${
                    project.video
                    ? `
                    <div class="project-video">

                        <video
                            controls
                            preload="metadata"
                            ${
                                project.image
                                ? `poster="${project.image}"`
                                : ""
                            }>

                            <source
                                src="${project.video}"
                                type="video/mp4">

                            Your browser does not support
                            the video tag.

                        </video>

                    </div>
                    `
                    : ""
                }


                <div class="project-content">


                    <span class="project-category">
                        ${project.category}
                    </span>


                    <h3>
                        ${project.title}
                    </h3>


                    <p>
                        ${project.description}
                    </p>


                    ${
                        project.tags?.length
                        ? `
                        <div class="tags">

                            ${project.tags.map(
                                tag => `
                                <span>
                                    ${tag}
                                </span>
                                `
                            ).join("")}

                        </div>
                        `
                        : ""
                    }


                    <div class="project-buttons">


                        ${
                            project.projectLink
                            ? `
                            <a
                                href="${project.projectLink}"
                                class="project-link"
                                target="_blank"
                                rel="noopener noreferrer">

                                View Project →

                            </a>
                            `
                            : ""
                        }


                        ${
                            project.githubLink
                            ? `
                            <a
                                href="${project.githubLink}"
                                class="github-link"
                                target="_blank"
                                rel="noopener noreferrer">

                                GitHub ↗

                            </a>
                            `
                            : ""
                        }


                    </div>

                </div>

            </article>

        `
        ).join("");

}


/* =====================================================
   AI PROJECTS
===================================================== */

function renderAIProjects() {

    const container =
        document.getElementById("aiProjects");

    if (!container) return;

    container.innerHTML =
        SITE.aiProjects.map(
            project => `

            <article class="technology-card">


                <div class="technology-icon">
                    ${project.icon}
                </div>


                <h3>
                    ${project.title}
                </h3>


                <p>
                    ${project.description}
                </p>


                ${
                    project.link
                    ? `
                    <a
                        href="${project.link}"
                        class="ai-project-link">

                        Explore →

                    </a>
                    `
                    : ""
                }


            </article>

        `
        ).join("");

}


/* =====================================================
   RESEARCH
===================================================== */

function renderResearch() {

    const container =
        document.getElementById("researchProjects");

    if (!container) return;


    container.innerHTML =
        SITE.research.map(
            item => `

            <article class="research-card">


                <!-- RESEARCH IMAGE -->

                ${
                    item.image
                    ? `
                    <div class="research-image">

                        <img
                            src="${item.image}"
                            alt="${item.title}"
                            loading="lazy">

                    </div>
                    `
                    : ""
                }


                <!-- RESEARCH CONTENT -->

                <div class="research-card-content">


                    <!-- TOP INFORMATION -->

                    <div class="research-card-top">


                        ${
                            item.type
                            ? `
                            <span class="research-type">
                                ${item.type}
                            </span>
                            `
                            : ""
                        }


                        ${
                            item.year
                            ? `
                            <span class="research-year">
                                ${item.year}
                            </span>
                            `
                            : ""
                        }


                    </div>


                    <!-- CATEGORY -->

                    ${
                        item.category
                        ? `
                        <span class="research-category">
                            ${item.category}
                        </span>
                        `
                        : ""
                    }


                    <!-- TITLE -->

                    <h3>
                        ${item.title}
                    </h3>


                    <!-- DESCRIPTION -->

                    <p>
                        ${item.description}
                    </p>


                    <!-- AUTHOR -->

                    ${
                        item.author
                        ? `
                        <div class="research-meta">

                            <span>
                                By ${item.author}
                            </span>

                        </div>
                        `
                        : ""
                    }


                    <!-- TAGS -->

                    ${
                        item.tags?.length
                        ? `
                        <div class="tags">

                            ${item.tags.map(
                                tag => `
                                <span>
                                    ${tag}
                                </span>
                                `
                            ).join("")}

                        </div>
                        `
                        : ""
                    }


                    <!-- LINK -->

                    ${
                        item.link &&
                        item.link !== "#"
                        ? `
                        <a
                            href="${item.link}"
                            class="research-link"

                            ${
                                item.link.startsWith("http")
                                ? `
                                target="_blank"
                                rel="noopener noreferrer"
                                `
                                : ""
                            }>

                            ${
                                item.type === "Original Research"
                                ? "Read Full Research →"
                                : "Read Published Research →"
                            }

                        </a>
                        `
                        : ""
                    }


                </div>


            </article>

        `
        ).join("");

}


/* =====================================================
   SERVICES
===================================================== */

function renderServices() {

    const container =
        document.getElementById("servicesList");

    if (!container) return;

    container.innerHTML =
        SITE.services.map(
            service => `

            <article class="service-card">


                <div class="service-icon">
                    ${service.icon}
                </div>


                <h3>
                    ${service.title}
                </h3>


                <ul>

                    ${service.items.map(
                        item => `

                        <li>
                            ${item}
                        </li>

                    `).join("")}

                </ul>


            </article>

        `
        ).join("");

}


/* =====================================================
   SOCIAL LINKS
===================================================== */

function renderSocialLinks() {

    const container =
        document.getElementById("socialLinks");

    if (!container) return;

    container.innerHTML =
        SITE.social.map(
            social => `

            <a
                href="${social.url}"
                target="_blank"
                rel="noopener noreferrer">

                ${social.name}

            </a>

        `
        ).join("");

}


/* =====================================================
   MOBILE MENU
===================================================== */

function mobileMenu() {

    const button =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("mainNav");

    if (!button || !nav) return;


    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle("active");

        }
    );


    nav.querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        nav.classList.remove("active");

                    }
                );

            }
        );

}


/* =====================================================
   CONTACT FORM
===================================================== */

function contactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you! Your message form is ready to be connected to email."
            );

        }
    );

}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

function initWebsite() {

    applyColors();

    renderWork();

    renderAnalyticsProjects();

    renderAIProjects();

    renderResearch();

    renderServices();

    renderSocialLinks();

    mobileMenu();

    contactForm();

}


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initWebsite
);