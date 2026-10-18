document.addEventListener('DOMContentLoaded', () => {
  const welcomeMsg = document.querySelector('#welcomeMsg');
  const statusEl = document.querySelector('#status');
  const helloBtn = document.querySelector('#helloBtn');
  const helloBtnText = document.querySelector('#helloBtnText');
  const themeToggleBtn = document.querySelector('#themeToggleBtn');
  const themeActionBtn = document.querySelector('#themeActionBtn');
  const rootHtml = document.documentElement;

  const messages = [
    {
      text: "👋 ยินดีต้อนรับสู่ Portfolio ของ Ratchcta Wongsakhu (67160234)",
      status: "● Status: พร้อมสำหรับการทดสอบ CI/CD Deployment"
    },
    {
      text: "🚀 GitHub Actions ทำงานแบบอัตโนมัติทุกครั้งเมื่อมีการ Push โค้ด!",
      status: "● Status: Pipeline Verified & Healthy"
    },
    {
      text: "✨ ธีมสีดำ-เขียว-ม่วง พร้อมสไตล์ Modern Cyberpunk Glassmorphism",
      status: "● Status: High Contrast Mode Active"
    },
    {
      text: "🎯 อย่าลืมกรอกข้อมูลเพิ่มเติมในส่วน About Me, Skills และ Contact นะครับ!",
      status: "● Status: Template Slots Ready for Custom Content"
    },
    {
      text: "💻 Hello from GitHub Pages! เว็บไซต์ทำงานบนระบบ Cloud แบบ Static Host",
      status: "● Status: Deployed via GitHub Actions Runner (Ubuntu)"
    }
  ];

  let currentMsgIndex = 0;

  function changeWelcomeMessage() {
    currentMsgIndex = (currentMsgIndex + 1) % messages.length;
    const selected = messages[currentMsgIndex];

    welcomeMsg.style.opacity = '0';
    welcomeMsg.style.transform = 'translateY(-6px)';

    setTimeout(() => {
      welcomeMsg.textContent = selected.text;
      statusEl.textContent = selected.status;
      welcomeMsg.style.opacity = '1';
      welcomeMsg.style.transform = 'translateY(0)';
    }, 200);

    if (helloBtnText) {
      helloBtnText.textContent = `เปลี่ยนข้อความ (${currentMsgIndex + 1}/${messages.length})`;
    }
  }

  if (helloBtn) {
    helloBtn.addEventListener('click', changeWelcomeMessage);
  }

  function applyTheme(theme) {
    rootHtml.setAttribute('data-theme', theme);
    localStorage.setItem('preferred-theme', theme);

    const isPurple = theme === 'purple-dominant';
    const toggleLabel = isPurple ? 'โหมด: ม่วงเด่น 💜' : 'โหมด: เขียวเด่น 💚';

    if (themeToggleBtn) {
      const label = themeToggleBtn.querySelector('.btn-label');
      if (label) label.textContent = toggleLabel;
    }
  }

  function toggleTheme() {
    const currentTheme = rootHtml.getAttribute('data-theme') || 'green-dominant';
    const nextTheme = currentTheme === 'green-dominant' ? 'purple-dominant' : 'green-dominant';
    applyTheme(nextTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  if (themeActionBtn) {
    themeActionBtn.addEventListener('click', toggleTheme);
  }

  const savedTheme = localStorage.getItem('preferred-theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('green-dominant');
  }
});