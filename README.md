# **AI-vocate** 🤖   ([visit](https://ai-vocate.vercel.app/))

AI-vocate is a cutting-edge conversational AI platform designed to deliver intelligent, real-time responses to user queries. Leveraging the power of modern frameworks and technologies, it offers a seamless and efficient AI-driven experience, much like ChatGPT.

---

## **Features** 🌟

- **AI-Powered Conversations**: Provides accurate and context-aware responses.  
- **User Authentication**: Seamlessly integrated with **Clerk** for secure logins.  
- **High Performance**: Optimized backend using **Upstash** for caching and **PostgreSQL** for scalable data management.  
- **Responsive UI**: Built with **Next.js** for a fast, user-friendly experience.  

---

## **Tech Stack** 🔧  

- **Frontend**:  
  - Framework: [Next.js](https://nextjs.org/)  
  - Styling: CSS Modules / Tailwind CSS  

- **Backend**:  
  - Database: [PostgreSQL](https://www.postgresql.org/)  
  - Caching: [Upstash](https://upstash.com/)  
  - Authentication: [Clerk](https://clerk.dev/)  

- **Deployment**:  
  - Hosted on [Vercel](https://vercel.com/).  

---

## **Installation** 🛠️  

Follow these steps to set up the project locally:  

### Prerequisites:
- Node.js >= 18.0  
- PostgreSQL database  
- Clerk API keys  
- Upstash Redis instance  

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/manikerisaurabh/ai-vocate.git
   cd ai-vocate
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   UPSTASH_VECTOR_REST_URL=YOUR_UPSTASH_VECTOR_REST_URL
   UPSTASH_VECTOR_REST_TOKEN=YOUR_UPSTASH_VECTOR_REST_TOKEN
   QSTASH_TOKEN=YOUR_QSTASH_TOKEN
   UPSTASH_REDIS_REST_URL=YOUR_UPSTASH_REDIS_REST_URL
   UPSTASH_REDIS_REST_TOKEN=YOUR_UPSTASH_REDIS_REST_TOKEN
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```
4. Run the development server:
   ```bash
     npm run dev
   ```
---
Contributing 🤝
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
  ```bash
  git checkout -b feature/your-feature-name
  ```
3. Commit your changes:
   ```bash
     git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
     git push origin feature/your-feature-name
   ```
5. Create a pull request.

   
