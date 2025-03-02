// Sample training module data
const modules = [
    {
      title: "Phishing Awareness",
      description: "Learn to identify and avoid phishing attacks",
      content: `
        <div>
          <h2>What is Phishing?</h2>
          <p>Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message.</p>
          
          <h2>Common Signs of Phishing</h2>
          <ul>
            <li>Suspicious sender email address</li>
            <li>Generic greetings</li>
            <li>Spelling and grammar errors</li>
            <li>Urgent or threatening language</li>
            <li>Suspicious attachments or links</li>
            <li>Requests for sensitive information</li>
          </ul>
          
          <h2>How to Protect Yourself</h2>
          <ul>
            <li>Verify the sender's email address</li>
            <li>Don't click on suspicious links</li>
            <li>Use email filtering</li>
            <li>Keep your browser updated</li>
            <li>Use multi-factor authentication</li>
          </ul>
        </div>
      `,
      type: "phishing",
      difficulty: "beginner",
      pointsValue: 10,
      quizQuestions: [
        {
          question: "What is phishing primarily used for?",
          options: [
            "To install software updates",
            "To steal sensitive information",
            "To improve network security",
            "To encrypt your hard drive"
          ],
          correctAnswer: 1,
          explanation: "Phishing is primarily used to steal sensitive information like passwords and credit card details."
        },
        {
          question: "Which of the following is NOT a common sign of a phishing email?",
          options: [
            "Urgent or threatening language",
            "Suspicious sender email address",
            "Professional formatting and design",
            "Requests for sensitive information"
          ],
          correctAnswer: 2,
          explanation: "Professional formatting and design is not typically a sign of phishing. Phishing emails often contain poor design, though sophisticated attacks may look professional."
        },
        {
          question: "What should you do if you receive a suspicious email asking for your password?",
          options: [
            "Reply with your password",
            "Click the link to verify your account",
            "Forward it to your friends to warn them",
            "Report it and delete it"
          ],
          correctAnswer: 3,
          explanation: "You should report suspicious emails to your IT department or email provider and delete them without clicking any links."
        }
      ]
    },
    {
      title: "Strong Password Practices",
      description: "Learn how to create and manage secure passwords",
      content: `
        <div>
          <h2>Password Best Practices</h2>
          <p>Strong passwords are an essential part of online security. A compromised password can lead to identity theft, financial loss, and unauthorized access to your personal information.</p>
          
          <h2>Creating Strong Passwords</h2>
          <ul>
            <li>Use at least 12 characters</li>
            <li>Include uppercase and lowercase letters</li>
            <li>Include numbers and special characters</li>
            <li>Avoid using personal information</li>
            <li>Don't use common words or patterns</li>
          </ul>
          
          <h2>Password Management</h2>
          <ul>
            <li>Use different passwords for different accounts</li>
            <li>Change passwords regularly</li>
            <li>Consider using a password manager</li>
            <li>Enable multi-factor authentication</li>
            <li>Never share your passwords</li>
          </ul>
        </div>
      `,
      type: "password",
      difficulty: "beginner",
      pointsValue: 10,
      quizQuestions: [
        {
          question: "What is the recommended minimum length for a strong password?",
          options: [
            "6 characters",
            "8 characters",
            "12 characters",
            "20 characters"
          ],
          correctAnswer: 2,
          explanation: "A minimum of 12 characters is recommended for strong passwords to resist brute force attacks."
        },
        {
          question: "Which of the following is the MOST secure password?",
          options: [
            "password123",
            "Birthday1990!",
            "qwerty",
            "T7%j*Np9$zG4"
          ],
          correctAnswer: 3,
          explanation: "T7%j*Np9$zG4 is the most secure as it contains uppercase and lowercase letters, numbers, special characters, and has no recognizable patterns or words."
        },
        {
          question: "What is a password manager?",
          options: [
            "A person who manages passwords for a company",
            "A tool that stores and manages passwords securely",
            "A website that tests password strength",
            "A feature in browsers that automatically fills in passwords"
          ],
          correctAnswer: 1,
          explanation: "A password manager is a tool that securely stores and manages your passwords, often with encryption and additional security features."
        }
      ]
    },
    {
      title: "Recognizing Malware",
      description: "Understand different types of malware and how to avoid them",
      content: `
        <div>
          <h2>What is Malware?</h2>
          <p>Malware (malicious software) is any program or file that is harmful to a computer user. Types of malware include computer viruses, worms, Trojan horses, ransomware, and spyware.</p>
          
          <h2>Common Types of Malware</h2>
          <ul>
            <li><strong>Virus:</strong> Attaches to clean files and spreads throughout a computer system</li>
            <li><strong>Worm:</strong> Spreads without user action across networks</li>
            <li><strong>Trojan:</strong> Disguises itself as legitimate software</li>
            <li><strong>Ransomware:</strong> Locks your files until a ransom is paid</li>
            <li><strong>Spyware:</strong> Collects information about you without your knowledge</li>
          </ul>
          
          <h2>Protection Strategies</h2>
          <ul>
            <li>Keep your operating system and software updated</li>
            <li>Use reputable antivirus software</li>
            <li>Be cautious about downloading files</li>
            <li>Don't click on suspicious links</li>
            <li>Back up your data regularly</li>
          </ul>
        </div>
      `,
      type: "malware",
      difficulty: "intermediate",
      pointsValue: 15,
      quizQuestions: [
        {
          question: "Which type of malware locks your files and demands payment for their release?",
          options: [
            "Worm",
            "Spyware",
            "Ransomware",
            "Trojan"
          ],
          correctAnswer: 2,
          explanation: "Ransomware encrypts your files and demands payment (ransom) to decrypt them."
        },
        {
          question: "What is the primary difference between a virus and a worm?",
          options: [
            "Viruses are more dangerous than worms",
            "Worms spread without user action, while viruses require user action",
            "Viruses can infect files, but worms cannot",
            "Worms steal information, but viruses do not"
          ],
          correctAnswer: 1,
          explanation: "Worms can spread automatically through networks without requiring user action, while viruses typically need user action to spread."
        },
        {
          question: "Which of the following is NOT an effective protection against malware?",
          options: [
            "Keeping your software updated",
            "Using antivirus software",
            "Opening email attachments from unknown senders",
            "Regular system backups"
          ],
          correctAnswer: 2,
          explanation: "Opening email attachments from unknown senders is risky behavior that can lead to malware infection."
        }
      ]
    }
  ];
  
  module.exports = modules;