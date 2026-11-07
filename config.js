/* =====================================================
   DOAA ANALYTICS
   WEBSITE CONTROL PANEL
===================================================== */

const SITE = {


    /* =================================================
       BRAND
    ================================================= */

    brand: {

        name:
            "DOAA ANALYTICS",

        person:
            "Doaa Abdelmoneim Mohamed",

        tagline:
            "DATA • RESEARCH • INSIGHTS",

        title:
            "Turning Information into Insights & Knowledge.",

        role:
            "Data Analyst | Political & Economic Researcher | Writer",

        description:
            "I combine data analytics, research and writing to transform complex information into clear, meaningful insights."

    },


    /* =================================================
       COLORS
    ================================================= */

    colors: {

        primary:
            "#0B1F33",

        secondary:
            "#163A5F",

        accent:
            "#14B8A6",

        accent2:
            "#38BDF8",

        background:
            "#F8FAFC",

        card:
            "#FFFFFF",

        text:
            "#172033",

        muted:
            "#64748B",

        border:
            "#E2E8F0",

        success:
            "#16A34A",

        warning:
            "#F59E0B",

        danger:
            "#DC2626"

    },


    /* =================================================
       WHAT I DO
    ================================================= */

    work: [

        {

            icon:
                "📊",

            title:
                "Data Analytics",

            description:
                "Data analysis, Business Intelligence, dashboards, KPIs, web scraping and actionable insights.",

            link:
                "#analytics"

        },


        {

            icon:
                "🤖",

            title:
                "AI Projects",

            description:
                "Machine Learning, AI automation, n8n workflows and API integration.",

            link:
                "#projects"

        },


        {

            icon:
                "🔎",

            title:
                "Research",

            description:
                "Political, economic, policy and strategic research.",

            link:
                "#research"

        },


        {

            icon:
                "✍️",

            title:
                "Writing & Publications",

            description:
                "Research, articles, reports, books and creative writing.",

            link:
                "#research"

        }

    ],


    /* =================================================
       DATA ANALYTICS PROJECTS
    ================================================= */

    analyticsProjects: [

        {

            category:
                "POWER BI",

            title:
                "Olist E-Commerce Business Analysis",

            description:
                "Interactive business analysis dashboard covering sales, customers, orders and performance KPIs.",

            image:
                "assets/projects/olist.jpg",

            tags: [

                "Power BI",
                "DAX",
                "Power Query",
                "Data Analysis"

            ],

            projectLink:
                "",

            githubLink:
                ""

        },


        {

            category:
                "EXCEL",

            title:
                "Coffee Sales Dashboard",

            description:
                "Interactive sales dashboard analyzing coffee sales performance and customer trends.",

            image:
                "assets/projects/coffee.jpg",

            video:
                "assets/projects/coffee-demo.mp4",

            tags: [

                "Excel",
                "Dashboard",
                "Data Analysis"

            ],

            projectLink:
                "https://drive.google.com/file/d/1lI1gT9Qn8KeQ8pXtiOTcXDtewzJHEYH0/view?usp=sharing",

            githubLink:
                ""

        },


        {

            category:
                "DATA COLLECTION",

            title:
                "Web Scraping & Data Collection",

            description:
                "Automated data collection from websites using Python, Selenium, BeautifulSoup and Pandas, followed by data cleaning and analysis.",

            image:
                "",

            tags: [

                "Python",
                "Web Scraping",
                "Selenium",
                "BeautifulSoup",
                "Pandas"

            ],

            projectLink:
                "",

            githubLink:
                ""

        }

    ],


    /* =================================================
       AI PROJECTS
    ================================================= */

    aiProjects: [

        {

            icon:
                "🧠",

            title:
                "Machine Learning",

            description:
                "Machine learning models, clustering, prediction and data-driven pattern discovery."

        },


        {

            icon:
                "🤖",

            title:
                "AI Automation & n8n",

            description:
                "AI-powered workflow automation using n8n, APIs and intelligent data processing."

        },


        {

            icon:
                "🔗",

            title:
                "APIs & AI Integration",

            description:
                "API integration, data pipelines and connecting AI applications with external services."

        },


        {

            icon:
                "📈",

            title:
                "Predictive Analytics",

            description:
                "Using machine learning and statistical methods to identify patterns and support decision-making."

        }

    ],


    /* =================================================
       RESEARCH & PUBLICATIONS
    ================================================= */

    research: [


        /* =============================================
           ORIGINAL RESEARCH
        ============================================= */

        {

            type:
                "Original Research",

            category:
                "Political Situation Assessment",

            title:
                "دور شركات البترول والأسلحة في الأزمة الليبية",

            description:
                "تقدير موقف حول تأثير شركات البترول والأسلحة والفاعلين الدوليين في مسار الأزمة الليبية، مع التركيز على تطورات الأزمة خلال الفترة السابقة لعام 2020.",

            author:
                "Doaa Abdelmoneim Mohamed",

            year:
                "2020",

            date:
                "2020",

            image:
                "assets/research/libya.jpg",

            tags: [

                "Libya",
                "Political Research",
                "Oil",
                "Arms",
                "International Intervention"

            ],

            link:
                "research/libya-oil-arms.html"

        },


        /* =============================================
           PUBLISHED RESEARCH — MASR360
        ============================================= */

        {

            type:
                "Published Research & Contributions",

            category:
                "Human Rights Research",

            title:
                "الحبس الاحتياطي.. انتهاك متعدد الصور",

            description:
                "تقرير بحثي حول الانتهاكات المرتبطة بالحبس الاحتياطي في مصر، نُشر ضمن تغطية مصر 360 لتقرير مركز التنمية والدعم والإعلام «دام» السنوي لعام 2024.",

            author:
                "Doaa Abdelmoneim Mohamed",

            year:
                "2025",

            date:
                "February 10, 2025",

            image:
                "assets/research/pretrial-detention.jpg",

            tags: [

                "Human Rights",
                "Egypt",
                "Pretrial Detention",
                "Research",
                "DAM"

            ],

            link:
                "https://masr360.net/2025/02/10/%d8%a7%d9%84%d8%ad%d8%a8%d8%b3-%d8%a7%d9%84%d8%a7%d8%ad%d8%aa%d9%8a%d8%a7%d8%b7%d9%8a-%d8%a7%d9%86%d8%aa%d9%87%d8%a7%d9%83-%d9%85%d8%aa%d8%b9%d8%af%d8%af-%d8%a7%d9%84%d8%b5%d9%88%d8%b1/"

        },


        /* =============================================
           PUBLISHED RESEARCH — DAM REPORT
        ============================================= */

        {

            type:
                "Published Research & Contributions",

            category:
                "Human Rights Research",

            title:
                "تقرير «دام» السنوي.. تدنٍ ملحوظ للوضع الحقوقي ودوامة الحبس الاحتياطي مستمرة",

            description:
                "مساهمة بحثية حول التقرير السنوي لمركز التنمية والدعم والإعلام «دام» وأبرز تطورات الوضع الحقوقي والحبس الاحتياطي.",

            author:
                "Doaa Abdelmoneim Mohamed",

            year:
                "2025",

            date:
                "February 9, 2025",

            image:
                "assets/research/dam-report.jpg",

            tags: [

                "Human Rights",
                "Egypt",
                "Research",
                "DAM"

            ],

            link:
                "https://masr360.net/2025/02/09/https-masr360-net-2025-02-09-%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-%d8%af%d8%a7%d9%85/"

        },


        /* =============================================
           ARTICLES & ANALYSIS
        ============================================= */

        {

            type:
                "Articles & Analysis",

            category:
                "Political & Economic Analysis",

            title:
                "Articles & Analysis",

            description:
                "Political, economic and analytical articles covering politics, economics, public policy and international affairs.",

            tags: [

                "Politics",
                "Economics",
                "Public Policy",
                "Analysis"

            ],

            link:
                "#"

        },


        /* =============================================
           BOOKS & CREATIVE WRITING
        ============================================= */

        {

            type:
                "Books & Creative Writing",

            category:
                "Creative Writing",

            title:
                "Books & Creative Writing",

            description:
                "Books, stories and creative writing projects.",

            tags: [

                "Books",
                "Writing",
                "Creative Writing"

            ],

            link:
                "#"

        }

    ],


    /* =================================================
       SERVICES
    ================================================= */

    services: [

        {

            icon:
                "📊",

            title:
                "Data Analysis & Business Intelligence",

            items: [

                "Data Cleaning & Analysis",
                "Excel & Power BI Dashboards",
                "Data Visualization & Reporting",
                "KPIs & Actionable Insights"

            ]

        },


        {

            icon:
                "🤖",

            title:
                "AI, Automation & Web Scraping",

            items: [

                "Machine Learning",
                "n8n Workflow Automation",
                "Web Scraping & Data Collection",
                "API Integration"

            ]

        },


        {

            icon:
                "🔎",

            title:
                "Research & Analysis",

            items: [

                "Economic & Political Research",
                "Market Research",
                "Data Collection & Analysis",
                "Research & Report Writing"

            ]

        },


        {

            icon:
                "✍️",

            title:
                "Writing & Content Services",

            items: [

                "Article & Content Writing",
                "Research Writing",
                "Report Writing",
                "Translation & Editing"

            ]

        },


        {

            icon:
                "💼",

            title:
                "Career Services",

            items: [

                "CV / Resume Writing",
                "Career Guidance",
                "Career Assessment",
                "Skills Development",
                "Job Search Support",
                "LinkedIn Optimization"

            ]

        }

    ],


    /* =================================================
       FOLLOW ME
    ================================================= */

    social: [

        {

            name:
                "LinkedIn",

            url:
                "https://www.linkedin.com/in/doaa-abdelmoneim-mohamed-a15818254/"

        },


        {

            name:
                "GitHub",

            url:
                "#"

        },


        {

            name:
                "YouTube",

            url:
                "#"

        },


        {

            name:
                "Pinterest",

            url:
                "https://www.pinterest.com/dabdalmanaem/data-analytics-portfolio/"

        },


        {

            name:
                "Instagram",

            url:
                "#"

        },


        {

            name:
                "Facebook",

            url:
                "#"

        },


        {

            name:
                "Upwork",

            url:
                "#"

        },


        {

            name:
                "Freelancer",

            url:
                "#"

        },


        {

            name:
                "Mostaql",

            url:
                "https://mostaql.com/u/doaaabdelmoneim"

        },


        {

            name:
                "Khamsat",

            url:
                "https://khamsat.com/user/doaaabdelmoneim360"

        },


        {

            name:
                "Nafezly",

            url:
                "https://nafezly.com/"

        },


        {

            name:
                "Ureed",

            url:
                "https://app.ureed.com/profile/doaaabdalmanaem5"

        }

    ],


    /* =================================================
       CONTACT
    ================================================= */

    contact: {

        email:
            "doaaabdalmanaem5@gmail.com",

        phone:
            "",

        location:
            "Cairo, Egypt"

    }

};