// /api/chat.js
// Vercel Serverless Function — keeps the Groq API key on the server so it's
// never exposed in the browser. The frontend (script.js) calls this endpoint
// instead of calling Groq directly.
//
// SETUP (one time):
// 1. Go to https://console.groq.com and create a free account.
// 2. Create a free API key (Groq's free tier is generous and needs no card).
// 3. In your Vercel project: Settings -> Environment Variables
//    Add a variable named  GROQ_API_KEY  with your key as the value.
// 4. Redeploy the project. That's it, the chat widget will start working.

const SYSTEM_PROMPT = `You are the friendly assistant for Hammad Siddique's portfolio website (Code Cove).
Reply in the SAME language the user writes in (English, Urdu, Roman Urdu, etc). Keep replies short, warm and helpful — 2-5 sentences unless more detail is genuinely needed.

ABOUT HAMMAD:
- Hammad Siddique is a WordPress Developer & Web Designer based in Pakistan.
- He builds fast, responsive websites using WordPress, WooCommerce, Elementor, HTML, CSS and JavaScript.
- 3+ years of experience, 15+ projects completed, 12+ happy clients.
- Roles: Graphic & Web Developer, and freelance Website Developer & Designer.

SKILLS:
- WordPress & CMS: WordPress, WooCommerce, Elementor, ACF, CPT UI, Yoast SEO, Customizer, SMTP/WP Mail
- Frontend: HTML5, CSS3, JavaScript, Responsive Design, Flexbox/Grid, Debugging, UI/UX Design

PROJECTS (all in the Projects section):
- Hayat Islamic (WordPress, informational + SEO) — https://hayatislamic.com
- Tradenest (WordPress, WooCommerce) — https://tradenest-five.vercel.app/
- Personal Brand Site (HTML/CSS/JS) — https://hammad-gamma.vercel.app/
- Visa Hosting (HTML/CSS/Tailwind) — https://visa-hosting.vercel.app/
- Hamali Store (WordPress, WooCommerce) — https://hamali.store/
- Drive Elite (WordPress, Elementor, car rental) — https://driveelite-eight.vercel.app/
- Devnestix (HTML/CSS/JS agency landing page) — https://devnestix.vercel.app/
- Farewell Event (HTML/CSS event site) — https://farewell-black-alpha.vercel.app/

PRICING:
- Landing Page — $120/project: single page custom design, fully responsive, basic on-page SEO, contact form
- Business Website — $200/project (most popular): up to 6 pages, WordPress or custom code, on-page SEO + speed setup, 30 days support
- WooCommerce Store — $350/project: full online store, product/cart/checkout pages, payment gateway integration, 45 days support

CONTACT:
- WhatsApp: +92 317 3466213 (wa.me/923173466213)
- To start a project, direct people to the Contact section (#contact) on the site or WhatsApp.

RULES:
- Only answer questions about Hammad, his work, skills, projects, pricing, or general web-development questions.
- If asked something completely unrelated (not about the site or web dev), politely redirect back to how you can help with Hammad's services.
- Never invent projects, prices or facts not listed above.
- Encourage people to reach out via WhatsApp or the Contact form when they show interest in hiring.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Chat is not configured yet. Add a GROQ_API_KEY environment variable in the Vercel project settings.',
    });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required.' });
    }

    // keep only the last 12 turns so the request stays small and fast
    const trimmed = messages.slice(-12);

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmed],
        temperature: 0.6,
        max_tokens: 400,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API error:', errText);
      return res.status(502).json({ error: 'The chat service is temporarily unavailable, please try again.' });
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a reply just now.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat handler error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
