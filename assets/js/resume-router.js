/**
 * resume-router.js
 *
 * All résumé content is now server-rendered per version at build time
 * (see _plugins/generate_resume_pages.rb and _layouts/resume.html).
 * This script does not render or modify any résumé content.
 *
 * Its only job: if someone lands on /resume/?v=<key> (an old-style link,
 * bookmark, or manually typed URL), send them to the equivalent static
 * page — e.g. /resume/senior-email-developer/ — so those links keep
 * working going forward without needing client-side rendering logic.
 */
(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var key = params.get('v');
  if (!key) return;

  var resumeEl = document.getElementById('resume');
  if (!resumeEl) return;

  var current = resumeEl.getAttribute('data-active-version');
  if (key === current) return;

  var targetPath = (key === 'marketing-automation-manager')
    ? '/resume/'
    : '/resume/' + key + '/';

  if (window.location.pathname !== targetPath) {
    window.location.replace(targetPath);
  }
})();
