// src/components/chatbot/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaMicrophone, FaVolumeUp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

const ZUBAIR_INFO = {
    // Basic & Personal Info
    name: "Hello! I am the AI Assistant for <strong>Muhammad Zubair</strong>, a passionate Full Stack Developer specialized in MERN/MEAN stacks.",
    whoareyou: "I'm an AI chatbot created to tell you about Muhammad Zubair—his skills, projects, experience, and background.",
    fathername: "Zubair's father's name is <strong>Wali Muhammad</strong>.",
    from: "Zubair is from <strong>Lahore, Pakistan</strong>. He was born and raised here, and currently lives in Johar Town, Lahore.",
    whereareyoufrom: "Zubair is from <strong>Lahore, Pakistan</strong>. He studied at the University of Lahore and now works in Lahore as a developer.",
    currentlyliving: "He is currently based in <strong>Johar Town, Lahore</strong>, and works at OptimaGeeks.",
    age: "Zubair is currently <strong>23 years old</strong> (born in 2001).",
    dateofbirth: "Zubair was born on <strong>19 AUG, 2001</strong>.",
    hometown: "His hometown is <strong>Lahore, Pakistan</strong>.",
    
    // Contact Info
    phone: "You can contact Zubair at <strong>+92 349 6000672</strong> (WhatsApp/call).",
    contact: "You can reach him via phone: <strong>+92 349 6000672</strong> or email: <strong>zubairraj30@gmail.com</strong>.",
    email: "Email: <strong>zubairraj30@gmail.com</strong>.",
    address: "<strong>Johar Town, Lahore, Pakistan</strong>.",
    
    // Education
    university: "Zubair graduated with a <strong>BS in Computer Science</strong> from the <strong>University of Lahore</strong> (2020–2024).",
    education: "He completed his <strong>Bachelor of Science in Computer Science</strong> from the <strong>University of Lahore</strong>.",
    degree: "<strong>BS Computer Science</strong> from University of Lahore.",
    college: "He attended the <strong>University of Lahore</strong> for his BS in Computer Science.",
    graduation: "He graduated in <strong>2024</strong> with a degree in Computer Science.",
    
    // Skills & Expertise (Detailed)
    skills: "Zubair is skilled in:<br/>• <strong>JavaScript (Advanced)</strong> – ES6+, Async/Await, Promises, DOM, OOP<br/>• <strong>React</strong> – Hooks (useState, useEffect, useContext, custom), React Router, Redux<br/>• <strong>Angular</strong> – Components, Services, Modules, RxJS, TypeScript<br/>• <strong>Node.js & Express</strong> – RESTful APIs, Middleware, JWT, Multer<br/>• <strong>MongoDB</strong> – Aggregation Pipeline, Indexing, Mongoose<br/>• <strong>SQL</strong> – MySQL, PostgreSQL<br/>• <strong>TypeScript</strong> – Interfaces, Types, Generics<br/>• <strong>AWS</strong> – EC2, Lightsail, S3, Deployment<br/>• <strong>Git & GitHub</strong> – Version Control, Collaboration<br/>• <strong>CSS Frameworks</strong> – Tailwind CSS, Material UI, Bootstrap",
    expertise: "Zubair's expertise includes <strong>MERN & MEAN stacks</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Angular</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>TypeScript</strong>, <strong>AWS</strong>, and <strong>UI/UX implementation</strong>.",
    javascript: "Yes, Zubair knows <strong>JavaScript</strong> deeply. He can work with ES6+, async/await, promises, closures, DOM manipulation, and advanced JS patterns.",
    react: "Yes, Zubair is proficient in <strong>React</strong>. He uses <strong>React Hooks</strong>, Context API, React Router, Redux, and builds reusable components.",
    angular: "Yes, Zubair works with <strong>Angular</strong>. He builds modular UIs, uses services, dependency injection, RxJS, and TypeScript.",
    nodejs: "Yes, Zubair is strong in <strong>Node.js</strong> and <strong>Express</strong>. He builds scalable REST APIs, uses middleware, authentication, and file handling.",
    mongodb: "Yes, Zubair is skilled in <strong>MongoDB</strong>. He writes complex queries, uses aggregation pipelines, indexing, and Mongoose ODM.",
    typescript: "Yes, Zubair uses <strong>TypeScript</strong> in Angular and React projects for type safety and better code maintenance.",
    aws: "Yes, Zubair deploys apps on <strong>AWS</strong> using EC2, Lightsail, S3, and manages scalability and performance.",
    github: "You can view Zubair's projects on GitHub: <a href='https://github.com/Zubair-Rajoot' target='_blank' style='color: #3b82f6;'>github.com/Zubair-Rajoot</a>.",
    linkedin: "Connect with Zubair on LinkedIn: <a href='https://www.linkedin.com/in/muhammad-zubair--/' target='_blank' style='color: #3b82f6;'>linkedin.com/in/muhammad-zubair--/</a>.",
    tailwind: "Yes, Zubair uses <strong>Tailwind CSS</strong> for utility-first styling and rapid UI development.",
    bootstrap: "Yes, Zubair knows <strong>Bootstrap</strong> for responsive web design.",
    materialui: "Yes, Zubair uses <strong>Material UI</strong> for React component libraries.",
    
    // Experience (Detailed)
    experience: "Zubair has worked at:<br/>1. <strong>OptimaGeeks</strong> – Junior MEAN Stack Developer (Real Estate CRM)<br/>2. <strong>Technatic.pro</strong> – Junior MERN Stack Developer (Mind Therapy Platform)<br/>3. <strong>SeeBiz Pvt. Ltd.</strong> – MERN Stack Intern (eCommerce, POS)<br/>Ask me about any role!",
    work: "Zubair works as a <strong>Full Stack Developer</strong>, currently at OptimaGeeks in Lahore.",
    job: "He is a <strong>Junior MEAN Stack Developer</strong> at OptimaGeeks, working on a Real Estate CRM.",
    optimageeks: "At <strong>OptimaGeeks</strong> (Apr 2025–Nov 2025), Zubair worked on a <strong>Real Estate CRM</strong>, built APIs, optimized queries, and implemented multi-office structures.",
    techmatic: "At <strong>Technatic.pro</strong> (Jan 2025–Apr 2025), he built a <strong>Mind Therapy Platform</strong> with a GPT chatbot, Stripe payments, and AWS deployment.",
    seebiz: "At <strong>SeeBiz Pvt. Ltd.</strong> (Aug 2024–Dec 2024), he worked on <strong>eCommerce, POS, and Metro Management Systems</strong> during his internship.",
    
    // Projects
    projects: "Zubair's notable projects:<br/>• <strong>Mind Therapy Platform</strong> – GPT-based chatbot, Stripe payments (<a href='https://therapysession.ai/' target='_blank' style='color: #3b82f6;'>Live</a>)<br/>• <strong>Ecommerce MERN</strong> – Full-stack online store (<a href='https://github.com/Zubair-Rajoot/Ecommerce-Mern' target='_blank' style='color: #3b82f6;'>GitHub</a>)<br/>• <strong>Real Estate CRM</strong> – Multi-office CRM for real estate (<a href='https://dev3.optima-crm.com' target='_blank' style='color: #3b82f6;'>Live</a>)<br/>• <strong>Budget Management System</strong> – Track income/expenses (<a href='https://github.com/Zubair-Rajoot/Budget_Managment_system' target='_blank' style='color: #3b82f6;'>GitHub</a>)<br/>• <strong>POS System (MEAN)</strong> – Point of Sale for businesses (<a href='https://github.com/orgs/SeeBiz-Pakistan/teams/students-aug24-pos-frontend' target='_blank' style='color: #3b82f6;'>GitHub</a>)",
    portfolio: "You can see his portfolio projects on GitHub: <a href='https://github.com/Zubair-Rajoot' target='_blank' style='color: #3b82f6;'>GitHub Profile</a>.",
    
    // Future Goals
    futuregoals: "Zubair aims to become an <strong>AI Automation Engineer</strong> and work on intelligent systems, automation tools, and scalable AI-driven applications.",
    goals: "He wants to specialize in <strong>AI Automation, Backend Optimization, and Cloud Architecture</strong>.",
    ambition: "His ambition is to build AI-powered tools that automate real-world business processes.",
    
    // Current Status
    current: "Right now, Zubair is working on <strong>Real Estate CRM features</strong>, improving his backend skills, and exploring AI integration in web apps.",
    now: "Currently, he is employed at <strong>OptimaGeeks</strong> and working on a large-scale CRM project.",
    
    // Learning Path
    learn: "Zubair learned <strong>MERN/MEAN stacks</strong> through online courses, building real projects, and hands-on internships. He enjoys learning by doing.",
    mern: "Zubair learned <strong>MERN stack</strong> by building projects like eCommerce platforms, therapy apps, and management systems.",
    mean: "Zubair learned <strong>MEAN stack</strong> while working at OptimaGeeks on the Real Estate CRM project.",
    
    // Greetings & Polite Responses
    hello: "Hello! I'm Zubair's AI Assistant. How can I help you?",
    hi: "Hi! Ask me about Zubair's skills, projects, or experience.",
    howareyou: "I'm doing well, thank you! How can I assist you with information about Zubair's professional background?",
    thanks: "You're welcome! Feel free to ask more.",
    thank: "You're welcome!",
    bye: "Goodbye! Have a great day.",
    ok: "Okay! Let me know if you need more details.",
    
    // Default - Updated with clearer message
    default: "I'm sorry, I don't have information about that specific question. You can ask about Zubair's professional background like his skills, experience, education, or projects."
};

const getBotResponse = (userInput) => {
    const lower = userInput.toLowerCase().trim();
    
    // Special cases for "about yourself" and similar phrases
    if (lower.includes('about yourself') || 
        lower.includes('tell me about yourself') ||
        lower === 'yourself' ||
        lower.includes('who are you') ||
        lower.includes('introduce yourself')) {
        return ZUBAIR_INFO.whoareyou;
    }
    
    if (lower.includes('zubair information') || 
        lower.includes('information about zubair') ||
        lower.includes('tell me about zubair') ||
        lower.includes('about zubair')) {
        return "Muhammad Zubair is a Full Stack Developer specializing in MERN/MEAN stacks. He builds scalable web applications with clean code. What specific information would you like to know about him?";
    }
    
    // Keywords that should trigger the default response if matched alone
    const unrelatedKeywords = [
        'single', 'married', 'relationship', 'girlfriend', 'boyfriend',
        'wife', 'husband', 'dating', 'marriage', 'engagement',
        'salary', 'income', 'money', 'earnings', 'pay',
        'religion', 'political', 'party', 'vote',
        'hobby', 'hobbies', 'interest', 'interests',
        'food', 'favorite', 'movie', 'music', 'sport',
        'height', 'weight', 'look', 'appearance'
    ];
    
    // Check for unrelated personal questions first
    for (const keyword of unrelatedKeywords) {
        if (lower === keyword || 
            lower === `is zubair ${keyword}` ||
            lower === `zubair ${keyword}` ||
            lower.includes(` ${keyword} `) ||
            lower.endsWith(` ${keyword}`) ||
            lower.startsWith(`${keyword} `)) {
            return "I'm sorry, I don't have information about that. I can only provide information about Zubair's professional background like his skills, experience, and projects.";
        }
    }
    
    // Keywords Mapping with Priority
    const keywordMap = {
        // Personal
        'father': ZUBAIR_INFO.fathername,
        'age': ZUBAIR_INFO.age,
        'birth': ZUBAIR_INFO.dateofbirth,
        'hometown': ZUBAIR_INFO.hometown,
        'live': ZUBAIR_INFO.currentlyliving,
        'from': ZUBAIR_INFO.from,
        'where are you': ZUBAIR_INFO.whereareyoufrom,
        'currently': ZUBAIR_INFO.currentlyliving,
        
        // Contact
        'phone': ZUBAIR_INFO.phone,
        'contact': ZUBAIR_INFO.contact,
        'email': ZUBAIR_INFO.email,
        'address': ZUBAIR_INFO.address,
        'number': ZUBAIR_INFO.phone,
        
        // Education
        'university': ZUBAIR_INFO.university,
        'college': ZUBAIR_INFO.college,
        'degree': ZUBAIR_INFO.degree,
        'graduate': ZUBAIR_INFO.graduation,
        'study': ZUBAIR_INFO.education,
        'education': ZUBAIR_INFO.education,
        
        // Skills
        'skill': ZUBAIR_INFO.skills,
        'expert': ZUBAIR_INFO.expertise,
        'javascript': ZUBAIR_INFO.javascript,
        'js': ZUBAIR_INFO.javascript,
        'react': ZUBAIR_INFO.react,
        'angular': ZUBAIR_INFO.angular,
        'node': ZUBAIR_INFO.nodejs,
        'express': ZUBAIR_INFO.nodejs,
        'mongodb': ZUBAIR_INFO.mongodb,
        'mongo': ZUBAIR_INFO.mongodb,
        'typescript': ZUBAIR_INFO.typescript,
        'ts': ZUBAIR_INFO.typescript,
        'aws': ZUBAIR_INFO.aws,
        'github': ZUBAIR_INFO.github,
        'git': ZUBAIR_INFO.github,
        'linkedin': ZUBAIR_INFO.linkedin,
        'tailwind': ZUBAIR_INFO.tailwind,
        'bootstrap': ZUBAIR_INFO.bootstrap,
        'material': ZUBAIR_INFO.materialui,
        'mui': ZUBAIR_INFO.materialui,
        'sql': 'Yes, Zubair knows <strong>SQL</strong> (MySQL, PostgreSQL) for database management.',
        'html': 'Yes, Zubair knows <strong>HTML5</strong> with semantic markup and accessibility.',
        'css': 'Yes, Zubair knows <strong>CSS3</strong> including Flexbox, Grid, and animations.',
        
        // Experience
        'experience': ZUBAIR_INFO.experience,
        'work': ZUBAIR_INFO.work,
        'job': ZUBAIR_INFO.job,
        'optima': ZUBAIR_INFO.optimageeks,
        'techmatic': ZUBAIR_INFO.techmatic,
        'seebiz': ZUBAIR_INFO.seebiz,
        'company': ZUBAIR_INFO.experience,
        'career': ZUBAIR_INFO.experience,
        
        // Projects
        'project': ZUBAIR_INFO.projects,
        'portfolio': ZUBAIR_INFO.portfolio,
        'demo': ZUBAIR_INFO.projects,
        'website': ZUBAIR_INFO.projects,
        
        // Future
        'future': ZUBAIR_INFO.futuregoals,
        'goal': ZUBAIR_INFO.goals,
        'ambition': ZUBAIR_INFO.ambition,
        'dream': ZUBAIR_INFO.futuregoals,
        
        // Current
        'current': ZUBAIR_INFO.current,
        'now': ZUBAIR_INFO.now,
        'doing': ZUBAIR_INFO.current,
        
        // Learning
        'learn': ZUBAIR_INFO.learn,
        'mern': ZUBAIR_INFO.mern,
        'mean': ZUBAIR_INFO.mean,
        'learned': ZUBAIR_INFO.learn,
        
        // Greetings
        'hello': ZUBAIR_INFO.hello,
        'hi': ZUBAIR_INFO.hi,
        'hey': ZUBAIR_INFO.hi,
        'how are you': ZUBAIR_INFO.howareyou,
        'how are': ZUBAIR_INFO.howareyou,
        'thanks': ZUBAIR_INFO.thanks,
        'thank': ZUBAIR_INFO.thank,
        'bye': ZUBAIR_INFO.bye,
        'goodbye': ZUBAIR_INFO.bye,
        'ok': ZUBAIR_INFO.ok,
        'okay': ZUBAIR_INFO.ok,
        
        // General
        'name': ZUBAIR_INFO.name,
        'assistant': "I'm an AI Assistant created to provide information about Muhammad Zubair's professional background."
    };

    // Check for exact phrases first
    if (lower.includes('where are you from') || lower.includes('kahan se ho')) {
        return ZUBAIR_INFO.whereareyoufrom;
    }
    if (lower.includes('what is your father') || lower.includes('father name')) {
        return ZUBAIR_INFO.fathername;
    }
    if (lower.includes('future goal') || lower.includes('ambition')) {
        return ZUBAIR_INFO.futuregoals;
    }
    if (lower.includes('react aati') || lower.includes('react ati')) {
        return ZUBAIR_INFO.react;
    }
    if (lower.includes('javascript aati') || lower.includes('js ati')) {
        return ZUBAIR_INFO.javascript;
    }

    // Check each keyword in the map
    for (const [keyword, response] of Object.entries(keywordMap)) {
        if (lower.includes(keyword)) {
            return response;
        }
    }
    
    // If the input only contains "zubair" without any other keywords
    if (lower === 'zubair' || lower === 'who is zubair') {
        return "Muhammad Zubair is a Full Stack Developer specializing in MERN/MEAN stacks. He builds scalable web applications with clean code. What specific information would you like to know about him?";
    }

    // اگر کچھ نہ ملے تو ڈیفالٹ
    return ZUBAIR_INFO.default;
};

const INITIAL_MESSAGE = "Hey! I am Zubair's AI assistant. I can tell you about his professional background, skills, projects, and experience. What would you like to know?";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        setMessages([{ text: INITIAL_MESSAGE, sender: 'bot' }]);
        
        const timer = setTimeout(() => setIsOpen(true), 1500); 
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = (text, isVoiceInput = false) => {
        const userText = text || input;
        if (userText.trim() === '' || isThinking) return;

        const newUserMessage = { text: userText, sender: 'user' };
        setMessages((prev) => [...prev, newUserMessage]);
        setInput('');

        setIsThinking(true);
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }

        const botResponseText = getBotResponse(userText);
        const delay = Math.random() * 700 + 800;

        setTimeout(() => {
            const newBotMessage = { text: botResponseText, sender: 'bot' };
            setMessages((prev) => [...prev, newBotMessage]);
            setIsThinking(false);

            if (isVoiceInput) {
                speakText(botResponseText); 
            }
        }, delay);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend(input, false);
        }
    };
    
    const startListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("Sorry, your browser doesn't support the Speech Recognition API.");
            return;
        }

        if(isThinking || isSpeaking) return;

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            handleSend(transcript, true);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    const speakText = (text) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const cleanText = text
                .replace(/<a[^>]*>(.*?)<\/a>/g, '$1')
                .replace(/<br\/>/g, '. ')
                .replace(/<strong>/g, '')
                .replace(/<\/strong>/g, '')
                .replace(/&nbsp;/g, ' ');

            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US'; 
            utterance.rate = 1.0;
            
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
        } else {
            console.log("Speech Synthesis is not supported in this browser.");
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
        if (isListening) {
            setIsListening(false);
        }
    };

    return (
        <>
            <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
                <div className="chatbot-header" onClick={toggleChat}>
                    <FaRobot className="bot-icon" />
                    <h3>Zubair AI Assistant</h3>
                    <button className='close-btn' onClick={(e) => {e.stopPropagation(); toggleChat();}}>
                        {isOpen ? <FaTimes /> : <FaRobot />}
                    </button>
                </div>
                
                {isOpen && (
                    <div className="chatbot-body">
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    <p dangerouslySetInnerHTML={{ __html: msg.text }} />
                                </div>
                            ))}
                            {isThinking && (
                                <div className="message bot thinking">
                                    <div className="thinking-dots"><span>.</span><span>.</span><span>.</span></div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        <div className="input-area">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={isListening ? 'Listening...' : 'Type or speak your question...'}
                                disabled={isListening || isThinking}
                            />
                            <button 
                                className={`mic-btn ${isListening ? 'listening' : ''}`}
                                onClick={startListening}
                                title="Voice Input"
                                disabled={isSpeaking || isThinking}
                            >
                                <FaMicrophone />
                            </button>
                            <button 
                                className={`send-btn`}
                                onClick={() => handleSend(input, false)}
                                title="Send Message"
                                disabled={isListening || isThinking || input.trim() === ''}
                            >
                                <FaPaperPlane className='send-icon'/>
                            </button>
                        </div>
                        {isSpeaking && <div className="speaking-indicator"><FaVolumeUp className='speaker-icon'/> Speaking...</div>}
                    </div>
                )}
            </div>

            {!isOpen && (
                <button className="floating-robot-btn" onClick={() => setIsOpen(true)} title="Open AI Assistant">
                    <FaRobot />
                </button>
            )}
        </>
    );
};

export default Chatbot;