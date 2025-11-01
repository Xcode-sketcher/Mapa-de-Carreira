import foto from "../../assets/foto-edu-proa.png"

export default function Cabecalho() {
    return (
        <div className="p-12 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start">
                <Foto />
                <Informacao />
            </div>
        </div>
    )
}

function Foto() {
    return (
        <div className="flex-shrink-0">
            <img
                src={foto}
                className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                alt="Eduardo Barbosa Silva"
            />
        </div>
    )
}

function Informacao() {
    return (
        <div className="flex flex-col gap-8 flex-1">
            <div>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    Eduardo Barbosa Silva
                </h1>
                <h3 className="text-xl text-gray-600 dark:text-gray-400 font-light">
                    Desenvolvedor Web Full-Stack
                </h3>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">eduardobarbosasilva.oficial@outlook.com</span>
                </div>

                <a
                    href="https://www.linkedin.com/in/eduardo-barbosa-silva-896635363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <i className="devicon-linkedin-plain text-2xl"></i>
                    <span className="text-sm">Eduardo-Barbosa-Silva</span>
                </a>

                <a
                    href="https://github.com/Xcode-sketcher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <i className="devicon-github-original text-2xl"></i>
                    <span className="text-sm">Xcode-sketcher</span>
                </a>
            </div>
        </div>
    )
}