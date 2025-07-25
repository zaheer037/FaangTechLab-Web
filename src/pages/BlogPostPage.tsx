import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, BookOpen, CheckCircle, Lightbulb } from "lucide-react"

// Complete blog post data with detailed content and actual images
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Data Structures Every FAANG Engineer Should Master",
    content: `
      <p>When preparing for technical interviews at top tech companies like Facebook, Amazon, Apple, Netflix, and Google, mastering fundamental data structures is absolutely crucial. These data structures form the backbone of efficient algorithms and are frequently tested in coding interviews.</p>
      
      <h2>1. Arrays and Dynamic Arrays</h2>
      <p>Arrays are the most fundamental data structure, providing constant-time access to elements by index. Dynamic arrays (like Python lists or JavaScript arrays) can grow and shrink during runtime, making them incredibly versatile.</p>
      
      <h3>Key Operations:</h3>
      <ul>
        <li>Access: O(1)</li>
        <li>Search: O(n)</li>
        <li>Insertion: O(n) worst case, O(1) amortized for append</li>
        <li>Deletion: O(n)</li>
      </ul>
      
      <h2>2. Linked Lists</h2>
      <p>Linked lists are linear data structures where elements are stored in nodes, and each node contains data and a reference to the next node. They're excellent for scenarios where you need frequent insertions and deletions.</p>
      
      <h2>3. Stacks and Queues</h2>
      <p>These are abstract data types that follow specific ordering principles. Stacks follow LIFO (Last In, First Out), while queues follow FIFO (First In, First Out).</p>
      
      <h2>4. Hash Tables</h2>
      <p>Hash tables provide average O(1) time complexity for insertions, deletions, and lookups, making them incredibly powerful for many applications.</p>
      
      <h2>5. Trees</h2>
      <p>Trees are hierarchical data structures with a root node and child nodes. Binary trees, binary search trees, and balanced trees like AVL trees are commonly tested.</p>
      
      <h2>Practice Problems</h2>
      <p>To master these data structures, practice implementing them from scratch and solving problems that utilize them effectively. Focus on understanding when to use each data structure and their trade-offs.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these data structures is just the beginning. The key is understanding how to apply them to solve complex problems efficiently. Keep practicing, and you'll be well-prepared for your FAANG interviews!</p>
    `,
    author: "Dr. Sarah Kim",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Interview Prep",
    image: "/images/Faang_pictures/90days.jpg",
    tags: ["Data Structures", "Algorithms", "Interview"],
    featured: true,
  },
  {
    id: 2,
    title: "How to Negotiate Your Tech Salary Like a Pro",
    content: `
      <p>Salary negotiation is one of the most important skills you can develop as a tech professional. Our graduates have increased their starting salaries by an average of 40% using these proven strategies.</p>
      
      <h2>Research is Your Foundation</h2>
      <p>Before entering any negotiation, you need to know your worth in the market. Use resources like Levels.fyi, Glassdoor, and Blind to understand salary ranges for your role and experience level.</p>
      
      <p>Start by researching salaries for your specific role, experience level, and geographic location. Use multiple sources to get a comprehensive view:</p>
      <ul>
        <li><strong>Levels.fyi</strong> - Excellent for tech company compensation data</li>
        <li><strong>Glassdoor</strong> - Wide range of companies and roles</li>
        <li><strong>Blind</strong> - Anonymous employee discussions about compensation</li>
        <li><strong>PayScale</strong> - Good for general market data</li>
        <li><strong>LinkedIn Salary Insights</strong> - Professional network data</li>
      </ul>
      
      <h2>Timing is Everything</h2>
      <p>The best time to negotiate is after you've received an offer but before you've accepted it. This is when you have the most leverage.</p>
      
      <p>Never negotiate before you have a formal offer. Wait until the company has invested time and resources in the interview process and has decided they want you on their team.</p>
      
      <h2>Beyond Base Salary</h2>
      <p>Remember that total compensation includes much more than just your base salary:</p>
      <ul>
        <li><strong>Base salary</strong> - Your annual fixed compensation</li>
        <li><strong>Stock options/RSUs</strong> - Equity compensation that can be substantial</li>
        <li><strong>Signing bonus</strong> - One-time payment to help with transition</li>
        <li><strong>Annual bonus</strong> - Performance-based additional compensation</li>
        <li><strong>Benefits and perks</strong> - Health insurance, 401k matching, vacation time</li>
        <li><strong>Professional development</strong> - Conference budgets, training allowances</li>
        <li><strong>Flexible work arrangements</strong> - Remote work options, flexible hours</li>
      </ul>
      
      <h2>The Negotiation Process</h2>
      <p>Always negotiate professionally and with data to back up your requests. Express enthusiasm for the role while advocating for fair compensation.</p>
      
      <h3>Step-by-Step Approach:</h3>
      <ol>
        <li><strong>Express gratitude</strong> - Thank them for the offer</li>
        <li><strong>Show enthusiasm</strong> - Confirm your interest in the role</li>
        <li><strong>Present your case</strong> - Use market data to justify your request</li>
        <li><strong>Be specific</strong> - Ask for exact amounts, not ranges</li>
        <li><strong>Be flexible</strong> - Consider the entire package, not just salary</li>
        <li><strong>Give them time</strong> - Allow them to consider your request</li>
      </ol>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Negotiating too early in the process</li>
        <li>Making demands without justification</li>
        <li>Focusing only on salary instead of total compensation</li>
        <li>Being aggressive or confrontational</li>
        <li>Accepting the first offer without any discussion</li>
        <li>Lying about competing offers</li>
      </ul>
      
      <h2>Real Success Stories</h2>
      <p>Here are some examples from our FAANG Tech Lab graduates:</p>
      <ul>
        <li><strong>Sarah M.</strong> - Increased offer from $120k to $145k + $15k signing bonus</li>
        <li><strong>David L.</strong> - Negotiated additional 2 weeks vacation and $5k education budget</li>
        <li><strong>Maria R.</strong> - Improved total compensation by $35k through equity adjustment</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Remember, companies expect negotiation - it's a normal part of the hiring process. The worst they can say is no, but in most cases, there's room for improvement in the initial offer. Be confident, be prepared, and be professional.</p>
    `,
    author: "Marcus Thompson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Career Tips",
    image: "/images/Faang_pictures/AIandcodinglessons.jpg",
    tags: ["Salary", "Negotiation", "Career"],
    featured: false,
  },
  {
    id: 3,
    title: "The Rise of AI in Software Development: What You Need to Know",
    content: `
      <p>Artificial intelligence is revolutionizing the software development landscape at an unprecedented pace. From code generation to automated testing, AI tools are becoming integral to modern development workflows. Here's what every developer needs to know about this transformation.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>The current generation of AI development tools is more sophisticated than ever:</p>
      
      <h3>Code Generation and Completion</h3>
      <ul>
        <li><strong>GitHub Copilot</strong> - AI pair programmer that suggests code completions</li>
        <li><strong>Amazon CodeWhisperer</strong> - Real-time code recommendations</li>
        <li><strong>Tabnine</strong> - AI assistant for code completion</li>
        <li><strong>Replit Ghostwriter</strong> - AI-powered coding assistant</li>
      </ul>
      
      <h3>Code Review and Quality</h3>
      <ul>
        <li><strong>DeepCode</strong> - AI-powered code review and bug detection</li>
        <li><strong>SonarQube</strong> - Enhanced with AI for better code quality analysis</li>
        <li><strong>CodeClimate</strong> - AI-driven maintainability insights</li>
      </ul>
      
      <h2>Impact on Different Development Areas</h2>
      
      <h3>Frontend Development</h3>
      <p>AI is transforming frontend development through:</p>
      <ul>
        <li>Automated UI/UX design suggestions</li>
        <li>CSS generation from design mockups</li>
        <li>Accessibility compliance checking</li>
        <li>Performance optimization recommendations</li>
      </ul>
      
      <h3>Backend Development</h3>
      <p>Backend developers are leveraging AI for:</p>
      <ul>
        <li>API endpoint generation</li>
        <li>Database query optimization</li>
        <li>Security vulnerability detection</li>
        <li>Microservices architecture recommendations</li>
      </ul>
      
      <h3>DevOps and Infrastructure</h3>
      <p>AI is enhancing DevOps through:</p>
      <ul>
        <li>Intelligent monitoring and alerting</li>
        <li>Automated incident response</li>
        <li>Resource optimization</li>
        <li>Predictive scaling</li>
      </ul>
      
      <h2>Skills That Are Becoming More Important</h2>
      
      <h3>AI Literacy</h3>
      <p>Developers need to understand:</p>
      <ul>
        <li>How to effectively prompt AI tools</li>
        <li>When to trust AI suggestions vs. manual implementation</li>
        <li>How to validate AI-generated code</li>
        <li>Understanding AI limitations and biases</li>
      </ul>
      
      <h3>Prompt Engineering</h3>
      <p>The ability to craft effective prompts for AI tools is becoming a valuable skill:</p>
      <ul>
        <li>Clear and specific instructions</li>
        <li>Context-aware prompting</li>
        <li>Iterative refinement of prompts</li>
        <li>Understanding AI model capabilities</li>
      </ul>
      
      <h2>Skills That Remain Crucial</h2>
      
      <p>While AI is powerful, these human skills remain irreplaceable:</p>
      <ul>
        <li><strong>Problem-solving</strong> - Understanding the 'why' behind solutions</li>
        <li><strong>System design</strong> - Architectural thinking and trade-offs</li>
        <li><strong>Code review</strong> - Critical evaluation of AI-generated code</li>
        <li><strong>Domain expertise</strong> - Understanding business requirements</li>
        <li><strong>Team collaboration</strong> - Communication and leadership skills</li>
        <li><strong>Debugging</strong> - Systematic problem identification and resolution</li>
      </ul>
      
      <h2>Preparing for the AI-Enhanced Future</h2>
      
      <h3>Continuous Learning</h3>
      <p>Stay updated with the rapidly evolving AI landscape:</p>
      <ul>
        <li>Experiment with new AI development tools</li>
        <li>Take courses on machine learning fundamentals</li>
        <li>Follow AI research and industry trends</li>
        <li>Participate in AI/ML communities and forums</li>
      </ul>
      
      <h3>Develop a Growth Mindset</h3>
      <p>Embrace AI as a collaboration partner rather than a threat:</p>
      <ul>
        <li>Use AI to handle routine tasks and focus on creative work</li>
        <li>Learn to work effectively with AI-generated code</li>
        <li>Develop skills that complement AI capabilities</li>
        <li>Stay curious about emerging technologies</li>
      </ul>
      
      <h2>Real-World Examples</h2>
      
      <h3>Success Stories</h3>
      <ul>
        <li><strong>Netflix</strong> - Uses AI for recommendation algorithms and content optimization</li>
        <li><strong>Google</strong> - AI-assisted code review has reduced bugs by 25%</li>
        <li><strong>Facebook</strong> - AI tools help detect and fix security vulnerabilities</li>
        <li><strong>Microsoft</strong> - GitHub Copilot increases developer productivity by 55%</li>
      </ul>
      
      <h2>The Bottom Line</h2>
      <p>AI is not replacing developers; it's augmenting their capabilities. The most successful developers will be those who learn to work alongside AI tools effectively, combining human creativity and critical thinking with AI's processing power and pattern recognition.</p>
      
      <p>The future belongs to developers who embrace AI as a powerful ally in creating better software faster, while maintaining the essential human skills that drive innovation and solve complex problems.</p>
    `,
    author: "Dr. Maria Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Industry News",
    image: "/images/Faang_pictures/careercorner.jpg",
    tags: ["AI", "Machine Learning", "Future"],
    featured: false,
  },
  {
    id: 4,
    title: "Building Scalable Systems: Lessons from Netflix Architecture",
    content: `
      <p>Netflix serves over 230 million subscribers across 190+ countries, streaming billions of hours of content monthly. Their architecture has evolved to handle this massive scale while maintaining high availability and performance. Here are the key lessons we can learn from their approach.</p>
      
      <h2>The Evolution of Netflix Architecture</h2>
      
      <h3>From Monolith to Microservices</h3>
      <p>Netflix's journey from a DVD-by-mail service to a global streaming platform required a complete architectural transformation:</p>
      
      <ul>
        <li><strong>2008-2009</strong>: Started with a monolithic architecture</li>
        <li><strong>2009-2012</strong>: Migrated to AWS and began microservices transformation</li>
        <li><strong>2012-Present</strong>: Fully distributed microservices architecture</li>
      </ul>
      
      <h2>Key Architectural Principles</h2>
      
      <h3>1. Microservices Architecture</h3>
      <p>Netflix operates hundreds of microservices, each owned by a small team:</p>
      <ul>
        <li>Each service has a single responsibility</li>
        <li>Services communicate via APIs</li>
        <li>Independent deployment and scaling</li>
        <li>Technology diversity is encouraged</li>
      </ul>
      
      <h3>2. Fault Tolerance and Resilience</h3>
      <p>Netflix assumes failures will happen and designs for them:</p>
      <ul>
        <li><strong>Circuit Breakers</strong> - Prevent cascading failures</li>
        <li><strong>Bulkheads</strong> - Isolate critical resources</li>
        <li><strong>Timeouts</strong> - Prevent hanging requests</li>
        <li><strong>Retries with Backoff</strong> - Handle transient failures</li>
      </ul>
      
      <h3>3. Chaos Engineering</h3>
      <p>Netflix pioneered chaos engineering to test system resilience:</p>
      <ul>
        <li><strong>Chaos Monkey</strong> - Randomly terminates instances</li>
        <li><strong>Chaos Gorilla</strong> - Takes down entire availability zones</li>
        <li><strong>Chaos Kong</strong> - Simulates entire region failures</li>
        <li><strong>Latency Monkey</strong> - Introduces artificial delays</li>
      </ul>
      
      <h2>Content Delivery and Caching Strategy</h2>
      
      <h3>Global Content Distribution</h3>
      <p>Netflix uses a sophisticated CDN strategy:</p>
      <ul>
        <li><strong>Open Connect</strong> - Netflix's custom CDN</li>
        <li><strong>Edge Locations</strong> - Content cached close to users</li>
        <li><strong>Predictive Caching</strong> - AI predicts what content to cache where</li>
        <li><strong>Peak Traffic Management</strong> - Dynamic routing based on demand</li>
      </ul>
      
      <h3>Multi-Layer Caching</h3>
      <p>Netflix employs caching at multiple levels:</p>
      <ul>
        <li><strong>Browser Cache</strong> - Client-side caching</li>
        <li><strong>CDN Cache</strong> - Edge location caching</li>
        <li><strong>Application Cache</strong> - In-memory caching (Redis/Memcached)</li>
        <li><strong>Database Cache</strong> - Query result caching</li>
      </ul>
      
      <h2>Data Management at Scale</h2>
      
      <h3>Polyglot Persistence</h3>
      <p>Netflix uses different databases for different use cases:</p>
      <ul>
        <li><strong>Cassandra</strong> - User data, viewing history</li>
        <li><strong>MySQL</strong> - Billing, subscription data</li>
        <li><strong>ElasticSearch</strong> - Search and discovery</li>
        <li><strong>Redis</strong> - Session management, caching</li>
        <li><strong>S3</strong> - Content storage and backup</li>
      </ul>
      
      <h3>Data Pipeline Architecture</h3>
      <p>Netflix processes massive amounts of data daily:</p>
      <ul>
        <li><strong>Real-time Processing</strong> - Apache Kafka, Apache Storm</li>
        <li><strong>Batch Processing</strong> - Apache Spark, Hadoop</li>
        <li><strong>Stream Processing</strong> - Apache Flink</li>
        <li><strong>Data Lake</strong> - S3-based data storage</li>
      </ul>
      
      <h2>Monitoring and Observability</h2>
      
      <h3>Comprehensive Monitoring Stack</h3>
      <p>Netflix has built extensive monitoring capabilities:</p>
      <ul>
        <li><strong>Atlas</strong> - Time-series monitoring</li>
        <li><strong>Kayenta</strong> - Automated canary analysis</li>
        <li><strong>Mantis</strong> - Real-time stream processing</li>
        <li><strong>Vizceral</strong> - Traffic flow visualization</li>
      </ul>
      
      <h3>Key Metrics They Track</h3>
      <ul>
        <li><strong>SPS (Starts Per Second)</strong> - Playback initiation rate</li>
        <li><strong>Stream Quality</strong> - Bitrate, buffering, errors</li>
        <li><strong>API Response Times</strong> - Service performance</li>
        <li><strong>Error Rates</strong> - System health indicators</li>
      </ul>
      
      <h2>Deployment and DevOps</h2>
      
      <h3>Continuous Deployment</h3>
      <p>Netflix deploys thousands of times per day:</p>
      <ul>
        <li><strong>Spinnaker</strong> - Multi-cloud deployment platform</li>
        <li><strong>Blue-Green Deployments</strong> - Zero-downtime deployments</li>
        <li><strong>Canary Releases</strong> - Gradual rollout to detect issues</li>
        <li><strong>Automated Rollbacks</strong> - Quick recovery from problems</li>
      </ul>
      
      <h3>Infrastructure as Code</h3>
      <ul>
        <li>All infrastructure defined in code</li>
        <li>Immutable infrastructure</li>
        <li>Automated provisioning and scaling</li>
        <li>Version-controlled infrastructure changes</li>
      </ul>
      
      <h2>Lessons for Your Architecture</h2>
      
      <h3>Start Simple, Scale Gradually</h3>
      <ul>
        <li>Begin with a modular monolith</li>
        <li>Identify service boundaries based on business domains</li>
        <li>Extract services when team size or complexity demands it</li>
        <li>Don't over-engineer for scale you don't have yet</li>
      </ul>
      
      <h3>Build for Failure</h3>
      <ul>
        <li>Implement circuit breakers and timeouts</li>
        <li>Design graceful degradation strategies</li>
        <li>Practice failure scenarios regularly</li>
        <li>Monitor everything and alert on anomalies</li>
      </ul>
      
      <h3>Culture and Organization</h3>
      <ul>
        <li>Align teams with service ownership</li>
        <li>Encourage experimentation and learning from failures</li>
        <li>Invest in tooling and developer productivity</li>
        <li>Maintain high standards for code quality and testing</li>
      </ul>
      
      <h2>Tools and Technologies to Consider</h2>
      
      <h3>Open Source from Netflix</h3>
      <ul>
        <li><strong>Hystrix</strong> - Circuit breaker library</li>
        <li><strong>Eureka</strong> - Service discovery</li>
        <li><strong>Ribbon</strong> - Client-side load balancing</li>
        <li><strong>Zuul</strong> - API gateway</li>
        <li><strong>Spinnaker</strong> - Continuous delivery platform</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Netflix's architecture demonstrates that building for scale requires careful planning, the right culture, and a willingness to embrace failure as a learning opportunity. While not every application needs to handle Netflix's scale, the principles of resilience, observability, and continuous improvement are valuable for any system.</p>
      
      <p>The key takeaway is that great architecture isn't just about technology—it's about building systems that can evolve with your business while maintaining reliability and performance.</p>
    `,
    author: "Alex Chen",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "System Design",
    image: "/images/Faang_pictures/conquer.jpg",
    tags: ["System Design", "Scalability", "Netflix"],
    featured: false,
  },
  {
    id: 5,
    title: "From Bootcamp to FAANG: A Complete Roadmap",
    content: `
      <p>Breaking into FAANG companies (Facebook/Meta, Amazon, Apple, Netflix, Google) is a dream for many developers. This comprehensive roadmap will guide you through the journey from bootcamp graduate to landing your first FAANG offer.</p>
      
      <h2>Phase 1: Foundation Building (Months 1-6)</h2>
      
      <h3>Master the Fundamentals</h3>
      <p>Before diving into advanced topics, ensure you have a solid foundation:</p>
      
      <h4>Programming Languages</h4>
      <ul>
        <li><strong>Primary Language</strong>: Choose one and master it (Python, Java, JavaScript, C++)</li>
        <li><strong>Language Proficiency</strong>: Understand syntax, idioms, and best practices</li>
        <li><strong>Object-Oriented Programming</strong>: Classes, inheritance, polymorphism, encapsulation</li>
        <li><strong>Functional Programming Concepts</strong>: Higher-order functions, immutability</li>
      </ul>
      
      <h4>Core Computer Science Concepts</h4>
      <ul>
        <li><strong>Time and Space Complexity</strong>: Big O notation, algorithm analysis</li>
        <li><strong>Basic Math</strong>: Discrete mathematics, probability, statistics</li>
        <li><strong>Problem-Solving Patterns</strong>: Two pointers, sliding window, recursion</li>
      </ul>
      
      <h3>Build Real Projects</h3>
      <p>Create 3-5 substantial projects that demonstrate your skills:</p>
      <ul>
        <li><strong>Full-Stack Web Application</strong>: Frontend + Backend + Database</li>
        <li><strong>API Integration Project</strong>: Working with external APIs</li>
        <li><strong>Data Processing Project</strong>: Handle and analyze datasets</li>
        <li><strong>Mobile App</strong>: Native or React Native application</li>
        <li><strong>Open Source Contribution</strong>: Contribute to existing projects</li>
      </ul>
      
      <h2>Phase 2: Algorithm and Data Structure Mastery (Months 3-9)</h2>
      
      <h3>Essential Data Structures</h3>
      <p>Master these data structures with implementation and use cases:</p>
      
      <h4>Linear Data Structures</h4>
      <ul>
        <li><strong>Arrays and Strings</strong>: Manipulation, searching, sorting</li>
        <li><strong>Linked Lists</strong>: Singly, doubly, circular linked lists</li>
        <li><strong>Stacks and Queues</strong>: Implementation and applications</li>
        <li><strong>Hash Tables</strong>: Collision handling, hash functions</li>
      </ul>
      
      <h4>Non-Linear Data Structures</h4>
      <ul>
        <li><strong>Trees</strong>: Binary trees, BST, AVL, Red-Black trees</li>
        <li><strong>Heaps</strong>: Min-heap, max-heap, priority queues</li>
        <li><strong>Graphs</strong>: Adjacency matrix/list, directed/undirected</li>
        <li><strong>Tries</strong>: Prefix trees for string problems</li>
      </ul>
      
      <h3>Algorithm Categories</h3>
      
      <h4>Searching and Sorting</h4>
      <ul>
        <li><strong>Binary Search</strong>: All variations and applications</li>
        <li><strong>Sorting Algorithms</strong>: QuickSort, MergeSort, HeapSort</li>
        <li><strong>Search in Data Structures</strong>: DFS, BFS traversals</li>
      </ul>
      
      <h4>Advanced Algorithms</h4>
      <ul>
        <li><strong>Dynamic Programming</strong>: Memoization, tabulation, optimization</li>
        <li><strong>Greedy Algorithms</strong>: Activity selection, Huffman coding</li>
        <li><strong>Graph Algorithms</strong>: Dijkstra's, Floyd-Warshall, Topological sort</li>
        <li><strong>Backtracking</strong>: N-Queens, Sudoku solver, permutations</li>
      </ul>
      
      <h3>Practice Strategy</h3>
      <p>Structured approach to algorithm practice:</p>
      
      <h4>Daily Practice Schedule</h4>
      <ul>
        <li><strong>Week 1-4</strong>: Easy problems (2-3 per day)</li>
        <li><strong>Week 5-12</strong>: Mix of Easy/Medium (2 per day)</li>
        <li><strong>Week 13-24</strong>: Medium/Hard problems (1-2 per day)</li>
        <li><strong>Week 25+</strong>: Company-specific problem sets</li>
      </ul>
      
      <h4>Recommended Platforms</h4>
      <ul>
        <li><strong>LeetCode</strong>: Primary platform, company-tagged problems</li>
        <li><strong>HackerRank</strong>: Additional practice, domain-specific problems</li>
        <li><strong>CodeSignal</strong>: Interview simulation environment</li>
        <li><strong>InterviewBit</strong>: Structured learning paths</li>
      </ul>
      
      <h2>Phase 3: System Design Preparation (Months 6-12)</h2>
      
      <h3>System Design Fundamentals</h3>
      
      <h4>Scalability Principles</h4>
      <ul>
        <li><strong>Horizontal vs Vertical Scaling</strong>: When to use each approach</li>
        <li><strong>Load Balancing</strong>: Round-robin, weighted, least connections</li>
        <li><strong>Caching</strong>: Redis, Memcached, CDN strategies</li>
        <li><strong>Database Scaling</strong>: Sharding, replication, partitioning</li>
      </ul>
      
      <h4>System Components</h4>
      <ul>
        <li><strong>Load Balancers</strong>: Layer 4 vs Layer 7, health checks</li>
        <li><strong>Databases</strong>: SQL vs NoSQL, ACID properties, CAP theorem</li>
        <li><strong>Message Queues</strong>: Kafka, RabbitMQ, async processing</li>
        <li><strong>Microservices</strong>: Service discovery, API gateways</li>
      </ul>
      
      <h3>Practice System Design</h3>
      <p>Study and practice designing common systems:</p>
      <ul>
        <li><strong>URL Shortener</strong> (like bit.ly)</li>
        <li><strong>Chat System</strong> (like WhatsApp)</li>
        <li><strong>Social Media Feed</strong> (like Twitter)</li>
        <li><strong>Video Streaming</strong> (like YouTube)</li>
        <li><strong>Ride Sharing</strong> (like Uber)</li>
        <li><strong>Search Engine</strong> (like Google)</li>
      </ul>
      
      <h2>Phase 4: Interview Preparation (Months 9-12)</h2>
      
      <h3>Technical Interview Types</h3>
      
      <h4>Coding Interviews</h4>
      <ul>
        <li><strong>Live Coding</strong>: Solving problems in real-time</li>
        <li><strong>Code Review</strong>: Analyzing and improving existing code</li>
        <li><strong>Debugging</strong>: Finding and fixing bugs in given code</li>
        <li><strong>API Design</strong>: Designing interfaces and data models</li>
      </ul>
      
      <h4>System Design Interviews</h4>
      <ul>
        <li><strong>High-Level Architecture</strong>: Drawing system components</li>
        <li><strong>Deep Dives</strong>: Detailed component discussions</li>
        <li><strong>Trade-offs</strong>: Discussing pros/cons of decisions</li>
        <li><strong>Scaling</strong>: How to handle growth and load</li>
      </ul>
      
      <h3>Behavioral Interview Preparation</h3>
      
      <h4>STAR Method</h4>
      <p>Structure your responses using Situation, Task, Action, Result:</p>
      <ul>
        <li><strong>Leadership Examples</strong>: Times you led a project or team</li>
        <li><strong>Conflict Resolution</strong>: Handling disagreements or challenges</li>
        <li><strong>Innovation</strong>: Creative solutions to problems</li>
        <li><strong>Failure and Learning</strong>: Mistakes and how you grew</li>
      </ul>
      
      <h4>Company-Specific Values</h4>
      <ul>
        <li><strong>Google</strong>: Innovation, user focus, technical excellence</li>
        <li><strong>Meta</strong>: Move fast, be bold, focus on impact</li>
        <li><strong>Amazon</strong>: Customer obsession, ownership, invent and simplify</li>
        <li><strong>Apple</strong>: Excellence, simplicity, user experience</li>
        <li><strong>Netflix</strong>: High performance, innovation, freedom and responsibility</li>
      </ul>
      
      <h2>Phase 5: Application and Interview Process (Months 12+)</h2>
      
      <h3>Application Strategy</h3>
      
      <h4>Resume Optimization</h4>
      <ul>
        <li><strong>Quantify Achievements</strong>: Use metrics and numbers</li>
        <li><strong>Technical Keywords</strong>: Include relevant technologies</li>
        <li><strong>Project Impact</strong>: Highlight business value created</li>
        <li><strong>Concise Format</strong>: 1-2 pages maximum</li>
      </ul>
      
      <h4>Application Channels</h4>
      <ul>
        <li><strong>Referrals</strong>: Most effective method (80% higher chance)</li>
        <li><strong>Campus Recruiting</strong>: If available at your location</li>
        <li><strong>Direct Applications</strong>: Company career pages</li>
        <li><strong>Recruiting Events</strong>: Tech conferences and meetups</li>
      </ul>
      
      <h3>Interview Timeline</h3>
      
      <h4>Typical Process</h4>
      <ol>
        <li><strong>Application Review</strong> (1-2 weeks)</li>
        <li><strong>Phone/Video Screen</strong> (1 week to schedule)</li>
        <li><strong>Technical Assessment</strong> (1-2 weeks)</li>
        <li><strong>On-site/Virtual On-site</strong> (2-4 weeks)</li>
        <li><strong>Decision and Offer</strong> (1-2 weeks)</li>
      </ol>
      
      <h2>Success Stories and Examples</h2>
      
      <h3>Real Graduate Journeys</h3>
      
      <h4>Sarah's Story - Bootcamp to Google</h4>
      <ul>
        <li><strong>Background</strong>: Career changer from marketing</li>
        <li><strong>Timeline</strong>: 14 months from bootcamp graduation</li>
        <li><strong>Key Factors</strong>: Strong projects, consistent LeetCode practice</li>
        <li><strong>Outcome</strong>: L3 Software Engineer at Google</li>
      </ul>
      
      <h4>Michael's Story - Bootcamp to Meta</h4>
      <ul>
        <li><strong>Background</strong>: Self-taught developer, no CS degree</li>
        <li><strong>Timeline</strong>: 18 months preparation</li>
        <li><strong>Key Factors</strong>: Open source contributions, networking</li>
        <li><strong>Outcome</strong>: E3 Software Engineer at Meta</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      
      <ul>
        <li><strong>Rushing the Process</strong>: Taking shortcuts in preparation</li>
        <li><strong>Neglecting Soft Skills</strong>: Focusing only on technical skills</li>
        <li><strong>Not Practicing Mock Interviews</strong>: Missing interview experience</li>
        <li><strong>Applying Too Early</strong>: Before being truly prepared</li>
        <li><strong>Giving Up After Rejections</strong>: Not learning from failures</li>
      </ul>
      
      <h2>Resources and Tools</h2>
      
      <h3>Books</h3>
      <ul>
        <li><strong>"Cracking the Coding Interview"</strong> by Gayle McDowell</li>
        <li><strong>"System Design Interview"</strong> by Alex Xu</li>
        <li><strong>"Elements of Programming Interviews"</strong> by Aziz, Lee, Prakash</li>
      </ul>
      
      <h3>Online Platforms</h3>
      <ul>
        <li><strong>LeetCode Premium</strong>: Company-specific problems</li>
        <li><strong>InterviewBit</strong>: Structured curriculum</li>
        <li><strong>Pramp</strong>: Free mock interviews</li>
        <li><strong>interviewing.io</strong>: Anonymous practice interviews</li>
      </ul>
      
      <h2>Final Tips for Success</h2>
      
      <ul>
        <li><strong>Consistency</strong>: Daily practice is better than weekend marathons</li>
        <li><strong>Quality over Quantity</strong>: Understand solutions deeply</li>
        <li><strong>Mock Interviews</strong>: Practice with peers and professionals</li>
        <li><strong>Network</strong>: Build relationships in the tech community</li>
        <li><strong>Stay Updated</strong>: Follow industry trends and technologies</li>
        <li><strong>Patience</strong>: The process takes time, don't rush</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The journey from bootcamp to FAANG is challenging but absolutely achievable with the right preparation, dedication, and strategy. Remember that rejection is part of the process—even successful candidates often face multiple rejections before landing their dream job.</p>
      
      <p>Focus on continuous improvement, build genuine relationships in the tech community, and never stop learning. Your bootcamp background can actually be an advantage, showing your ability to learn quickly and adapt to new challenges.</p>
      
      <p>Most importantly, believe in yourself and your journey. Thousands of bootcamp graduates have successfully transitioned to FAANG companies, and with proper preparation and persistence, you can too.</p>
    `,
    author: "Jennifer Park",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Success Stories",
    image: "/images/Faang_pictures/codemarathon.jpg",
    tags: ["Career Change", "Bootcamp", "Success"],
    featured: false,
  },
  {
    id: 6,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    content: `
      <p>React Hooks revolutionized how we write React components, enabling functional components to manage state and side effects. While most developers are familiar with basic hooks like useState and useEffect, mastering advanced patterns can set you apart in technical interviews and make you a more effective React developer.</p>
      
      <h2>Beyond Basic Hooks: Advanced Patterns</h2>
      
      <h3>1. Custom Hooks for Code Reusability</h3>
      <p>Custom hooks are the cornerstone of React code reusability. They allow you to extract component logic into reusable functions.</p>
      
      <h4>Example: useLocalStorage Hook</h4>
      <pre><code>function useLocalStorage(key, initialValue) {
        const [storedValue, setStoredValue] = useState(() => {
          try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            console.error(\`Error reading localStorage key "\${key}":\`, error);
            return initialValue;
          }
        });

        const setValue = (value) => {
          try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
            console.error(\`Error setting localStorage key "\${key}":\`, error);
          }
        };

        return [storedValue, setValue];
      }</code></pre>
      
      <h4>Example: useAPI Hook</h4>
      <pre><code>function useAPI(url) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
          const fetchData = async () => {
            try {
              setLoading(true);
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
              }
              const result = await response.json();
              setData(result);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          };

          fetchData();
        }, [url]);

        return { data, loading, error };
      }</code></pre>
      
      <h3>2. useReducer for Complex State Management</h3>
      <p>When state logic becomes complex, useReducer provides a more predictable way to manage state transitions.</p>
      
      <h4>Shopping Cart Example</h4>
      <pre><code>const cartReducer = (state, action) => {
        switch (action.type) {
          case 'ADD_ITEM':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              return {
                ...state,
                items: state.items.map(item =>
                  item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              };
            }
            return {
              ...state,
              items: [...state.items, { ...action.payload, quantity: 1 }]
            };
          
          case 'REMOVE_ITEM':
            return {
              ...state,
              items: state.items.filter(item => item.id !== action.payload.id)
            };
          
          case 'UPDATE_QUANTITY':
            return {
              ...state,
              items: state.items.map(item =>
                item.id === action.payload.id
                  ? { ...item, quantity: action.payload.quantity }
                  : item
              )
            };
          
          case 'CLEAR_CART':
            return { ...state, items: [] };
          
          default:
            return state;
        }
      };

      function ShoppingCart() {
        const [cart, dispatch] = useReducer(cartReducer, { items: [] });

        const addItem = (product) => {
          dispatch({ type: 'ADD_ITEM', payload: product });
        };

        const removeItem = (productId) => {
          dispatch({ type: 'REMOVE_ITEM', payload: { id: productId } });
        };

        // Component JSX...
      }</code></pre>
      
      <h3>3. useContext for Avoiding Prop Drilling</h3>
      <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
      
      <h4>Theme Context Example</h4>
      <pre><code>const ThemeContext = createContext();

      const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');
        
        const toggleTheme = () => {
          setTheme(prev => prev === 'light' ? 'dark' : 'light');
        };

        const value = {
          theme,
          toggleTheme,
          colors: theme === 'light' 
            ? { bg: '#ffffff', text: '#000000' }
            : { bg: '#000000', text: '#ffffff' }
        };

        return (
          <ThemeContext.Provider value={value}>
            {children}
          </ThemeContext.Provider>
        );
      };

      const useTheme = () => {
        const context = useContext(ThemeContext);
        if (!context) {
          throw new Error('useTheme must be used within a ThemeProvider');
        }
        return context;
      };</code></pre>
      
      <h2>Performance Optimization Hooks</h2>
      
      <h3>useMemo for Expensive Calculations</h3>
      <p>useMemo helps optimize performance by memoizing expensive calculations.</p>
      
      <pre><code>function ExpensiveComponent({ items, filters }) {
        const filteredItems = useMemo(() => {
          console.log('Filtering items...'); // This will only log when dependencies change
          return items.filter(item => {
            return filters.every(filter => filter(item));
          });
        }, [items, filters]);

        const expensiveValue = useMemo(() => {
          console.log('Calculating expensive value...');
          return filteredItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
          }, 0);
        }, [filteredItems]);

        return (
          <div>
            <p>Total: \${expensiveValue}</p>
            {filteredItems.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        );
      }</code></pre>
      
      <h3>useCallback for Function Memoization</h3>
      <p>useCallback prevents unnecessary re-renders by memoizing callback functions.</p>
      
      <pre><code>function Parent({ items }) {
        const [count, setCount] = useState(0);
        
        // Without useCallback, this function is recreated on every render
        const handleItemClick = useCallback((id) => {
          console.log(\`Clicked item \${id}\`);
          // Some expensive operation
        }, []); // Empty dependency array means this function never changes
        
        const handleItemUpdate = useCallback((id, newData) => {
          setItems(prevItems => 
            prevItems.map(item => 
              item.id === id ? { ...item, ...newData } : item
            )
          );
        }, []); // This depends on setItems, which is stable

        return (
          <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            {items.map(item => (
              <ChildComponent
                key={item.id}
                item={item}
                onClick={handleItemClick} // This won't cause re-render
                onUpdate={handleItemUpdate}
              />
            ))}
          </div>
        );
      }</code></pre>
      
      <h2>Advanced useEffect Patterns</h2>
      
      <h3>Cleanup and AbortController</h3>
      <p>Proper cleanup prevents memory leaks and race conditions.</p>
      
      <pre><code>function UserProfile({ userId }) {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          const abortController = new AbortController();
          
          const fetchUser = async () => {
            try {
              setLoading(true);
              const response = await fetch(\`/api/users/\${userId}\`, {
                signal: abortController.signal
              });
              
              if (!response.ok) {
                throw new Error('Failed to fetch user');
              }
              
              const userData = await response.json();
              setUser(userData);
            } catch (error) {
              if (error.name !== 'AbortError') {
                console.error('Error fetching user:', error);
              }
            } finally {
              setLoading(false);
            }
          };

          fetchUser();

          // Cleanup function
          return () => {
            abortController.abort();
          };
        }, [userId]);

        return loading ? <div>Loading...</div> : <div>{user?.name}</div>;
      }</code></pre>
      
      <h3>Debouncing with useEffect</h3>
      <p>Implement debouncing to limit the rate of function calls.</p>
      
      <pre><code>function SearchInput() {
        const [query, setQuery] = useState('');
        const [results, setResults] = useState([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
          if (!query) {
            setResults([]);
            return;
          }

          const timeoutId = setTimeout(async () => {
            setLoading(true);
            try {
              const response = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);
              const data = await response.json();
              setResults(data.results);
            } catch (error) {
              console.error('Search error:', error);
            } finally {
              setLoading(false);
            }
          }, 300); // 300ms debounce

          return () => clearTimeout(timeoutId);
        }, [query]);

        return (
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            {loading && <div>Searching...</div>}
            <ul>
              {results.map(result => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          </div>
        );
      }</code></pre>
      
      <h2>Custom Hooks for Real-World Scenarios</h2>
      
      <h3>useIntersectionObserver for Infinite Scrolling</h3>
      <pre><code>function useIntersectionObserver(targetRef, options = {}) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            options
          );

          const currentTarget = targetRef.current;
          if (currentTarget) {
            observer.observe(currentTarget);
          }

          return () => {
            if (currentTarget) {
              observer.unobserve(currentTarget);
            }
          };
        }, [targetRef, options]);

        return isIntersecting;
      }

      function InfiniteList() {
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(false);
        const loadMoreRef = useRef();
        const isIntersecting = useIntersectionObserver(loadMoreRef);

        useEffect(() => {
          if (isIntersecting && !loading) {
            loadMoreItems();
          }
        }, [isIntersecting, loading]);

        const loadMoreItems = async () => {
          setLoading(true);
          // Fetch more items...
          setLoading(false);
        };

        return (
          <div>
            {items.map(item => <div key={item.id}>{item.name}</div>)}
            <div ref={loadMoreRef}>
              {loading && <div>Loading more...</div>}
            </div>
          </div>
        );
      }</code></pre>
      
      <h3>useWebSocket for Real-Time Updates</h3>
      <pre><code>function useWebSocket(url) {
        const [socket, setSocket] = useState(null);
        const [lastMessage, setLastMessage] = useState(null);
        const [readyState, setReadyState] = useState(WebSocket.CONNECTING);

        useEffect(() => {
          const ws = new WebSocket(url);
          
          ws.onopen = () => setReadyState(WebSocket.OPEN);
          ws.onclose = () => setReadyState(WebSocket.CLOSED);
          ws.onerror = () => setReadyState(WebSocket.CLOSED);
          ws.onmessage = (event) => {
            setLastMessage(JSON.parse(event.data));
          };

          setSocket(ws);

          return () => {
            ws.close();
          };
        }, [url]);

        const sendMessage = useCallback((message) => {
          if (socket && readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
          }
        }, [socket, readyState]);

        return {
          sendMessage,
          lastMessage,
          readyState
        };
      }</code></pre>
      
      <h2>Best Practices and Common Pitfalls</h2>
      
      <h3>Rules of Hooks</h3>
      <ul>
        <li><strong>Only call hooks at the top level</strong> - Never inside loops, conditions, or nested functions</li>
        <li><strong>Only call hooks from React functions</strong> - React components or custom hooks</li>
        <li><strong>Use the ESLint plugin</strong> - Install eslint-plugin-react-hooks for automatic checking</li>
      </ul>
      
      <h3>Dependency Array Best Practices</h3>
      <ul>
        <li><strong>Include all dependencies</strong> - Everything used inside the effect that comes from component scope</li>
        <li><strong>Use useCallback for functions</strong> - Wrap functions in useCallback to stabilize references</li>
        <li><strong>Extract functions when possible</strong> - Move functions outside component if they don't use props/state</li>
      </ul>
      
      <h3>Common Mistakes to Avoid</h3>
      
      <h4>1. Infinite Re-renders</h4>
      <pre><code>// ❌ Bad: Object dependency causes infinite re-renders
      useEffect(() => {
        fetchData(config);
      }, [config]); // config is an object created each render

      // ✅ Good: Stable dependencies
      const configStr = JSON.stringify(config);
      useEffect(() => {
        fetchData(config);
      }, [configStr]);</code></pre>
      
      <h4>2. Stale Closures</h4>
      <pre><code>// ❌ Bad: Stale closure over count
      useEffect(() => {
        const timer = setInterval(() => {
          setCount(count + 1); // Always adds 1 to initial count
        }, 1000);
        return () => clearInterval(timer);
      }, []); // Empty deps cause stale closure

      // ✅ Good: Use functional update
      useEffect(() => {
        const timer = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => clearInterval(timer);
      }, []);</code></pre>
      
      <h2>Testing Custom Hooks</h2>
      
      <p>Testing custom hooks ensures they work correctly in isolation.</p>
      
      <pre><code>import { renderHook, act } from '@testing-library/react-hooks';
      import { useCounter } from './useCounter';

      test('should increment counter', () => {
        const { result } = renderHook(() => useCounter(0));

        act(() => {
          result.current.increment();
        });

        expect(result.current.count).toBe(1);
      });

      test('should reset counter', () => {
        const { result } = renderHook(() => useCounter(5));

        act(() => {
          result.current.reset();
        });

        expect(result.current.count).toBe(0);
      });</code></pre>
      
      <h2>Interview Tips</h2>
      
      <h3>Common Interview Questions</h3>
      <ul>
        <li><strong>Explain the difference between useState and useReducer</strong></li>
        <li><strong>When would you use useMemo vs useCallback?</strong></li>
        <li><strong>How do you prevent infinite re-renders in useEffect?</strong></li>
        <li><strong>Describe the cleanup function in useEffect</strong></li>
        <li><strong>How would you implement a custom hook for API calls?</strong></li>
      </ul>
      
      <h3>Demonstrating Advanced Knowledge</h3>
      <ul>
        <li>Show understanding of React's reconciliation process</li>
        <li>Discuss performance implications of different patterns</li>
        <li>Explain when and why to create custom hooks</li>
        <li>Demonstrate knowledge of React 18 features like concurrent rendering</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering React Hooks goes beyond knowing the basics. It involves understanding performance implications, creating reusable custom hooks, and following best practices to avoid common pitfalls.</p>
      
      <p>The patterns covered in this article will help you write more maintainable, performant React code and demonstrate advanced React knowledge in technical interviews. Remember that the key to mastery is practice—try implementing these patterns in your own projects and experiment with creating custom hooks for common use cases.</p>
      
      <p>As React continues to evolve, staying up-to-date with new patterns and best practices will keep you ahead of the curve in your React development journey.</p>
    `,
    author: "David Kim",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Coding Tips",
    image: "/images/Faang_pictures/differentfromothers.jpg",
    tags: ["React", "JavaScript", "Frontend"],
    featured: false,
  },
]

export default function BlogPostPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === Number.parseInt(id || "1"))

  if (!post) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary-900 mb-4">Article Not Found</h1>
          <p className="text-neutral-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8 bg-white">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-6">
              <Badge className="bg-accent-100 text-accent-800">{post.category}</Badge>

              <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl animate-fade-in">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-neutral-600 animate-slide-up">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 animate-scale-in">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="max-w-none">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden animate-fade-in">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none animate-slide-up"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={
                  {
                    "--tw-prose-body": "rgb(75 85 99)",
                    "--tw-prose-headings": "rgb(31 58 122)",
                    "--tw-prose-links": "rgb(52 168 83)",
                    "--tw-prose-bold": "rgb(31 58 122)",
                    "--tw-prose-counters": "rgb(107 114 128)",
                    "--tw-prose-bullets": "rgb(209 213 219)",
                    "--tw-prose-hr": "rgb(229 231 235)",
                    "--tw-prose-quotes": "rgb(75 85 99)",
                    "--tw-prose-quote-borders": "rgb(229 231 235)",
                    "--tw-prose-captions": "rgb(107 114 128)",
                    "--tw-prose-code": "rgb(31 58 122)",
                    "--tw-prose-pre-code": "rgb(229 231 235)",
                    "--tw-prose-pre-bg": "rgb(31 41 55)",
                    "--tw-prose-th-borders": "rgb(209 213 219)",
                    "--tw-prose-td-borders": "rgb(229 231 235)",
                  } as React.CSSProperties
                }
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-primary-800">Share this article:</span>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-semibold text-lg">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-800 mb-1">{post.author}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Senior Software Engineer with 10+ years of experience at top tech companies. Passionate about
                        helping developers advance their careers.
                      </p>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-primary-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-500 text-white">{relatedPost.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {relatedPost.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {relatedPost.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-primary-900 leading-tight line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                            <Link to={`/blog/${relatedPost.id}`}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Table of Contents */}
            <Card className="animate-slide-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    1. Arrays and Dynamic Arrays
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    2. Linked Lists
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    3. Stacks and Queues
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    4. Hash Tables
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    5. Trees
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
              <NewsletterSignup />
            </div>

            {/* Quick Tips */}
            <Card
              className="bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200 animate-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-secondary-600" />
                  <h3 className="text-lg font-semibold text-primary-800">Quick Tips</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Practice implementing data structures from scratch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Understand time and space complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">Solve problems on LeetCode daily</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
