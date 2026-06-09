
    /* ── Custom Cursor ── */
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const hoverables = document.querySelectorAll('a, button, .portfolio-item, .step, .depo-card');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        follower.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        follower.classList.remove('hovering');
      });
    });

    /* ── Nav scroll behavior ── */
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    /* ── Scroll Reveal ── */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ── Smooth scroll for nav links ── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* ── Form submit handler ── */
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const whatsapp = document.getElementById('whatsapp').value;
      const mensagem = document.getElementById('mensagem').value;

      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      // Simulate form submission (integrate with backend/EmailJS as needed)
      setTimeout(() => {
        btn.textContent = 'Mensagem Enviada ✓';
        btn.style.background = 'transparent';
        btn.style.color = 'var(--primary)';
        e.target.reset();

        // WhatsApp redirect with form data
        const msg = `Olá! Me chamo ${nome}. ${mensagem ? mensagem : 'Gostaria de saber mais sobre as peças.'} Meu e-mail: ${email}`;
        const waUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(msg)}`;

        setTimeout(() => {
          window.open(waUrl, '_blank');
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      }, 1000);
    }

    /* ── Parallax hero ── */
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7));
      }
    }, { passive: true });

    /* ── Portfolio item stagger ── */
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 80);
          portfolioObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    portfolioItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      portfolioObserver.observe(item);
    });
