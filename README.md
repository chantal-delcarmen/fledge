# Fledge - Helping You Soar Into Adulthood  

## About Fledge  
Growing up is hard. We're here to smooth out the turbulence. **Fledge** provides you with key prompts or "fledges" to help you **leave the nest and fly on your own**.  

With simple **email or text reminders**, Fledge helps young adults stay on top of essential **adulting tasks** they may not have thought about yet.  
- How's your lint filter?  
- Have you set up a TFSA?  
- Do you have carbon monoxide detectors installed?  
- When was your last yearly medical check-up?  
- How’s your credit score looking?  

By signing up, users receive **a daily fledge** via email, guiding them through key tasks for maintaining financial, home, health, and personal responsibility.  

---

## Features  
- **Daily Fledge Prompts** – Users receive a daily fledge via **email reminders**.  
- **PowerFledge** – Instantly get another fledge by clicking "PowerFledge."  
- **Fledge History** – View all fledges sent in the past month.  
- **Randomized Task Assignment** – Each user receives different fledges.  

---

## Tech Stack  
- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MySQL  
- **Email Service:** Nodemailer  

---


## Installation & Setup  
1. **Clone the Repository**  
```bash
git clone https://github.com/yourusername/fledge.git
cd fledge
```

2. **Database Setup**
- Ensure mySQL is running.
- Update .env with your respective credentials.
- Run appropriate queries found in fledgeDB_SQL.sql and fledgeDB_insert_dml.sql to populate database (in development).

3. **Backend Setup**  
```bash
cd backend
npm install
node server.js
```

4. **Frontend Setup**  
```bash
cd ../frontend
npm install
npm start
```

---

## Contributions
Created during **Calgary Hacks 2025**.

Group members: Christopher Lassota, Robert Thom, Chantel Del Carmen, Jacob Situ
