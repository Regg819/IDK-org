# IDK.org - Intellect Driven Knowledge

> **An AI-powered personalized learning platform that understands how YOUR brain learns and adapts teaching to match it.**

---

## The Problem

Traditional education fails millions of learners because it uses a **one-size-fits-all approach**. Students are forced into the same classroom, same pace, same teaching style — regardless of how their unique brain actually processes information.

Result? Brilliant minds struggle, lose confidence, and give up on learning.

## The Solution

**IDK.org diagnoses your unique learning profile and becomes your personal AI tutor.**

Instead of memorizing how YOU must adapt to teaching, we adapt teaching to match how YOU learn.

---

## How It Works

### 1️⃣ **Brain Mapping** (2-5 minutes)
- Answer 10 targeted diagnostic questions
- AI analyzes 3 neural encoding channels:
  - **Visual Processing** - How you see and visualize information
  - **Auditory Processing** - How you listen and absorb sound
  - **Linguistic Processing** - How you read, write, and understand language
- Get your unique **Ideotype Profile**

### 2️⃣ **Personalized Learning**
- Tell the app what you want to learn (Python, calculus, languages, etc.)
- AI tutor adapts:
  - **Format**: Visual diagrams? Step-by-step text? Audio explanations?
  - **Pace**: Fast track through concepts you grasp instantly, slow down when needed
  - **Style**: Real-world examples? Theory first? Hands-on practice?
  - **Difficulty**: Auto-adjusts based on your answers

### 3️⃣ **Real-Time Adaptation**
- As you learn, the app gets smarter about you
- Learns your weak spots and strengthens them
- Celebrates wins and keeps you motivated
- Tracks your actual learning progress (not just grades)

---

## Key Features

✨ **Neural Profile Detection** - Scientifically maps your learning style in minutes  
🎯 **Learn Anything** - Any subject, any skill, any topic  
🤖 **AI Tutor** - Never gets tired, never judges, always available  
📊 **Real Progress Tracking** - See actual learning gains, not just scores  
🎓 **Adaptive Difficulty** - Goldilocks principle: not too easy, not too hard  
🌍 **Accessible** - Works on web and mobile  
🔐 **Private** - Your learning data stays yours  

---


## Quick Start

### For Users
1. Visit IDK.org (coming soon)
2. Take the 2-minute diagnostic quiz
3. Start learning with your personal AI tutor

### For Developers
```bash
# Clone the repository
git clone https://github.com/yourusername/idk-org.git
cd idk-org

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Claude API key to .env

# Start the development server
npm start
```

Server runs at `http://localhost:5000`

---

## Architecture Overview

```
User Interface (Web/Mobile)
        ↓
   Express API Server
        ↓
    ┌───┴────────────────┐
    ↓                    ↓
Quiz Engine         AI Tutor Engine
    ↓                    ↓
  MongoDB ←─────→ Claude API
```

- **Quiz Engine**: Diagnostic questions → Neural profile mapping
- **AI Tutor**: Personalized lesson generation and adaptation
- **Database**: Stores user profiles, progress, learning data
- **Claude API**: Powers intelligent tutoring conversations

---

## The Vision

> Education should adapt to the student, not the other way around.

We believe every person has a unique learning fingerprint. When we honor that individuality and match teaching to it, extraordinary learning happens.

IDK.org is building the future of personalized education — one brain at a time.

---

## Contributing

This is an active development project. We welcome:
- Bug reports and feature requests (open an issue)
- Code contributions (see CONTRIBUTING.md coming soon)
- User feedback and testing
- Ideas for improvement

---

## License

MIT License - See LICENSE file for details

This means you can use, modify, and commercialize this code with attribution.

---

## Support

Have questions? Ideas? Found a bug?
- 📧 Email: mrbrown098613@gmail.com
- 🐛 Issues: Use GitHub issues for bugs/features


---

## Meet the Founder

**Vision**: Someone who failed in traditional school despite being brilliant, realized the system was broken, and spent 10 years perfecting a solution. Now finally build it.

**Mission**: Make personalized learning available to everyone, everywhere.

---

## Acknowledgments

Built with:
- Claude AI (Anthropic) - The AI tutor engine
- Open-source community - For amazing tools and libraries
- Early believers - Who saw the vision and believed in the mission

---

**IDK.org — Because your brain is unique. Your education should be too.**

---

*Last updated: June 2026 | Version: 0.1.0 Alpha*
