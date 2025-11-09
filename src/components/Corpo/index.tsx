import cvPdf from './docs/Curriculo - Eduardo.pdf'

export default function Corpo() {
    return (
        <section className="max-w-5xl mx-auto py-12 px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-16">
                    <Carta />
                    <MapaCarreira />
                </div>
                <div className="lg:col-span-1">
                    <HardSkills />
                </div>
            </div>
        </section>
    )
}

function Carta() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    Sobre mim
                </h3>
                <div className="w-16 h-1 bg-blue-600"></div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Olá! Meu nome é Eduardo e sou um estudante de Gestão da Tecnologia da Informação
                    apaixonado pelo mundo de TI. Desde novo, demonstrei facilidade na área de tecnologia
                    e sigo trilhando o meu caminho, me desenvolvendo cada vez mais.
                </p>
            </div>

            <a
                href={cvPdf}
                download="Curriculo-Eduardo-Barbosa-Silva.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                aria-label="Baixar o meu CV"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar o meu CV
            </a>
        </div>
    )
}

function MapaCarreira() {
    const etapas = [
        {
            cargo: "Desenvolvedor Web Full Stack Júnior",
            periodo: "Atual",
            descricao: "Iniciando minha jornada no desenvolvimento web, focando em HTML, CSS, JavaScript/TypeScript, C# e frameworks modernos. ",
            skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "C#", "ASP.NET", "Git", "APIs REST"],
            status: "atual"
        },
        {
            cargo: "Desenvolvedor Web Full-Stack Pleno",
            periodo: "Futuro",
            descricao: "Expandindo conhecimentos em backend, bancos de dados e arquitetura de sistemas. Além de levar em consideração integração e entrega continua",
            skills: ["Node.js", "PostgreSQL", "MongoDB", "APIs GraphQL", "Git", "Angular", "AI/ML"],
            status: "futuro"
        },
        {
            cargo: "Tech Lead",
            periodo: "Futuro",
            descricao: "Desenvolver ainda mais minhas habilidades técnicas, principalmente as relacionadas a tecnologias de inteligência artificial. Vou estar sempre estudando as tecnologias mais recentes e as tendências do mundo tecnológico. Além das hard skills, aprimorar minha comunicação, trabalho em equipe, flexibilidade e adaptabilidade.",
            skills: ["Arquitetura", "Cloud", "DevOps", "Liderança", "Mentoria", "Gestão", "Estratégia"],
            status: "futuro"
        },
        {
            cargo: "Tech Lead Senior",
            periodo: "Futuro",
            descricao: "Já alinhado com o mercado de desenvolvimento sendo mais seguro na área. Quero poder desenvolver ainda mais minhas habilidades técnicas e melhorar minhas capacidades de liderança de pessoas, comunicação e lencionar de forma mais eficaz.",
            skills: ["Alto Rendimento", "Gestão", "Inovação", "Liderança em Grande Escala", "POCs", "Estratégia", "Visão Holística"],
            status: "futuro"
        }
    ]

    return (
        <div className="space-y-9">
            <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    Mapa de Carreira
                </h2>
                <div className="w-16 h-1 bg-blue-600"></div>
            </div>

            <div className="relative">
                <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

                <div className="space-y-8">
                    {etapas.map((etapa, index) => (
                        <div key={index} className="relative pl-12">
                            <div className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 ${etapa.status === 'atual'
                                ? 'bg-blue-600 border-blue-600'
                                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                                }`}></div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {etapa.cargo}
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {etapa.periodo}
                                    </span>
                                </div>

                                {etapa.status === 'atual' && (
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3">
                                        Objetivo Atual
                                    </span>
                                )}

                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {etapa.descricao}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {etapa.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function HardSkills() {
    const frontend = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 60 },
        { name: "TypeScript", level: 70 },
        { name: "React", level: 70 },
        { name: "TailwindCSS", level: 80 }
    ]

    const backend = [
        { name: "C#", level: 85 },
        { name: "ASP.NET", level: 70 },
        { name: "SQL Server", level: 85 },
    ]

    const outras = [
        "Git/GitHub", "Bash", "Powershell", "Figma",
        "npm", "Excel", "Word", "Sheets", "Docs"
    ]
    const idioma = [
        { name: "Inglês", level: "Avançado" },
        { name: "Português", level: "Nativo" },
        { name: "Espanhol", level: "Básico" }
    ]

    return (
        <div className="space-y-8 sticky top-8">
            <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    Hard Skills
                </h2>
                <div className="w-16 h-1 bg-blue-600"></div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 space-y-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Afinidade com as seguintes tecnologias e técnicas:
                </p>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Frontend
                    </h3>
                    <div className="space-y-3">
                        {frontend.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-green-600 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Backend
                    </h3>
                    <div className="space-y-3">
                        {backend.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-green-600 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Outras
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {outras.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Idiomas
                    </h2>
                    <div className="w-16 h-0.5 bg-blue-600"></div>
                    <div className="space-y-2">
                        {idioma.map((idioma, idx) => (
                            <div key={idx} className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                                <span>{idioma.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{idioma.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}