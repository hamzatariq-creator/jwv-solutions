/* form.js — submits forms via fetch (Formspree-compatible).
 * Forms are progressive: if JS fails, normal POST submission still works.
 * Adds a structured success/error message inline. */
/* Prefill a form's selects from the query string, so the CTAs that deep-link
 * into this form land the user on the right subject — partnerships.html points
 * at /contact.html?topic=partnerships. Only an exact match against an existing
 * <option> is honoured, so an unknown or hand-edited value quietly leaves the
 * default selection alone. */
function prefillFromQuery(form) {
  const params = new URLSearchParams(window.location.search);
  if (![...params.keys()].length) return;

  form.querySelectorAll('select[name]').forEach((select) => {
    const wanted = params.get(select.name);
    if (wanted === null) return;
    const match = [...select.options].some((option) => option.value === wanted);
    if (match) select.value = wanted;
  });
}

export function initForms() {
  document.querySelectorAll('form[data-form]').forEach((form) => {
    const status = form.querySelector('.form-status');
    prefillFromQuery(form);
    form.addEventListener('submit', async (e) => {
      // Allow normal submission as fallback if action is set and JS path fails
      if (!form.action || form.action === '') return;

      e.preventDefault();
      if (status) {
        status.classList.remove('is-success', 'is-error');
        status.textContent = '';
      }
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn?.textContent;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method || 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (response.ok) {
          form.reset();
          if (status) {
            status.classList.add('is-success');
            status.textContent = "Thank you. We'll respond within 1 business day.";
          }
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        if (status) {
          status.classList.add('is-error');
          status.textContent = 'Something went wrong. Please email us at info@jwv-solutions.com or try again.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  });
}
