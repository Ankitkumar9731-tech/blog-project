const blogsData = [
  {
    id: 1,
    title: "Getting Started with Modern JavaScript ES6+",
    excerpt:
      "Learn the essential ES6+ features that every JavaScript developer should know in 2025.",
    content: `
            <h2>Introduction to Modern JavaScript</h2>
            <p>JavaScript has evolved significantly over the years, and ES6+ features have revolutionized how we write code. In this comprehensive guide, we'll explore the most important features that modern JavaScript developers need to master.</p>
            
            <h2>Arrow Functions</h2>
            <p>Arrow functions provide a more concise way to write functions and have lexical 'this' binding:</p>
            <pre><code>// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>
            
            <h2>Template Literals</h2>
            <p>Template literals make string interpolation much easier:</p>
            <pre><code>const name = 'John';
const message = \`Hello, \${name}! Welcome to our blog.\`;</code></pre>
            
            <h2>Destructuring</h2>
            <p>Destructuring allows you to extract values from arrays and objects:</p>
            <pre><code>// Array destructuring
const [first, second] = ['apple', 'banana'];

// Object destructuring
const { name, age } = { name: 'John', age: 30 };</code></pre>
            
            <h2>Conclusion</h2>
            <p>These ES6+ features make JavaScript code more readable, concise, and powerful. Start incorporating them into your projects today!</p>
        `,
    author: "Sarah Johnson",
    date: "2025-07-20",
    category: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop",
    readTime: 5,
    tags: ["JavaScript", "ES6", "Programming"],
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox layout systems with practical examples.",
    content: `
            <h2>Understanding Layout Systems</h2>
            <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Understanding when to use each one is crucial for creating efficient, responsive layouts.</p>
            
            <h2>CSS Flexbox: One-Dimensional Layouts</h2>
            <p>Flexbox is designed for one-dimensional layouts - either row or column. It's perfect for:</p>
            <ul>
                <li>Navigation bars</li>
                <li>Card layouts</li>
                <li>Centering content</li>
                <li>Space distribution</li>
            </ul>
            
            <h2>CSS Grid: Two-Dimensional Layouts</h2>
            <p>CSS Grid handles both rows and columns simultaneously, making it ideal for:</p>
            <ul>
                <li>Complex page layouts</li>
                <li>Magazine-style designs</li>
                <li>Dashboard interfaces</li>
                <li>Image galleries</li>
            </ul>
            
            <h2>Practical Examples</h2>
            <p>Here's a simple flexbox example for a navigation bar:</p>
            <pre><code>.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</code></pre>
            
            <p>And a CSS Grid example for a basic layout:</p>
            <pre><code>.container {
    display: grid;
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 200px 1fr;
}</code></pre>
        `,
    author: "Mike Chen",
    date: "2025-07-18",
    category: "CSS",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    readTime: 8,
    tags: ["CSS", "Layout", "Grid", "Flexbox"],
  },
  {
    id: 3,
    title: "Building Your First React Application",
    excerpt:
      "Step-by-step guide to creating a modern React application with hooks and best practices.",
    content: `
            <h2>Introduction to React</h2>
            <p>React is a powerful JavaScript library for building user interfaces. In this tutorial, we'll create a complete React application from scratch.</p>
            
            <h2>Setting Up Your Environment</h2>
            <p>First, make sure you have Node.js installed, then create a new React app:</p>
            <pre><code>npx create-react-app my-first-app
cd my-first-app
npm start</code></pre>
            
            <h2>Understanding Components</h2>
            <p>React applications are built using components. Here's a simple functional component:</p>
            <pre><code>function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}</code></pre>
            
            <h2>Using React Hooks</h2>
            <p>Hooks let you use state and other React features in functional components:</p>
            <pre><code>import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = \`Count: \${count}\`;
    }, [count]);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}</code></pre>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Keep components small and focused</li>
                <li>Use meaningful component names</li>
                <li>Handle errors gracefully</li>
                <li>Optimize performance when needed</li>
            </ul>
        `,
    author: "Emma Davis",
    date: "2025-07-15",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    readTime: 12,
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
  },
  {
    id: 4,
    title: "Node.js Best Practices for 2025",
    excerpt:
      "Essential Node.js practices for building scalable and maintainable backend applications.",
    content: `
            <h2>Modern Node.js Development</h2>
            <p>Node.js continues to evolve rapidly. Here are the essential best practices every Node.js developer should follow in 2025.</p>
            
            <h2>Project Structure</h2>
            <p>Organize your Node.js project with a clear, scalable structure:</p>
            <pre><code>project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── tests/
├── config/
└── package.json</code></pre>
            
            <h2>Error Handling</h2>
            <p>Implement comprehensive error handling:</p>
            <pre><code>// Custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

// Global error handler
app.use((error, req, res, next) => {
    const { statusCode = 500, message } = error;
    res.status(statusCode).json({
        status: 'error',
        message: message
    });
});</code></pre>
            
            <h2>Security Best Practices</h2>
            <ul>
                <li>Use helmet.js for security headers</li>
                <li>Validate and sanitize input data</li>
                <li>Implement rate limiting</li>
                <li>Use HTTPS in production</li>
                <li>Keep dependencies updated</li>
            </ul>
            
            <h2>Performance Optimization</h2>
            <p>Optimize your Node.js application performance:</p>
            <pre><code>// Use compression
const compression = require('compression');
app.use(compression());

// Enable gzip
app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});</code></pre>
        `,
    author: "David Wilson",
    date: "2025-07-12",
    category: "Node.js",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    readTime: 10,
    tags: ["Node.js", "Backend", "JavaScript", "Performance"],
  },
  {
    id: 5,
    title: "Responsive Web Design with CSS Grid",
    excerpt:
      "Master responsive design using CSS Grid and create layouts that work perfectly on all devices.",
    content: `
            <h2>The Power of CSS Grid for Responsive Design</h2>
            <p>CSS Grid has revolutionized how we approach responsive web design. Unlike traditional methods, Grid allows us to create truly flexible layouts with minimal code.</p>
            
            <h2>Basic Grid Setup</h2>
            <p>Start with a simple grid container:</p>
            <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}</code></pre>
            
            <h2>Responsive Grid Areas</h2>
            <p>Use grid areas for complex responsive layouts:</p>
            <pre><code>.layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
}

@media (max-width: 768px) {
    .layout {
        grid-template-areas: 
            "header"
            "nav"
            "main"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}</code></pre>
            
            <h2>Auto-Fit vs Auto-Fill</h2>
            <p>Understand the difference between auto-fit and auto-fill:</p>
            <ul>
                <li><strong>auto-fit:</strong> Stretches grid items to fill available space</li>
                <li><strong>auto-fill:</strong> Maintains item size, leaving empty space if needed</li>
            </ul>
            
            <h2>Grid Functions for Responsive Design</h2>
            <p>Leverage powerful Grid functions:</p>
            <pre><code>/* Responsive columns */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Flexible rows */
grid-template-rows: auto 1fr auto;

/* Responsive gaps */
gap: clamp(1rem, 2vw, 2rem);</code></pre>
        `,
    author: "Lisa Rodriguez",
    date: "2025-07-10",
    category: "CSS",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    readTime: 7,
    tags: ["CSS", "Grid", "Responsive", "Layout"],
  },
  {
    id: 6,
    title: "JavaScript Async/Await: Complete Guide",
    excerpt:
      "Master asynchronous JavaScript with async/await and learn how to handle promises effectively.",
    content: `
            <h2>Understanding Asynchronous JavaScript</h2>
            <p>Asynchronous programming is essential for modern JavaScript applications. The async/await syntax makes working with promises much more intuitive.</p>
            
            <h2>From Promises to Async/Await</h2>
            <p>Here's how async/await improves upon traditional promise syntax:</p>
            <pre><code>// Using Promises
function fetchUserData(userId) {
    return fetch(\`/api/users/\${userId}\`)
        .then(response => response.json())
        .then(user => {
            return fetch(\`/api/posts/\${user.id}\`);
        })
        .then(response => response.json())
        .catch(error => console.error(error));
}

// Using Async/Await
async function fetchUserData(userId) {
    try {
        const userResponse = await fetch(\`/api/users/\${userId}\`);
        const user = await userResponse.json();
        const postsResponse = await fetch(\`/api/posts/\${user.id}\`);
        const posts = await postsResponse.json();
        return posts;
    } catch (error) {
        console.error(error);
    }
}</code></pre>
            
            <h2>Error Handling</h2>
            <p>Proper error handling with async/await:</p>
            <pre><code>async function handleAsyncOperation() {
    try {
        const result = await riskyAsyncOperation();
        return result;
    } catch (error) {
        if (error instanceof NetworkError) {
            // Handle network errors
            throw new Error('Network connection failed');
        }
        // Re-throw unknown errors
        throw error;
    }
}</code></pre>
            
            <h2>Parallel Execution</h2>
            <p>Run multiple async operations in parallel:</p>
            <pre><code>// Sequential (slower)
const user = await fetchUser(id);
const posts = await fetchPosts(id);
const comments = await fetchComments(id);

// Parallel (faster)
const [user, posts, comments] = await Promise.all([
    fetchUser(id),
    fetchPosts(id),
    fetchComments(id)
]);</code></pre>
        `,
    author: "Alex Thompson",
    date: "2025-07-08",
    category: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop",
    readTime: 9,
    tags: ["JavaScript", "Async", "Promises", "ES2017"],
  },
  {
    id: 7,
    title: "Modern Web Development Workflow",
    excerpt:
      "Set up an efficient development workflow with modern tools and best practices for 2025.",
    content: `
            <h2>Building an Efficient Development Workflow</h2>
            <p>A well-structured development workflow can significantly improve productivity and code quality. Let's explore the essential tools and practices for modern web development.</p>
            
            <h2>Version Control with Git</h2>
            <p>Master Git for effective version control:</p>
            <pre><code># Essential Git commands
git init                    # Initialize repository
git add .                   # Stage changes
git commit -m "message"     # Commit changes
git branch feature-name     # Create branch
git checkout feature-name   # Switch branch
git merge feature-name      # Merge branch</code></pre>
            
            <h2>Package Management</h2>
            <p>Use npm or yarn for dependency management:</p>
            <pre><code># package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx,ts,tsx",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,css,md}"
  }
}</code></pre>
            
            <h2>Code Quality Tools</h2>
            <p>Maintain code quality with linting and formatting:</p>
            <pre><code>// .eslintrc.js
module.exports = {
    extends: ['eslint:recommended', '@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    rules: {
        'no-unused-vars': 'error',
        'no-console': 'warn',
        'prefer-const': 'error'
    }
};</code></pre>
            
            <h2>Build Tools and Bundlers</h2>
            <p>Popular build tools for 2025:</p>
            <ul>
                <li><strong>Vite:</strong> Fast build tool with excellent DX</li>
                <li><strong>Webpack:</strong> Mature and highly configurable</li>
                <li><strong>Rollup:</strong> Optimized for libraries</li>
                <li><strong>esbuild:</strong> Extremely fast bundler</li>
            </ul>
            
            <h2>Deployment Strategies</h2>
            <p>Modern deployment options:</p>
            <pre><code># Netlify deployment
npm run build
netlify deploy --prod --dir=dist

# Vercel deployment
vercel --prod

# GitHub Pages
npm run build
npm run deploy</code></pre>
        `,
    author: "Rachel Green",
    date: "2025-07-05",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    readTime: 11,
    tags: ["Workflow", "Development", "Tools", "Productivity"],
  },
  {
    id: 8,
    title: "CSS Variables: Dynamic Styling Made Easy",
    excerpt:
      "Learn how to use CSS custom properties (variables) to create dynamic and maintainable stylesheets.",
    content: `
            <h2>Introduction to CSS Variables</h2>
            <p>CSS custom properties, also known as CSS variables, allow you to store values that can be reused throughout your stylesheet. They make your CSS more maintainable and enable dynamic styling.</p>
            
            <h2>Basic Syntax</h2>
            <p>Define and use CSS variables:</p>
            <pre><code>:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-base: 16px;
    --border-radius: 4px;
}

.button {
    background-color: var(--primary-color);
    font-size: var(--font-size-base);
    border-radius: var(--border-radius);
}</code></pre>
            
            <h2>Dynamic Theming</h2>
            <p>Create light and dark themes using CSS variables:</p>
            <pre><code>[data-theme="light"] {
    --bg-color: #ffffff;
    --text-color: #333333;
    --accent-color: #007bff;
}

[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --accent-color: #66b3ff;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}</code></pre>
            
            <h2>JavaScript Integration</h2>
            <p>Manipulate CSS variables with JavaScript:</p>
            <pre><code>// Get CSS variable value
const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color');

// Set CSS variable value
document.documentElement.style
    .setProperty('--primary-color', '#ff6b6b');

// Theme switcher
function toggleTheme() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = newTheme;
}</code></pre>
            
            <h2>Advanced Use Cases</h2>
            <p>CSS variables with calc() and media queries:</p>
            <pre><code>:root {
    --base-size: 16px;
    --scale: 1.2;
}

h1 { font-size: calc(var(--base-size) * var(--scale) * var(--scale)); }
h2 { font-size: calc(var(--base-size) * var(--scale)); }

@media (max-width: 768px) {
    :root {
        --base-size: 14px;
        --scale: 1.15;
    }
}</code></pre>
        `,
    author: "Tom Martinez",
    date: "2025-07-03",
    category: "CSS",
    image:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=500&h=300&fit=crop",
    readTime: 6,
    tags: ["CSS", "Variables", "Theming", "Dynamic"],
  },
];
