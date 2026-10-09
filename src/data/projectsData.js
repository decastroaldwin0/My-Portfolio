export const projectsData = [
  {
    id: 'residencia',
    number: '01',
    title: 'Residencia',
    tagline: 'Barangay Population Monitoring System',
    status: 'Developed',
    statusType: 'success',
    tech: ['Laravel', 'PHP', 'MySQL', 'Groq API', 'Chart.js', 'Blade'],
    techString: 'Laravel • PHP • MySQL • Groq API • Chart.js',
    shortDescription: 'An offline-capable resident and household management system designed for Barangay San Francisco, Bulusan, Sorsogon.',
    highlights: [
      'Resident and household management',
      'Population monitoring dashboard',
      'AI chatbot & automated report narratives',
      'Household summaries & age updater',
      'Excel import/export capabilities',
      'Offline Chart.js analytics',
      'One-click launcher for non-technical users'
    ],
    githubUrl: 'https://github.com/decastroaldwin0',
    demoUrl: null,
    isPrivate: true,
    caseStudy: {
      problem: 'Rural barangay offices often rely on manual paper ledgers or fragmented spreadsheets to track resident demographics, household composition, and vulnerability statistics (senior citizens, PWDs, minors). Generating summary reports for local government units is time-consuming, prone to human calculation errors, and hard to update dynamically. Furthermore, internet access in local offices can be intermittent, requiring an offline-first operational design.',
      solution: 'Residencia provides a centralized, local-first web application built with Laravel and MySQL. It empowers barangay staff to manage resident records with automated age updates, generate instant demographic charts via Chart.js, and export formatted Excel reports with a single click. For narrative report generation, it integrates Groq AI when online, providing instant narrative summaries of population trends, age breakdowns, and household statistics.',
      whatIBuilt: [
        'Complete CRUD module for residents, families, and household units with relational foreign keys.',
        'Automated background age updater that recalculates resident ages dynamically based on birthdates without manual edits.',
        'Interactive demographic dashboard using Chart.js that operates 100% offline.',
        'AI-powered assistant and narrative generator using Groq API to draft written demographic reports for LGU submission.',
        'One-click desktop launcher setup allowing non-technical barangay workers to start the Laravel server and open the app in a single double-click.',
        'Bulk Excel data import and structured export pipelines for fast record migrations.'
      ],
      technologyDetails: 'Built using Laravel framework (PHP), MySQL relational database, Blade Templating, Groq AI API (LLM inference), Chart.js for data visualization, and Laragon / Herd for local environment deployment.',
      whatILearned: [
        'Designing normalized relational database structures for complex family-household dynamics.',
        'Building resilient offline-first Web UI features while conditionally layering cloud AI capabilities.',
        'Structuring clean Laravel Controllers, Form Requests, and Eloquent model relationships.',
        'Crafting user experiences tailored specifically for non-technical municipal workers.'
      ],
      currentStatus: 'Developed project deployed and tested for local barangay administrative workflow.'
    }
  },
  {
    id: 'quizforge',
    number: '02',
    title: 'QuizForge',
    tagline: 'AI-Driven Exam Generation & Assessment Platform',
    status: 'In Development',
    statusType: 'warning',
    tech: ['React', 'Vite', 'Express.js', 'Node.js', 'PostgreSQL', 'Neon', 'Groq API', 'RAG'],
    techString: 'React • Vite • Express.js • Node.js • PostgreSQL • Neon • Groq API • RAG',
    shortDescription: 'A web platform designed to help teachers generate assessments from uploaded learning materials using Retrieval-Augmented Generation.',
    highlights: [
      'PDF/DOCX learning material uploads',
      'AI-generated exam questions (RAG)',
      'Retrieval-Augmented Generation',
      'Teacher-generated access codes',
      'Code-gated student exam entry',
      'Automated scoring & submission analytics',
      'REST APIs & PostgreSQL database'
    ],
    githubUrl: 'https://github.com/decastroaldwin0',
    demoUrl: null,
    isPrivate: false,
    caseStudy: {
      problem: 'Educators spend hours reading course syllabus documents, slides, and textbooks to manually construct balanced, objective exam questions. Generic AI tools often hallucinate facts outside the curriculum or generate vague questions irrelevant to the specific class syllabus. Additionally, teachers need a controlled environment where students can enter unique access codes to take time-bound exams with instant automated grading.',
      solution: 'QuizForge solves this by combining Retrieval-Augmented Generation (RAG) with a streamlined exam management platform. Teachers upload PDF/DOCX course documents. QuizForge indexes the content into text embeddings and uses Groq API to generate accurate, context-grounded multiple-choice and short-answer questions strictly derived from the uploaded material. Teachers review and refine the generated test, publish a unique access code, and share it with students. Students join the test with their code, complete the exam online, and receive automated scoring while teachers view instant score distributions.',
      whatIBuilt: [
        'React + Vite responsive frontend dashboard for course document management and exam builder interface.',
        'Node.js + Express REST API backend handling document parsing, text chunking, and Groq LLM API prompt pipelines.',
        'RAG workflow logic ensuring generated question items reference exact context blocks from source materials.',
        'PostgreSQL schema hosted on Neon serverless database storing teachers, courses, access codes, exams, and student submissions.',
        'Code-gated student test portal with real-time countdown timer, question navigation, and automated evaluation engine.'
      ],
      technologyDetails: 'Built using React 19, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL hosted on Neon, Groq API (Llama-3 model inference), and RAG document context extraction.',
      whatILearned: [
        'Implementing Retrieval-Augmented Generation (RAG) pipelines for grounded AI text generation.',
        'Managing full-stack asynchronous data flows between React frontend, Node.js API, and cloud PostgreSQL database.',
        'Designing secure access token validation and code-gated entry systems for student assessments.',
        'Balancing AI generation speed with strict output format validation using JSON schema enforcement.'
      ],
      currentStatus: 'Currently in active development (v0.8 Beta). Implementing advanced document indexing and teacher question editing suite.'
    }
  }
];
