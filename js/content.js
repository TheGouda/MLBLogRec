// Content Data for ML Insights Blog
window.contentData = {
    // Neural Networks
    "neural-networks": `
        <div class="article-content">
            <h1 class="article-title">Neural Networks</h1>
            <div class="article-meta">
                <span><i class="far fa-calendar-alt"></i> April 25, 2023</span>
                <span><i class="far fa-user"></i> Dr. Alan Smith</span>
                <span><i class="far fa-folder"></i> Machine Learning Fundamentals</span>
            </div>
            
            <div class="featured-image-container">
                <div class="featured-image">
                    <svg class="article-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
                        <rect width="500" height="300" fill="#f8f9fa"/>
                        <circle cx="150" cy="75" r="20" fill="#6c757d"/>
                        <circle cx="250" cy="75" r="20" fill="#6c757d"/>
                        <circle cx="350" cy="75" r="20" fill="#6c757d"/>
                        
                        <circle cx="100" cy="150" r="20" fill="#6c757d"/>
                        <circle cx="200" cy="150" r="20" fill="#6c757d"/>
                        <circle cx="300" cy="150" r="20" fill="#6c757d"/>
                        <circle cx="400" cy="150" r="20" fill="#6c757d"/>
                        
                        <circle cx="150" cy="225" r="20" fill="#6c757d"/>
                        <circle cx="250" cy="225" r="20" fill="#6c757d"/>
                        <circle cx="350" cy="225" r="20" fill="#6c757d"/>
                        
                        <!-- Connections -->
                        <line x1="150" y1="75" x2="100" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="150" y1="75" x2="200" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="150" y1="75" x2="300" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="150" y1="75" x2="400" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        
                        <line x1="250" y1="75" x2="100" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="250" y1="75" x2="200" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="250" y1="75" x2="300" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="250" y1="75" x2="400" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        
                        <line x1="350" y1="75" x2="100" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="350" y1="75" x2="200" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="350" y1="75" x2="300" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="350" y1="75" x2="400" y2="150" stroke="#0d6efd" stroke-width="2"/>
                        
                        <line x1="100" y1="150" x2="150" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="100" y1="150" x2="250" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="100" y1="150" x2="350" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        
                        <line x1="200" y1="150" x2="150" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="200" y1="150" x2="250" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="200" y1="150" x2="350" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        
                        <line x1="300" y1="150" x2="150" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="300" y1="150" x2="250" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="300" y1="150" x2="350" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        
                        <line x1="400" y1="150" x2="150" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="400" y1="150" x2="250" y2="225" stroke="#0d6efd" stroke-width="2"/>
                        <line x1="400" y1="150" x2="350" y2="225" stroke="#0d6efd" stroke-width="2"/>
                    </svg>
                </div>
                <div class="featured-content">
                    <h2>Understanding Neural Networks</h2>
                    <p>Neural networks are a cornerstone of modern machine learning, drawing inspiration from the human brain's structure and function. At their core, they consist of interconnected nodes (neurons) organized in layers, which process and transform data to recognize patterns, make predictions, and solve complex problems.</p>
                    <p>The power of neural networks lies in their ability to learn from data, adapting their internal parameters through training processes like backpropagation to improve performance over time. This adaptive learning capability enables them to tackle diverse challenges across multiple domains.</p>
                </div>
            </div>
            
            <p>Neural networks have revolutionized the field of artificial intelligence, providing the foundation for many of the most impressive advancements in machine learning. Their ability to automatically extract features from raw data, without explicit programming, has made them indispensable tools for solving complex problems that were previously intractable.</p>
            
            <h2>Key Components of Neural Networks</h2>
            
            <p>A neural network consists of several essential components working in harmony:</p>
            
            <ul>
                <li><strong>Neurons (Nodes):</strong> The basic computational units that receive inputs, apply a transformation, and produce outputs.</li>
                <li><strong>Weights:</strong> Parameters that determine the strength of connections between neurons, adjusted during training.</li>
                <li><strong>Activation Functions:</strong> Non-linear transformations applied to the weighted sum of inputs, introducing complexity that allows the network to learn intricate patterns.</li>
                <li><strong>Layers:</strong> Organized collections of neurons, typically classified as input, hidden, and output layers.</li>
                <li><strong>Loss Function:</strong> A measure of how well the network performs, guiding the optimization process.</li>
            </ul>
            
            <div class="article-image-container">
                <svg class="article-image" style="max-width: 600px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#f8f9fa"/>
                    <text x="100" y="30" font-family="Arial" font-size="16" fill="#212529">Input Layer</text>
                    <text x="260" y="30" font-family="Arial" font-size="16" fill="#212529">Hidden Layers</text>
                    <text x="470" y="30" font-family="Arial" font-size="16" fill="#212529">Output Layer</text>
                    
                    <!-- Input Layer -->
                    <circle cx="100" cy="80" r="15" fill="#0d6efd"/>
                    <circle cx="100" cy="130" r="15" fill="#0d6efd"/>
                    <circle cx="100" cy="180" r="15" fill="#0d6efd"/>
                    <circle cx="100" cy="230" r="15" fill="#0d6efd"/>
                    
                    <!-- Hidden Layer 1 -->
                    <circle cx="230" cy="80" r="15" fill="#6c757d"/>
                    <circle cx="230" cy="130" r="15" fill="#6c757d"/>
                    <circle cx="230" cy="180" r="15" fill="#6c757d"/>
                    <circle cx="230" cy="230" r="15" fill="#6c757d"/>
                    
                    <!-- Hidden Layer 2 -->
                    <circle cx="360" cy="80" r="15" fill="#6c757d"/>
                    <circle cx="360" cy="130" r="15" fill="#6c757d"/>
                    <circle cx="360" cy="180" r="15" fill="#6c757d"/>
                    <circle cx="360" cy="230" r="15" fill="#6c757d"/>
                    
                    <!-- Output Layer -->
                    <circle cx="490" cy="130" r="15" fill="#198754"/>
                    <circle cx="490" cy="180" r="15" fill="#198754"/>
                    
                    <!-- Connections Input to Hidden 1 -->
                    <line x1="115" y1="80" x2="215" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="80" x2="215" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="80" x2="215" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="80" x2="215" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="115" y1="130" x2="215" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="130" x2="215" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="130" x2="215" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="130" x2="215" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="115" y1="180" x2="215" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="180" x2="215" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="180" x2="215" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="180" x2="215" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="115" y1="230" x2="215" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="230" x2="215" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="230" x2="215" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="115" y1="230" x2="215" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <!-- Connections Hidden 1 to Hidden 2 -->
                    <line x1="245" y1="80" x2="345" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="80" x2="345" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="80" x2="345" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="80" x2="345" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="245" y1="130" x2="345" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="130" x2="345" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="130" x2="345" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="130" x2="345" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="245" y1="180" x2="345" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="180" x2="345" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="180" x2="345" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="180" x2="345" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="245" y1="230" x2="345" y2="80" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="230" x2="345" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="230" x2="345" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="245" y1="230" x2="345" y2="230" stroke="#dee2e6" stroke-width="1"/>
                    
                    <!-- Connections Hidden 2 to Output -->
                    <line x1="375" y1="80" x2="475" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="375" y1="80" x2="475" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="375" y1="130" x2="475" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="375" y1="130" x2="475" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="375" y1="180" x2="475" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="375" y1="180" x2="475" y2="180" stroke="#dee2e6" stroke-width="1"/>
                    
                    <line x1="375" y1="230" x2="475" y2="130" stroke="#dee2e6" stroke-width="1"/>
                    <line x1="375" y1="230" x2="475" y2="180" stroke="#dee2e6" stroke-width="1"/>
                </svg>
            </div>
            
            <h2>Types of Neural Networks</h2>
            
            <p>The field of neural networks has evolved to include various specialized architectures, each designed to address specific challenges:</p>
            
            <ul>
                <li><strong>Feedforward Neural Networks:</strong> The most basic type, where information flows in one direction from input to output.</li>
                <li><strong>Convolutional Neural Networks (CNNs):</strong> Specialized for processing grid-like data such as images, utilizing convolutional layers to capture spatial patterns.</li>
                <li><strong>Recurrent Neural Networks (RNNs):</strong> Designed for sequential data, incorporating feedback connections that enable them to maintain memory of previous inputs.</li>
                <li><strong>Long Short-Term Memory Networks (LSTMs):</strong> A refined type of RNN that addresses the vanishing gradient problem, making them better suited for learning long-term dependencies.</li>
                <li><strong>Generative Adversarial Networks (GANs):</strong> Consisting of generator and discriminator networks that compete in a minimax game, powerful for generating new, synthetic data.</li>
            </ul>
            
            <p>As research in the field continues to advance, new neural network architectures and training methods are being developed, pushing the boundaries of what's possible in artificial intelligence and machine learning.</p>
        </div>
    `,
    
    // Feedforward Networks
    "feedforward-networks": `
        <div class="article-content">
            <!-- Hero Section -->
            <div class="modern-hero">
                <div class="hero-content">
                    <h1 class="article-title">What Are Feedforward Networks?</h1>
                    <p class="hero-subtitle">An introduction to the fundamental building blocks of neural networks</p>
                </div>
                <div class="hero-image">
                    <img src="images/pic6.png" alt="Machine learning visualization showing human and AI approaches" class="article-image">
                </div>
            </div>
            
            <div class="article-meta">
                <span><i class="far fa-calendar-alt"></i> April 22, 2023</span>
                <span><i class="far fa-user"></i> Dr. Emily Johnson</span>
                <span><i class="far fa-folder"></i> Neural Network Architectures</span>
            </div>
            
            <!-- Comparison Boxes -->
            <div class="comparison-section">
                <h2 class="section-title"><i class="fas fa-sync-alt"></i> Understanding Neural Networks: Two Perspectives</h2>
                
                <div class="comparison-container">
                    <div class="comparison-box">
                        <div class="comparison-icon">
                            <img src="images/pic1.png" alt="Dog learning analogy for neural networks" width="150" height="100">
                        </div>
                        <h3>Learning by Example</h3>
                        <p>Like a dog learning to "sit" through repetition and rewards, neural networks learn by seeing many examples and receiving feedback.</p>
                        <p>The training process strengthens successful patterns and weakens unhelpful ones, gradually improving performance.</p>
                    </div>
                    
                    <div class="comparison-box">
                        <div class="comparison-icon">
                            <img src="images/pic2.png" alt="Traditional programming vs machine learning" width="150" height="100">
                        </div>
                        <h3>A New Programming Paradigm</h3>
                        <p>Unlike traditional programming where humans provide explicit rules, feedforward networks learn rules from data.</p>
                        <p>The network discovers patterns and relationships by itself, allowing it to handle complex problems that would be difficult to code manually.</p>
                    </div>
                </div>
            </div>
            
            <!-- Network Structure -->
            <div class="structure-section">
                <h2 class="section-title"><i class="fas fa-project-diagram"></i> Feedforward Network Structure</h2>
                
                <div class="network-diagram">
                    <img src="images/pic5.png" alt="How self-driving cars learn - neural network example" class="article-image">
                </div>
                
                <div class="structure-components">
                    <div class="component-item">
                        <h3><i class="fas fa-sign-in-alt"></i> Input Layer</h3>
                        <p>Neurons that receive the initial data. Each neuron represents a feature in your dataset.</p>
                    </div>
                    
                    <div class="component-item">
                        <h3><i class="fas fa-cogs"></i> Hidden Layers</h3>
                        <p>One or more layers that perform computations and extract features. This is where the "learning" happens.</p>
                    </div>
                    
                    <div class="component-item">
                        <h3><i class="fas fa-sign-out-alt"></i> Output Layer</h3>
                        <p>Produces the final result or prediction, such as a classification or regression value.</p>
                    </div>
                    
                    <div class="component-item">
                        <h3><i class="fas fa-balance-scale"></i> Weights & Biases</h3>
                        <p>Adjustable parameters that determine the strength of connections and are updated during training.</p>
                    </div>
                </div>
            </div>
            
            <!-- Real-World Examples -->
            <div class="examples-section">
                <h2 class="section-title"><i class="fas fa-lightbulb"></i> Real-World Applications</h2>
                
                <div class="example-cards">
                    <div class="example-card">
                        <div class="card-header">
                            <div class="card-icon">
                                <img src="images/pic3.png" alt="Email spam filtering by machine learning" width="80" height="60">
                            </div>
                            <h3>Email Filtering</h3>
                        </div>
                        <p>Feedforward networks analyze message content to identify spam and protect your inbox.</p>
                        <div class="card-expandable">
                            <div class="expandable-content">
                                <p>These systems look for patterns like suspicious keywords, excessive punctuation, and unusual sender behavior.</p>
                                <p>They continuously learn from new examples, adapting to evolving spam tactics.</p>
                            </div>
                            <button class="expand-button" onclick="toggleExpand(this)">Click to expand</button>
                        </div>
                    </div>
                    
                    <div class="example-card">
                        <div class="card-header">
                            <div class="card-icon">
                                <img src="images/pic4.png" alt="Netflix recommendation system" width="80" height="60">
                            </div>
                            <h3>Content Recommendations</h3>
                        </div>
                        <p>Networks analyze viewing habits to suggest movies and shows you're likely to enjoy.</p>
                        <div class="card-expandable">
                            <div class="expandable-content">
                                <p>By studying what you watch, how long you watch, and even when you pause, these systems build a detailed profile of your preferences.</p>
                                <p>They compare your behavior with millions of other users to find patterns that predict what you'll want to watch next.</p>
                            </div>
                            <button class="expand-button" onclick="toggleExpand(this)">Click to expand</button>
                        </div>
                    </div>
                    
                    <div class="example-card">
                        <div class="card-header">
                            <div class="card-icon">
                                <img src="images/pic5.png" alt="Self-driving car learning" width="80" height="60">
                            </div>
                            <h3>Autonomous Vehicles</h3>
                        </div>
                        <p>Feedforward networks help self-driving cars recognize traffic signals, pedestrians, and road conditions.</p>
                        <div class="card-expandable">
                            <div class="expandable-content">
                                <p>The networks process data from cameras, radar, and other sensors to build a complete picture of the environment.</p>
                                <p>They learn to respond appropriately to different situations through millions of training examples.</p>
                            </div>
                            <button class="expand-button" onclick="toggleExpand(this)">Click to expand</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- How It Works -->
            <div class="process-section">
                <h2 class="section-title"><i class="fas fa-cog"></i> How Feedforward Networks Learn</h2>
                
                <div class="process-steps">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <h3>Forward Propagation</h3>
                        <p>Input data travels forward through the network, with each neuron applying weights, adding bias, and using an activation function.</p>
                    </div>
                    
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <h3>Error Calculation</h3>
                        <p>The network compares its output with the expected result and calculates how far off it was (the error).</p>
                    </div>
                    
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <h3>Backpropagation</h3>
                        <p>The error signals travel backward through the network, apportioning blame to different weights.</p>
                    </div>
                    
                    <div class="process-step">
                        <div class="step-number">4</div>
                        <h3>Weight Updating</h3>
                        <p>Weights and biases are adjusted to reduce error in future predictions, learning a bit with each example.</p>
                    </div>
                </div>
            </div>

            <script>
            function toggleExpand(button) {
                const card = button.parentElement;
                const content = card.querySelector('.expandable-content');
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    button.textContent = "Click to expand";
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    button.textContent = "Click to collapse";
                }
            }
            </script>
        </div>
    `,
    
    // Deep Learning
    "deep-learning": `
        <div class="article-content">
            <h1 class="article-title">Deep Learning</h1>
            <div class="article-meta">
                <span><i class="far fa-calendar-alt"></i> April 18, 2023</span>
                <span><i class="far fa-user"></i> Dr. Michael Chen</span>
                <span><i class="far fa-folder"></i> Machine Learning Fundamentals</span>
            </div>
            
            <div class="featured-image-container">
                <div class="featured-image">
                    <svg class="article-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
                        <rect width="500" height="300" fill="#f8f9fa"/>
                        
                        <!-- Multiple layers to represent deep learning -->
                        <!-- Input Layer -->
                        <circle cx="50" cy="50" r="10" fill="#0d6efd"/>
                        <circle cx="50" cy="100" r="10" fill="#0d6efd"/>
                        <circle cx="50" cy="150" r="10" fill="#0d6efd"/>
                        <circle cx="50" cy="200" r="10" fill="#0d6efd"/>
                        <circle cx="50" cy="250" r="10" fill="#0d6efd"/>
                        
                        <!-- Hidden Layer 1 -->
                        <circle cx="125" cy="50" r="10" fill="#6c757d"/>
                        <circle cx="125" cy="100" r="10" fill="#6c757d"/>
                        <circle cx="125" cy="150" r="10" fill="#6c757d"/>
                        <circle cx="125" cy="200" r="10" fill="#6c757d"/>
                        <circle cx="125" cy="250" r="10" fill="#6c757d"/>
                        
                        <!-- Hidden Layer 2 -->
                        <circle cx="200" cy="50" r="10" fill="#6c757d"/>
                        <circle cx="200" cy="100" r="10" fill="#6c757d"/>
                        <circle cx="200" cy="150" r="10" fill="#6c757d"/>
                        <circle cx="200" cy="200" r="10" fill="#6c757d"/>
                        <circle cx="200" cy="250" r="10" fill="#6c757d"/>
                        
                        <!-- Hidden Layer 3 -->
                        <circle cx="275" cy="75" r="10" fill="#6c757d"/>
                        <circle cx="275" cy="125" r="10" fill="#6c757d"/>
                        <circle cx="275" cy="175" r="10" fill="#6c757d"/>
                        <circle cx="275" cy="225" r="10" fill="#6c757d"/>
                        
                        <!-- Hidden Layer 4 -->
                        <circle cx="350" cy="75" r="10" fill="#6c757d"/>
                        <circle cx="350" cy="125" r="10" fill="#6c757d"/>
                        <circle cx="350" cy="175" r="10" fill="#6c757d"/>
                        <circle cx="350" cy="225" r="10" fill="#6c757d"/>
                        
                        <!-- Output Layer -->
                        <circle cx="425" cy="100" r="10" fill="#198754"/>
                        <circle cx="425" cy="150" r="10" fill="#198754"/>
                        <circle cx="425" cy="200" r="10" fill="#198754"/>
                        
                        <!-- Connections are simplified for clarity -->
                        <!-- Just showing some representative connections -->
                        <line x1="60" y1="50" x2="115" y2="50" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="60" y1="100" x2="115" y2="100" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="60" y1="150" x2="115" y2="150" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="60" y1="200" x2="115" y2="200" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="60" y1="250" x2="115" y2="250" stroke="#dee2e6" stroke-width="1"/>
                        
                        <line x1="135" y1="50" x2="190" y2="50" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="135" y1="100" x2="190" y2="100" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="135" y1="150" x2="190" y2="150" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="135" y1="200" x2="190" y2="200" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="135" y1="250" x2="190" y2="250" stroke="#dee2e6" stroke-width="1"/>
                        
                        <line x1="210" y1="50" x2="265" y2="75" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="210" y1="100" x2="265" y2="125" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="210" y1="150" x2="265" y2="175" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="210" y1="200" x2="265" y2="225" stroke="#dee2e6" stroke-width="1"/>
                        
                        <line x1="285" y1="75" x2="340" y2="75" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="285" y1="125" x2="340" y2="125" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="285" y1="175" x2="340" y2="175" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="285" y1="225" x2="340" y2="225" stroke="#dee2e6" stroke-width="1"/>
                        
                        <line x1="360" y1="75" x2="415" y2="100" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="360" y1="125" x2="415" y2="150" stroke="#dee2e6" stroke-width="1"/>
                        <line x1="360" y1="175" x2="415" y2="200" stroke="#dee2e6" stroke-width="1"/>
                    </svg>
                </div>
                <div class="featured-content">
                    <h2>The Revolution of Deep Learning</h2>
                    <p>Deep learning represents a significant evolution in artificial intelligence, characterized by neural networks with multiple layers (hence "deep") that can learn hierarchical representations of data. This approach has revolutionized machine learning by enabling systems to automatically discover the representations needed for detection or classification from raw data.</p>
                    <p>Unlike traditional machine learning methods that require manual feature engineering, deep learning algorithms can automatically extract features from unstructured data, making them particularly powerful for complex tasks like image recognition, natural language processing, and speech recognition.</p>
                </div>
            </div>
            
            <h2>Key Principles of Deep Learning</h2>
            
            <p>At its core, deep learning is founded on several key principles that distinguish it from other machine learning approaches:</p>
            
            <ol>
                <li><strong>Representation Learning:</strong> Deep learning models learn to represent data in increasingly abstract ways through multiple layers of processing.</li>
                <li><strong>Hierarchical Feature Extraction:</strong> Each layer in a deep network extracts progressively more complex features from the output of the previous layer.</li>
                <li><strong>End-to-End Learning:</strong> Deep learning systems can be trained to perform complex tasks directly from raw input to desired output, without requiring separate stages of processing.</li>
                <li><strong>Scalability with Data:</strong> Deep learning models tend to improve as they are exposed to more data, unlike many traditional algorithms that plateau in performance.</li>
            </ol>
            
            <h2>Major Deep Learning Architectures</h2>
            
            <p>The field of deep learning encompasses several specialized architectures, each designed for specific types of problems:</p>
            
            <ul>
                <li><strong>Deep Neural Networks (DNNs):</strong> Multilayer perceptrons with many hidden layers, suitable for tabular data and general-purpose applications.</li>
                <li><strong>Convolutional Neural Networks (CNNs):</strong> Specialized for processing grid-like data such as images, employing convolutional layers to capture spatial patterns.</li>
                <li><strong>Recurrent Neural Networks (RNNs):</strong> Designed for sequential data processing, featuring connections that form directed cycles to maintain an internal state.</li>
                <li><strong>Long Short-Term Memory Networks (LSTMs):</strong> Advanced RNNs that can learn long-term dependencies in sequence data.</li>
                <li><strong>Transformers:</strong> Models that use self-attention mechanisms to process sequential data in parallel, revolutionary for natural language processing.</li>
                <li><strong>Generative Adversarial Networks (GANs):</strong> Systems of two competing networks that generate new, synthetic instances of data.</li>
                <li><strong>Autoencoders:</strong> Networks designed to learn efficient representations of data for dimensionality reduction and generative tasks.</li>
            </ul>
            
            <div class="article-image-container">
                <svg class="article-image" style="max-width: 600px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#f8f9fa"/>
                    
                    <!-- CNN Architecture Visualization -->
                    <!-- Input Image -->
                    <rect x="50" y="100" width="80" height="80" fill="#0d6efd" opacity="0.7"/>
                    
                    <!-- Convolution Layers -->
                    <rect x="160" y="90" width="60" height="60" fill="#6c757d" opacity="0.7"/>
                    <rect x="160" y="160" width="60" height="30" fill="#6c757d" opacity="0.7"/>
                    
                    <!-- Pooling Layers -->
                    <rect x="250" y="100" width="40" height="40" fill="#fd7e14" opacity="0.7"/>
                    <rect x="250" y="150" width="40" height="20" fill="#fd7e14" opacity="0.7"/>
                    
                    <!-- More Conv Layers -->
                    <rect x="320" y="105" width="30" height="30" fill="#6c757d" opacity="0.7"/>
                    <rect x="320" y="145" width="30" height="15" fill="#6c757d" opacity="0.7"/>
                    
                    <!-- Flatten and Dense Layers -->
                    <rect x="380" y="120" width="40" height="40" fill="#6f42c1" opacity="0.7"/>
                    <rect x="450" y="130" width="20" height="20" fill="#6f42c1" opacity="0.7"/>
                    
                    <!-- Output -->
                    <rect x="500" y="125" width="30" height="30" fill="#198754" opacity="0.7"/>
                    
                    <!-- Labels -->
                    <text x="90" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Input</text>
                    <text x="190" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Convolution</text>
                    <text x="270" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Pooling</text>
                    <text x="335" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Conv</text>
                    <text x="400" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Flatten</text>
                    <text x="460" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Dense</text>
                    <text x="515" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="#212529">Output</text>
                    
                    <!-- Arrows -->
                    <line x1="130" y1="140" x2="160" y2="140" stroke="#212529" stroke-width="2"/>
                    <line x1="220" y1="140" x2="250" y2="140" stroke="#212529" stroke-width="2"/>
                    <line x1="290" y1="140" x2="320" y2="140" stroke="#212529" stroke-width="2"/>
                    <line x1="350" y1="140" x2="380" y2="140" stroke="#212529" stroke-width="2"/>
                    <line x1="420" y1="140" x2="450" y2="140" stroke="#212529" stroke-width="2"/>
                    <line x1="470" y1="140" x2="500" y2="140" stroke="#212529" stroke-width="2"/>
                    
                    <text x="300" y="250" font-family="Arial" font-size="14" text-anchor="middle" fill="#212529">Convolutional Neural Network (CNN) Architecture</text>
                </svg>
            </div>
            
            <h2>Challenges and Considerations</h2>
            
            <p>While powerful, deep learning also presents several challenges:</p>
            
            <ul>
                <li><strong>Computational Requirements:</strong> Training deep models often requires significant computational resources and specialized hardware like GPUs or TPUs.</li>
                <li><strong>Data Hunger:</strong> Deep learning models typically require large amounts of labeled data to achieve good performance.</li>
                <li><strong>Interpretability:</strong> The complexity of deep models often makes them difficult to interpret or explain.</li>
                <li><strong>Overfitting:</strong> With their large number of parameters, deep networks can easily memorize training data without generalizing well.</li>
                <li><strong>Hyperparameter Tuning:</strong> Finding optimal architecture configurations and training parameters can be challenging and time-consuming.</li>
            </ul>
            
            <h2>Recent Advances and Future Directions</h2>
            
            <p>The field of deep learning continues to evolve rapidly, with several exciting areas of development:</p>
            
            <ul>
                <li><strong>Self-Supervised Learning:</strong> Reducing dependence on labeled data by learning from the inherent structure of unlabeled data.</li>
                <li><strong>Few-Shot and Zero-Shot Learning:</strong> Enabling models to learn from very few examples or generalize to completely new categories.</li>
                <li><strong>Neural Architecture Search:</strong> Automating the design of neural network architectures.</li>
                <li><strong>Multimodal Learning:</strong> Combining information from different types of data sources (text, images, audio, etc.).</li>
                <li><strong>Energy-Efficient Deep Learning:</strong> Developing models and techniques that require less computational power and energy.</li>
                <li><strong>Explainable AI:</strong> Creating deep learning systems whose decisions can be understood and interpreted by humans.</li>
            </ul>
            
            <p>As these frontiers continue to expand, deep learning is poised to enable even more sophisticated AI applications that further transform industries and society.</p>
        </div>
    `,
    
    // Add more content for other topics and subtopics
    "reinforcement-learning": `
        <div class="article-content">
            <h1 class="article-title">Reinforcement Learning</h1>
            <div class="article-meta">
                <span><i class="far fa-calendar-alt"></i> April 15, 2023</span>
                <span><i class="far fa-user"></i> Dr. Sarah Wilson</span>
                <span><i class="far fa-folder"></i> Machine Learning Paradigms</span>
            </div>
            
            <p>Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward. Unlike supervised learning, the agent is not explicitly told which actions to take, but instead must discover which actions yield the most reward through trial and error.</p>
            
            <div class="article-image-container">
                <svg class="article-image" style="max-width: 500px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
                    <rect width="500" height="300" fill="#f8f9fa"/>
                    
                    <!-- Environment -->
                    <rect x="50" y="50" width="400" height="200" rx="20" ry="20" fill="#e9ecef" stroke="#ced4da" stroke-width="2"/>
                    <text x="250" y="40" font-family="Arial" font-size="16" text-anchor="middle" fill="#212529">Environment</text>
                    
                    <!-- Agent -->
                    <circle cx="150" cy="150" r="50" fill="#0d6efd" opacity="0.7"/>
                    <text x="150" y="155" font-family="Arial" font-size="16" text-anchor="middle" fill="white">Agent</text>
                    
                    <!-- State and Reward -->
                    <rect x="300" y="100" width="80" height="40" rx="5" ry="5" fill="#198754" opacity="0.7"/>
                    <text x="340" y="125" font-family="Arial" font-size="14" text-anchor="middle" fill="white">State</text>
                    
                    <rect x="300" y="160" width="80" height="40" rx="5" ry="5" fill="#dc3545" opacity="0.7"/>
                    <text x="340" y="185" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Reward</text>
                    
                    <!-- Arrows -->
                    <line x1="200" y1="135" x2="290" y2="120" stroke="#212529" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <text x="245" y="115" font-family="Arial" font-size="14" fill="#212529">Action</text>
                    
                    <line x1="290" y1="180" x2="200" y2="165" stroke="#212529" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <text x="245" y="190" font-family="Arial" font-size="14" fill="#212529">Feedback</text>
                    
                    <!-- Define arrowhead marker -->
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#212529"/>
                        </marker>
                    </defs>
                </svg>
            </div>
            
            <h2>Key Components of Reinforcement Learning</h2>
            
            <p>The reinforcement learning framework consists of several essential elements:</p>
            
            <ul>
                <li><strong>Agent:</strong> The learner or decision-maker that interacts with the environment.</li>
                <li><strong>Environment:</strong> The world in which the agent exists and operates.</li>
                <li><strong>State:</strong> The current situation or configuration of the environment.</li>
                <li><strong>Action:</strong> The set of possible moves the agent can make.</li>
                <li><strong>Reward:</strong> The feedback from the environment, indicating the desirability of the agent's action.</li>
                <li><strong>Policy:</strong> The strategy that the agent employs to determine the next action based on the current state.</li>
                <li><strong>Value Function:</strong> A prediction of future rewards, used to evaluate the goodness of states and actions.</li>
                <li><strong>Model:</strong> The agent's representation of the environment, which predicts how the environment will respond to actions.</li>
            </ul>
            
            <h2>Types of Reinforcement Learning</h2>
            
            <p>Reinforcement learning can be categorized into different types based on various aspects:</p>
            
            <h3>Based on Learning Approach</h3>
            
            <ul>
                <li><strong>Value-Based:</strong> Focuses on finding the optimal value function, from which an optimal policy can be derived.</li>
                <li><strong>Policy-Based:</strong> Directly searches for the optimal policy without maintaining a value function.</li>
                <li><strong>Model-Based:</strong> Uses a model of the environment to plan and make decisions.</li>
                <li><strong>Model-Free:</strong> Learns directly from interactions with the environment without building an explicit model.</li>
            </ul>
            
            <h3>Based on Temporality</h3>
            
            <ul>
                <li><strong>Monte Carlo Methods:</strong> Learn from complete episodes of experience.</li>
                <li><strong>Temporal Difference (TD) Learning:</strong> Learn from partial episodes by bootstrapping.</li>
            </ul>
            
            <h2>Popular Reinforcement Learning Algorithms</h2>
            
            <p>The field of reinforcement learning has developed numerous algorithms, including:</p>
            
            <ul>
                <li><strong>Q-Learning:</strong> A model-free algorithm that learns the value of actions in states.</li>
                <li><strong>Deep Q Network (DQN):</strong> Combines Q-Learning with deep neural networks.</li>
                <li><strong>Policy Gradient Methods:</strong> Optimize the policy directly using gradient ascent.</li>
                <li><strong>Actor-Critic Methods:</strong> Combine value-based and policy-based approaches.</li>
                <li><strong>Proximal Policy Optimization (PPO):</strong> A policy optimization method that balances exploration and exploitation.</li>
                <li><strong>Trust Region Policy Optimization (TRPO):</strong> Ensures policy updates are small and controlled.</li>
                <li><strong>Soft Actor-Critic (SAC):</strong> An off-policy algorithm that maximizes both expected return and entropy.</li>
            </ul>
            
            <div class="article-image-container">
                <svg class="article-image" style="max-width: 500px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
                    <rect width="500" height="300" fill="#f8f9fa"/>
                    
                    <!-- Grid World Environment -->
                    <g transform="translate(100, 50)">
                        <!-- Grid -->
                        <rect x="0" y="0" width="300" height="200" fill="none" stroke="#ced4da" stroke-width="2"/>
                        
                        <!-- Grid Lines -->
                        <line x1="0" y1="50" x2="300" y2="50" stroke="#ced4da" stroke-width="1"/>
                        <line x1="0" y1="100" x2="300" y2="100" stroke="#ced4da" stroke-width="1"/>
                        <line x1="0" y1="150" x2="300" y2="150" stroke="#ced4da" stroke-width="1"/>
                        
                        <line x1="75" y1="0" x2="75" y2="200" stroke="#ced4da" stroke-width="1"/>
                        <line x1="150" y1="0" x2="150" y2="200" stroke="#ced4da" stroke-width="1"/>
                        <line x1="225" y1="0" x2="225" y2="200" stroke="#ced4da" stroke-width="1"/>
                        
                        <!-- Start Position -->
                        <circle cx="37.5" cy="175" r="15" fill="#0d6efd"/>
                        <text x="37.5" y="180" font-family="Arial" font-size="14" text-anchor="middle" fill="white">S</text>
                        
                        <!-- Goal Position -->
                        <circle cx="262.5" cy="25" r="15" fill="#198754"/>
                        <text x="262.5" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="white">G</text>
                        
                        <!-- Obstacles -->
                        <rect x="150" y="50" width="75" height="50" fill="#dc3545" opacity="0.7"/>
                        <rect x="75" y="100" width="75" height="50" fill="#dc3545" opacity="0.7"/>
                        
                        <!-- Path -->
                        <line x1="37.5" y1="175" x2="37.5" y2="125" stroke="#ffc107" stroke-width="3" stroke-dasharray="5,5"/>
                        <line x1="37.5" y1="125" x2="37.5" y2="75" stroke="#ffc107" stroke-width="3" stroke-dasharray="5,5"/>
                        <line x1="37.5" y1="75" x2="37.5" y2="25" stroke="#ffc107" stroke-width="3" stroke-dasharray="5,5"/>
                        <line x1="37.5" y1="25" x2="112.5" y2="25" stroke="#ffc107" stroke-width="3" stroke-dasharray="5,5"/>
                        <line x1="112.5" y1="25" x2="187.5" y2="25" stroke="#ffc107" stroke-width="3" stroke-dasharray="5,5"/>
                        <line x1="187.5" y1="25" x2="262.5" y2="25" stroke="#ffc107" stroke-width="3" stroke-dasharray="5,5"/>
                    </g>
                    
                    <text x="250" y="275" font-family="Arial" font-size="14" text-anchor="middle" fill="#212529">Example: Grid World Navigation Task</text>
                </svg>
            </div>
            
            <h2>Applications of Reinforcement Learning</h2>
            
            <p>Reinforcement learning has demonstrated remarkable success in various domains:</p>
            
            <ul>
                <li><strong>Games:</strong> Mastering complex games like Chess, Go, Poker, and video games.</li>
                <li><strong>Robotics:</strong> Teaching robots to perform tasks through trial and error.</li>
                <li><strong>Autonomous Vehicles:</strong> Developing self-driving capabilities and navigation strategies.</li>
                <li><strong>Resource Management:</strong> Optimizing resource allocation in computing systems and data centers.</li>
                <li><strong>Finance:</strong> Developing trading strategies and portfolio management.</li>
                <li><strong>Healthcare:</strong> Personalizing treatment plans and medication dosing.</li>
                <li><strong>Recommendation Systems:</strong> Creating dynamic recommendation engines that adapt to user preferences.</li>
            </ul>
            
            <h2>Challenges in Reinforcement Learning</h2>
            
            <p>Despite its successes, reinforcement learning faces several significant challenges:</p>
            
            <ul>
                <li><strong>Sample Efficiency:</strong> Many RL algorithms require extensive interaction with the environment.</li>
                <li><strong>Exploration-Exploitation Dilemma:</strong> Balancing the need to explore new actions versus exploiting known good actions.</li>
                <li><strong>Credit Assignment Problem:</strong> Determining which actions in a sequence led to a delayed reward.</li>
                <li><strong>Generalization:</strong> Transferring knowledge from one task or environment to another.</li>
                <li><strong>Stability and Convergence:</strong> Ensuring reliable learning without divergence or oscillation.</li>
                <li><strong>Real-world Application:</strong> Bridging the gap between simulation and real-world environments.</li>
            </ul>
            
            <p>As research continues to address these challenges, reinforcement learning promises to unlock even more capabilities for autonomous systems and decision-making agents across diverse applications.</p>
        </div>
    `
};